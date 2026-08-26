import React from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PreFooterCTA.css';

const PreFooterCTA = () => {
  const handleSiteVisit = () => {
    window.dispatchEvent(new Event('open-pbd-lead-popup'));
  };

  return (
    <section className="pre-footer-cta">
      <div className="container cta-container">
        <div className="cta-content">
          <h2>Ready to Begin Your Legacy?</h2>
          <p>Schedule a free site visit. No pressure. No obligation. Just honest guidance.</p>
        </div>
        
        <div className="cta-actions">
          <button onClick={handleSiteVisit} className="cta-btn gold-btn">
            Schedule Site Visit
            <ArrowRight size={18} />
          </button>
          
          <a 
            href={`https://wa.me/917054550296?text=${encodeURIComponent("Hi PBD Group, I’m interested in your property projects. I’d like to know more about the available projects, pricing and site visit options. Please assist me.")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-btn whatsapp-btn"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
          
          <a href="tel:+917054550296" className="cta-btn call-btn">
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
