import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style>{`
        body, a, button {
          cursor: none !important;
        }
      `}</style>
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: isHovering ? 60 : 20,
          height: isHovering ? 60 : 20,
          borderRadius: '50%',
          backgroundColor: '#efece7',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 99999,
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          border: isHovering ? '1px solid rgba(255,255,255,0.2)' : 'none',
          filter: 'grayscale(1) contrast(1.2) brightness(1.2)',
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      />
    </>
  );
};

export default CustomCursor;
