import React from 'react';
import { TrendingUp, Map, Clock, ArrowRight, ShieldCheck, Building2, Landmark, Globe, PieChart, Zap, GraduationCap, HeartPulse, Train, Briefcase } from 'lucide-react';
import WhyInvestSection from '../components/WhyInvestSection';
import Counter from '../components/Counter';
import './WhyInvest.css';

// Importing assets

import raebareliImg from '../assets/raebareli_hub.png';
import growthChartImg from '../assets/growth_chart.png';
import heroBg from '../assets/hero.jpg'; 

const WhyInvest = () => {
  return (
    <div className="why-invest-page fade-in">
      {/* Hero Section */}
      <section className="invest-hero-with-bg" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-container-invest">
          <div className="invest-hero-glass-box">
            <span className="badge">Expert Investment Guide</span>
            <h1 className="hero-title-main">Why Your Next Big Move Should Be <span className="text-gold">Raebareli Road</span></h1>
            <p className="hero-desc-main">Lucknow is growing faster than ever, and at the heart of this expansion is Raebareli Road. It's not just a stretch of asphalt; it's a corridor of opportunity where thousands are securing their future. If you've been waiting for the "right time," this is it.</p>
            <div className="invest-hero-actions">
               <button className="btn-primary btn-large" onClick={() => window.dispatchEvent(new Event('open-pbd-lead-popup'))}>Download Investment Guide</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="invest-stats-bar">
        <div className="container">
          <div className="stats-grid-invest">
            <div className="stat-item-invest">
              <div className="stat-value"><Counter end="91" suffix="%" /></div>
              <div className="stat-label">Average ROI for our early investors</div>
            </div>
            <div className="stat-item-invest highlighted">
              <div className="stat-value"><Counter end="104" /></div>
              <div className="stat-label-large">KM</div>
              <div className="stat-sublabel">The massive Ring Road making every commute effortless</div>
            </div>
            <div className="stat-item-invest">
              <div className="stat-value"><Counter end="15" suffix="%+" /></div>
              <div className="stat-label">Steady yearly growth in land value</div>
            </div>
            <div className="stat-item-invest">
              <div className="stat-value"><Counter end="50" suffix="K+" /></div>
              <div className="stat-label-large">Jobs</div>
              <div className="stat-label">New opportunities arriving at the Defence Corridor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Raebareli Road Section - Main Focus */}
      <section className="corridor-deep-dive section">
        <div className="container">
          <div className="corridor-main-row">
            <div className="corridor-visual-side">
              <img src={raebareliImg} alt="Raebareli Road Development" />
              <div className="visual-badge">The Smart Choice</div>
            </div>
            <div className="corridor-text-side">
              <span className="corridor-tag">Lucknow's Rising Star</span>
              <h2>Raebareli Road — <span className="text-gold">The Future of Modern Lucknow</span></h2>
              <p>While other areas have already peaked, Raebareli Road is in its "sweet spot." It’s becoming the city’s premier hub for health, education, and high-quality living. Investing here isn't just about buying a plot; it's about getting in before the rest of the world catches on.</p>
              
              <div className="data-points-grid">
                <div className="data-point">
                  <Building2 className="text-gold" />
                  <div>
                    <h4>Healthcare Landmark</h4>
                    <p>With SGPGI nearby, this area is a permanent magnet for high-quality residential demand.</p>
                  </div>
                </div>
                <div className="data-point">
                  <Map className="text-gold" />
                  <div>
                    <h4>Seamless Connectivity</h4>
                    <p>The Outer Ring Road and NH-30 mean you're always connected to the rest of UP without the traffic.</p>
                  </div>
                </div>
                <div className="data-point">
                  <GraduationCap className="text-gold" />
                  <div>
                    <h4>Education Hub</h4>
                    <p>Home to upcoming universities and top-tier schools, perfect for growing families.</p>
                  </div>
                </div>
                <div className="data-point">
                  <TrendingUp className="text-gold" />
                  <div>
                    <h4>Real Value</h4>
                    <p>Currently offering the best entry price in Lucknow with the highest potential for growth.</p>
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

      {/* Elite Neighbourhood Section */}
      <section className="elite-neighbourhood section bg-light">
        <div className="container">
          <div className="section-header-centered">
            <span className="badge-gold">THE ELITE CIRCLE</span>
            <h2 className="section-title-large">You Are in <span className="text-gold">Good Company</span></h2>
            <p className="section-intro">Raebareli Road isn't just a development zone; it's where Lucknow's most prestigious developers have established their flagship townships. By investing here, you aren't just buying land—you're joining a high-end ecosystem.</p>
          </div>

          <div className="neighbour-grid">
            <div className="neighbour-card">
              <div className="neighbour-brand">Omaxe Metro City</div>
              <p>A massive hi-tech township defining the new luxury standard of Lucknow. Its presence ensures that the entire corridor maintains high-value appreciation and premium infrastructure.</p>
            </div>
            <div className="neighbour-card">
              <div className="neighbour-brand">DLF Garden City</div>
              <p>One of the most organized townships in North India. Located in the Purseni area, it has brought world-class wide-road planning and elite community living to Raebareli Road.</p>
            </div>
            <div className="neighbour-card">
              <div className="neighbour-brand">Eldeco Udyan & Samriddhi</div>
              <p>Eldeco's established presence with projects like Samriddhi (Villas) proves the long-term liveability and residential demand of this specific corridor.</p>
            </div>
            <div className="neighbour-card">
              <div className="neighbour-brand">SGPGI Institutions</div>
              <p>The proximity to SGPGI and upcoming medical hubs ensures a permanent class of elite residents—doctors, professors, and professionals—securing your rental and resale value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Comparison / Competitive Edge */}
      <section className="strategic-comparison section">
        <div className="container">
          <div className="comparison-flex">
            <div className="comparison-text">
              <h2>The Strategic <span className="text-gold">PBD Advantage</span></h2>
              <p>While big townships offer amenities, they often come with a "Brand Premium" that eats into your immediate ROI. PBD Group offers the same high-growth location with 100% legal clarity at a price point that leaves room for your wealth to grow.</p>
              
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Elite Townships</th>
                      <th className="highlight-col">PBD Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Location Advantage</td>
                      <td>Raebareli Road Corridor</td>
                      <td className="highlight-col">Prime Raebareli Road</td>
                    </tr>
                    <tr>
                      <td>Entry Price</td>
                      <td>Premium (₹4000+ /sqft)</td>
                      <td className="highlight-col">Optimal (High Growth)</td>
                    </tr>
                    <tr>
                      <td>Legal Approval</td>
                      <td>RERA/LDA</td>
                      <td className="highlight-col">Jila Panchayat / Verified</td>
                    </tr>
                    <tr>
                      <td>Immediate Possession</td>
                      <td>Often 2-3 Years</td>
                      <td className="highlight-col">Ready for Registry</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="comparison-visual">
               <div className="roi-insight-box">
                  <TrendingUp size={40} className="text-gold" />
                  <h4>Insight for Smart Investors</h4>
                  <p>In the last 24 months, land prices in unorganized sectors grew by 12%, while **legally cleared plots near Omaxe/DLF corridors grew by 28-35%**. We focus exclusively on the latter.</p>
               </div>
            </div>
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
