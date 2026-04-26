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
    
    // Simulate preparation and trigger download
    setTimeout(() => {
      setStatus('success');
      
      if (fileUrl) {
        // Trigger direct download
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', ''); // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
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
              <h3>Download {magnetType}</h3>
              <p>Please provide your details to instantly download the latest {magnetType.toLowerCase()} and inventory details.</p>
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
                placeholder="Mobile Number" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <button type="submit" className={status === 'success' ? 'success' : ''} disabled={status !== 'idle'}>
                {status === 'sending' ? 'Preparing Download...' : 
                 status === 'success' ? 'Starting Download...' : 
                 `Download ${magnetType}`}
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
