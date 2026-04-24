import React, { useState, useEffect } from 'react';
import { X, Send, Phone, User, Zap, Star, ShieldCheck, MapPin, Gift } from 'lucide-react';
import './LeadPopup.css';

const LeadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [status, setStatus] = useState('idle');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const handleOpenPopup = () => {
      setIsVisible(true);
      setHasSubmitted(false);
    };

    window.addEventListener('open-pbd-lead-popup', handleOpenPopup);
    return () => window.removeEventListener('open-pbd-lead-popup', handleOpenPopup);
  }, []);

  useEffect(() => {
    if (hasSubmitted) return;
    const initialTimer = setTimeout(() => {
      if (!hasSubmitted) setIsVisible(true);
    }, 5000);
    return () => clearTimeout(initialTimer);
  }, [hasSubmitted]);

  useEffect(() => {
    if (hasSubmitted || isVisible) return;
    const recurringTimer = setTimeout(() => {
      if (!isVisible && !hasSubmitted) {
        setIsVisible(true);
      }
    }, 25000);
    return () => clearTimeout(recurringTimer);
  }, [isVisible, hasSubmitted]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setHasSubmitted(true);
      setTimeout(() => handleClose(), 3000);
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <div className={`lead-popup-overlay ${isClosing ? 'fade-out' : ''}`}>
      <div className={`lead-popup-content ${isClosing ? 'slide-down' : 'slide-up'}`}>
        <button className="popup-close" onClick={handleClose} title="Close">
          <X size={20} />
        </button>
        
        <div className="popup-body">
          <div className="popup-image-side">
            <div className="popup-image-overlay">
              <div className="popup-badge-group">
                <div className="popup-badge gold">
                  <Star size={14} fill="currentColor" />
                  <span>PREMIUM PROJECTS</span>
                </div>
              </div>
              
              <div className="popup-image-text">
                <div className="trust-indicator">
                  <ShieldCheck size={20} className="text-gold" />
                  <span>Lucknow's Most Trusted Developer</span>
                </div>
                <h3>Start Your Journey With Us</h3>
              </div>
            </div>
          </div>
          
          <div className="popup-form-side">
            <div className="popup-header">
              <div className="exclusive-tag">
                <Gift size={16} />
                <span>EXCLUSIVE BENEFIT</span>
              </div>
              <h2>Claim Your <span className="text-gold">Free Registry</span></h2>
              <p>Secure your investment in the <strong>Growth Corridor of Lucknow</strong>. Register now for exclusive pricing and a complimentary site visit.</p>
            </div>

            <form onSubmit={handleSubmit} className="popup-form">
              <div className="popup-input-group">
                <User size={18} className="input-icon" />
                <input type="text" placeholder="Your Full Name" required />
              </div>
              
              <div className="popup-input-group">
                <Phone size={18} className="input-icon" />
                <input type="tel" placeholder="Mobile Number" required />
              </div>

              <div className="popup-input-group">
                <MapPin size={18} className="input-icon" />
                <select required style={{ paddingLeft: '45px', appearance: 'none', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #eee', width: '100%', height: '50px' }}>
                  <option value="" disabled selected>Preferred Projects</option>
                  <option value="rajgharana">Rajgharana</option>
                  <option value="shivay">Shivay Residency</option>
                  <option value="hanumant">Hanumant Dham</option>
                  <option value="green">Green Garden</option>
                </select>
              </div>

              <div className="popup-input-group">
                <Gift size={18} className="input-icon" style={{ color: 'var(--accent-gold)' }} />
                <input 
                  type="datetime-local" 
                  required 
                  onClick={(e) => e.target.showPicker?.()}
                  style={{ paddingLeft: '45px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #eee', width: '100%', height: '50px' }} 
                  placeholder="Preferred Site Visit Date"
                />
              </div>

              <button 
                type="submit" 
                className={`popup-submit-btn ${status === 'success' ? 'success' : ''}`}
                disabled={status !== 'idle'}
              >
                {status === 'sending' ? (
                  'Reserving Offer...'
                ) : status === 'success' ? (
                  'Reservation Confirmed! 🎉'
                ) : (
                  <>
                    <span>Get Instant Booking</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
            
            <div className="popup-trust-footer" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 20px', justifyContent: 'center' }}>
              <div className="trust-item">
                <ShieldCheck size={14} />
                <span>10+ Years of Trust</span>
              </div>
              <div className="trust-item">
                <Star size={14} />
                <span>500+ Happy Families</span>
              </div>
              <div className="trust-item">
                <Zap size={14} />
                <span>7+ Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
