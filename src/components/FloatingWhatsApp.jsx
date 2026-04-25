import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/917054550296?text=Hello PBD Group, I'm interested in your premium properties. Please contact me."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Contact us on WhatsApp"
    >
      <div className="whatsapp-tooltip">Chat with us</div>
      <MessageCircle size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
