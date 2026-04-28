import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import workshop1 from '../assets/workshop (1).jpeg';
import workshop2 from '../assets/workshop (2).jpeg';
import workshop3 from '../assets/workshop (3).jpeg';
import workshop4 from '../assets/workshop (4).jpeg';

const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
};

const WorkshopCard = ({ src, alt, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ 
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 }
    }}
    transition={{ 
      duration: 0.6,
      delay: delay,
      ease: "easeOut"
    }}
    style={{ 
      backgroundColor: '#fff',
      borderRadius: '24px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      overflow: 'hidden',
      cursor: 'pointer',
      position: 'relative',
      height: '100%',
      minHeight: '200px',
    }}
  >
    <motion.img 
      src={src} 
      alt={alt} 
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
    />
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(transparent, rgba(0,0,0,0.2))',
        pointerEvents: 'none'
      }}
    />
  </motion.div>
);

const WorkshopSection = () => {
  const width = useWindowWidth();
  const isMobile = width <= 767;
  const isTablet = width <= 1024;

  const points = [
    "Conduct a workshop to explain corporate identity.",
    "Provide real examples of using Template Slides, offer usage guidance, and ensure easy access to download links.",
    "Add the idea of creating a website for Product Owners to develop a Salekit for their projects, turning them into websites for easy customer sharing.",
    "Include a Q&A session with employees about this workshop."
  ];

  const workshops = [
    { src: workshop1, alt: 'Workshop 1' },
    { src: workshop2, alt: 'Workshop 2' },
    { src: workshop3, alt: 'Workshop 3' },
    { src: workshop4, alt: 'Workshop 4' },
  ];

  return (
    <section id="workshop" className="section-frame" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      padding: isMobile ? '60px 5%' : isTablet ? '80px 6%' : '120px 8%',
      gap: isMobile ? '40px' : '80px'
    }}>
      <div style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <span style={{ fontSize: isMobile ? '1rem' : '1.2rem', color: 'var(--primary-red)', fontWeight: 900, fontFamily: 'Space Grotesk' }}>06 // WORKSHOP</span>
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--primary-red)', opacity: 0.3 }} />
          </div>
          
          <h2 className="monolith" style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 6rem)', 
            lineHeight: 0.9, 
            marginBottom: '40px',
            color: 'var(--ink-black)'
          }}>
            WORKSHOP<br />
            <span style={{ color: 'var(--primary-red)' }}>&amp; TRAINING</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {points.slice(0, 2).map((point, i) => (
              <p key={i} style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.7 }}>{point}</p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive Photo Grid */}
      {isMobile ? (
        // Mobile: 1 column
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
          {workshops.map((w, i) => (
            <div key={i} style={{ height: '220px' }}>
              <WorkshopCard src={w.src} alt={w.alt} delay={i * 0.1} />
            </div>
          ))}
        </div>
      ) : isTablet ? (
        // Tablet: 2 columns × 2 rows
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, 260px)',
          gap: '20px',
          width: '100%'
        }}>
          {workshops.map((w, i) => (
            <WorkshopCard key={i} src={w.src} alt={w.alt} delay={i * 0.1} />
          ))}
        </div>
      ) : (
        // Desktop: original 4-column named-area layout
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 300px)',
          gap: '24px',
          width: '100%'
        }}>
          <div style={{ gridArea: '1 / 1 / 3 / 3' }}>
            <WorkshopCard src={workshop1} alt="Workshop 1" delay={0.1} />
          </div>
          <div style={{ gridArea: '1 / 3 / 2 / 4' }}>
            <WorkshopCard src={workshop2} alt="Workshop 2" delay={0.2} />
          </div>
          <div style={{ gridArea: '2 / 3 / 3 / 5' }}>
            <WorkshopCard src={workshop3} alt="Workshop 3" delay={0.3} />
          </div>
          <div style={{ gridArea: '1 / 4 / 2 / 5' }}>
            <WorkshopCard src={workshop4} alt="Workshop 4" delay={0.4} />
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkshopSection;
