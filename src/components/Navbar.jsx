import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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

  // Determine if navbar should be dark based on scroll or page
  // Home page has transparent hero, other pages might need solid background immediately
  const isHomePage = location.pathname === '/';
  const navbarClass = `navbar ${scrolled || !isHomePage ? 'scrolled' : ''}`;

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-main">
            <img src="/src/assets/logo.png" alt="PBD Groups" className="site-logo" />
            <div className="logo-sub">
              <span>PAWANTANAY BUILDERS</span>
              <span>& Developers Pvt. Ltd. Lucknow</span>
            </div>
          </div>
        </Link>

        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/why-invest">Why Invest</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/contact" className="navbar-btn">Get in touch</Link>
      </div>
    </nav>
  );
};

export default Navbar;
