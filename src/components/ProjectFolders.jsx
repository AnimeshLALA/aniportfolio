import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import macroImg from '../assets/Macro.png';

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
    id: '01',
    panelColor: '#d2042d',
    textColor: '#111212',
    date: 'Mar 2024',
    title: 'MacroForge',
    tagline: 'Turn hassle into seamless key mapping with Macro Forge—where powerful customization feels simple and easy to use.',
    tags: ['User-Centered Design', 'Interaction Design','Personalization'],
    imgUrl: macroImg,
    link: 'https://www.behance.net/gallery/248365085/MacroForge?tracking_source=search_projects|macroforge&l=0',
  },
  {
    id: '02',
    panelColor: '#111212',
    textColor: '#ffffff',
    date: 'Jun 2023',
    title: 'Clirnet',
    tagline: "From 'I hate this portal' to a product doctors actually want to use.",
    tags: ['SaaS', 'Redesign'],
    imgUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
    link: '#',
  },
  {
    id: '03',
    panelColor: '#d2042d',
    textColor: '#111212',
    date: 'Dec 2023',
    title: 'Virtual Case Study',
    tagline: 'Getting students to actually engage with complex business problems.',
    tags: ['EdTech', '0 → 1'],
    imgUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    link: '#',
  },
  {
    id: '04',
    panelColor: '#111212',
    textColor: '#ffffff',
    date: 'Jan 2024',
    title: 'Medication Monitor',
    tagline: 'Automated dosage alerts, built for real patient safety at scale.',
    tags: ['Healthcare', 'React Native'],
    imgUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80',
    link: '#',
  },
];

