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

      {/* Dynamic Header / Breadcrumb */}
      <div className="project-nav-bar">
        <div className="container">
          <Link to="/projects" className="back-link">
            <ChevronLeft size={20} />
            <span>Back to Projects</span>
          </Link>
          <div className="project-actions-quick">
            <button className="action-btn"><Share2 size={18} /></button>
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
