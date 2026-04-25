import React from 'react';
import { Target, Zap, Clock, ShieldCheck, Trophy, Landmark } from 'lucide-react';
import './SmartLSection.css';

const SmartLSection = () => {
  const points = [
    {
      icon: <Target className="text-gold" size={32} />,
      title: "Smart Location selection",
      desc: "We don't buy everywhere. We only select land in the direct path of government development hubs like SGPGI and the New Outer Ring Road."
    },
    {
      icon: <ShieldCheck className="text-gold" size={32} />,
      title: "Legally Verified Layouts",
      desc: "Skip the legal headache. Every plot is Jila Panchayat approved with a clear title, ready for immediate registry and possession."
    },
    {
      icon: <Clock className="text-gold" size={32} />,
      title: "Future-Ready Infrastructure",
      desc: "Wide black-top roads, drainage systems, and electricity poles are already in place before we even offer the plot to you."
    },
    {
      icon: <Zap className="text-gold" size={32} />,
      title: "High Liquidity Investment",
      desc: "Our strategy ensures your plot is easy to sell in the future because it sits in Lucknow's highest demand growth corridor."
    }
  ];

  return (
    <section className="smartl-section" id="smartl">
      <div className="container">
        <div className="smartl-header">
          <div className="smartl-badge">
            <Trophy size={16} />
            <span>PBD EXCLUSIVE</span>
          </div>
          <h2 className="section-title">
            What Makes <span className="text-gold">PBD Plots Different</span>
          </h2>
          <p className="section-subtitle">
            Why PBD plots appreciate faster than others in Lucknow.
          </p>
        </div>

        <div className="smartl-grid">
          <div className="smartl-main-card">
            <div className="smartl-card-inner">
              <Landmark size={48} className="text-gold mb-4" />
              <h3>Wealth Creation Through Precision</h3>
              <p>
                PBD Group's proprietary framework. It stands for <strong>Smart Location & Legal Leverage</strong>. Most developers look for cheap land; we look for "Strategic Land" that guarantees a lifestyle today and a fortune tomorrow.
              </p>
              <div className="smartl-stats">
                <div className="smartl-stat">
                  <strong>40%</strong>
                  <span>Avg. Yearly Growth</span>
                </div>
                <div className="smartl-stat">
                  <strong>100%</strong>
                  <span>Legal Compliance</span>
                </div>
              </div>
            </div>
          </div>

          <div className="smartl-points">
            {points.map((point, index) => (
              <div key={index} className="smartl-point-card reveal-delay-1">
                <div className="point-icon-box">
                  {point.icon}
                </div>
                <div className="point-text">
                  <h4>{point.title}</h4>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartLSection;
