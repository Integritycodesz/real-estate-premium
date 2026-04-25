import React from 'react';
import { TrendingUp, Map, Clock, ArrowRight, ShieldCheck, Building2, Landmark, Globe, PieChart, Zap, GraduationCap, HeartPulse, Train, Briefcase } from 'lucide-react';
import WhyInvestSection from '../components/WhyInvestSection';
import Counter from '../components/Counter';
import './WhyInvest.css';

// Importing assets
import sultanpurImg from '../assets/sultanpur_infra.png';
import raebareliImg from '../assets/raebareli_hub.png';
import growthChartImg from '../assets/growth_chart.png';
import heroBg from '../assets/hero.jpg'; 

const WhyInvest = () => {
  return (
    <div className="why-invest-page fade-in">
      {/* Hero Section */}
      <section className="invest-hero-with-bg" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content-invest">
          <span className="badge">Data-Driven Investment Guide</span>
          <h1>Why Invest in <span className="text-gold">Lucknow</span> <br/> Real Estate?</h1>
          <p>Sultanpur Road and Raebareli Road are not just locations — they are Lucknow's two most active infrastructure and investment zones. The window to buy at current prices is closing fast.</p>
          <div className="hero-scroll-indicator">
            <span>Scroll to explore data</span>
            <div className="mouse-icon"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="invest-stats-bar">
        <div className="container">
          <div className="stats-grid-invest">
            <div className="stat-item-invest">
              <div className="stat-value"><Counter end="91" suffix="%" /></div>
              <div className="stat-label">ROI seen by early buyers in last 3 years</div>
            </div>
            <div className="stat-item-invest highlighted">
              <div className="stat-value"><Counter end="104" /></div>
              <div className="stat-label-large">KM</div>
              <div className="stat-sublabel">Outer Ring Road connecting all major highways</div>
            </div>
            <div className="stat-item-invest">
              <div className="stat-value"><Counter end="15" suffix="%+" /></div>
              <div className="stat-label">Annual land appreciation in growth corridors</div>
            </div>
            <div className="stat-item-invest">
              <div className="stat-value"><Counter end="50" suffix="K+" /></div>
              <div className="stat-label-large">Jobs</div>
              <div className="stat-label">Created by the UP Defence Corridor node</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sultanpur Road Section */}
      <section className="corridor-deep-dive section">
        <div className="container">
          <div className="corridor-main-row">
            <div className="corridor-visual-side">
              <img src={sultanpurImg} alt="Sultanpur Road" />
              <div className="visual-badge">The Strategic Spine</div>
            </div>
            <div className="corridor-text-side">
              <span className="corridor-tag">Growth Corridor 01</span>
              <h2>Sultanpur Road — <span className="text-gold">Lucknow's Gateway</span></h2>
              <p>Sultanpur Road is the spine along which the city's eastward expansion is actively occurring. It connects the city to the Purvanchal Expressway and serves as the primary growth axis.</p>
              
              <div className="data-points-grid">
                <div className="data-point">
                  <Map className="text-gold" />
                  <div>
                    <h4>Outer Ring Road</h4>
                    <p>Direct intersection with the 104-km ORR, dramatically reducing commute times.</p>
                  </div>
                </div>
                <div className="data-point">
                  <Zap className="text-gold" />
                  <div>
                    <h4>Purvanchal Expressway</h4>
                    <p>Immediate access for pan-UP connectivity, a key driver for business growth.</p>
                  </div>
                </div>
                <div className="data-point">
                  <GraduationCap className="text-gold" />
                  <div>
                    <h4>Education Hub</h4>
                    <p>Proximity to Engineering colleges and a growing cluster of top CBSE schools.</p>
                  </div>
                </div>
                <div className="data-point">
                  <HeartPulse className="text-gold" />
                  <div>
                    <h4>Healthcare Infra</h4>
                    <p>Home to new multi-speciality hospitals driving residential demand.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Raebareli Road Section */}
      <section className="corridor-deep-dive section bg-light">
        <div className="container">
          <div className="corridor-main-row reverse">
            <div className="corridor-visual-side">
              <img src={raebareliImg} alt="Raebareli Road" />
              <div className="visual-badge">The Emerging Powerhouse</div>
            </div>
            <div className="corridor-text-side">
              <span className="corridor-tag">Growth Corridor 02</span>
              <h2>Raebareli Road — <span className="text-gold">Early-Stage Alpha</span></h2>
              <p>Raebareli Road represents an opportunity similar to what Sultanpur experienced five years ago. It is evolving into Lucknow's premier health and knowledge city.</p>
              
              <div className="data-points-grid">
                <div className="data-point">
                  <Train className="text-gold" />
                  <div>
                    <h4>Rail & NH-30 Access</h4>
                    <p>Dual connectivity via national highway and key rail junctions.</p>
                  </div>
                </div>
                <div className="data-point">
                  <Briefcase className="text-gold" />
                  <div>
                    <h4>Industrial Clusters</h4>
                    <p>Established MSME and industrial units creating a stable employment base.</p>
                  </div>
                </div>
                <div className="data-point">
                  <Building2 className="text-gold" />
                  <div>
                    <h4>Medical Powerhouse</h4>
                    <p>Presence of SGPGI and RMLAU ensures sustained high rental demand.</p>
                  </div>
                </div>
                <div className="data-point">
                  <TrendingUp className="text-gold" />
                  <div>
                    <h4>Below-Market Entry</h4>
                    <p>Currently offers the most attractive price-to-appreciation ratio in Lucknow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section - The Math */}
      <section className="why-now-section section bg-dark">
        <div className="container">
          <div className="math-wrapper">
            <div className="math-content">
              <h2>Why the Right Time <br/> <span className="text-gold">Is Right Now</span></h2>
              <p>Historical benchmarks show that land prices near confirmed infrastructure projects rise 40–80% within 3–5 years. The pattern is consistent.</p>
              
              <div className="math-cards">
                <div className="math-card">
                  <div className="card-icon"><TrendingUp /></div>
                  <h4>Early Buyer Advantage</h4>
                  <p>In 2021, buyers invested **₹11L** in Sunrise projects. Those same plots trade at **₹21L+** today. That is **91% ROI** in 3 years.</p>
                </div>
                <div className="math-card">
                  <div className="card-icon"><PieChart /></div>
                  <h4>The ROI Math</h4>
                  <p>A ₹12L loan at 8.5% = ~₹14,866/month EMI. Meanwhile, the plot is appreciating at **15%+ annually**. The math favors buying now over waiting.</p>
                </div>
              </div>
            </div>
            <div className="math-visual">
              <img src={growthChartImg} alt="Growth Projection" />
            </div>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section className="legal-section section">
        <div className="container">
          <div className="legal-box glass-panel">
            <ShieldCheck size={60} className="text-gold" />
            <h2>Legal Security = <span className="text-gold">Compounding Value</span></h2>
            <p>
              Jila and Nagar Panchayat approved plots are eligible for regularisation, formal construction, and bank-backed resale. 
              **Legal clarity is the greatest multiplier of land value.** We ensure every plot in our portfolio is 100% verified.
            </p>
          </div>
        </div>
      </section>

      {/* Reusing existing slider */}
      <WhyInvestSection />

      {/* Contact CTA */}
      <section className="invest-cta section">
        <div className="container">
          <div className="invest-cta-box-fixed">
            <div className="cta-glow"></div>
            <h2>Ready to Secure Your Legacy?</h2>
            <p>Schedule a free site visit today. Our experts will show you exactly which plots offer the best combination of legal clarity and appreciation potential.</p>
            <button className="btn btn-gold" onClick={() => window.dispatchEvent(new Event('open-pbd-lead-popup'))}>
              Book a Free Site Visit <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyInvest;
