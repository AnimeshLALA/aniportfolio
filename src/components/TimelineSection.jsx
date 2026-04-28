import React, { useEffect, useState } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
};

const projects = [
  {
    num: '01',
    name: 'Virtual Case Study',
    date: 'JAN 2023',
    desc: 'Designed and tested a comprehensive web platform showcasing interactive case studies for educational and business analysis.',
    tech: ['UI/UX DESIGN', 'FIGMA', 'HTML/CSS'],
    color: '#00BCD4',
    image: '/project_case_study.png',
  },
  {
    num: '02',
    name: 'Macro Keyboard Tool',
    date: 'AUG 2023',
    desc: 'Hardware configuration utility for custom macro keyboards with a real-time key-mapping interface and USB HID integration.',
    tech: ['C++', 'QT FRAMEWORK', 'HARDWARE'],
    color: '#1A1A1A',
    image: '/project_keyboard.png',
  },
  {
    num: '03',
    name: 'Medication Monitor',
    date: 'JAN 2024',
    desc: 'Automated dosage alerts, built for real patient safety at scale. Drug-interaction cross-referencing via Epocrates API.',
    tech: ['HEALTHCARE', 'REACT NATIVE'],
    color: '#D2042D',
    image: '/project_medication.png',
  },
];

const TimelineSection = () => {
  const width = useWindowWidth();
  const isMobile = width <= 767;
  const isTablet = width <= 1024;

  return (
    <section
      id="timeline"
      style={{
        backgroundColor: '#F5F0E8',
        color: '#1A1A1A',
      }}
    >
      {/* Section Label */}
      <div style={{
        padding: isMobile ? '40px 20px 30px' : isTablet ? '50px 40px 40px' : '70px 60px 50px',
        borderBottom: '3px solid #1A1A1A',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <h1
          className="monolith"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            margin: 0,
            color: '#1A1A1A',
          }}
        >
          FEATURED<br />
          <span style={{ color: '#D2042D' }}>PROJECTS</span>
        </h1>
        <div style={{ textAlign: 'right', paddingBottom: '6px' }}>
          <p className="monolith" style={{ fontSize: '0.72rem', opacity: 0.4, letterSpacing: '0.2em', marginBottom: '6px' }}>TOTAL</p>
          <p className="monolith" style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1, color: '#D2042D' }}>03</p>
        </div>
      </div>

      {/* Project Cards */}
      {projects.map((proj, i) => (
        <div
          key={i}
          className={`fp-card fp-card-${i}`}
          style={{
            width: '100%',
            backgroundColor: proj.color,
            borderBottom: i < projects.length - 1 ? '3px solid rgba(0,0,0,0.25)' : 'none',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            minHeight: isMobile ? 'auto' : '100vh',
            overflow: 'hidden',
          }}
        >
          {/* LEFT: Text */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            {/* Folder tab */}
            <div style={{
              display: 'inline-flex',
              alignSelf: 'flex-start',
              alignItems: 'center',
              gap: '9px',
              backgroundColor: 'rgba(0,0,0,0.22)',
              padding: '11px 26px',
            }}>
              <svg width="17" height="17" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="12" height="10" rx="1" stroke="white" strokeWidth="1.5" />
                <path d="M1 5.5H13" stroke="white" strokeWidth="1.5" />
                <path d="M1 4C1 3.44772 1.44772 3 2 3H5L6 1H8L9 3H12C12.5523 3 13 3.44772 13 4V5H1V4Z" fill="white" />
              </svg>
              <span className="monolith" style={{
                fontSize: '0.8rem',
                color: 'white',
                fontWeight: 900,
                letterSpacing: '0.18em',
              }}>
                PROJECT {proj.num}
              </span>
            </div>

            {/* Content */}
            <div style={{
              padding: isMobile ? '28px 20px 36px' : isTablet ? '36px 40px 48px' : '44px 60px 60px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              flexGrow: 1,
            }}>
              {/* Date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  backgroundColor: proj.color === '#1A1A1A' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
                  flexShrink: 0,
                }} />
                <span className="monolith" style={{
                  fontSize: '0.78rem',
                  color: proj.color === '#1A1A1A' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                  letterSpacing: '0.14em',
                }}>
                  {proj.date}
                </span>
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: isMobile ? 'clamp(2rem, 10vw, 3.5rem)' : 'clamp(2.8rem, 5vw, 5rem)',
                fontWeight: 700,
                color: proj.color === '#1A1A1A' ? 'white' : '#1A1A1A',
                lineHeight: 1.0,
                margin: 0,
                letterSpacing: '-0.02em',
              }}>
                {proj.name}
              </h2>

              {/* Description */}
              <p style={{
                fontSize: '1rem',
                color: proj.color === '#1A1A1A' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)',
                lineHeight: 1.65,
                maxWidth: '400px',
              }}>
                {proj.desc}
              </p>

              {/* View Project */}
              <a
                href="#"
                className="monolith fp-link"
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 900,
                  letterSpacing: '0.14em',
                  color: proj.color === '#1A1A1A' ? 'white' : '#1A1A1A',
                  textDecoration: 'none',
                  borderBottom: `1.5px solid ${proj.color === '#1A1A1A' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)'}`,
                  paddingBottom: '3px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  width: 'fit-content',
                  marginTop: '6px',
                  transition: 'opacity 0.25s ease',
                }}
              >
                VIEW PROJECT <span style={{ fontSize: '1.05rem' }}>↗</span>
              </a>

              {/* Tags */}
              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginTop: 'auto',
                paddingTop: '48px',
              }}>
                {proj.tech.map(t => (
                  <span
                    key={t}
                    className="monolith"
                    style={{
                      fontSize: '0.72rem',
                      padding: '7px 18px',
                      backgroundColor: '#1A1A1A',
                      color: 'white',
                      letterSpacing: '0.1em',
                      fontWeight: 700,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Image (hidden on mobile) */}
          {!isMobile && (
            <div style={{ position: 'relative', overflow: 'hidden', minHeight: isMobile ? '240px' : 'auto' }}>
              <img
                src={proj.image}
                alt={proj.name}
                className="fp-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              />
              {/* IMAGE.JPG badge */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: '#1A1A1A',
                color: 'white',
                padding: '5px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{ fontSize: '0.6rem', opacity: 0.55 }}>JPG</span>
                <span className="monolith" style={{ fontSize: '0.72rem', letterSpacing: '0.1em' }}>IMAGE.JPG</span>
              </div>
            </div>
          )}
        </div>
      ))}

      <style dangerouslySetInnerHTML={{
        __html: `
        .fp-card:hover .fp-img {
          transform: scale(1.04);
        }
        .fp-link:hover {
          opacity: 0.65;
        }
      `}} />
    </section>
  );
};

export default TimelineSection;
