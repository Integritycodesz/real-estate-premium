import React, { useEffect, useRef } from 'react';
import FlashDealsBanner from '../components/FlashDealsBanner';
import './About.css';
import './PageStyles.css';

// Import images
import AboutHeroImg from '../assets/about/about_hero.png';
import CeoImg from '../assets/about/ceo.png';
import DirectorImg from '../assets/about/director.png';
import TrustCtaImg from '../assets/about/trust_cta.png';

const About = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      revealRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const timelineData = [
    { year: "2014", title: "The Foundation", event: "PBD Group founded by Narendra Yadav with a focus on trust and transparent documentation." },
    { year: "2020", title: "First Milestone", event: "Launched Rajgharana on Raebareli Road. Fully sold and delivered to happy families." },
    { year: "2022", title: "Gokul Vihar Delivery", event: "Completed our second residential community, solidifying our reputation for delivery." },
    { year: "2023-24", title: "Expansion Era", event: "Launched Shivay Residency and 3 more projects along the high-growth corridor." },
    { year: "Today", title: "The Future", event: "6 active projects, 2 fully delivered communities. Built on 10 years of honesty." }
  ];

  return (
    <div className="about-page fade-in">
      {/* Dynamic Hero */}
      <section 
        className="about-hero" 
        style={{ 
          backgroundImage: `url(${AboutHeroImg})` 
        }}
      >
        <div className="container">
          <div className="hero-content-wrapper">
            <span className="hero-subtitle">Our Story & Legacy</span>
            <h1 className="hero-title-large">
              Built on Promises.<br />
              <span className="text-gold">Lived by Families.</span>
            </h1>
            
            <div className="hero-glass-box">
              <p className="glass-lead">
                In Lucknow's crowded real estate market, promises are cheap. Documents, approvals, and honest handshakes — those are rare.
              </p>
              <p className="glass-body">
                With over 10 years of expertise, PBD Group has chosen the harder path: transparency over tactics, verified paperwork over verbal assurances, and long-term trust over short-term sales.
              </p>
              <div className="glass-stats">
                <div className="glass-stat">
                  <div className="stat-val">500+</div>
                  <div className="stat-lab">Happy Families</div>
                </div>
                <div className="stat-divider"></div>
                <div className="glass-stat">
                  <div className="stat-val">2+</div>
                  <div className="stat-lab">Delivered Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FlashDealsBanner />

      {/* Legacy / Founder Story Section */}
      <section className="legacy-section section-padding">
        <div className="container">
          <div className="legacy-grid">
            <div className="legacy-image-container reveal-on-scroll" ref={addToRefs}>
              <div className="legacy-image-frame">
                <img src={CeoImg} alt="Narendra Yadav" />
              </div>
              <div className="frame-overlay-gold"></div>
            </div>
            
            <div className="legacy-content reveal-on-scroll" ref={addToRefs}>
              <h2 className="section-title-medium">The Founder's Legacy</h2>
              <h3 className="section-subtitle-gold">A Simple Belief: The Narendra Yadav Story</h3>
              
              <p>Narendra Yadav didn't set out to build a real estate company. He set out to fix something broken. Watching families pour their life savings into land that came with confusion rather than clarity, he knew there was a better way.</p>
              <p>With deep conviction, he founded PBD Group. Not to become the biggest name in real estate, but to become the most trusted one in Lucknow.</p>
              
              <blockquote className="premium-quote">
                "If a family trusts me with their life's investment, the least I can do is make sure every document is exactly as promised."
              </blockquote>

              <p>What keeps Narendra going today isn't business metrics. It's the families already living in Rajgharana and Gokul Vihar — real people building real lives on land we promised them.</p>
              
              <div className="founder-signature">
                <div className="signature-name">Narendra Yadav</div>
                <div className="signature-title">Founder & CEO, PBD Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="director-section section-padding bg-dark-blue">
        <div className="container">
          <div className="legacy-grid reversed">
            <div className="legacy-content reveal-on-scroll" ref={addToRefs}>
              <h2 className="section-title-medium" style={{ color: '#fff' }}>Strategic Leadership</h2>
              <h3 className="section-subtitle-gold">Driving Innovation: The Sonia Yadav Vision</h3>
              
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>As Managing Director, Sonia Yadav brings a modern, data-driven approach to Lucknow's traditional land market. Her focus is on integrating technology with transparency, ensuring that every project is not just a piece of land, but a well-planned community.</p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>She leads our project planning and customer experience teams, dedicated to the belief that buying a home should be as joyful as living in one.</p>
              
              <blockquote className="premium-quote dark">
                "Our goal is to redefine luxury in plotted developments by bringing urban planning standards to every project we touch."
              </blockquote>

              <div className="founder-signature">
                <div className="signature-name">Sonia Yadav</div>
                <div className="signature-title">Managing Director, PBD Group</div>
              </div>
            </div>

            <div className="legacy-image-container reveal-on-scroll" ref={addToRefs}>
              <div className="legacy-image-frame">
                <img src={DirectorImg} alt="Sonia Yadav" />
              </div>
              <div className="frame-overlay-gold"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Seal Section */}
      <section className="trust-seal-section reveal-on-scroll" ref={addToRefs}>
        <div className="container">
          <h2 className="section-title-medium centered" style={{ color: '#fff' }}>The PBD Seal of Trust</h2>
          <p className="centered" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 40px' }}>
            We don't just sell plots; we deliver peace of mind. Every project goes through a rigorous legal and structural verification process.
          </p>
          
          <div className="seal-grid">
            <div className="seal-item">
              <span className="seal-icon">⚖️</span>
              <h4>100% Legal</h4>
              <p>Every document verified and ready for registry upfront.</p>
            </div>
            <div className="seal-item">
              <span className="seal-icon">💎</span>
              <h4>Zero Hidden Costs</h4>
              <p>What you see is what you pay. No unpleasant surprises.</p>
            </div>
            <div className="seal-item">
              <span className="seal-icon">🏗️</span>
              <h4>Already Delivered</h4>
              <p>Visit our finished projects to see our quality for yourself.</p>
            </div>
            <div className="seal-item">
              <span className="seal-icon">🤝</span>
              <h4>Lifetime Relationship</h4>
              <p>Our commitment to you doesn't end at the sale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title-medium centered">Our Journey</h2>
          <div className="journey-timeline">
            {timelineData.map((item, idx) => (
              <div key={idx} className="journey-item reveal-on-scroll" ref={addToRefs}>
                <div className="journey-marker"></div>
                <div className="journey-card">
                  <span className="journey-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-light-gold">
        <div className="container">
          <div className="values-grid">
            <div className="values-header reveal-on-scroll" ref={addToRefs}>
              <h2 className="section-title-medium">Built on Core Values</h2>
              <p className="large-lead">Our philosophy is simple: Put people first, and the business will follow. This belief guides every decision we make at PBD Group.</p>
            </div>
            
            <div className="values-display reveal-on-scroll" ref={addToRefs}>
              <div className="value-card-premium">
                <div className="value-icon">🛡️</div>
                <h3>Protection</h3>
                <p>Protecting your investment with foolproof legal documentation.</p>
              </div>
              <div className="value-card-premium">
                <div className="value-icon">🌟</div>
                <h3>Excellence</h3>
                <p>Ensuring every project meets the highest standards of development.</p>
              </div>
              <div className="value-card-premium">
                <div className="value-icon">🙌</div>
                <h3>Integrity</h3>
                <p>Honest communication and transparency in every transaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Image Section */}
      <section className="section-padding">
        <div className="container">
          <div className="final-legacy-box reveal-on-scroll" ref={addToRefs} 
               style={{ 
                 backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${TrustCtaImg})` 
               }}>
            <div className="final-legacy-content">
              <h2>Join the 500+ Families</h2>
              <p>Start your own legacy on land that is secure, verified, and promised.</p>
              <button className="btn-gold btn-large">Book a Site Visit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

