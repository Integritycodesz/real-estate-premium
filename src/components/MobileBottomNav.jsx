import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, LayoutGrid, TrendingUp, Send, Image, Users, MessageSquare, Menu, X } from 'lucide-react';
import './MobileBottomNav.css';

const MobileBottomNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const fabItems = [
    { to: "/gallery", icon: <Image size={20} />, label: "Gallery" },
    { to: "/about", icon: <Users size={20} />, label: "About Us" },
    { to: "/contact", icon: <MessageSquare size={20} />, label: "Contact" },
  ];

  return (
    <>
      {/* Pill Menu Drawer - appears above the FAB */}
      <div className={`fab-pill-menu ${isMenuOpen ? 'open' : ''}`}>
        {fabItems.map((item, index) => {
          const colors = ['lavender', 'purple', 'pink'];
          return (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) => `pill-nav-item ${colors[index]} ${isActive ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: isMenuOpen ? `${index * 0.06}s` : '0s' }}
            >
              <div className="pill-icon">{item.icon}</div>
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fab-overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* Bottom Navigation Bar */}
      <div className="mobile-bottom-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Home size={20} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <LayoutGrid size={20} />
          <span>Projects</span>
        </NavLink>

        <Link to="/contact" className="nav-item action-main">
          <div className="action-icon">
            <Send size={22} />
          </div>
          <span>Enquire</span>
        </Link>

        <NavLink to="/why-invest" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <TrendingUp size={20} />
          <span>Why Invest</span>
        </NavLink>

        {/* FAB Menu Trigger — replaces Gallery button */}
        <button
          className={`nav-item fab-trigger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="More pages"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span>More</span>
        </button>
      </div>
    </>
  );
};

export default MobileBottomNav;
