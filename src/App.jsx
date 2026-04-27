import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ResumeSection from './components/ResumeSection';
import MapSection from './components/MapSection';
import ProjectFolders from './components/ProjectFolders';
import BrutalistGallery from './components/BrutalistGallery';
import WorkshopSection from './components/WorkshopSection';
import ContactSection from './components/ContactSection';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <Layout>
      <Hero />
      <ResumeSection />
      <MapSection />
      <BrutalistGallery />
      <ProjectFolders />
      <WorkshopSection />
      <ContactSection />
    </Layout>
    </SmoothScroll>
  );
}

export default App;
