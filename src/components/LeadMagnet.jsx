import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, X, Send, ShieldCheck } from 'lucide-react';
import './LeadMagnet.css';

const LeadMagnet = ({ title, description, magnetType = 'Price Chart', fileUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Construct WhatsApp Message
    const message = `Hi, I am ${formData.name}. I am interested in the ${magnetType} for your project. Please share the details on my number: ${formData.phone}.`;
    const whatsappUrl = `https://wa.me/917054550296?text=${encodeURIComponent(message)}`;

    // Simulate preparation and redirect
    setTimeout(() => {
      setStatus('success');
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
        setFormData({ name: '', phone: '' });
      }, 3000);
    }, 1200);
  };

  return (
    <>
      <div className="lead-magnet-card">
        <div className="magnet-icon">
          <FileText size={24} />
        </div>
        <div className="magnet-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <button className="magnet-btn" onClick={() => setIsOpen(true)}>
          <Download size={18} />
          <span>Get {magnetType}</span>
        </button>
      </div>

      {isOpen && (
        <div className="magnet-modal-overlay">
          <div className="magnet-modal-content">
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
            
            <div className="modal-header">
              <ShieldCheck size={40} className="text-gold" />
              <h3>Receive {magnetType} on WhatsApp</h3>
              <p>We'll send the latest {magnetType.toLowerCase()} and inventory details directly to your WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit} className="magnet-form">
              <input 
                type="text" 
                placeholder="Full Name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="tel" 
                placeholder="WhatsApp Number" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <button type="submit" className={status === 'success' ? 'success' : ''}>
                {status === 'sending' ? 'Connecting...' : 
                 status === 'success' ? 'Redirecting to WhatsApp...' : 
                 `Get ${magnetType} on WhatsApp`}
                {status === 'idle' && <MessageCircle size={18} />}
              </button>
            </form>
            <p className="modal-footer-text">🔒 100% Privacy Guaranteed. No Spam.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadMagnet;
