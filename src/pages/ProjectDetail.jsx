import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { 
  MapPin, 
  CheckCircle2, 
  ChevronLeft, 
  Maximize2, 
  Clock, 
  ShieldCheck, 
  Share2, 
  Heart,
  PhoneCall,
  MessageCircle,
  X
} from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import FlashDealsBanner from '../components/FlashDealsBanner';
import LeadMagnet from '../components/LeadMagnet';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showGallery]);

  if (!project) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Project Not Found</h2>
        <Link to="/projects" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Projects</Link>
      </div>
    );
  }

  const handleShare = () => {
    const shareUrl = window.location.href;
    const shareText = `Check out this premium project "${project.title}" at ${project.location} on PBD Group:`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + "\n" + shareUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="project-detail-page fade-in">
      {/* Gallery Modal */}
      {showGallery && (
        <div className="gallery-modal" onClick={() => setShowGallery(false)}>
          <button className="close-gallery" onClick={(e) => { e.stopPropagation(); setShowGallery(false); }}>
            <X size={32} />
          </button>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <div className="gallery-grid-full">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="gallery-item-full">
                  <img src={img} alt={`${project.title} gallery ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {!showGallery && <FlashDealsBanner />}

      {/* Breadcrumb Bar */}
      <div className="project-nav-bar">
        <div className="container">
          <div className="nav-bar-flex">
            <Link to="/projects" className="back-link">
              <ChevronLeft size={20} />
              <span>Explore All Projects</span>
            </Link>
            <div className="project-actions-quick">
              <button className="action-btn" onClick={handleShare} title="Share on WhatsApp"><Share2 size={18} /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="project-detail-grid">
          {/* Main Content Area */}
          <div className="project-main-area">
            <header className="project-main-header">
              <div className="header-meta">
                <span className="badge-type">{project.type}</span>
                <span className={`badge-status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span>
              </div>
              <h1 className="project-title-large">{project.title}</h1>
              <p className="project-location-full">
                <MapPin size={20} />
                {project.location}
              </p>
            </header>

            {/* Gallery / Main Image */}
            <section className="project-gallery-section">
              <div className="gallery-main-frame">
                <img src={project.image} alt={project.title} className="gallery-hero-img" />
                <button className="expand-gallery-trigger" onClick={() => setShowGallery(true)}>
                  <Maximize2 size={20} />
                  <span>View Gallery</span>
                </button>
              </div>
            </section>

            <section className="detail-content-section">
              <div className="detail-block">
                <h3>About the Project</h3>
                <p className="text-body-large">{project.description}</p>
              </div>

              <div className="detail-block">
                <h3>Core Features</h3>
                <div className="features-list-grid">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="feature-pill">
                      <CheckCircle2 size={18} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-block">
                <h3>Modern Amenities</h3>
                <div className="amenities-tag-cloud">
                  {project.amenities.map((amenity, idx) => (
                    <div key={idx} className="amenity-tag">
                      <div className="tag-dot"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-block">
                <h3>Downloads & Resources</h3>
                <div className="lead-magnets-container">
                  <LeadMagnet 
                    title="Official Price List 2026" 
                    description="Get the latest plot-wise pricing and current payment plans."
                    magnetType="Price Chart"
                    fileUrl={project.priceListUrl}
                  />
                  <LeadMagnet 
                    title="Layout & Site Map" 
                    description="Detailed blueprint showing available plots and common amenities."
                    magnetType="Site Plan"
                    fileUrl={project.sitemapUrl}
                  />
                </div>
              </div>

              <div className="detail-block">
                <h3>Specifications</h3>
                <div className="specs-grid-compact">
                  {Object.entries(project.specifications).map(([key, value], idx) => (
                    <div key={idx} className="spec-item">
                      <span className="spec-label">{key}</span>
                      <span className="spec-val">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-block connectivity-block">
                <div className="block-header">
                  <span className="pre-title">LOCATION ADVANTAGE</span>
                  <h3>Connectivity & Proximity</h3>
                </div>
                
                <div className="connectivity-flex-container">
                  <div className="connectivity-list-premium">
                    {[
                      { l: "Raebareli Main Road", t: "Immediate" },
                      { l: "Outer Ring Road", t: "5 mins" },
                      { l: "Shaheed Path", t: "10 mins" },
                      { l: "Lulu Mall / Plassio", t: "15 mins" },
                      { l: "Lucknow Airport", t: "20 mins" }
                    ].map((item, idx) => (
                      <div key={idx} className="conn-row">
                        <span className="conn-landmark">{item.l}</span>
                        <span className="conn-time">{item.t}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="map-embed-frame">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56963.53507198755!2d80.95759795000001!3d26.7536965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3893693e507%3A0x7d67280f5313d39c!2sRaebareli%20Rd%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714044000000!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      title="Location Map"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="detail-block inquiry-anchor">
                <InquiryForm projectTitle={project.title} />
              </div>
            </section>
          </div>

          {/* Sticky Sidebar Area */}
          <aside className="project-detail-sidebar">
            <div className="sidebar-sticky-box">
              <div className="price-card-glass">
                <span className="price-meta">Investment Starts From</span>
                <div className="main-price">
                    <span className="currency-symbol">₹</span>
                    {project.price.replace('₹', '')}
                  </div>
                <p className="price-terms">*All-inclusive transparent pricing.</p>
                
                <div className="sidebar-action-group">
                  <Link to="/contact" className="btn-call-action">
                    <PhoneCall size={20} />
                    <span>Request Site Visit</span>
                  </Link>
                  <a 
                    href={`https://wa.me/917054550296?text=Interested in ${project.title}. Please share details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-action"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

                <div className="trust-footer-sidebar">
                  <div className="trust-info">
                    <span className="trust-label">Managed By</span>
                    <span className="trust-name">PBD Group</span>
                  </div>
                  <ShieldCheck size={28} className="trust-verified-icon" />
                </div>
              </div>

              <div className="quick-facts-card">
                <div className="fact-item">
                  <Clock size={18} />
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="fact-item">
                  <ShieldCheck size={18} />
                  <span>100% Legal Clearances</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      
    </div>
  );
};

export default ProjectDetail;
