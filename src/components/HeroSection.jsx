import React from 'react';
import './HeroSection.css';
import heroBg from '../assets/hero_bg.jpeg';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        <h1 className="hero-title">BUILDING PREMIUM REAL ESTATE IN LUCKNOW</h1>
      </div>
      
      {/* Decorative side badge similar to reference */}
      <div className="side-badge">
        <span>RERA</span>
        <span className="rotated">Approved</span>
      </div>
    </section>
  );
};

export default HeroSection;
