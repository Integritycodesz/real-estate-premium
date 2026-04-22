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
    { title: "Outer Ring Road", desc: "104 km ring road boosting land value dramatically on Sultanpur axes.", icon: "🛣️" },
    { title: "Purvanchal Expressway", desc: "Plots on eastern corridors have seen 2X appreciation since completion.", icon: "📈" },
    { title: "UP Defence Corridor", desc: "₹1500+ Cr investment. 50,000+ jobs creating surging residential demand.", icon: "🏗️" },
    { title: "12%+ Annual Growth", desc: "Land appreciation consistently outperforming bank fixed deposits.", icon: "💰" },
    { title: "Medical & Education Hubs", desc: "5+ multi-speciality hospitals under development driving demand.", icon: "🏥" },
    { title: "Window Closing Fast", desc: "Early buyers positioned themselves well. The advantage is still open.", icon: "⏳" },
    { title: "Airport Expansion", desc: "New Terminal 3 and runway upgrades making Lucknow a global gateway.", icon: "✈️" },
    { title: "IT City & HCL Tech", desc: "Planned IT clusters and corporate hubs attracting top talent.", icon: "💻" },
    { title: "Upcoming Metro", desc: "Massive connectivity boost with Metro expansion reaching key corridors.", icon: "🚇" },
    { title: "Smart City Mission", desc: "Government focus ensuring world-class amenities and standards.", icon: "🏙️" },
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
          <p className="section-desc">India's fastest-growing Tier-2 city. Real estate on the Sultanpur & Raebareli corridors is in its highest-appreciation window right now.</p>
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
