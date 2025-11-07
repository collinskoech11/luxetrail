import { motion } from "framer-motion";
import { useState } from "react";

function TiltCard({ children, maxTilt = 15 }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -2 * maxTilt;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 2 * maxTilt;
    setTilt({ x, y });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: tilt.x !== 0 || tilt.y !== 0 ? 1.24 : 1,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      style={{
        perspective: 1000,
        borderRadius: "20px",
      }}
    >
      {children}
    </motion.div>
  );
}
export default TiltCard;