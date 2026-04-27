import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EMAIL = 'animjb5@gmail.com';

const ContactSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['40px', '-40px']);

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        backgroundColor: 'var(--ink-black)',
        color: 'var(--bg-cream)',
        width: '100%',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* ── Scrolling marquee strip ── */}
      <div style={{
        borderTop: '1px solid rgba(247,244,239,0.1)',
        borderBottom: '1px solid rgba(247,244,239,0.1)',
        overflow: 'hidden',
        padding: '14px 0',
        whiteSpace: 'nowrap',
      }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          style={{ display: 'inline-flex', gap: '0' }}
        >
          {Array(12).fill('LET\'S WORK TOGETHER ✦ ').map((t, i) => (
            <span key={i} className="monolith" style={{
              fontSize: '0.72rem',
              letterSpacing: '0.22em',
              color: 'var(--primary-red)',
              paddingRight: '2.5rem',
            }}>{t}</span>
          ))}
        </motion.div>
      </div>

      {/* ── Main content ── */}
      <div style={{
        padding: 'clamp(48px, 7vw, 100px) clamp(40px, 8%, 120px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '48px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
      }}>

        {/* Section label */}
        <p className="monolith" style={{
          fontSize: '0.68rem',
          letterSpacing: '0.24em',
          color: 'var(--primary-red)',
        }}>
          06 — CONTACT
        </p>

        {/* Big headline */}
        <motion.div style={{ y: titleY }}>
          <h2 style={{
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: 'clamp(2.8rem, 7vw, 7rem)',
            fontWeight: 700,
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            color: 'var(--bg-cream)',
            textTransform: 'uppercase',
          }}>
            Got a<br />
            <span style={{ color: 'var(--primary-red)', fontStyle: 'italic' }}>wild</span><br />
            idea?
          </h2>
        </motion.div>

        {/* Sub-copy + CTA row */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          width: '100%',
          gap: '40px',
          flexWrap: 'wrap',
        }}>
          <p style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            lineHeight: 1.75,
            opacity: 0.45,
            maxWidth: '420px',
            color: 'var(--bg-cream)',
          }}>
            Whether it's a product that needs clarity, a dashboard that needs
            soul, or just a design conversation — I'm all ears.
          </p>

          {/* CTA Button */}
          <motion.a
            href={`mailto:${EMAIL}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              backgroundColor: 'var(--primary-red)',
              color: 'var(--bg-cream)',
              textDecoration: 'none',
              padding: '22px 44px',
              clipPath: 'polygon(0 0, 100% 0, 100% 70%, 94% 100%, 0 100%)',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <span className="monolith" style={{
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              fontWeight: 700,
            }}>
              DROP ME A LINE
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <line x1="5" y1="19" x2="19" y2="5" />
              <polyline points="5 5 19 5 19 19" />
            </svg>
          </motion.a>
        </div>

        {/* ── Divider ── */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(247,244,239,0.1)' }} />

        {/* ── Footer row ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <span className="monolith" style={{
            fontSize: '0.65rem',
            opacity: 0.25,
            letterSpacing: '0.2em',
          }}>
            © 2024 ANIMESH KUMAR — ALL RIGHTS RESERVED
          </span>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            {[
              { label: 'LINKEDIN', href: 'https://linkedin.com/in/animeshkumar' },
              { label: 'GITHUB', href: 'https://github.com/AnimeshLALA' },
              { label: EMAIL, href: `mailto:${EMAIL}` },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="monolith"
                style={{
                  fontSize: '0.62rem',
                  color: 'rgba(247,244,239,0.35)',
                  textDecoration: 'none',
                  letterSpacing: '0.15em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--primary-red)'}
                onMouseLeave={e => e.target.style.color = 'rgba(247,244,239,0.35)'}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
