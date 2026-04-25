import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isHomePage = location.pathname === '/';
  const navbarClass = `navbar ${scrolled || !isHomePage ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`;

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-main">
            <img src="/src/assets/logo.png" alt="PBD Group" className="site-logo" />
            <div className="logo-sub">
              <span>PAWANTANAY BUILDERS</span>
              <span>& Developers Pvt. Ltd. Lucknow</span>
            </div>
          </div>
        </Link>

        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/why-invest">Why Invest</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li className="mobile-only-btn">
            <Link to="/contact" className="navbar-btn">Get in touch</Link>
          </li>
        </ul>
        
        <Link to="/contact" className="navbar-btn desktop-only">Get in touch</Link>
      </div>
    </nav>
  );
};

export default Navbar;
