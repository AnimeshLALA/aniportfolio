import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import userPhoto from '../assets/animesh Upscaled.png';

const Portrait3D = ({ scale = 1 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const xPct = (e.clientX / innerWidth) - 0.5;
    const yPct = (e.clientY / innerHeight) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      perspective: '1000px'
    }}>
      <motion.div
        style={{
          width: '600px',
          height: '600px',
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
      >
        <img 
          src={userPhoto} 
          alt="Animesh Kumar" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',
            filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.2))',
            transform: 'translateZ(50px)'
          }} 
        />
      </motion.div>
    </div>
  );
};

export default Portrait3D;
