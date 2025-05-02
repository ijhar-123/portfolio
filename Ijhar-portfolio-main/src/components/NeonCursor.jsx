// components/NeonTrail.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

// Predefined neon colors
const neonColors = ["#156996", "#ff00f7", "#39ff14", "#ff6f00", "#8a2be2"];

const NeonTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      const newTrail = {
        id: uuidv4(),
        x: e.clientX,
        y: e.clientY,
        color,
      };
      setTrails((prev) => [...prev, newTrail]);

      // Remove old trail dots after 500ms
      setTimeout(() => {
        setTrails((prev) => prev.filter((dot) => dot.id !== newTrail.id));
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed pointer-events-none z-50"
          style={{
            left: trail.x,
            top: trail.y,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: trail.color,
            filter: `blur(1px) drop-shadow(0 0 4px ${trail.color})`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </>
  );
};

export default NeonTrail;
