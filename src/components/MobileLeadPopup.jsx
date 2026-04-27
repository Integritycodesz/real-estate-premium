import React, { useState } from 'react';
import { X, Send, User, Phone, Star, ShieldCheck, Zap } from 'lucide-react';
import './MobileLeadPopup.css';

const MobileLeadPopup = ({ onClose }) => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => onClose(), 2500);
    }, 1500);
  };

  return (
    <div className="mobile-popup-overlay">
      <div className="mobile-popup-content">
        <button className="mobile-popup-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="mobile-popup-handle" />
        
        <div className="mobile-popup-header">
          <div className="mobile-popup-tag">Limited Opportunity</div>
          <h2>Secure Your Priority <br/><span className="text-gold">Plot in Lucknow</span></h2>
          <p>Join 500+ families investing in the direct path of Lucknow's fastest government development.</p>
        </div>

        <form onSubmit={handleSubmit} className="mobile-popup-form">
          <div className="mobile-input-wrapper">
            <User size={22} className="mobile-input-icon" />
            <input type="text" placeholder="Your Full Name" required />
          </div>
          
          <div className="mobile-input-wrapper">
            <Phone size={22} className="mobile-input-icon" />
            <input type="tel" placeholder="Mobile Number" required />
          </div>

          <button 
            type="submit" 
            className={`mobile-popup-submit ${status === 'success' ? 'success' : ''}`}
            disabled={status !== 'idle'}
          >
            {status === 'sending' ? (
              'Authenticating...'
            ) : status === 'success' ? (
              'Priority Access Granted! 🎉'
            ) : (
              <>
                <span>Claim Priority Access</span>
                <Send size={20} />
              </>
            )}
          </button>
        </form>

        <div className="mobile-popup-footer">
          <div className="mobile-footer-item">
            <ShieldCheck size={20} />
            <span>Zilla Panchayat Approved</span>
          </div>
          <div className="mobile-footer-item">
            <Star size={20} />
            <span>91% ROI</span>
          </div>
          <div className="mobile-footer-item">
            <Zap size={20} />
            <span>Limited Plots</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLeadPopup;
