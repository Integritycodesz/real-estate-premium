import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyInvestSection from '../components/WhyInvestSection';
import ProjectsSection from '../components/ProjectsSection';
import Calculators from '../components/Calculators';
import TestimonialsSection from '../components/TestimonialsSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page fade-in">
      <HeroSection />
      
      <div className="reveal">
        <AboutSection />
      </div>

      <div className="reveal">
        <WhyInvestSection />
      </div>
      
      <div className="section-divider container"></div>

      <div className="reveal">
        <ProjectsSection />
      </div>

      <div className="reveal">
        <Calculators />
      </div>
      
      <div className="reveal">
        <TestimonialsSection />
      </div>
      
      <section className="cta-section container reveal">
        <div className="cta-card glass-panel">
          <h2>Ready to build your legacy?</h2>
          <p>Join 500+ families who have trusted us with their future homes.</p>
          <div className="cta-actions">
            <button className="btn-primary">View Projects</button>
            <button className="btn-outline">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

