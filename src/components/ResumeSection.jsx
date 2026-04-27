import React from 'react';
import { motion } from 'framer-motion';

const ResumeSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="biography" className="section-frame" style={{ 
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '120px 10%',
      backgroundColor: 'white',
      color: '#1A1A1A',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Top Header Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '80px', marginBottom: '60px' }}>
        <motion.div 
          style={{ position: 'relative' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={{
            width: '100%',
            aspectRatio: '1/1',
            backgroundColor: '#D2042D',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '10px'
          }}>
            <motion.img 
              src="/src/assets/animesh Upscaled.png" 
              alt="Animesh Kumar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(1) contrast(1.1)',
                mixBlendMode: 'multiply'
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
            />
          </div>
          <motion.div 
            style={{
              position: 'absolute',
              top: '20px',
              right: '-20px',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(210, 4, 45, 0.1)',
              zIndex: -1,
              borderRadius: '10px'
            }}
            animate={{ 
              x: [0, 10, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <motion.h2 
            className="monolith" 
            style={{ fontSize: '6.5rem', lineHeight: 0.8, marginBottom: '10px', color: '#000' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            ANIMESH <br /> KUMAR
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ alignSelf: 'flex-start', backgroundColor: '#004D40', color: 'white', padding: '5px 20px', borderRadius: '5px' }}
          >
            <p className="monolith" style={{ fontSize: '1.2rem' }}>UI/UX DESIGNER</p>
          </motion.div>
          
          <motion.div 
            style={{ marginTop: '40px' }}
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <h3 className="monolith" style={{ fontSize: '1.5rem', color: '#D2042D', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              ✦ ABOUT ME
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#444', maxWidth: '700px' }}>
              I'm Animesh, a UI/UX and product designer passionate about creating intuitive and meaningful experiences. 
              My goal is to make every interaction feel natural and every interface speak with clarity and emotion. 
              For me, great design isn't just beautiful — it's effortless, purposeful, and human.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '80px' }}>
        
        {/* Left Column */}
        <motion.aside
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <motion.div style={{ marginBottom: '60px' }} variants={fadeInUp}>
            <h3 className="monolith" style={{ fontSize: '1.3rem', color: '#D2042D', borderBottom: '2px solid #D2042D', paddingBottom: '10px', marginBottom: '25px' }}>
              CONTACT ✦
            </h3>
            <ul style={{ listStyle: 'none', fontSize: '1rem', lineHeight: 2.2 }}>
              <li>📅 04/04/2002</li>
              <li>📞 (+91) 8240202429</li>
              <li>📧 animjb5@gmail.com</li>
              <li>🔗 linkedin.com/animeshhkumar</li>
              <li>💻 github.com/AnimeshLALA</li>
            </ul>
          </motion.div>

          <motion.div style={{ marginBottom: '60px' }} variants={fadeInUp}>
            <h3 className="monolith" style={{ fontSize: '1.3rem', color: '#D2042D', borderBottom: '2px solid #D2042D', paddingBottom: '10px', marginBottom: '25px' }}>
              EDUCATION ✦
            </h3>
            <div style={{ marginBottom: '30px' }}>
              <p className="monolith" style={{ fontSize: '1.1rem', fontWeight: 700 }}>2022 — 2026</p>
              <p style={{ fontWeight: 800 }}>SRM Institute of Technology</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Computer Science | CGPA: 7.8</p>
            </div>
            <div>
              <p className="monolith" style={{ fontSize: '1.1rem', fontWeight: 700 }}>2018 — 2021</p>
              <p style={{ fontWeight: 800 }}>Kendriya Vidyalaya Ballygunge</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Secondary School | CGPA: 8.0</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="monolith" style={{ fontSize: '1.3rem', color: '#D2042D', borderBottom: '2px solid #D2042D', paddingBottom: '10px', marginBottom: '25px' }}>
              SOFTWARE SKILLS ✦
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '30px' }}>
              {['figma', 'python', 'html5', 'css3', 'cplusplus', 'amazonwebservices'].map((icon, i) => (
                <motion.img 
                  key={icon} 
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`} 
                  style={{ width: '40px', height: '40px' }} 
                  alt={icon} 
                  whileHover={{ y: -5, scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
            <h3 className="monolith" style={{ fontSize: '1.3rem', color: '#D2042D', borderBottom: '2px solid #D2042D', paddingBottom: '10px', marginBottom: '20px', marginTop: '10px' }}>
              SKILLS ✦
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', opacity: 0.8 }}>
              <p><strong>Languages:</strong> Python, HTML, CSS, C, C++, SQL</p>
              <p><strong>Frameworks:</strong> YOLO, Flask, Django, Flutter, Interface Builder</p>
              <p><strong>Tools:</strong> AWS, MySQL, Visual Studio, Figma, Framer</p>
            </div>
          </motion.div>
        </motion.aside>

        {/* Right Column */}
        <motion.main
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div style={{ marginBottom: '80px' }}>
            <motion.h3 
              variants={fadeInUp}
              style={{ fontSize: '1.5rem', color: '#D2042D', marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}
              className="monolith"
            >
              EXPERIENCE ✦
            </motion.h3>

            {/* Experience Items */}
            {[
              {
                role: 'UI/UX Designer',
                company: 'JAAssure',
                period: 'March 2024 — July 2024',
                location: 'Remote, Malaysia',
                bullets: [
                  'Designed data-driven UI/UX for an insurance mobile app, leveraging analytics to improve customer decision-making.',
                  'Developed analytical website features with integrated dashboards for intuitive insurance data interpretation.',
                  'Created wireframes and prototypes for analytical tools including claims tracking and risk assessment interfaces.',
                  'Implemented responsive designs with data visualization components providing actionable user insights.'
                ]
              },
              {
                role: 'Product Design Intern',
                company: 'Clirnet',
                period: 'June 2023 — July 2023',
                location: 'Kolkata, India',
                bullets: [
                  'Redesigned company UI using user research and performance metrics to drive visual improvements.',
                  'Optimized engagement by conducting usability testing within a quantitative analytical framework.',
                  'Developed prototypes by identifying user pain points through comprehensive data analysis.',
                  'Led development of an analytics-driven interactive learning interface for medical student case studies.'
                ]
              },
              {
                role: 'Creative Head',
                company: 'Alumni Affairs SRM',
                period: 'June 2022 — July 2025',
                location: 'Chennai, India',
                bullets: [
                  'Designed marketing assets including social media creatives, posters, and digital content.',
                  'Led a team of 20+ members to execute creative strategy and design operations.',
                  'Directed visual design and branding for alumni campaigns, events, and communications.',
                  'Hosted and managed 5+ large-scale alumni events, ensuring seamless execution and engagement.'
                ]
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                variants={slideInRight}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '40px', marginBottom: '50px' }}
              >
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontWeight: 800, fontSize: '0.9rem' }}>{exp.role}</p>
                  <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>{exp.period}</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '4px' }}>{exp.location}</p>
                </div>
                <div>
                  <p style={{ fontWeight: 900, fontSize: '1.05rem', marginBottom: '10px', color: '#D2042D' }}>{exp.company}</p>
                  <ul style={{ fontSize: '0.95rem', opacity: 0.8, paddingLeft: '18px', lineHeight: 1.7 }}>
                    {exp.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.main>
      </div>

      {/* Decorative Bottom Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40px',
        backgroundColor: '#1A1A1A',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        color: 'white',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', gap: '40px', animation: 'scroll 20s linear infinite', whiteSpace: 'nowrap' }}>
          {Array(10).fill('ANIMESH KUMAR ✦ PORTFOLIO ✦').map((t, i) => (
            <span key={i} className="monolith" style={{ fontSize: '0.8rem' }}>{t}</span>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
};

export default ResumeSection;
