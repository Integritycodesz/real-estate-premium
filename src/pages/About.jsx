import React from 'react';
import './PageStyles.css';

const About = () => {
  return (
    <div className="page-wrapper fade-in">
      <div className="container">
        <header className="page-header">
          <h1>About PBD Groups</h1>
          <p>Building trust and premium living spaces in Lucknow for over 8 years.</p>
        </header>
        
        <div className="content-block">
          <p>
            With over 8 years in the industry, PBD Groups has a wealth of knowledge and experience in Lucknow's luxury real estate market. Known for delivering outstanding results, we have earned a reputation synonymous with reliability, honesty and transparency, helping clients buy and sell property with exceptional dedication and expertise.
          </p>
          
          <div className="values-grid">
            <div className="value-item">
              <h3>Documentation Before Dialogue</h3>
              <p>Every project is 100% legally approved by Jila Panchayat and RERA before we ever present it to you. Peace of mind is our standard.</p>
            </div>
            
            <div className="value-item">
              <h3>Transparent Pricing</h3>
              <p>No hidden fees. No sudden price hikes. We believe in building trust through complete financial transparency from day one.</p>
            </div>
            
            <div className="value-item">
              <h3>Prime Locations</h3>
              <p>We selectively develop in high-growth corridors like Sultanpur Road and Kisan Path, ensuring your investment appreciates significantly.</p>
            </div>
          </div>
        </div>

        <section className="about-stats" style={{background: 'var(--bg-secondary)', padding: '80px 40px', borderRadius: '24px', marginBottom: '100px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center'}}>
            <div>
              <h2 style={{fontSize: '3rem', color: 'var(--accent-gold)'}}>500+</h2>
              <p>Families Served</p>
            </div>
            <div>
              <h2 style={{fontSize: '3rem', color: 'var(--accent-gold)'}}>100%</h2>
              <p>Legally Verified</p>
            </div>
            <div>
              <h2 style={{fontSize: '3rem', color: 'var(--accent-gold)'}}>8+</h2>
              <p>Years Experience</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
