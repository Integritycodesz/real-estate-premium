import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const defaultMsg = encodeURIComponent("Hi PBD Group, I’m interested in your property projects. I’d like to know more about the available projects, pricing and site visit options. Please assist me.");

  return (
    <a 
      href={`https://wa.me/917054550296?text=${defaultMsg}`}
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
