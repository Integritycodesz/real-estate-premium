import React from 'react';
import FlashDealsBanner from '../components/FlashDealsBanner';
import './PageStyles.css';

const About = () => {
  return (
    <div className="page-wrapper fade-in">
      <header className="page-hero-header" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
      }}>
        <div className="container">
          <div className="hero-grid-about">
            <div className="hero-text-side">
              <span className="badge-gold">OUR STORY & LEGACY</span>
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
        </div>
      </header>

      <FlashDealsBanner />

      <div className="container section-padding">
        {/* Founder Story */}
        <div className="story-section">
          <div className="story-content-grid">
            <div className="story-text">
              <h2 className="section-title-medium">Founder's Story</h2>
              <h3 className="section-subtitle-gold">From a Simple Belief to a Living Legacy: The Narendra Yadav Story</h3>
              
              <p>Narendra Yadav didn't set out to build a real estate company. He set out to fix something broken.</p>
              <p>Growing up in Lucknow, Narendra watched families pour their life savings into land that came with more confusion than clarity. He saw the stress on their faces, the sleepless nights, and the quiet heartbreak of a dream gone sideways.</p>
              <p>He knew the land market didn't have to work this way.</p>
              <p>With deep conviction, he founded PBD Group. Not to become the biggest name in real estate, but to become the most trusted one in Lucknow.</p>

              <blockquote className="premium-quote">
                "If a family is going to trust me with the most important investment of their life, the least I can do is make sure every single document, every boundary, every approval — is exactly as I said it would be."
              </blockquote>

              <p>What keeps Narendra going today isn't business metrics. It's the families already living in Rajgharana and 2 more projects — the delivered projects where real people have built real lives on land PBD Group promised them.</p>

              <div className="founder-card">
                <div className="card-item"><span className="label">Role:</span> Founder & CEO</div>
                <div className="card-item"><span className="label">Founded:</span> 2014</div>
                <div className="card-item"><span className="label">Vision:</span> Secure land ownership for every middle-class family.</div>
              </div>
            </div>
            <div className="story-image">
              <div className="image-placeholder-frame">
                <span className="placeholder-text">[Image of Narendra Yadav]</span>
                <div className="frame-decoration"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className="company-details-section section-padding">
          <h2 className="section-title-medium">Who We Are</h2>
          <div className="company-grid">
            <div className="company-text">
              <p className="large-lead">Pawantanay Builders & Developers Pvt. Ltd. is a Lucknow-based company with a focused mission: create legally sound, well-located, and genuinely affordable plotted colonies.</p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="check-icon">✓</div>
                  <p><strong>Complete legal documentation</strong> — verified and ready upfront.</p>
                </div>
                <div className="benefit-item">
                  <div className="check-icon">✓</div>
                  <p><strong>Transparent pricing</strong> — zero hidden charges, ever.</p>
                </div>
                <div className="benefit-item">
                  <div className="check-icon">✓</div>
                  <p><strong>Flexible EMI plans</strong> — designed for real working families.</p>
                </div>
                <div className="benefit-item">
                  <div className="check-icon">✓</div>
                  <p><strong>Personal guidance</strong> — from first call to final registry.</p>
                </div>
              </div>
            </div>

            <div className="difference-box">
              <h3>What makes us different?</h3>
              <p>We've already delivered. Rajgharana and 2 more projects are completely finished — families are living there right now. Verifiable proof of our promises.</p>
              <div className="highlight-tag">
                Trust a team that has already delivered.
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-section section-padding">
          <h2 className="section-title-medium centered">Our Journey</h2>
          <div className="timeline-container">
            {[
              { year: "2014", event: "PBD Group founded with a focus on trust and documentation." },
              { year: "2020", event: "Launched Rajgharana on Raebareli Road. Fully sold and delivered." },
              { year: "2022", event: "Delivered Gokul Vihar, our second thriving residential community." },
              { year: "2023-24", event: "Launched Shivay Residency and 3 more projects on the growth corridor." },
              { year: "Today", event: "6 active projects, 2 fully delivered. Built on a reputation of honesty." }
            ].map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <p className="timeline-event">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Marquee */}
        <div className="values-section section-padding">
          <h2 className="section-title-medium centered">Our Values</h2>
          <div className="values-marquee-container">
            <div className="values-marquee-track">
              {[1, 2].map(set => (
                <div key={set} className="marquee-group">
                  <div className="value-marquee-item">
                    <h4>Honesty First</h4>
                    <p>No fine print. Just plain language and verified facts.</p>
                  </div>
                  <div className="value-marquee-item">
                    <h4>Legal Clarity</h4>
                    <p>Documentation so clear any lawyer would approve.</p>
                  </div>
                  <div className="value-marquee-item">
                    <h4>No Pressure</h4>
                    <p>Your timeline, your decision. We provide the facts.</p>
                  </div>
                  <div className="value-marquee-item">
                    <h4>Long-term Trust</h4>
                    <p>Our relationship starts at delivery, it doesn't end there.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
