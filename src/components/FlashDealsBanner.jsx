import React from 'react';
import { Zap, ArrowRight, Timer } from 'lucide-react';
import './FlashDealsBanner.css';

const FlashDealsBanner = () => {
  const deals = [
    { text: "Akshaya Tritiya Special: Free Registry + ₹51k Gold Coin on Hanumant Dham!", highlight: "Free Registry" },
    { text: "Limited Inventory: Corner Plots available at Shivay Residency!", highlight: "Corner Plots" },
    { text: "New Launch: Shivdhara Residency - Exclusive Phase 1 Pricing!", highlight: "New Launch" },
    { text: "Special Offer for SGPGI Employees: Extra ₹500/sqft Discount at Muraliya Garden!", highlight: "SGPGI Discount" }
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
                {deal.text.split(':').map((part, i) => (
                  i === 0 ? <span key={part} className="offer-title">{part}:</span> : <span key={part} className="offer-detail">{part}</span>
                ))}
              </p>
              <span className="timer-info">
                <Timer size={14} /> Limited time
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashDealsBanner;
