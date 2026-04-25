import React, { useState, useEffect } from 'react';
import { X, Send, Phone, User, Zap, Star, ShieldCheck, MapPin, Calendar } from 'lucide-react';
import './LeadPopup.css';
import PlotImg from '../assets/about/about_hero.png';

const LeadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [status, setStatus] = useState('idle');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Manual trigger via event
  useEffect(() => {
    const handleOpenPopup = () => {
      setIsVisible(true);
      setHasSubmitted(false);
    };

    window.addEventListener('open-pbd-lead-popup', handleOpenPopup);
    return () => window.removeEventListener('open-pbd-lead-popup', handleOpenPopup);
  }, []);

  // Initial show after 5 seconds of refresh
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (!hasSubmitted) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, [hasSubmitted]);

  // Reappearance logic: every 1.5 minutes (90 seconds) if not visible
  useEffect(() => {
    const reappearanceTimer = setInterval(() => {
      if (!isVisible && !hasSubmitted) {
        setIsVisible(true);
      }
    }, 90000); // 1.5 minutes

    return () => clearInterval(reappearanceTimer);
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
          <div className="popup-image-side" style={{ backgroundImage: `url(${PlotImg})` }}>
            <div className="popup-image-overlay">
              <div className="popup-badge-group">
                <div className="popup-badge gold">
                  <Star size={14} fill="currentColor" />
                  <span>PREMIUM PROJECTS</span>
                </div>
                <div className="popup-badge red">
                  <ShieldCheck size={14} />
                  <span>GOVT. APPROVED LAYOUT</span>
                </div>
              </div>
              
              <div className="popup-image-text">
                <div className="trust-indicator">
                  <div className="trust-icon-wrapper">
                    <ShieldCheck size={20} />
                  </div>
                  <span>Lucknow's Most Trusted Developer</span>
                </div>
                <h3>Start Your Journey With Us</h3>
              </div>
            </div>
          </div>
          
          <div className="popup-form-side">
            <div className="popup-header">
              <h2>Limited <span className="text-gold">Verified Plots Available</span></h2>
              <p>Government infrastructure is moving to Raebareli Road. Secure your plot before prices hike further. Register for a free site visit & ROI report.</p>
            </div>

            <form onSubmit={handleSubmit} className="popup-form">
              <div className="popup-input-group">
                <div className="input-icon-wrapper">
                  <User size={18} />
                </div>
                <input type="text" placeholder="Your Full Name" required />
              </div>
              
              <div className="popup-input-group">
                <div className="input-icon-wrapper">
                  <Phone size={18} />
                </div>
                <input type="tel" placeholder="Mobile Number" required />
              </div>

              <div className="popup-input-group">
                <div className="input-icon-wrapper">
                  <MapPin size={18} />
                </div>
                <select required defaultValue="">
                  <option value="" disabled>Looking for?:</option>
                  <option value="investment">Investment</option>
                  <option value="personal">Personal Use</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <div className="popup-input-group date-input-group">
                <div className="input-icon-wrapper">
                  <Calendar size={18} />
                </div>
                <div className="date-input-wrapper">
                  <span className="input-pretext">Schedule a meeting:</span>
                  <input 
                    type="text"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    placeholder=""
                    required 
                    onClick={(e) => e.target.showPicker?.()}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className={`popup-submit-btn ${status === 'success' ? 'success' : ''}`}
                disabled={status !== 'idle'}
              >
                {status === 'sending' ? (
                  'Checking Availability...'
                ) : status === 'success' ? (
                  'Success! We will contact you. 🎉'
                ) : (
                  <>
                    <span>Check Availability & Get Details</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>

            <p className="popup-micro-copy">
              🔒 Your details are safe. No spam calls.
            </p>
            
            <div className="popup-trust-footer">
              <div className="trust-item">
                <div className="trust-item-icon">
                  <ShieldCheck size={14} />
                </div>
                <span>10+ Years of Expertise</span>
              </div>
              <div className="trust-item">
                <div className="trust-item-icon">
                  <Star size={14} />
                </div>
                <span>500+ Happy Families</span>
              </div>
              <div className="trust-item">
                <div className="trust-item-icon">
                  <Zap size={14} />
                </div>
                <span>2+ Delivered Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
