import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Sticker = ({ text, style }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        cursor: 'pointer'
      }}
      whileHover={{ scale: 1.1 }}
    >
      <div style={{
        padding: '10px 20px',
        backgroundColor: 'var(--primary-red)',
        color: 'white',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        textTransform: 'uppercase',
        fontSize: '0.8rem',
        boxShadow: '4px 4px 0px var(--ink-black)',
        transform: 'translateZ(20px)'
      }}>
        {text}
      </div>
    </motion.div>
  );
};

export default Sticker;
