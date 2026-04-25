import React from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import './HeroSection.css';
import heroBg from '../assets/hero.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge reveal-delay-1">
            <Sparkles size={16} className="text-gold" />
            <span>Lucknow's #1 Most Trusted Real Estate Developers</span>
          </div>

          <h1 className="hero-title reveal-delay-2">
            Crafting Legacies. <br />
            <span className="text-gold">Not Just Plots.</span>
          </h1>

          <p className="hero-description reveal-delay-3">
            Secure your family's future with Jila Panchayat approved premium plots in Lucknow's 
            fastest-growing corridors. Transparent documentation, expert guidance, and proven delivery.
          </p>

          <div className="hero-actions reveal-delay-4">
            <button 
              className="hero-btn-primary"
              onClick={() => window.dispatchEvent(new Event('open-pbd-lead-popup'))}
            >
              Schedule Free Site Visit
              <ArrowRight size={18} />
            </button>
            <a 
              href="https://wa.me/917054550296" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-btn-outline"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="hero-stats-grid reveal-delay-5">
          <div className="stat-card">
            <h3>8+</h3>
            <p>Years of Trust</p>
          </div>
          <div className="stat-card">
            <h3>500+</h3>
            <p>Happy Families</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Verified Documents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
