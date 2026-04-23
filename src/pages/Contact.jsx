import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import './PageStyles.css';

const Contact = () => {
  return (
    <div className="page-wrapper fade-in">
      {/* Hero Header */}
      <header className="page-hero-header" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div style={{ paddingLeft: '40px' }}>
              <p className="reveal-text delay-1" style={{ textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--accent-gold)', marginBottom: '15px', fontWeight: '700', fontSize: '0.9rem' }}>
                GET IN TOUCH
              </p>
              <h1 className="reveal-text delay-2" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.4)', marginBottom: '20px', fontSize: '5rem', lineHeight: '1', fontWeight: '800', letterSpacing: '-1px' }}>
                Talk to Us.<br />
                <span style={{ color: 'var(--accent-gold)' }}>No Pressure. Just Clarity.</span>
              </h1>
            </div>
            
            <div className="reveal-text delay-3" style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: 'rgba(255,255,255,0.95)',
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(20px)',
              padding: '40px',
              borderRadius: '0 20px 20px 0', 
              borderLeft: '4px solid var(--accent-gold)',
              boxShadow: '40px 40px 80px rgba(0,0,0,0.3)',
              marginTop: '10px'
            }}>
              <p style={{ marginBottom: '20px', fontSize: '1.3rem', fontWeight: '600', color: '#fff', lineHeight: '1.4' }}>
                We know that buying land is not a small decision. It's years of savings, months of research, and the weight of getting it right.
              </p>
              <p style={{ marginBottom: '30px', opacity: 0.8, fontSize: '1.05rem' }}>
                You deserve honest answers from people who know the projects inside out — not a sales pitch. Whether you're just exploring or ready to book, we're here to guide you with transparency.
              </p>
              <div style={{ display: 'flex', gap: '50px' }}>
                <div className="reveal-text delay-4">
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '2px' }}>10:00 AM</div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6, fontWeight: '700' }}>Daily Availability</div>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div className="reveal-text delay-4" style={{ animationDelay: '1s' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '2px' }}>Personal</div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6, fontWeight: '700' }}>Direct Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">

        <hr style={{ margin: '60px 0', opacity: '0.1' }} />
        {/* Contact Details & Form Section */}
        <div className="content-block reveal-text delay-2" style={{ marginTop: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'start' }}>
            
            {/* Left Column: Contact Info */}
            <div className="contact-info-column">
              <h2 style={{ fontSize: '3rem', marginBottom: '40px', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>Contact Details</h2>
              
              <div className="contact-info-grid">
                <div className="reveal-text delay-2" style={{ marginBottom: '35px', display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '15px', borderRadius: '15px', border: '1px solid var(--border-subtle)' }}>
                    <Phone size={24} color="var(--accent-gold)" />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone / WhatsApp:</h4>
                    <a href="tel:+917054550296" style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', textDecoration: 'none' }}>+91 70545 50296</a>
                  </div>
                </div>

                <div className="reveal-text delay-3" style={{ marginBottom: '35px', display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '15px', borderRadius: '15px', border: '1px solid var(--border-subtle)' }}>
                    <Mail size={24} color="var(--accent-gold)" />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Email:</h4>
                    <a href="mailto:info@pbdgroup.in" style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--text-primary)', textDecoration: 'none' }}>info@pbdgroup.in</a>
                  </div>
                </div>

                <div className="reveal-text delay-4" style={{ marginBottom: '35px', display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '15px', borderRadius: '15px', border: '1px solid var(--border-subtle)' }}>
                    <Clock size={24} color="var(--accent-gold)" />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Office Hours:</h4>
                    <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>Mon – Sat: 10:00 AM – 6:00 PM</p>
                    <p style={{ margin: 0, fontSize: '1rem', opacity: 0.6 }}>Wednesday: By appointment only</p>
                  </div>
                </div>

                <div className="reveal-text delay-4" style={{ animationDelay: '1.2s', marginBottom: '35px', display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '15px', borderRadius: '15px', border: '1px solid var(--border-subtle)' }}>
                    <MapPin size={24} color="var(--accent-gold)" />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Office Address:</h4>
                    <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '500' }}>Sai Tower, Second Floor, Near Dental Hospital,<br />Raebarelli Road— Lucknow, UP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-section reveal-text delay-4" style={{ animationDelay: '1s' }}>
              <div style={{ 
                background: '#ffffff', 
                padding: '50px', 
                borderRadius: '30px', 
                border: '1px solid var(--border-subtle)', 
                boxShadow: '0 30px 100px rgba(0,0,0,0.08)',
                borderTop: '6px solid var(--accent-gold)'
              }}>
                <div style={{ marginBottom: '35px' }}>
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '10px', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>Send us a Message</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    Quick response, real information, zero pressure.
                  </p>
                </div>
                
                <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <input type="text" placeholder="Your Name" style={{ width: '100%', background: '#f8f8f8', border: '1px solid #eee', padding: '18px 25px', borderRadius: '12px', color: '#111', fontSize: '1rem', outline: 'none' }} />
                    <input type="email" placeholder="Email Address" style={{ width: '100%', background: '#f8f8f8', border: '1px solid #eee', padding: '18px 25px', borderRadius: '12px', color: '#111', fontSize: '1rem', outline: 'none' }} />
                  </div>
                  
                  <input type="tel" placeholder="Phone Number" style={{ width: '100%', background: '#f8f8f8', border: '1px solid #eee', padding: '18px 25px', borderRadius: '12px', color: '#111', fontSize: '1rem', outline: 'none' }} />
                  
                  <div style={{ position: 'relative' }}>
                    <select style={{ width: '100%', background: '#f8f8f8', border: '1px solid #eee', padding: '18px 25px', borderRadius: '12px', color: '#555', fontSize: '1rem', cursor: 'pointer', appearance: 'none', outline: 'none' }}>
                      <option value="">Select Project of Interest</option>
                      <option value="shivay">Shivay Residency (Jila Panchayat Approved)</option>
                      <option value="rajgharana">Rajgharana</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    <div style={{ position: 'absolute', right: '25px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                      <CheckCircle2 size={18} color="var(--accent-gold)" />
                    </div>
                  </div>
                  
                  <textarea placeholder="How can we help you?" rows="5" style={{ width: '100%', background: '#f8f8f8', border: '1px solid #eee', padding: '18px 25px', borderRadius: '12px', color: '#111', fontSize: '1rem', resize: 'none', outline: 'none' }}></textarea>
                  
                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '20px', fontSize: '1.2rem', fontWeight: '800', borderRadius: '12px', cursor: 'pointer', marginTop: '10px' }}>
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ margin: '60px 0', opacity: '0.1' }} />

        {/* WhatsApp Chat Section */}
        <div className="content-block reveal-text delay-2" style={{ background: 'rgba(37, 211, 102, 0.05)', padding: '50px', borderRadius: '24px', border: '1px solid rgba(37, 211, 102, 0.2)' }}>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="reveal-text delay-3" style={{ background: '#25D366', padding: '20px', borderRadius: '20px', color: 'white' }}>
              <MessageCircle size={48} />
            </div>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2 className="reveal-text delay-3" style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#128C7E', fontWeight: '800' }}>Quick Questions? We're on WhatsApp.</h2>
              <p className="reveal-text delay-4" style={{ fontSize: '1.15rem', marginBottom: '25px', lineHeight: '1.7', opacity: 0.9 }}>Getting answers shouldn't require you to fill a form and wait three days. Drop us a WhatsApp message and we'll respond personally — with real information, not automated replies.</p>
              <a href="https://wa.me/917054550296" target="_blank" rel="noopener noreferrer" className="reveal-text delay-4" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#25D366', color: 'white', padding: '18px 35px', borderRadius: '12px', fontSize: '1.25rem', fontWeight: '700', textDecoration: 'none', boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)' }}>
                Click to Chat: +91 70545 50296
              </a>
            </div>
          </div>
        </div>

        <hr style={{ margin: '60px 0', opacity: '0.1' }} />

        {/* Why Choose PBD Section */}
        <div className="content-block reveal-text delay-2" style={{ marginBottom: '100px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: '800' }}>Why Choose PBD</h2>
          <h3 className="reveal-text delay-3" style={{ color: 'var(--accent-gold)', fontSize: '1.8rem', marginBottom: '30px', fontWeight: '700' }}>We Don't Just Promise. We've Already Proven.</h3>
          <p className="reveal-text delay-3" style={{ fontSize: '1.2rem', marginBottom: '50px', maxWidth: '1000px', lineHeight: '1.8', opacity: 0.85 }}>In a market where every developer claims to be trustworthy, PBD offers something different: verifiable evidence. Two projects fully delivered. Two communities of real families living on land they bought from us, exactly as we described it.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px' }}>
            {[
              {
                title: "1. Proven Delivery — Not Just Promises",
                desc: "Rajgharana and 2 More Projects are done. Complete. Families are home. Before you consider any developer for your land purchase, ask them: have you delivered before? We'll show you two colonies where you can meet the residents and see the answer for yourself."
              },
              {
                title: "2. Legal Documentation You Can Trust",
                desc: "Every active PBD project comes with complete, verified legal documentation — clear khasra/khatauni records, defined plot boundaries, and a buying process where you're never asked to sign something you don't understand. Our flagship project, Shivay Residency, carries full Jila Panchayat approval — the highest standard of regulatory clearance available."
              },
              {
                title: "3. Location That Works For You",
                desc: "All our projects sit on the Raebareli Road corridor — one of Lucknow's most rapidly appreciating real estate zones. Direct connectivity to the Outer Ring Road, Shahid Path, Sultanpur Road, Link Expressway, Metro, Sushant Golf City, IT City, and Awas Vikas means your investment is in a location that will only grow in value."
              },
              {
                title: "4. Transparent Pricing — What You See Is What You Pay",
                desc: "We quote a price. That's the price. No hidden charges. No last-minute add-ons. No fees that \"weren't mentioned earlier.\" Every cost is disclosed upfront, in writing, before you make any commitment."
              },
              {
                title: "5. Flexible EMI Plans Designed for Real Families",
                desc: "We understand what it means to save for land while managing monthly expenses. Our EMI structures are designed to make land ownership genuinely achievable — not just theoretically possible. Speak to our team and we'll help you find a payment plan that makes real sense for your situation."
              },
              {
                title: "6. Trusted by Senior Government Officials",
                desc: "IAS and IPS officers — professionals trained to scrutinize decisions carefully — have chosen to invest in PBD projects. That level of trust from people in positions of verified judgment is not something you earn with promises. You earn it with documentation, delivery, and honesty."
              },
              {
                title: "7. Buyer Guidance, Not Sales Pressure",
                desc: "Our team's job is not to close deals. It's to help you make the right decision for your family. If a project isn't right for you, we'll tell you. If you need more time, we'll support that. We'd rather have a buyer who is fully confident than a buyer who feels rushed."
              },
              {
                title: "8. A Relationship That Doesn't End at Registry",
                desc: "The families in our delivered colonies still call us. Not with complaints — but with referrals. Because they know that PBD showed up during the process, and PBD will show up after. That's the kind of company we built. And that's the kind of relationship you'll have with us."
              }
            ].map((item, idx) => (
              <div key={idx} className="value-item" style={{ height: 'auto' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <CheckCircle2 size={24} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0, fontWeight: '700' }}>{item.title}</h4>
                </div>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginLeft: '39px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ margin: '80px 0', opacity: '0.1' }} />

        {/* Location Visuals Section - Moved to End */}
        <div className="content-block reveal-text delay-2" style={{ marginBottom: '100px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', fontWeight: '800' }}>Visit Our Office</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
            <div style={{ width: '100%', height: '400px', background: 'var(--bg-secondary)', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-subtle)', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="PBD Office" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '25px', left: '25px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '8px 20px', borderRadius: '30px', fontSize: '1rem', backdropFilter: 'blur(10px)', fontWeight: '600' }}>
                Main Office Lobby — Sai Tower
              </div>
            </div>
            <div style={{ width: '100%', height: '400px', background: 'var(--bg-secondary)', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-subtle)', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
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
