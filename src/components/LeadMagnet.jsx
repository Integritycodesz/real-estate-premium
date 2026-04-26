import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, X, Send, ShieldCheck } from 'lucide-react';
import './LeadMagnet.css';

const LeadMagnet = ({ title, description, magnetType = 'Price Chart', fileUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Proper Logic: Trigger actual download after a short delay
    setTimeout(() => {
      setStatus('success');
      
      if (fileUrl && fileUrl !== '#') {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = `${title.replace(/\s+/g, '_')}_${magnetType.replace(/\s+/g, '_')}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
      }, 3000);
    }, 1500);
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
              <h3>Enter Details to Receive {magnetType}</h3>
              <p>We'll send the latest {magnetType.toLowerCase()} and inventory details to your mobile.</p>
            </div>

            <form onSubmit={handleSubmit} className="magnet-form">
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="WhatsApp Number" required />
              <button type="submit" className={status === 'success' ? 'success' : ''}>
                {status === 'sending' ? 'Preparing File...' : 
                 status === 'success' ? 'Sent to WhatsApp! 🎉' : 
                 `Download ${magnetType}`}
                {status === 'idle' && <Send size={18} />}
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
