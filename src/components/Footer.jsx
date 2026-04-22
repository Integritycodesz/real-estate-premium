import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>PBD <span className="text-gold">Groups</span></h2>
          <p>Where Trust Becomes Legacy. Building premium real estate across Lucknow's fastest-growing corridors.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li><a href="mailto:info@amitlegacyestates.com">info@amitlegacyestates.com</a></li>
              <li>Lucknow, Uttar Pradesh</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {new Date().getFullYear()} PBD Groups. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
