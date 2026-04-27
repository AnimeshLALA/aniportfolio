import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section id="map" className="map-section section-frame" style={{ 
      flexDirection: 'row', 
      alignItems: 'center',
      padding: '0 10%',
      minHeight: '100vh'
    }}>
      <div style={{ flex: 1 }}>
        <h2 className="monolith" style={{ fontSize: '1rem', color: 'var(--primary-red)', marginBottom: '40px' }}>
          03 — JOURNEY ———
        </h2>
        <h3 className="monolith" style={{ fontSize: '4.5rem', lineHeight: 1, marginBottom: '20px' }}>
          FROM 2002<br />TO PRESENT
        </h3>
        <p style={{ maxWidth: '400px', fontSize: '1rem', opacity: 0.8, lineHeight: 1.6 }}>
          A trajectory defined by growth, from Chennai to Kolkata, and now expanding horizons in Malaysia. Each milestone represents a chapter of professional evolution.
        </p>

        <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
          <div style={{ padding: '20px', border: '1px solid var(--primary-red)', width: '150px' }}>
            <div className="monolith" style={{ fontSize: '1.5rem' }}>04</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>MAJOR CITIES</div>
          </div>
          <div style={{ padding: '20px', border: '1px solid var(--primary-red)', width: '150px' }}>
            <div className="monolith" style={{ fontSize: '1.5rem' }}>2024</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>CURRENT YEAR</div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
        {/* Straight Vertical Journey Path */}
        <motion.svg 
          viewBox="0 0 200 400" 
          style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Vertical Base Line */}
          <motion.line 
            x1="50" y1="50" x2="50" y2="350" 
            stroke="var(--primary-red)" 
            strokeWidth="2" 
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Point 1: Origin (Top) */}
          <circle cx="50" cy="50" r="4" fill="var(--primary-red)" />
          <text x="70" y="55" className="monolith" style={{ fontSize: '10px', fill: 'var(--ink-black)' }}>2002 — ORIGIN</text>
          
          {/* Point 2: SRM */}
          <circle cx="50" cy="150" r="4" fill="var(--primary-red)" />
          <text x="70" y="155" className="monolith" style={{ fontSize: '10px', fill: 'var(--ink-black)' }}>2020 — SRM CHENNAI</text>
          
          {/* Point 3: Clirnet */}
          <circle cx="50" cy="250" r="4" fill="var(--primary-red)" />
          <text x="70" y="255" className="monolith" style={{ fontSize: '10px', fill: 'var(--ink-black)' }}>2023 — CLIRNET KOLKATA</text>
          
          {/* Point 4: JAAssure */}
          <circle cx="50" cy="350" r="4" fill="var(--primary-red)" />
          <text x="70" y="355" className="monolith" style={{ fontSize: '10px', fill: 'var(--ink-black)' }}>2024 — JAASSURE MALAYSIA</text>

          {/* Decorative Horizontal markers */}
          {[50, 150, 250, 350].map((y) => (
            <line key={y} x1="40" y1={y} x2="60" y2={y} stroke="var(--primary-red)" strokeWidth="1" />
          ))}
        </motion.svg>
      </div>
    </section>
  );
};

export default MapSection;
