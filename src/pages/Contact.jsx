import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import FlashDealsBanner from '../components/FlashDealsBanner';
import './PageStyles.css';

const Contact = () => {
  return (
    <div className="page-wrapper fade-in">
      {/* Hero Header */}
      <header className="page-hero-header" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
      }}>
        <div className="container">
          <div className="hero-grid-contact">
            <div className="hero-text-side">
              <span className="badge-gold">GET IN TOUCH</span>
              <h1 className="hero-title-large">
                Talk to Us.<br />
                <span className="text-gold">No Pressure. Just Clarity.</span>
              </h1>
              
              <div className="hero-glass-box">
                <p className="glass-lead">
                  We know that buying land is not a small decision. It's years of savings, months of research, and the weight of getting it right.
                </p>
                <p className="glass-body">
                  You deserve honest answers from people who know the projects inside out — not a sales pitch. Whether you're just exploring or ready to book, we're here to guide you with transparency.
                </p>
                <div className="glass-stats">
                  <div className="glass-stat">
                    <div className="stat-val">10:00 AM</div>
                    <div className="stat-lab">Daily Availability</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="glass-stat">
                    <div className="stat-val">Personal</div>
                    <div className="stat-lab">Direct Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <FlashDealsBanner />

      <div className="container section-padding">
        {/* Contact Details & Form Section */}
        <div className="contact-main-grid">
          {/* Left Column: Contact Info */}
          <div className="contact-info-column">
            <h2 className="section-title-medium">Contact Details</h2>
            
            <div className="contact-info-list">
              <div className="info-card-horizontal">
                <div className="icon-box">
                  <Phone size={24} />
                </div>
                <div className="info-text">
                  <span className="info-label">Phone / WhatsApp:</span>
                  <a href="tel:+917054550296" className="info-value">+91 70545 50296</a>
                </div>
              </div>

              <div className="info-card-horizontal">
                <div className="icon-box">
                  <Mail size={24} />
                </div>
                <div className="info-text">
                  <span className="info-label">Email:</span>
                  <a href="mailto:info@pbdgroup.in" className="info-value">info@pbdgroup.in</a>
                </div>
              </div>

              <div className="info-card-horizontal">
                <div className="icon-box">
                  <Clock size={24} />
                </div>
                <div className="info-text">
                  <span className="info-label">Office Hours:</span>
                  <p className="info-value-text">Mon – Sat: 10:00 AM – 6:00 PM</p>
                  <p className="info-sub-text">Wednesday: By appointment only</p>
                </div>
              </div>

              <div className="info-card-horizontal">
                <div className="icon-box">
                  <MapPin size={24} />
                </div>
                <div className="info-text">
                  <span className="info-label">Office Address:</span>
                  <p className="info-value-text">Sai Tower, Second Floor, Near Dental Hospital,<br />Raebarelli Road— Lucknow, UP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-wrapper">
            <div className="premium-form-box">
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Quick response, real information, zero pressure.</p>
              </div>
              
              <form onSubmit={(e) => e.preventDefault()} className="contact-form-layout">
                <div className="form-row">
                  <input type="text" placeholder="Your Name" className="form-input" />
                  <input type="email" placeholder="Email Address" className="form-input" />
                </div>
                
                <input type="tel" placeholder="Phone Number" className="form-input" />
                
                <div className="form-row">
                  <div className="select-wrapper">
                    <select className="form-input">
                      <option value="">Select Project of Interest</option>
                      {projects.map(project => (
                        <option key={project.id} value={project.id}>{project.title}</option>
                      ))}
                      <option value="general">General Inquiry</option>
                    </select>
                    <CheckCircle2 size={18} className="select-icon" />
                  </div>

                  <div className="select-wrapper">
                    <select className="form-input">
                      <option value="">Select Budget</option>
                      <option value="10-20">10-20 lakh</option>
                      <option value="20-30">20-30 lakh</option>
                      <option value="30+">30 lakh +</option>
                    </select>
                    <CheckCircle2 size={18} className="select-icon" />
                  </div>
                </div>
                
                <textarea placeholder="How can we help you?" rows="4" className="form-textarea"></textarea>
                
                <button type="submit" className="btn btn-gold w-full btn-submit">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* WhatsApp Chat Section */}
        <div className="whatsapp-banner">
          <div className="whatsapp-grid">
            <div className="whatsapp-icon-box">
              <MessageCircle size={40} />
            </div>
            <div className="whatsapp-content">
              <h2>Quick Questions? We're on WhatsApp.</h2>
              <p>Getting answers shouldn't require you to fill a form and wait three days. Drop us a WhatsApp message and we'll respond personally — with real information, not automated replies.</p>
              <a href="https://wa.me/917054550296" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                <MessageCircle size={20} /> Click to Chat: +91 70545 50296
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose PBD Section */}
        <div className="why-pbd-section section-padding">
          <div className="section-header-centered">
            <h2 className="section-title-large">Why Choose PBD Group</h2>
            <h3 className="section-subtitle-gold">We Don't Just Promise. We've Already Proven.</h3>
            <p className="section-intro">In a market where every developer claims to be trustworthy, PBD Group offers verifiable evidence. Multiple projects fully delivered. Real families living on land they bought from us, exactly as described.</p>
          </div>

          <div className="value-grid">
            {[
              {
                title: "1. Proven Delivery — Not Just Promises",
                desc: "Rajgharana and 2 More Projects are done. Complete. Families are home. We'll show you colonies where you can meet the residents and see the answer for yourself."
              },
              {
                title: "2. Legal Documentation You Can Trust",
                desc: "Every active PBD project comes with complete, verified legal documentation. Our flagship project, Shivay Residency, carries full Jila Panchayat approval."
              },
              {
                title: "3. Locations That Matter",
                desc: "Every project we offer is carefully selected along the Raebareli Road corridor—Lucknow's most exciting growth zone."
              },
              {
                title: "4. Transparent Pricing",
                desc: "We quote a price. That's the price. No hidden charges. No last-minute add-ons. Every cost is disclosed upfront, in writing."
              },
              {
                title: "5. Flexible EMI Plans",
                desc: "We understand what it means to save for land. Our EMI structures are designed to make land ownership genuinely achievable."
              },
              {
                title: "6. Trusted by Experts",
                desc: "IAS and IPS officers have chosen to invest in PBD projects. That level of trust from verified judgment is earned with honesty."
              },
              {
                title: "7. Guidance, Not Pressure",
                desc: "Our team's job is not to close deals. It's to help you make the right decision for your family. Zero sales pressure."
              },
              {
                title: "8. Post-Registry Relationship",
                desc: "PBD stays with you long after the registry. Our relationship continues through delivery and beyond."
              }
            ].map((item, idx) => (
              <div key={idx} className="value-card">
                <div className="card-header">
                  <CheckCircle2 size={20} className="text-gold" />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Our Office Section */}
        <div className="office-visit-section section-padding">
          <h2 className="section-title-medium centered">Visit Our Office</h2>
          <div className="office-grid">
            <div className="office-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="PBD Office" 
              />
              <div className="img-tag">Main Office Lobby — Sai Tower</div>
            </div>
            <div className="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3562.4668272790113!2d80.9431168!3d26.7613854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb0bf23900b1%3A0x6eb41f77e5c89c93!2sSai%20Tower!5e0!3m2!1sen!2sin!4v1776944621826!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
