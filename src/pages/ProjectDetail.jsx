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
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent scroll when gallery is open
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
    const shareText = `Check out this premium project "${project.title}" at ${project.location} on PBD Groups:`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + "\n" + shareUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="project-detail-page fade-in">
      {/* Gallery Modal */}
      {showGallery && (
        <div className="gallery-modal" onClick={() => setShowGallery(false)}>
          <button className="close-gallery" onClick={() => setShowGallery(false)}>
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

      {/* Dynamic Header / Breadcrumb */}
      <div className="project-nav-bar">
        <div className="container">
          <Link to="/projects" className="back-link">
            <ChevronLeft size={20} />
            <span>Back to Projects</span>
          </Link>
          <div className="project-actions-quick">
            <button className="action-btn" onClick={handleShare} title="Share on WhatsApp"><Share2 size={18} /></button>
            <button className="action-btn"><Heart size={18} /></button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="project-grid">
          {/* Left Column: Details */}
          <div className="project-main">
            <div className="project-header">
              <div className="project-meta-top">
                <span className="type-badge">{project.type}</span>
                <span className="status-badge">{project.status}</span>
              </div>
              <h1>{project.title}</h1>
              <p className="location-text">
                <MapPin size={18} className="text-gold" />
                {project.location}
              </p>
            </div>

            {/* Featured Image / Gallery Preview */}
            <div className="project-gallery-hero">
              <img src={project.image} alt={project.title} className="main-gallery-img" />
              <button className="view-gallery-btn" onClick={() => setShowGallery(true)}>
                <Maximize2 size={18} />
                <span>View All Photos</span>
              </button>
            </div>


            <div className="project-section">
              <h3>Description</h3>
              <p className="description-text">{project.description}</p>
            </div>

            <div className="project-section">
              <h3>Key Features</h3>
              <div className="features-grid">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <CheckCircle2 size={18} className="text-gold" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-section">
              <h3>Amenities</h3>
              <div className="amenities-grid">
                {project.amenities.map((amenity, idx) => (
                  <div key={idx} className="amenity-item">
                    <div className="amenity-dot"></div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-section">
              <h3>Technical Specifications</h3>
              <div className="specs-table">
                {Object.entries(project.specifications).map(([key, value], idx) => (
                  <div key={idx} className="spec-row">
                    <span className="spec-key">{key}</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Advantage Section */}
            <div className="project-section location-advantage-section">
              <span className="subtitle-small">LOCATION ADVANTAGE</span>
              <h2 className="section-title-large">Connectivity & <span className="text-gold">Proximity</span></h2>
              <div className="location-divider"></div>
              
              <div className="connectivity-grid">
                <div className="connectivity-list">
                  <div className="connectivity-item">
                    <span className="landmark">Sultanpur Highway</span>
                    <span className="time text-gold">Immediate</span>
                  </div>
                  <div className="connectivity-item">
                    <span className="landmark">Outer Ring Road</span>
                    <span className="time text-gold">5 minutes</span>
                  </div>
                  <div className="connectivity-item">
                    <span className="landmark">Shaheed Path</span>
                    <span className="time text-gold">10 minutes</span>
                  </div>
                  <div className="connectivity-item">
                    <span className="landmark">Lulu Mall / Plassio</span>
                    <span className="time text-gold">15 minutes</span>
                  </div>
                  <div className="connectivity-item">
                    <span className="landmark">Lucknow Airport</span>
                    <span className="time text-gold">20 minutes</span>
                  </div>
                  <div className="connectivity-item">
                    <span className="landmark">Lucknow Railway Station</span>
                    <span className="time text-gold">25 minutes</span>
                  </div>
                </div>
                
                <div className="location-map-wrapper">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56963.53507198755!2d80.95759795000001!3d26.7536965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3893693e507%3A0x7d67280f5313d39c!2sRaebareli%20Rd%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714044000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, borderRadius: '20px' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Project Location Map"
                  ></iframe>
                  <div className="map-overlay-btn">
                    <span>Open in Maps</span>
                    <Maximize2 size={14} />
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form Section */}
            <div className="project-section">
              <InquiryForm projectTitle={project.title} />
            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <aside className="project-sidebar">
            <div className="sticky-sidebar-content">
              <div className="pricing-card card-premium">
                <span className="price-label">Starting Price</span>
                <div className="price-value text-gold">{project.price}</div>
                <p className="price-note">*Prices are subject to change based on unit availability</p>
                
                <div className="contact-actions">
                  <button className="btn-primary w-full btn-large">
                    <PhoneCall size={18} />
                    Schedule a Visit
                  </button>
                  <a 
                    href={`https://wa.me/917054550296?text=Hello, I'm interested in ${project.title} located at ${project.location}. Please share more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full btn-large"
                  >
                    <MessageCircle size={18} />
                    Inquire on WhatsApp
                  </a>
                </div>

                <div className="agent-preview">
                  <div className="agent-info">
                    <span className="agent-label">Managed By</span>
                    <span className="agent-name">PBD Groups</span>
                  </div>
                  <ShieldCheck size={24} className="text-gold" />
                </div>
              </div>

              <div className="quick-info-card">
                <div className="info-item">
                  <Clock size={20} className="text-gold" />
                  <div>
                    <span className="info-title">Working Hours</span>
                    <span className="info-detail">9:00 AM - 7:00 PM</span>
                  </div>
                </div>
                <div className="info-item" style={{ border: 'none', paddingBottom: 0 }}>
                  <ShieldCheck size={20} className="text-gold" />
                  <div>
                    <span className="info-title">Legal Status</span>
                    <span className="info-detail">100% Documented</span>
                  </div>
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
