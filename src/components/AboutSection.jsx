import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-content">
            <span className="subtitle">OUR PROMISE TO LUCKNOW</span>
            <h2 className="section-title">
              We Don't Just Sell Plots.<br/>
              <span className="text-gold italic">We Fulfill Your Dream.</span>
            </h2>
            
            <p className="description-text">
              Real estate in Lucknow has long been defined by confusion — buyers lost in paperwork, uncertain about approvals, misled by incomplete information. PBD Group was built to change that.
            </p>
            
            <p className="description-text">
              With 10 years of expertise in this industry, our founder saw one pattern repeat itself: good families were making the most important financial decision of their lives without proper guidance. Every listing we offer is Jila Panchayat or Nagar Panchayat approved. Every conversation is honest.
            </p>
            
            <div className="founder-quote-box">
              <blockquote>
                "You made the right decision trusting us. We make sure you never have reason to doubt it."
              </blockquote>
              <cite>— Managing Director, PBD Group</cite>
            </div>
            
            <Link to="/about" className="btn-story">Our Full Story →</Link>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-number">01</span>
              <h3>Legal Trust</h3>
              <p>Every property is Jila Panchayat or Nagar Panchayat approved. No grey areas. No verbal promises only.</p>
            </div>
            
            <div className="feature-card">
              <span className="feature-number">02</span>
              <h3>Transparent Pricing</h3>
              <p>What you see is what you pay. No hidden charges, no last-minute surprises. Ever.</p>
            </div>
            
            <div className="feature-card">
              <span className="feature-number">03</span>
              <h3>Local Expertise</h3>
              <p>We know every corner of Raebareli Road. From upcoming infrastructure to resale potential, we give you the inside track.</p>
            </div>
            
            <div className="feature-card">
              <span className="feature-number">04</span>
              <h3>Family Partnership</h3>
              <p>We guide. We explain. We stay available. Property purchase is a family decision — we respect that fully.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

