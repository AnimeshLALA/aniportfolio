import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'UI/UX DESIGNER',
    company: 'JAASSURE',
    period: 'MAR 2024 — JUL 2024',
    location: 'Remote, Malaysia',
    active: true,
  },
  {
    role: 'PRODUCT DESIGN INTERN',
    company: 'CLIRNET',
    period: 'JUN 2023 — JUL 2023',
    location: 'Kolkata, India',
    active: false,
  },
  {
    role: 'CREATIVE HEAD',
    company: 'ALUMNI AFFAIRS SRM',
    period: 'JUN 2022 — JUL 2025',
    location: 'Chennai, India',
    active: false,
  },
];

const UnifiersSection = () => {
  return (
    <section id="unifiers" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      minHeight: '60vh',
      backgroundColor: 'var(--bg-cream)',
      borderTop: '1px solid var(--ink-black)',
      position: 'relative'
    }}>
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={false}
          whileHover="hover"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '60px',
            cursor: 'pointer',
            borderRight: i < 2 ? '1px solid rgba(26, 26, 26, 0.1)' : 'none',
            overflow: 'hidden',
            backgroundColor: exp.active ? 'var(--primary-red)' : 'transparent',
            color: exp.active ? 'var(--bg-cream)' : 'var(--ink-black)',
            transition: 'background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1), color 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
          variants={{
            hover: {
              backgroundColor: 'var(--primary-red)',
              color: '#F7F4EF'
            }
          }}
        >
          <div style={{ textAlign: 'center' }}>
            {/* Role */}
            <p className="monolith" style={{
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              opacity: 0.7,
              marginBottom: '12px',
            }}>
              {exp.role}
            </p>
            {/* Company */}
            <h3 className="monolith" style={{
              fontSize: 'clamp(1.4rem, 2.2vw, 2.2rem)',
              lineHeight: 1,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}>
              {exp.company}
            </h3>
            {/* Period */}
            <p className="monolith" style={{
              fontSize: '0.85rem',
              opacity: 0.75,
              marginBottom: '6px',
            }}>
              {exp.period}
            </p>
            {/* Location */}
            <p style={{
              fontSize: '0.75rem',
              opacity: 0.45,
              letterSpacing: '0.06em',
            }}>
              {exp.location}
            </p>
          </div>

          {/* Corner accents */}
          <div style={{
            position: 'absolute', top: '20px', left: '20px',
            width: '20px', height: '20px',
            borderTop: '2px solid currentColor',
            borderLeft: '2px solid currentColor',
            borderRadius: '10px 0 0 0'
          }} />
          <div style={{
            position: 'absolute', bottom: '20px', right: '20px',
            width: '20px', height: '20px',
            borderBottom: '2px solid currentColor',
            borderRight: '2px solid currentColor',
            borderRadius: '0 0 10px 0'
          }} />
        </motion.div>
      ))}
    </section>
  );
};

export default UnifiersSection;
