import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './PageStyles.css';

const Contact = () => {
  return (
    <div className="page-wrapper fade-in">
      <div className="container">
        <header className="page-header">
          <h1>Let's Connect</h1>
          <p>Get in touch with our team of luxury real estate experts to find your perfect property in Lucknow.</p>
        </header>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon-wrapper">
                <Mail size={22} className="info-icon" />
              </div>
              <div>
                <h3>Email Us</h3>
                <a href="mailto:info@amitlegacyestates.com" className="contact-link">info@amitlegacyestates.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon-wrapper">
                <Phone size={22} className="info-icon" />
              </div>
              <div>
                <h3>Call Us</h3>
                <a href="tel:+919876543210" className="contact-link">+91 98765 43210</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <MapPin size={22} className="info-icon" />
              </div>
              <div>
                <h3>Visit Us</h3>
                <p className="contact-link" style={{fontSize: '1.2rem', marginBottom: 0}}>Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>
            
            <div className="office-hours">
              <h3>Office Hours</h3>
              <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
          
          <div className="contact-form-wrapper premium-shadow">
            <h2>Send an Inquiry</h2>
            <p className="form-subtitle">Fill out the form below and our advisors will get back to you shortly.</p>
            <form className="contact-form">
              <div className="form-group-row">
                <div className="input-wrapper">
                  <input type="text" className="form-control" id="firstName" placeholder=" " />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-wrapper">
                  <input type="text" className="form-control" id="lastName" placeholder=" " />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
              
              <div className="input-wrapper">
                <input type="email" className="form-control" id="email" placeholder=" " />
                <label htmlFor="email">Email Address</label>
              </div>
              
              <div className="input-wrapper">
                <input type="tel" className="form-control" id="phone" placeholder=" " />
                <label htmlFor="phone">Phone Number</label>
              </div>
              
              <div className="input-wrapper">
                <textarea className="form-control" id="message" placeholder=" " rows="5"></textarea>
                <label htmlFor="message">How can we help you?</label>
              </div>
              
              <button type="button" className="btn-primary" style={{marginTop: '10px'}}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
