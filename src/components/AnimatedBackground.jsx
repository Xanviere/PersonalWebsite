import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function AnimatedBackground({ theme }) {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const color = theme === 'dark' ? '#ffffff' : '#000000';

  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const options = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { 
          enable: !isTouchDevice, 
          mode: "grab" 
        },
        resize: true,
      },
      modes: {
        grab: { 
          distance: 140, 
          links: { opacity: theme === 'dark' ? 0.25 : 0.12 } 
        },
      },
    },
    particles: {
      color: { value: color },
      links: {
        color: color,
        distance: 140,
        enable: true,
        opacity: theme === 'dark' ? 0.08 : 0.035,
        width: 1,
      },
      move: {
        direction: "none",
        enable: !prefersReducedMotion,
        outModes: { default: "bounce" },
        random: false,
        speed: prefersReducedMotion ? 0 : 0.35,
        straight: false,
      },
      number: { 
        density: { enable: true, area: 900 }, 
        value: isTouchDevice ? 32 : 55 
      },
      opacity: { value: theme === 'dark' ? 0.18 : 0.08 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  }), [color, theme, isTouchDevice, prefersReducedMotion]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -2, pointerEvents: 'none' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
      />
    </div>
  );
}
