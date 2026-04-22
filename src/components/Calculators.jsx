import React, { useState, useEffect } from 'react';
import { TrendingUp, FileText, Calculator } from 'lucide-react';
import './Calculators.css';

const formatCurrency = (value) => {
  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0
  }).format(value);
  return (
    <>
      <span className="currency-symbol">₹</span>
      {formatted}
    </>
  );
};


const Calculators = () => {
  // --- ROI Calculator State ---
  const [initialInvestment, setInitialInvestment] = useState(1799000); 
  const [annualGrowth, setAnnualGrowth] = useState(15); 
  const [holdingPeriod, setHoldingPeriod] = useState(5); 
  const [projectedValue, setProjectedValue] = useState(0);

  useEffect(() => {
    const p = initialInvestment;
    const r = annualGrowth / 100;
    const t = holdingPeriod;
    const fv = p * Math.pow(1 + r, t);
    setProjectedValue(fv);
  }, [initialInvestment, annualGrowth, holdingPeriod]);

  // --- Stamp Duty Calculator State ---
  const [propertyValue, setPropertyValue] = useState(1799000);
  const [buyerGender, setBuyerGender] = useState('Male (7% stamp duty)');
  const [stampDutyCost, setStampDutyCost] = useState(0);
  const [registrationFee, setRegistrationFee] = useState(0);
  const [totalRegistrationCost, setTotalRegistrationCost] = useState(0);

  useEffect(() => {
    let dutyPercentage = 0.07;
    if (buyerGender.includes('Female')) dutyPercentage = 0.06;
    else if (buyerGender.includes('Joint')) dutyPercentage = 0.065;

    const duty = propertyValue * dutyPercentage;
    const regFee = propertyValue * 0.01;
    setStampDutyCost(duty);
    setRegistrationFee(regFee);
    setTotalRegistrationCost(duty + regFee);
  }, [propertyValue, buyerGender]);

  // --- EMI Calculator State ---
  const [loanAmount, setLoanAmount] = useState(1500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(15);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue);
  }, [loanAmount, interestRate, tenure]);

  const getSliderBackgroundSize = (value, min, max) => {
    return { backgroundSize: `${((value - min) * 100) / (max - min)}% 100%` };
  };

  return (
    <section className="calculators-section" id="calculators">
      <div className="container">
        <div className="section-header text-center">
          <h2>Investment <span className="text-gold">Planners</span></h2>
          <p className="section-desc">Plan your future with our precise financial calculators tailored for real estate investment in Lucknow.</p>
        </div>

        <div className="calculators-grid">
          {/* ROI Projection Calculator */}
          <div className="calculator-card">
            <div className="calc-header">
              <div className="calc-icon-wrapper">
                <TrendingUp size={24} className="calc-icon" />
              </div>
              <div>
                <h3>ROI Projection</h3>
                <p>Project your future property value</p>
              </div>
            </div>
            <div className="calc-body">
              <div className="input-group">
                <div className="input-header">
                  <label>Initial Investment</label>
                  <span className="input-value">{formatCurrency(initialInvestment)}</span>
                </div>
                <input 
                  type="range" min="500000" max="50000000" step="50000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="custom-range"
                  style={getSliderBackgroundSize(initialInvestment, 500000, 50000000)}
                />
              </div>
              <div className="input-group">
                <div className="input-header">
                  <label>Annual Growth (%)</label>
                  <span className="input-value">{annualGrowth}%</span>
                </div>
                <input 
                  type="range" min="5" max="30" step="1"
                  value={annualGrowth}
                  onChange={(e) => setAnnualGrowth(Number(e.target.value))}
                  className="custom-range"
                  style={getSliderBackgroundSize(annualGrowth, 5, 30)}
                />
              </div>
              <div className="input-group">
                <div className="input-header">
                  <label>Holding Period (Years)</label>
                  <span className="input-value">{holdingPeriod}</span>
                </div>
                <input 
                  type="range" min="1" max="20" step="1"
                  value={holdingPeriod}
                  onChange={(e) => setHoldingPeriod(Number(e.target.value))}
                  className="custom-range"
                  style={getSliderBackgroundSize(holdingPeriod, 1, 20)}
                />
              </div>
            </div>
            <div className="calc-result-box">
              <span className="result-label">PROJECTED VALUE</span>
              <div className="result-value">{formatCurrency(projectedValue)}</div>
            </div>
          </div>

          {/* EMI Calculator */}
          <div className="calculator-card">
            <div className="calc-header">
              <div className="calc-icon-wrapper">
                <Calculator size={24} className="calc-icon" />
              </div>
              <div>
                <h3>Home Loan EMI</h3>
                <p>Calculate your monthly outgo</p>
              </div>
            </div>
            <div className="calc-body">
              <div className="input-group">
                <div className="input-header">
                  <label>Loan Amount</label>
                  <span className="input-value">{formatCurrency(loanAmount)}</span>
                </div>
                <input 
                  type="range" min="100000" max="20000000" step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="custom-range"
                  style={getSliderBackgroundSize(loanAmount, 100000, 20000000)}
                />
              </div>
              <div className="input-group">
                <div className="input-header">
                  <label>Interest Rate (%)</label>
                  <span className="input-value">{interestRate}%</span>
                </div>
                <input 
                  type="range" min="6" max="15" step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="custom-range"
                  style={getSliderBackgroundSize(interestRate, 6, 15)}
                />
              </div>
              <div className="input-group">
                <div className="input-header">
                  <label>Tenure (Years)</label>
                  <span className="input-value">{tenure}</span>
                </div>
                <input 
                  type="range" min="1" max="30" step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="custom-range"
                  style={getSliderBackgroundSize(tenure, 1, 30)}
                />
              </div>
            </div>
            <div className="calc-result-box">
              <span className="result-label">MONTHLY EMI</span>
              <div className="result-value">{formatCurrency(emi)}</div>
            </div>
          </div>

          {/* Stamp Duty Calculator */}
          <div className="calculator-card">
            <div className="calc-header">
              <div className="calc-icon-wrapper">
                <FileText size={24} className="calc-icon" />
              </div>
              <div>
                <h3>Registration Cost</h3>
                <p>Estimate costs in Uttar Pradesh</p>
              </div>
            </div>
            <div className="calc-body">
              <div className="input-group">
                <div className="input-header">
                  <label>Property Value</label>
                  <span className="input-value">{formatCurrency(propertyValue)}</span>
                </div>
                <input 
                  type="range" min="500000" max="50000000" step="50000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="custom-range"
                  style={getSliderBackgroundSize(propertyValue, 500000, 50000000)}
                />
              </div>
              <div className="input-group">
                <div className="input-header">
                  <label>Buyer Gender</label>
                </div>
                <select 
                  value={buyerGender} 
                  onChange={(e) => setBuyerGender(e.target.value)}
                  className="custom-select"
                >
                  <option value="Male (7%)">Male (7% Stamp Duty)</option>
                  <option value="Female (6%)">Female (6% Stamp Duty)</option>
                  <option value="Joint (6.5%)">Joint M+F (6.5% Stamp Duty)</option>
                </select>
              </div>
            </div>
            <div className="calc-result-box">
              <span className="result-label">TOTAL COST</span>
              <div className="result-value">{formatCurrency(totalRegistrationCost)}</div>
            </div>
            <div className="calc-breakdown">
              <div className="breakdown-item">
                <span>Stamp Duty</span>
                <span>{formatCurrency(stampDutyCost)}</span>
              </div>
              <div className="breakdown-item">
                <span>Registration (1%)</span>
                <span>{formatCurrency(registrationFee)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default Calculators;

