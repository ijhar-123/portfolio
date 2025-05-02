// components/GalaxyParticles.jsx
import { useEffect, useRef } from "react";

const GalaxyParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticle = () => {
      const radius = Math.random() * 1.5 + 0.5;
      const speed = Math.random() * 0.5;
      const angle = Math.random() * Math.PI * 2;
      const orbitRadius = Math.random() * 200 + 50;
      return {
        x: canvas.width / 2,
        y: canvas.height / 2,
        angle,
        speed,
        radius,
        orbitRadius,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      };
    };

    for (let i = 0; i < 200; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.angle += p.speed * 0.01;
        const x = canvas.width/2  + Math.cos(p.angle) * p.orbitRadius;
        const y = canvas.height/2 + Math.sin(p.angle) * p.orbitRadius;

        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 h-full w-full z-0 pointer-events-none"
    />
  );
};

export default GalaxyParticles;
