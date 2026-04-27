import React from 'react';
import { Link } from 'react-router-dom';
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
            Verified Land. Real Delivery. <br />
            <span className="text-gold">Zero Risk.</span>
          </h1>

          <p className="hero-description reveal-delay-3">
            Invest in government-verified plots across Lucknow’s primary growth corridors: Raebareli Road.
            Join 500+ families already living in our fully delivered estates.
          </p>

          <div className="banner-offers reveal-delay-3" style={{ marginBottom: '40px' }}>
            <div className="offer-item">
              <span className="offer-icon">🎁</span>
              <span className="offer-label">Limited Time Benefits:</span>
              <span className="offer-value">Free Registry | Free Boundary Wall | ₹50,000 Instant Discount</span>
            </div>
          </div>

          <div className="hero-actions reveal-delay-4">
            <Link
              to="/contact"
              className="hero-btn-primary"
            >
              Check Plot Availability
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/917054550296?text=Hi, I am interested in your plots on Raebareli Road. Please share details."
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
          <div className="stat-card dark highlight">
            <div className="pulse-dot"></div>
            <h3>5</h3>
            <p>Ongoing Projects</p>
          </div>
          <div className="stat-card dark">
            <h3>500+</h3>
            <p>Families Already Living</p>
          </div>

          <div className="stat-card dark">
            <h3>10+</h3>
            <p>Years of Legacy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
