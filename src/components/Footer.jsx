import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo-link">
            <div className="logo-main footer-logo-container">
              <img src="/src/assets/logo.png" alt="PBD Group" className="site-logo footer-logo" />
              <div className="logo-sub">
                <span>PAWANTANAY BUILDERS</span>
                <span>& Developers Pvt. Ltd. Lucknow</span>
              </div>
            </div>
          </Link>
          <p className="footer-tagline">Where Trust Becomes Property.</p>
          <p className="footer-bio">
            Lucknow's trust-first real estate partner. Helping families find legally approved, transparently priced properties on Raebareli Road since 2016.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com/pbd_group" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com/pbdgroup" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://wa.me/917054550296" target="_blank" rel="noopener noreferrer" className="social-icon">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">QUICK LINKS</h4>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/why-invest">Why Invest</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><button className="link-btn" onClick={() => window.dispatchEvent(new Event('open-pbd-lead-popup'))}>Schedule Site Visit</button></li>
          </ul>
        </div>

        {/* Column 3: Our Projects */}
        <div className="footer-col">
          <h4 className="footer-heading">OUR PROJECTS</h4>
          <ul className="footer-nav">
            <li><Link to="/project/shivay-residency">Shivay Residency</Link></li>
            <li><Link to="/project/rajgharana">Rajgharana</Link></li>
            <li><Link to="/project/hanumant-dham">Hanumant Dham</Link></li>
            <li><Link to="/project/barsana-estate">Barsana Estate</Link></li>
            <li><Link to="/projects">View All Projects</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h4 className="footer-heading">CONTACT</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-icon"><MapPin size={18} /></span>
              <span>Sai Tower, Raebarelli Road, Lucknow, Uttar Pradesh</span>
            </li>
            <li>
              <span className="contact-icon"><Phone size={18} /></span>
              <a href="tel:+917054550296">+91-7054550296</a>
            </li>
            <li>
              <span className="contact-icon"><Mail size={18} /></span>
              <a href="mailto:info@pbdgroup.in">info@pbdgroup.in</a>
            </li>
            <li>
              <span className="contact-icon"><Clock size={18} /></span>
              <span>Mon-Sat: 10:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <div className="footer-credits">
            <p className="copyright">&copy; {new Date().getFullYear()} PBD Group. All Rights Reserved.</p>
            <p className="managed-by">Managed by Advergia</p>
          </div>
          <p className="footer-locations">Raebareli Road · Lucknow, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
