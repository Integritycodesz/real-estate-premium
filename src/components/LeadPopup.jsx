import React, { useState, useEffect } from 'react';
import { X, Send, Phone, User, Zap, Star, ShieldCheck, MapPin, Calendar } from 'lucide-react';
import './LeadPopup.css';

const LeadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [status, setStatus] = useState('idle');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Check if popup should be shown based on session storage
  const checkSession = () => {
    const isDismissed = sessionStorage.getItem('pbd_popup_dismissed');
    return !isDismissed;
  };

  useEffect(() => {
    const handleOpenPopup = () => {
      setIsVisible(true);
      setHasSubmitted(false);
    };

    window.addEventListener('open-pbd-lead-popup', handleOpenPopup);
    return () => window.removeEventListener('open-pbd-lead-popup', handleOpenPopup);
  }, []);

  useEffect(() => {
    if (hasSubmitted || !checkSession()) return;
    
    const initialTimer = setTimeout(() => {
      if (!hasSubmitted && checkSession()) setIsVisible(true);
    }, 8000); // Increased to 8s for better UX
    
    return () => clearTimeout(initialTimer);
  }, [hasSubmitted]);

  useEffect(() => {
    if (hasSubmitted || isVisible || !checkSession()) return;
    
    // Exit-intent detection
    const handleMouseOut = (e) => {
      if (e.clientY <= 0 && !hasSubmitted && checkSession()) {
        setIsVisible(true);
      }
    };
    
    document.addEventListener('mouseout', handleMouseOut);
    
    const recurringTimer = setTimeout(() => {
      if (!isVisible && !hasSubmitted && checkSession()) {
        setIsVisible(true);
      }
    }, 25000); // 25s for better UX
    
    return () => {
      clearTimeout(recurringTimer);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isVisible, hasSubmitted]);

  const handleClose = () => {
    setIsClosing(true);
    // Remember dismissal for this session
    sessionStorage.setItem('pbd_popup_dismissed', 'true');
    
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
      sessionStorage.setItem('pbd_popup_dismissed', 'true');
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
              <div className="exclusive-tag">
                <Zap size={16} />
                <span>URGENT: RAIBARIRLY ROAD GROWTH HUB</span>
              </div>
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

              <div className="popup-input-group">
                <div className="input-icon-wrapper">
                  <Calendar size={18} />
                </div>
                <input 
                  type="date" 
                  required 
                  onClick={(e) => e.target.showPicker?.()}
                  placeholder="Preferred Visit Date"
                />
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
