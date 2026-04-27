import React, { Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Portrait3D from './Portrait3D';
import Sticker from './Sticker';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const titleY = useTransform(smoothProgress, [0, 0.2], [0, 150]);
  const opacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const maskScale = useTransform(smoothProgress, [0, 0.2], [1, 1.1]);

  return (
    <section id="hero" className="hero section-frame" style={{ 
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center', 
      overflow: 'hidden',
      position: 'relative' 
    }}>
      <div style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        zIndex: 2,
      }}>
        <Portrait3D scale={maskScale} />
      </div>

      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        textAlign: 'center',
        pointerEvents: 'none',
        width: '100%'
      }}>
        <motion.div style={{ y: titleY, opacity: 1 }}>
          <h1 style={{ 
            fontSize: '18rem', 
            color: 'var(--primary-red)', 
            lineHeight: 0.85, 
            letterSpacing: '-0.06em',
            fontWeight: 900,
            textAlign: 'center',
            width: '100%',
            opacity: 0.9
          }}>
            PORTFOLIO
          </h1>
        </motion.div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '80px',
        right: '100px',
        maxWidth: '300px',
        fontSize: '0.9rem',
        lineHeight: 1.6,
        textAlign: 'right',
        zIndex: 10
      }}>
        <p className="monolith" style={{ marginBottom: '10px', color: 'var(--primary-red)' }}>HISTORY ———</p>
        <p>The first of the three great unifiers of Japan, known for his revolutionary military tactics and ruthless ambition.</p>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '80px',
        left: '100px',
        zIndex: 10
      }}>
        <p className="monolith" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', opacity: 0.5 }}>SCROLL TO EXPLORE ↓</p>
      </div>
    </section>
  );
};

export default Hero;
