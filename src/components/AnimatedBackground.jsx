import React, { useEffect, useRef } from 'react';

/**
 * Renders a HiDPI mathematical phase-portrait vector lattice and integral streamline field
 * in the academic cobalt palette, subtly perturbed by cursor proximity.
 */
export default function AnimatedBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const motionQuery =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = Boolean(motionQuery && motionQuery.matches);

    let animationFrameId = null;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    const mouse = {
      active: false,
      targetX: width * 0.5,
      targetY: height * 0.5,
      x: width * 0.5,
      y: height * 0.5,
    };

    const handleMouseMove = (e) => {
      mouse.active = true;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const MAX_HISTORY = 32;
    const STREAMLINE_COUNT = 80;

    const spawnParticle = (scatterLife = false) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.45 + Math.random() * 0.45,
      history: [],
      life: scatterLife ? Math.floor(Math.random() * 180) : 0,
      maxLife: 220 + Math.floor(Math.random() * 180),
    });

    const particles = Array.from({ length: STREAMLINE_COUNT }, () =>
      spawnParticle(true)
    );

    let time = 0;

    // Harmonic stream-function angle with smooth local vortex deflection near the cursor
    const getFieldAngle = (px, py, t) => {
      let angle =
        Math.sin(py * 0.0024 + t * 0.75) * 1.45 +
        Math.cos(px * 0.002 + t * 0.55) * 1.35 +
        Math.sin((px + py) * 0.0011 - t * 0.35) * 0.45;

      if (mouse.active) {
        const dx = px - mouse.x;
        const dy = py - mouse.y;
        const distSq = dx * dx + dy * dy;
        const radius = 240;
        if (distSq < radius * radius && distSq > 4) {
          const dist = Math.sqrt(distSq);
          const influence = Math.exp(-distSq / (2 * 115 * 115));
          const swirlAngle = Math.atan2(dy, dx) + Math.PI * 0.42;
          const diff = Math.atan2(
            Math.sin(swirlAngle - angle),
            Math.cos(swirlAngle - angle)
          );
          angle += diff * influence * (1 - dist / (radius * 1.35)) * 0.9;
        }
      }

      return angle;
    };

    const isDark = theme === 'dark';
    const cobaltRgb = isDark ? '115, 160, 255' : '29, 78, 216';
    const latticeRgb = isDark ? '130, 165, 235' : '30, 58, 138';

    const stepParticles = (dt) => {
      time += dt;

      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const angle = getFieldAngle(p.x, p.y, time);
        const vx = Math.cos(angle) * p.speed;
        const vy = Math.sin(angle) * p.speed;

        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > MAX_HISTORY) {
          p.history.shift();
        }

        p.x += vx;
        p.y += vy;
        p.life++;

        if (
          p.x < -24 ||
          p.x > width + 24 ||
          p.y < -24 ||
          p.y > height + 24 ||
          p.life > p.maxLife
        ) {
          particles[i] = spawnParticle(false);
        }
      }
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Phase-space vector lattice
      const spacing = 44;
      const tickHalf = 4.5;
      const offsetX = ((width % spacing) * 0.5) || spacing * 0.5;
      const offsetY = ((height % spacing) * 0.5) || spacing * 0.5;

      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let gx = offsetX; gx < width; gx += spacing) {
        for (let gy = offsetY; gy < height; gy += spacing) {
          const angle = getFieldAngle(gx, gy, time);
          const cx = Math.cos(angle) * tickHalf;
          const cy = Math.sin(angle) * tickHalf;
          ctx.moveTo(gx - cx, gy - cy);
          ctx.lineTo(gx + cx, gy + cy);
        }
      }
      ctx.strokeStyle = `rgba(${latticeRgb}, ${isDark ? 0.14 : 0.11})`;
      ctx.stroke();

      // 2. Integral curve streamlines with leading phase nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.history.length < 3) continue;

        const lifeRatio = p.life / p.maxLife;
        const envelope = Math.sin(lifeRatio * Math.PI);
        const lineAlpha = (isDark ? 0.28 : 0.22) * envelope;

        if (lineAlpha <= 0.005) continue;

        ctx.beginPath();
        ctx.moveTo(p.history[0].x, p.history[0].y);
        for (let j = 1; j < p.history.length; j++) {
          ctx.lineTo(p.history[j].x, p.history[j].y);
        }
        ctx.strokeStyle = `rgba(${cobaltRgb}, ${lineAlpha.toFixed(3)})`;
        ctx.lineWidth = 1.1;
        ctx.stroke();

        const head = p.history[p.history.length - 1];
        const dotAlpha = Math.min(lineAlpha * 1.45, 0.45);
        ctx.beginPath();
        ctx.arc(head.x, head.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cobaltRgb}, ${dotAlpha.toFixed(3)})`;
        ctx.fill();
      }
    };

    const handleResize = () => {
      resizeCanvas();
      if (prefersReducedMotion) {
        drawFrame();
      }
    };
    window.addEventListener('resize', handleResize);

    if (prefersReducedMotion) {
      for (let w = 0; w < 36; w++) {
        stepParticles(0.003);
      }
      drawFrame();
    } else {
      // Pre-populate short initial trajectory tails on first load
      for (let w = 0; w < 14; w++) {
        stepParticles(0.002);
      }

      const animate = () => {
        stepParticles(0.0022);
        drawFrame();
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
