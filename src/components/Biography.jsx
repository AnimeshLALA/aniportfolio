import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
};

const Biography = () => {
  const width = useWindowWidth();
  const isMobile = width <= 767;
  const isTablet = width <= 1024;

  return (
    <section id="biography" className="biography" style={{ 
      flexDirection: 'column', 
      justifyContent: 'center', 
      padding: isMobile ? '60px 6%' : isTablet ? '80px 8%' : '0 10%'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="monolith" style={{ fontSize: '1rem', color: 'var(--primary-red)', marginBottom: '40px' }}>
          02 — THE VISIONARY ———
        </h2>
        
        <div style={{ maxWidth: '800px' }}>
          <h3 className="monolith" style={{ fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : '3rem', lineHeight: 1.1, marginBottom: '60px' }}>
            A MAN WHO SAW THE WORLD BEYOND THE SHORES OF NIPPON.
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: isMobile ? '30px' : '60px',
            fontFamily: 'Manrope',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            <p>
              Oda Nobunaga was not merely a warlord; he was a revolutionary. While others clung to tradition, he embraced the matchlock musket, built ironclad ships, and dismantled the economic monopolies of the powerful Buddhist temples.
            </p>
            <p>
              His motto, "Tenka Fubu" (All the world under military arms), signaled his intent to unify a fractured Japan under a single, centralized authority, ending a century of constant civil war.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Decorative vertical lines */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          bottom: '0',
          right: '20%',
          width: '1px',
          height: '40vh',
          background: 'var(--primary-red)',
          opacity: 0.3
        }} />
      )}
    </section>
  );
};

export default Biography;
