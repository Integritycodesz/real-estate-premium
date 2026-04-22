import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import './InquiryForm.css';

const InquiryForm = ({ projectTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in ${projectTitle}. Please share more details.`
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="inquiry-form-wrapper">
      <h3>Quick Inquiry</h3>
      <p>Send us your details and our property expert will get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit} className="inquiry-form">
        <div className="form-group">
          <div className="input-with-icon">
            <User size={18} className="form-icon" />
            <input 
              type="text" 
              placeholder="Full Name" 
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <div className="input-with-icon">
              <Mail size={18} className="form-icon" />
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-with-icon">
              <Phone size={18} className="form-icon" />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="input-with-icon textarea-group">
            <MessageSquare size={18} className="form-icon" />
            <textarea 
              placeholder="Your Message" 
              rows="4"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
        </div>

        <button 
          type="submit" 
          className={`btn-primary w-full ${status === 'sending' ? 'loading' : ''}`}
          disabled={status !== 'idle'}
        >
          {status === 'sending' ? (
            'Sending...'
          ) : status === 'success' ? (
            'Sent Successfully!'
          ) : (
            <>
              <Send size={18} />
              Send Inquiry
            </>
          )}
        </button>

        {status === 'success' && (
          <p className="success-msg">Thank you! Your inquiry has been received.</p>
        )}
      </form>
    </div>
  );
};

export default InquiryForm;
