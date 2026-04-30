import React from 'react';
import { Building2, Award, Users, CheckCircle2 } from 'lucide-react';
import './DeveloperAbout.css';

const DeveloperAbout = () => {
  return (
    <section className="developer-about-section">
      <div className="container">
        <div className="dev-about-grid">
          <div className="dev-content">
            <span className="pre-title-gold">ABOUT THE DEVELOPER</span>
            <h2 className="section-title-premium">Pawantanay Builders & Developers Pvt. Ltd., Lucknow</h2>
            <p className="dev-description">
              An active real estate developer with a portfolio of 4 structured plotted developments 
              across the Mohanlalganj–Raebareli Road corridor in Lucknow. Projects range from 
              ₹1,600 to ₹2,100/sqft across multiple micro-locations — from expressway-adjacent 
              premium plots to urban-edge civic proximity developments.
            </p>
            <p className="dev-description">
              All projects offer custom plot sizes (800–5,000 sqft), 50% payment on registration, 
              and planned infrastructure with roads, sewer, electricity, and parks.
            </p>
            <div className="dev-stats-row">
              <div className="dev-stat-item">
                <Users className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-val">500+</span>
                  <span className="stat-label">Happy Families</span>
                </div>
              </div>
              <div className="dev-stat-item">
                <CheckCircle2 className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-val">30-60%</span>
                  <span className="stat-label">Sold Inventory</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dev-trust-card">
            <div className="trust-badge-circle">
              <Award size={40} />
            </div>
            <h3>Reliable. Transparent. Timely.</h3>
            <p>Over 30–60% of plots across our active projects have already been sold — reflecting consistent buyer trust and demand in the Mohanlalganj belt.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperAbout;
