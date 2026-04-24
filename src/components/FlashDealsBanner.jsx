import React from 'react';
import { Zap, ArrowRight, Timer } from 'lucide-react';
import './FlashDealsBanner.css';

const FlashDealsBanner = () => {
  const deals = [
    { text: "Save up to ₹2,00,000 on Shivay Residency Plots!", highlight: "₹2,00,000" },
    { text: "Limited Time: 0% Registry Charges on Rajgharana!", highlight: "0% Registry" },
    { text: "New Launch: Hanumant Dham - Early Bird Discount 10%!", highlight: "10% OFF" },
    { text: "Spot Booking Offer: Free Modular Kitchen Voucher!", highlight: "Free Kitchen" }
  ];

  return (
    <div className="flash-deals-banner">
      <div className="banner-marquee">
        <div className="marquee-content">
          {[...deals, ...deals].map((deal, idx) => (
            <div key={idx} className="banner-item">
              <div className="banner-tag">
                <Zap size={14} className="zap-icon" />
                <span>DEAL</span>
              </div>
              <p className="banner-text">
                {deal.text}
              </p>
              <span className="timer-info">
                <Timer size={14} /> Limited time
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="banner-cta-fixed">
        <button 
          onClick={() => window.dispatchEvent(new Event('open-pbd-lead-popup'))} 
          className="banner-cta"
        >
          Claim Now <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default FlashDealsBanner;
