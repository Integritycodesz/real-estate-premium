import React, { useState } from 'react';
import { X, Send, User, Phone, Star, ShieldCheck, Zap } from 'lucide-react';
import { sendInquiryEmail } from '../utils/emailService';
import './MobileLeadPopup.css';

const MobileLeadPopup = ({ onClose }) => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await sendInquiryEmail({
        ...formData,
        projectTitle: 'Lead Popup (Mobile)',
        message: 'Lead captured via mobile-specific popup.'
      });
      
      setStatus('success');
      setTimeout(() => onClose(), 2500);
    } catch (error) {
      console.error("Error submitting mobile lead popup:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
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
            <input 
              type="text" 
              placeholder="Your Full Name" 
              required 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="mobile-input-wrapper">
            <Phone size={22} className="mobile-input-icon" />
            <input 
              type="tel" 
              placeholder="Mobile Number" 
              required 
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className={`mobile-popup-submit ${status === 'success' ? 'success' : ''} ${status === 'error' ? 'error' : ''}`}
            disabled={status !== 'idle'}
          >
            {status === 'sending' ? (
              'Authenticating...'
            ) : status === 'success' ? (
              'Priority Access Granted! 🎉'
            ) : status === 'error' ? (
              'Failed to Send'
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
            <span>Govt. Approved</span>
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
