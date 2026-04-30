import React, { useState } from 'react';
import { Calculator, MessageCircle } from 'lucide-react';
import './PlotInvestmentCalculator.css';

const PlotInvestmentCalculator = ({ initialRate = 1900, commercialRate, projectTitle }) => {
  const [plotType, setPlotType] = useState('residential');
  const [size, setSize] = useState(1000);
  
  const hasCommercialRate = !!commercialRate;
  const currentCommercialRate = commercialRate;
  const rate = plotType === 'residential' ? initialRate : currentCommercialRate;
  
  const totalValue = size * rate;
  const bookingAmount = totalValue * 0.1;
  const loanAmount = totalValue * 0.7;
  const fiveYearValue = totalValue * 1.76; // Assuming ~12% CAGR

  const waNumber = "919918231010";
  const waLink = `https://wa.me/${waNumber}?text=I'm interested in Commercial Plots at ${projectTitle || 'your project'}. Please share the current pricing and availability.`;

  return (
    <section className="calculator-section">
      <div className="container">
        <div className="calculator-outer-header">
          <span className="pre-title-center">INVESTMENT OPPORTUNITY</span>
          <h2 className="section-title-center">Pricing & Plans</h2>
          <p className="section-subtitle-center">Limited inventory — early phase pricing currently active.</p>
          <button className="btn-best-price">Get Best Price & Payment Plans</button>
        </div>

        <div className="calculator-main-row">
          {/* LEFT SIDEBAR: PRICE CARDS */}
          <div className="calculator-pricing-sidebar">
            <div className="price-info-card light">
              <span className="card-label">Residential Plots</span>
              <div className="card-price">
                <span className="currency">₹</span>
                {initialRate.toLocaleString()}
                <span className="unit">/sq.ft</span>
              </div>
              <div className="divider"></div>
              <p className="card-desc">Perfect for building your family home in a secure, structured environment.</p>
            </div>

            <div className="price-info-card dark">
              <span className="card-label">Commercial Plots</span>
              {hasCommercialRate ? (
                <div className="card-price">
                  <span className="currency">₹</span>
                  {currentCommercialRate.toLocaleString()}
                  <span className="unit">/sq.ft</span>
                </div>
              ) : (
                <div className="card-price contact-mode">
                  <span className="contact-label">Contact for Pricing</span>
                </div>
              )}
              <div className="divider"></div>
              <p className="card-desc">High-visibility plots for retail and business ventures.</p>
            </div>

            <div className="price-info-card info">
              <p><strong>Flexible payment plans available.</strong></p>
              <span>Speak to our advisor for custom structures.</span>
            </div>
          </div>

          {/* RIGHT SIDE: THE CALCULATOR */}
          <div className="calculator-card-main">
            <div className="calculator-header-block">
              <div className="calc-title-flex">
                <Calculator className="calc-icon-top" />
                <h3>Plot Investment Calculator</h3>
              </div>
              <p>Estimate your property value and financial requirements.</p>
            </div>

          <div className="calculator-body-grid">
            <div className="calc-inputs-side">
              <div className="input-group">
                <label>1. Select Plot Type</label>
                <div className="type-selector">
                  <button 
                    className={`type-btn ${plotType === 'residential' ? 'active' : ''}`}
                    onClick={() => setPlotType('residential')}
                  >
                    <div className="type-radio"></div>
                    <div className="type-info">
                      <span className="type-name">Residential</span>
                      <span className="type-rate">₹{initialRate}/sq.ft</span>
                    </div>
                  </button>
                  <button 
                    className={`type-btn ${plotType === 'commercial' ? 'active' : ''}`}
                    onClick={() => setPlotType('commercial')}
                  >
                    <div className="type-radio"></div>
                    <div className="type-info">
                      <span className="type-name">Commercial</span>
                      <span className="type-rate">{hasCommercialRate ? `₹${currentCommercialRate}/sq.ft` : 'Contact for Price'}</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="input-group">
                <div className="label-flex">
                  <label>2. Plot Size (sq.ft)</label>
                  <div className="size-display">{size} <span>sq.ft</span></div>
                </div>
                <input 
                  type="range" 
                  min="800" 
                  max="5000" 
                  step="100" 
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="size-slider"
                />
                <div className="slider-labels">
                  <span>800</span>
                  <span>5000</span>
                </div>
              </div>
            </div>

            <div className="calc-results-side">
              {(plotType === 'residential' || hasCommercialRate) ? (
                <>
                  <div className="result-main-box">
                    <span className="result-label">Total Plot Value</span>
                    <div className="result-value-big">
                      ₹{(totalValue / 100000).toFixed(2)} <span>Lakh</span>
                    </div>
                    <span className="result-sub">@ ₹{rate} per sq.ft</span>
                  </div>

                  <div className="result-breakdown-grid">
                    <div className="breakdown-item">
                      <span className="breakdown-label">Estimated Booking (10%)</span>
                      <span className="breakdown-val">₹{(bookingAmount / 100000).toFixed(2)} Lakh</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Suggested Loan (70%)</span>
                      <span className="breakdown-val">₹{(loanAmount / 100000).toFixed(2)} Lakh</span>
                    </div>
                  </div>

                  <div className="wealth-creation-box">
                    <span className="wealth-tag">WEALTH CREATION</span>
                    <span className="wealth-label">Projected value in 5 years</span>
                    <div className="wealth-val">₹{(fiveYearValue / 100000).toFixed(2)} Lakh</div>
                    <p className="wealth-disclaimer">
                      *Indicative projection based on assumed 12% annual appreciation. Actual returns may vary.
                    </p>
                  </div>
                </>
              ) : (
                <div className="calculator-contact-fallback">
                  <div className="fallback-icon-box">
                    <MessageCircle size={40} className="text-gold" />
                  </div>
                  <h4>Custom Commercial Quote</h4>
                  <p>Commercial plot prices vary based on road-facing position and visibility. Contact our team for the latest inventory and exact pricing.</p>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-wa-calculator-fallback">
                    Get Commercial Pricing
                  </a>
                </div>
              )}

              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-wa-calculator">
                <MessageCircle size={20} />
                <span>Talk to Advisor on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default PlotInvestmentCalculator;
