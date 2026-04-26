import React from 'react';
import { Zap, ArrowRight, Timer } from 'lucide-react';
import './FlashDealsBanner.css';

const FlashDealsBanner = () => {
  const deals = [
    { text: "🎁 Limited Time Benefits: Upgrade your lifestyle with exclusive launch offers", highlight: "Limited Time Benefits" },
    { text: "📜 Free Registry: Zero registration cost — direct savings for you", highlight: "Free Registry" },
    { text: "🏡 Free Boundary Wall: Secure your property at no extra cost", highlight: "Free Boundary Wall" },
    { text: "💰 ₹50,000 Instant Discount: Book now and save instantly on your investment", highlight: "Instant Discount" }
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
