import React from 'react';
import { motion } from 'framer-motion';
import workshop1 from '../assets/workshop (1).jpeg';
import workshop2 from '../assets/workshop (2).jpeg';
import workshop3 from '../assets/workshop (3).jpeg';
import workshop4 from '../assets/workshop (4).jpeg';

const WorkshopCard = ({ src, alt, delay, gridArea }) => (
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
      gridArea: gridArea,
      backgroundColor: '#fff',
      borderRadius: '24px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      overflow: 'hidden',
      cursor: 'pointer',
      position: 'relative'
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
  const points = [
    "Conduct a workshop to explain corporate identity.",
    "Provide real examples of using Template Slides, offer usage guidance, and ensure easy access to download links.",
    "Add the idea of creating a website for Product Owners to develop a Salekit for their projects, turning them into websites for easy customer sharing.",
    "Include a Q&A session with employees about this workshop."
  ];

  return (
    <section id="workshop" className="section-frame" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      padding: '120px 8%',
      gap: '80px'
    }}>
      <div style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <span style={{ fontSize: '1.2rem', color: 'var(--primary-red)', fontWeight: 900, fontFamily: 'Space Grotesk' }}>06 // WORKSHOP</span>
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--primary-red)', opacity: 0.3 }} />
          </div>
          
          <h2 className="monolith" style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            lineHeight: 0.9, 
            marginBottom: '40px',
            color: 'var(--ink-black)'
          }}>
            WORKSHOP<br />
            <span style={{ color: 'var(--primary-red)' }}>& TRAINING</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {points.slice(0, 2).map((point, i) => (
              <p key={i} style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.7 }}>{point}</p>
            ))}
          </div>
        </motion.div>
      </div>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 300px)',
        gap: '24px',
        width: '100%'
      }}>
        <WorkshopCard 
          src={workshop1} 
          alt="Workshop 1" 
          delay={0.1} 
          gridArea="1 / 1 / 3 / 3" 
        />
        <WorkshopCard 
          src={workshop2} 
          alt="Workshop 2" 
          delay={0.2} 
          gridArea="1 / 3 / 2 / 4" 
        />
        <WorkshopCard 
          src={workshop3} 
          alt="Workshop 3" 
          delay={0.3} 
          gridArea="2 / 3 / 3 / 5" 
        />
        <WorkshopCard 
          src={workshop4} 
          alt="Workshop 4" 
          delay={0.4} 
          gridArea="1 / 4 / 2 / 5" 
        />
      </div>
    </section>
  );
};

export default WorkshopSection;
