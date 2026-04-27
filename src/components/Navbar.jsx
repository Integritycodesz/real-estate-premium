import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import FlashDealsBanner from './FlashDealsBanner';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScrollPos / totalHeight) * 100);
      }
      setScrolled(currentScrollPos > 50);

      if (menuOpen) {
        setVisible(true);
        document.documentElement.classList.remove('nav-hidden');
      } else {
        const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 100;
        setVisible(isVisible);
        if (isVisible) {
          document.documentElement.classList.remove('nav-hidden');
        } else {
          document.documentElement.classList.add('nav-hidden');
        }
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isHomePage = location.pathname === '/';
  const navbarClass = `navbar ${scrolled || !isHomePage ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''} ${!visible ? 'navbar-hidden' : ''}`;

  return (
    <nav className={navbarClass}>
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
      
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

        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/why-invest" onClick={() => setMenuOpen(false)}>Why Invest</NavLink></li>
          <li><NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          <li className="mobile-only-btn">
            <Link to="/contact" className="navbar-btn" onClick={() => setMenuOpen(false)}>Get in touch</Link>
          </li>
        </ul>
        
        <Link to="/contact" className="navbar-btn desktop-only">Get in touch</Link>

        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
