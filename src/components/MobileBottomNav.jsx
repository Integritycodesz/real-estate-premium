import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutGrid, MessageSquare, Phone, Send } from 'lucide-react';
import './MobileBottomNav.css';

const MobileBottomNav = () => {
  const openLeadPopup = () => {
    window.dispatchEvent(new Event('open-pbd-lead-popup'));
  };

  return (
    <div className="mobile-bottom-nav">
      <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Home size={20} />
        <span>Home</span>
      </NavLink>
      
      <NavLink to="/projects" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <LayoutGrid size={20} />
        <span>Projects</span>
      </NavLink>
      
      <div className="nav-item action-main" onClick={openLeadPopup}>
        <div className="action-icon">
          <Send size={22} />
        </div>
        <span>Enquire</span>
      </div>
      
      <a href="https://wa.me/917054550296" target="_blank" rel="noopener noreferrer" className="nav-item">
        <MessageSquare size={20} />
        <span>WhatsApp</span>
      </a>
      
      <a href="tel:+917054550296" className="nav-item">
        <Phone size={20} />
        <span>Call</span>
      </a>
    </div>
  );
};

export default MobileBottomNav;
