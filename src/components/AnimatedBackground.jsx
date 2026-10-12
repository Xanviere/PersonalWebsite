import React, { useEffect, useRef } from "react";

export default function AnimatedBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Streamline particles representing vector flows/trajectories
    const numParticles = Math.min(Math.floor((width * height) / 18000), 75);
    const particles = [];

    // Subtle mathematical vector field flow: v(x, y) = [sin(y * k1 + t), cos(x * k2 + t)]
    const initParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.4 + Math.random() * 0.5,
      history: [],
      maxHistory: Math.floor(18 + Math.random() * 16),
      life: Math.floor(Math.random() * 200),
      maxLife: 200 + Math.floor(Math.random() * 180),
    });

    for (let i = 0; i < numParticles; i++) {
      particles.push(initParticle());
    }

    let time = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const isDark = theme === "dark";
    const strokeColor = isDark
      ? "rgba(255, 255, 255,"
      : "rgba(10, 15, 30,";

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += prefersReducedMotion ? 0.0005 : 0.0025;

      // Draw flowing streamlines
      particles.forEach((p) => {
        // Multi-frequency directional field simulating manifold dynamics
        const angle =
          Math.sin(p.y * 0.0022 + time * 0.8) * 1.6 +
          Math.cos(p.x * 0.0018 + time * 0.6) * 1.4;

        const vx = Math.cos(angle) * p.speed;
        const vy = Math.sin(angle) * p.speed;

        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > p.maxHistory) {
          p.history.shift();
        }

        p.x += vx;
        p.y += vy;
        p.life++;

        // Wrap or respawn
        if (
          p.x < -20 ||
          p.x > width + 20 ||
          p.y < -20 ||
          p.y > height + 20 ||
          p.life > p.maxLife
        ) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
          p.history = [];
          p.life = 0;
        }

        // Draw streamline
        if (p.history.length > 2) {
          ctx.beginPath();
          ctx.moveTo(p.history[0].x, p.history[0].y);
          for (let j = 1; j < p.history.length; j++) {
            ctx.lineTo(p.history[j].x, p.history[j].y);
          }

          const lifeFactor = Math.sin((p.life / p.maxLife) * Math.PI);
          const alpha = (isDark ? 0.14 : 0.08) * lifeFactor;
          ctx.strokeStyle = `${strokeColor} ${Math.max(alpha, 0)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -2,
        pointerEvents: "none",
        opacity: theme === "dark" ? 0.75 : 0.55,
      }}
    />
  );
}
