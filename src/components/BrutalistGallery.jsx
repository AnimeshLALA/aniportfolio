import React from 'react';
import { motion } from 'framer-motion';

const symbols = [
  { 
    id: '01', 
    title: 'USER RESEARCH/EMPATHY', 
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
        <path d="M50 10V90M10 50H90" stroke="currentColor" strokeWidth="2" />
        <motion.circle 
          cx="50" cy="50" r="15" 
          fill="currentColor"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    )
  },
  { 
    id: '02', 
    title: 'WIREFRAMING/PROTOTYPING', 
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M50 10C72.0914 10 90 27.9086 90 50C90 72.0914 72.0914 90 50 90" 
          stroke="currentColor" strokeWidth="2"
          animate={{ d: ["M50 10C72.0914 10 90 27.9086 90 50C90 72.0914 72.0914 90 50 90", "M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90"] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  { 
    id: '03', 
    title: 'VISUAL DESIGN', 
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" />
        <motion.path 
          d="M20 50Q50 20 80 50" 
          stroke="currentColor" strokeWidth="4"
          animate={{ d: ["M20 50Q50 20 80 50", "M20 50Q50 80 80 50"] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
      </svg>
    )
  },
  { 
    id: '04', 
    title: 'INTERACTION DESIGN', 
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 90L50 10L70 90H30Z" stroke="currentColor" strokeWidth="2" />
        <motion.rect 
          x="45" y="40" width="10" height="10" 
          fill="currentColor"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <path d="M40 70H60M42 80H58" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  }
];

const BrutalistGallery = () => {
  return (
    <section id="gallery" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      minHeight: '100vh',
      backgroundColor: 'var(--bg-cream)',
      borderTop: '1px solid var(--ink-black)',
      padding: '20px'
    }}>
      {symbols.map((item, i) => (
        <motion.div
          key={i}
          className="gallery-card"
          whileHover="hover"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
            border: '1px solid rgba(26, 26, 26, 0.1)',
            overflow: 'hidden',
            backgroundColor: 'transparent',
            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        >
          {/* Card Border Detail */}
          <div style={{
            position: 'absolute',
            top: '10px', left: '10px', right: '10px', bottom: '10px',
            border: '1px solid rgba(26, 26, 26, 0.05)',
            pointerEvents: 'none'
          }} />

          {/* SVG Symbol */}
          <motion.div
            style={{
              width: '150px',
              height: '150px',
              color: 'var(--ink-black)',
              zIndex: 2,
              marginBottom: '30px'
            }}
            variants={{
              hover: { 
                scale: 1.2, 
                rotate: 90,
                color: 'var(--bg-cream)'
              }
            }}
          >
            {item.svg}
          </motion.div>

          {/* Text Content */}
          <div style={{ textAlign: 'center', zIndex: 2 }}>
            <span className="monolith" style={{ fontSize: '0.8rem', opacity: 0.5 }}>{item.id}</span>
            <h3 className="monolith" style={{ fontSize: '1.5rem', marginTop: '10px' }}>{item.title}</h3>
          </div>

          {/* Hover Fill */}
          <motion.div
            className="card-fill"
            initial={{ height: '0%' }}
            variants={{
              hover: { height: '100%' }
            }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              backgroundColor: 'var(--primary-red)',
              zIndex: 1,
              transition: 'height 0.6s cubic-bezier(0.19, 1, 0.22, 1)'
            }}
          />

          {/* Specific CSS for children on hover */}
          <style dangerouslySetInnerHTML={{ __html: `
            .gallery-card:hover .monolith { color: var(--bg-cream) !important; opacity: 1 !important; }
            .gallery-card:hover h3 { color: var(--bg-cream) !important; }
          `}} />
        </motion.div>
      ))}
    </section>
  );
};

export default BrutalistGallery;
