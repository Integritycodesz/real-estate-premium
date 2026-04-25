import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './WhyInvestSection.css';

const InvestCard = ({ title, desc, icon }) => {
  return (
    <div className="invest-card glass-panel">
      <div className="invest-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const WhyInvestSection = () => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const reasons = [
    { title: "Outer Ring Road", desc: "The 104 km lifeline making every corner of the city feel like it's just minutes away.", icon: "🛣️" },
    { title: "Raebareli Corridor", desc: "Plots along this stretch have seen incredible value jumps as the city expands south.", icon: "📈" },
    { title: "UP Defence Corridor", desc: "A massive initiative bringing 50,000+ jobs and a new wave of families to the area.", icon: "🏗️" },
    { title: "Yearly Growth", desc: "Land values here are growing far faster than traditional savings, building real wealth.", icon: "💰" },
    { title: "Healthcare Hub", desc: "Proximity to world-class hospitals like SGPGI keeps demand for homes high year-round.", icon: "🏥" },
    { title: "The Best Time", desc: "The biggest gains go to those who see the vision early. That window is still open for you.", icon: "⏳" },
    { title: "Airport Access", desc: "With terminal upgrades, Lucknow is now a global gateway, boosting all nearby property.", icon: "✈️" },
    { title: "IT & Tech Parks", desc: "Planned tech clusters nearby are attracting the bright minds of tomorrow.", icon: "💻" },
    { title: "Metro Connectivity", desc: "The expanding metro network is bringing the heartbeat of the city right to your doorstep.", icon: "🚇" },
    { title: "Smart City Life", desc: "Government focus ensures you get the modern infrastructure your family deserves.", icon: "🏙️" },
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth > 800 ? clientWidth / 3 : clientWidth / 1.2;
      const scrollTo = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        if (sliderRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scroll('right');
          }
        }
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <section className="section why-invest-section" id="why-invest">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">The Opportunity</span>
          <h2>Why <span className="text-gold">Lucknow?</span> Why Now?</h2>
          <p className="section-desc">India's fastest-growing Tier-2 city. Real estate on the Raebareli Road corridor is in its most exciting growth phase right now.</p>
        </div>

        <div 
          className="slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="slider-btn prev" onClick={() => scroll('left')} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          
          <div className="invest-slider" ref={sliderRef}>
            {reasons.map((reason, index) => (
              <InvestCard 
                key={index} 
                title={reason.title} 
                desc={reason.desc} 
                icon={reason.icon}
              />
            ))}
          </div>

          <button className="slider-btn next" onClick={() => scroll('right')} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
