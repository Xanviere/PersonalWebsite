import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function AnimatedBackground({ theme }) {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const color = theme === 'dark' ? '#ffffff' : '#000000';

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -2, pointerEvents: 'none' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: { distance: 140, links: { opacity: theme === 'dark' ? 0.3 : 0.15 } },
            },
          },
          particles: {
            color: { value: color },
            links: {
              color: color,
              distance: 150,
              enable: true,
              opacity: theme === 'dark' ? 0.1 : 0.04,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 0.4,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: theme === 'dark' ? 0.2 : 0.1 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
