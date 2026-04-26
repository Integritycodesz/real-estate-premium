import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutGrid, TrendingUp, Phone, Send } from 'lucide-react';
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
      
      <NavLink to="/why-invest" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <TrendingUp size={20} />
        <span>Why Invest</span>
      </NavLink>
      
      <a href="tel:+917054550296" className="nav-item">
        <Phone size={20} />
        <span>Call</span>
      </a>
    </div>
  );
};

export default MobileBottomNav;
