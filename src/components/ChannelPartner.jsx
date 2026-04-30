import React from 'react';
import { MessageCircle, Briefcase } from 'lucide-react';
import './ChannelPartner.css';

const ChannelPartner = () => {
  return (
    <section className="channel-partner-section">
      <div className="container">
        <div className="partner-card">
          <div className="partner-content">
            <span className="partner-badge">PARTNERSHIP OPPORTUNITY</span>
            <h2 className="partner-title">ASSOCIATE / CHANNEL PARTNER</h2>
            <p className="partner-hindi">"एसोसिएट बनने के लिए भी सम्पर्क करें"</p>
            <p className="partner-desc">
              Pawantanay Builders & Developers welcomes real estate channel partners across 
              Lucknow and surrounding districts. Competitive referral structure. Active inventory 
              across 4 projects.
            </p>
          </div>
          <div className="partner-action">
            <a 
              href="https://wa.me/919999999999?text=I'm interested in becoming a channel partner for PBD Projects." 
              className="wa-partner-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              WhatsApp to Become an Associate Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelPartner;