const TAB_HEIGHT = 36;

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const width = useWindowWidth();
  const isMobile = width <= 767;
  const isTablet = width <= 1024;

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);
  const isDark = project.textColor === '#111212';

  return (
    <div
      ref={ref}
      id={`pj${project.id}`}
      style={{
        position: isMobile ? 'relative' : 'sticky',
        top: isMobile ? 'auto' : index * TAB_HEIGHT + 80,
        zIndex: index + 1,
        width: '100%',
        height: isMobile ? 'auto' : '100vh',
        maxHeight: isMobile ? 'none' : 900,
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        padding: isMobile ? '0 4% 0' : '0 5% 0',
        boxSizing: 'border-box',
        marginBottom: isMobile ? '24px' : 0,
      }}
    >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>

        {/* Folder Tab */}
        <div style={{
          display: 'inline-flex',
          alignSelf: 'flex-start',
          alignItems: 'center',
          marginLeft: 0,
          gap: 8,
          backgroundColor: project.panelColor,
          padding: '10px 52px 10px 18px',
          clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 100%, 0 100%)',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill={project.textColor} opacity={0.75}>
            <path d="M4 3C4 2.45 4.45 2 5 2H14L20 8V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V3Z" />
            <path d="M14 2V8H20" stroke={project.textColor} strokeWidth="1.5" fill="none" />
          </svg>
          <span className="monolith" style={{
            fontSize: '0.68rem',
            letterSpacing: '0.15em',
            color: project.textColor,
            whiteSpace: 'nowrap',
            fontWeight: 700,
          }}>
            PROJECT &nbsp;{project.id}
          </span>
        </div>

        {/* Card Body */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          height: isMobile ? 'auto' : 500,
          border: `2px solid ${project.panelColor}`,
          borderTop: 'none',
          overflow: 'hidden',
        }}>

          {/* LEFT: colored info panel */}
          <div style={{
            backgroundColor: project.panelColor,
            color: project.textColor,
            padding: isMobile ? '28px 24px 28px' : '44px 52px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: isMobile ? '24px' : 0,
          }}>
            <div>
              {/* Date row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: project.textColor, opacity: 0.4 }} />
                <span className="monolith" style={{ fontSize: '0.68rem', opacity: 0.5, letterSpacing: '0.14em', color: project.textColor }}>
                  {project.date}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(2.2rem, 4vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                marginBottom: 20,
                color: project.textColor,
              }}>
                {project.title}
              </h3>

              {/* Tagline */}
              <p style={{ fontSize: '0.9rem', lineHeight: 1.72, opacity: 0.58, maxWidth: 320, color: project.textColor }}>
                {project.tagline}
              </p>
            </div>

            <div>
              {/* View Project CTA */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  textDecoration: 'none', 
                  marginBottom: '32px',
                  backgroundColor: '#FFFFFF',
                  padding: '12px 28px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                className="cta-hover-effect"
              >
                <span className="monolith" style={{ 
                  fontSize: '0.8rem', 
                  letterSpacing: '0.1em', 
                  color: '#111212',
                  fontWeight: 900
                }}>
                  VIEW PROJECT
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111212" strokeWidth="3" strokeLinecap="square">
                  <line x1="5" y1="19" x2="19" y2="5" /><polyline points="5 5 19 5 19 19" />
                </svg>
              </a>

              {/* Tags */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {project.tags.map(tag => {
                  const isBlackPanel = project.panelColor === '#111212';
                  return (
                    <div key={tag} style={{ 
                      backgroundColor: isBlackPanel ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.2)', 
                      padding: '5px 12px',
                      border: `1px solid ${isBlackPanel ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'}`
                    }}>
                      <span className="monolith" style={{ 
                        fontSize: '0.6rem', 
                        color: '#FFFFFF', 
                        letterSpacing: '0.1em',
                        fontWeight: 700
                      }}>
                        {tag.toUpperCase()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: parallax image — hidden on mobile to keep card compact */}
          {!isMobile && (
            <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0a0a0a', minHeight: isMobile ? '200px' : 'auto' }}>
              <motion.div style={{ y: imgY, width: '100%', height: '115%', marginTop: '-7.5%' }}>
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </motion.div>

              {/* IMAGE.JPG badge — top right */}
              <div style={{
                position: 'absolute', top: 16, right: 16, zIndex: 4,
                display: 'flex', alignItems: 'center', gap: 6,
                backgroundColor: isDark ? '#111212' : '#fff',
                padding: '6px 12px',
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill={project.panelColor}>
                  <rect x="3" y="3" width="18" height="18" rx="1" />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="white" />
                  <polyline points="21 15 16 10 5 21" fill="white" opacity="0.9" />
                </svg>
                <span className="monolith" style={{ fontSize: '0.62rem', color: project.panelColor, letterSpacing: '0.14em' }}>
                  IMAGE.JPG
                </span>
              </div>
            </div>
          )}

          {/* Mobile: show image below text panel */}
          {isMobile && (
            <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0a0a0a', height: '200px' }}>
              <img
                src={project.imgUrl}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectFolders = () => {
  const width = useWindowWidth();
  const isMobile = width <= 767;

  return (
    <section id="projects" className="section-frame" style={{ backgroundColor: 'var(--bg-cream)', flexDirection: 'column', width: '100%' }}>

      {/* Header */}
      <div style={{ padding: isMobile ? '80px 24px 40px' : '120px 60px 64px', textAlign: 'center' }}>
        <p className="monolith" style={{ fontSize: '0.7rem', color: 'var(--primary-red)', letterSpacing: '0.22em', marginBottom: 18 }}>
          05 — FEATURED PROJECTS
        </p>
        <h2 className="monolith" style={{ fontSize: isMobile ? 'clamp(2.5rem, 12vw, 5rem)' : 'clamp(3.5rem, 7vw, 8rem)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.05em' }}>
          FEATURED<br />PROJECTS.
        </h2>
        <p style={{ fontSize: '0.88rem', opacity: 0.38, lineHeight: 1.8, marginTop: 28 }}>
          What happens when curiosity drives the process.
        </p>
      </div>

      {/* Card stack */}
      <div style={{ position: 'relative', overflow: 'clip', width: '100%' }}>
        {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        padding: isMobile ? '32px 24px' : '48px 60px',
        borderTop: '1px solid rgba(17,18,18,0.1)',
      }}>
        <p className="monolith" style={{ fontSize: '0.65rem', opacity: 0.28, letterSpacing: '0.22em' }}>
          ALL PROJECTS — 2022 TO PRESENT
        </p>
        <a href="https://github.com/AnimeshLALA" target="_blank" rel="noreferrer"
          className="monolith"
          style={{ fontSize: '0.7rem', color: 'var(--primary-red)', textDecoration: 'none', letterSpacing: '0.16em' }}>
          MORE ON GITHUB ↗
        </a>
      </div>
    </section>
  );
};

export default ProjectFolders;
