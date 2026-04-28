import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './CustomCursor';

const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
};

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('01');
  const width = useWindowWidth();

  const isMobile = width <= 767;
  const isTablet = width <= 1024;

  const menuLinks = [
    { name: 'HOME', id: 'hero' },
    { name: 'About Me', id: 'biography' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  // Track current section for page numbering
  useEffect(() => {
    const sections = ['hero', 'biography', 'map', 'gallery', 'projects', 'workshop', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target.id) + 1;
          setCurrentPage(index.toString().padStart(2, '0'));
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="main-frame" />
      <div className="noise" />

      <header style={{
        position: 'fixed',
        top: isMobile ? '16px' : '40px',
        left: isMobile ? '16px' : isTablet ? '40px' : '80px',
        right: isMobile ? '16px' : isTablet ? '40px' : '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10000,
        pointerEvents: 'none'
      }}>
        <div className="monolith" style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontSize: isMobile ? '0.75rem' : '1rem', letterSpacing: '0.1em' }}>ANIMESH KUMAR</span>
        </div>
        <button
          className="monolith"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ 
            pointerEvents: 'auto', 
            zIndex: 10001,
            backgroundColor: 'var(--primary-red)',
            color: 'white',
            border: 'none',
            padding: isMobile ? '5px 14px' : '5px 20px',
            fontSize: isMobile ? '0.7rem' : '0.85rem',
            fontWeight: 900,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)',
            transition: 'all 0.3s ease'
          }}
        >
          {isMenuOpen ? 'CLOSE ———' : 'MENU ———'}
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0, left: 0,
              width: '100%', height: '100%',
              backgroundColor: 'var(--bg-cream)',
              zIndex: 9999,
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gridTemplateRows: isMobile ? 'repeat(2, 1fr)' : '1fr',
            }}
          >
            {menuLinks.map((link, i) => {
              const motions = [
                { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
                { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
                { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
                { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
              ];
              
              // Border logic for responsive grid
              const isRightEdge = isMobile ? (i % 2 === 1) : (i === 3);
              const isBottomRow = isMobile ? (i >= 2) : false;

              return (
                <motion.a
                  key={link.name}
                  href={`#${link.id}`}
                  initial={motions[i].initial}
                  animate={motions[i].animate}
                  whileHover="hover"
                  transition={{ delay: 0.05 * i, type: 'spring', damping: 20 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="menu-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textDecoration: 'none',
                    borderRight: !isRightEdge ? '1px solid rgba(26, 26, 26, 0.1)' : 'none',
                    borderBottom: !isBottomRow && isMobile ? '1px solid rgba(26, 26, 26, 0.1)' : 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    color: 'var(--primary-red)',
                  }}
                >
                  {/* Symmetrical Curtain Reveal */}
                  <motion.div 
                    variants={{
                      hover: { height: '50.5%' }
                    }}
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '0%',
                      backgroundColor: 'var(--primary-red)',
                      zIndex: 1,
                      transition: 'height 0.4s cubic-bezier(0.19, 1, 0.22, 1)'
                    }}
                  />
                  <motion.div 
                    variants={{
                      hover: { height: '50.5%' }
                    }}
                    style={{
                      position: 'absolute',
                      bottom: 0, left: 0, width: '100%', height: '0%',
                      backgroundColor: 'var(--primary-red)',
                      zIndex: 1,
                      transition: 'height 0.4s cubic-bezier(0.19, 1, 0.22, 1)'
                    }}
                  />

                  <motion.div 
                    className="menu-card-content"
                    style={{ textAlign: 'center', zIndex: 2 }}
                    variants={{
                      hover: { scale: 1.05 }
                    }}
                  >
                    <motion.span 
                      className="monolith" 
                      style={{ fontSize: '0.8rem', opacity: 0.6, display: 'block', marginBottom: '10px' }}
                      variants={{
                        hover: { color: 'var(--bg-cream)', opacity: 1 }
                      }}
                    >
                      0{i + 1}
                    </motion.span>
                    <motion.h3 
                      className="monolith" 
                      style={{ fontSize: isMobile ? '2rem' : '3.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}
                      variants={{
                        hover: { color: 'var(--bg-cream)' }
                      }}
                    >
                      {link.name}
                    </motion.h3>
                  </motion.div>

                  {/* Corner Accents */}
                  <div style={{
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    width: '20px',
                    height: '20px',
                    borderTop: '1px solid currentColor',
                    borderLeft: '1px solid currentColor',
                    zIndex: 2
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    right: '40px',
                    width: '20px',
                    height: '20px',
                    borderBottom: '1px solid currentColor',
                    borderRight: '1px solid currentColor',
                    zIndex: 2
                  }} />
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="sidebar sidebar-left" style={{ paddingTop: '160px' }}>
        <div className="vertical-text monolith" style={{ fontSize: '0.8rem', letterSpacing: '0.3em' }}>
          UI/UX DESIGNER
        </div>
      </div>

      <div className="sidebar sidebar-right">
        <div className="vertical-text monolith" style={{ fontSize: '0.8rem', letterSpacing: '0.3em', alignSelf: 'flex-end' }}>
          DEVELOPER
        </div>
      </div>

      <main className="content-wrapper">
        {children}
      </main>
    </>
  );
};

export default Layout;
