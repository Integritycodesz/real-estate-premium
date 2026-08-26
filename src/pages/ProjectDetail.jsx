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
  TrendingUp,
  X,
  Download
} from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import FlashDealsBanner from '../components/FlashDealsBanner';
import LeadMagnet from '../components/LeadMagnet';
import ScarcityBar from '../components/ScarcityBar';
import FAQSection from '../components/FAQSection';
import PlotInvestmentCalculator from '../components/PlotInvestmentCalculator';
import AmenitiesGrid from '../components/AmenitiesGrid';
import StrategicPositioning from '../components/StrategicPositioning';
import DroneTour from '../components/DroneTour';
import ProjectStickyCTA from '../components/ProjectStickyCTA';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Implementation
    if (project && project.seo) {
      document.title = project.seo.title;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', project.seo.description);
      }
      
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', project.seo.keywords);
      }
    }
  }, [project]);

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
      {/* Gallery Modal — shows ONLY this project's photos */}
      {showGallery && (
        <div className="gallery-modal" onClick={() => setShowGallery(false)}>
          <button className="close-gallery" onClick={(e) => { e.stopPropagation(); setShowGallery(false); }}>
            <X size={32} />
          </button>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <div className="gallery-modal-header">
              <h2>{project.title} — Site Gallery & Drone Tours</h2>
              <span className="gallery-count-badge">
                {(project.gallery?.length || 0) + (project.droneVideos?.length || 0)} Items
              </span>
            </div>
            <div className="gallery-grid-full">
              {/* Drone Videos First */}
              {project.droneVideos?.map((vid, idx) => (
                <div key={`vid-${idx}`} className="gallery-item-full video-item">
                  <video 
                    src={vid} 
                    poster={project.image} 
                    controls 
                    playsInline
                    className="gallery-video-player"
                  />
                  <div className="gallery-item-label">
                    <span>Drone Tour {idx + 1}</span>
                  </div>
                </div>
              ))}
              
              {/* Photos */}
              {project.gallery.map((img, idx) => (
                <div key={`img-${idx}`} className="gallery-item-full">
                  <img src={img} alt={`${project.title} — Photo ${idx + 1}`} />
                  <div className="gallery-item-label">
                    <span>{project.title}</span>
                    <span className="gallery-item-num">{idx + 1} / {project.gallery.length}</span>
                  </div>
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

      <div className="project-landing-layout">
        {/* HERO & GALLERY SECTION */}
        <section className="project-hero-layout-premium">
          <div className="container">
            <div className="hero-top-info">
              <div className="header-meta">
                <span className="badge-type">{project.type}</span>
                {project.status && <span className={`badge-status ${project.status.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{project.status}</span>}
                {project.approvalBadge && <span className="badge-status approval">{project.approvalBadge}</span>}
              </div>
              <h1 className="project-title-xl">{project.h1Title || project.title}</h1>
              <p className="project-location-xl">
                <MapPin size={24} />
                {project.location}
              </p>

              {project.scarcityPercentage && (
                <div className="hero-scarcity-wrapper">
                  <ScarcityBar 
                    percentage={project.scarcityPercentage} 
                    urgencyLine={project.urgencyLine} 
                  />
                </div>
              )}
              
              {project.subheading && <p className="project-subheading-xl">{project.subheading}</p>}
            </div>

            <div className="gallery-main-frame">
              <img src={project.image} alt={project.title} className="gallery-hero-img" />
              <button className="expand-gallery-trigger" onClick={() => setShowGallery(true)}>
                <Maximize2 size={20} />
                <span>Explore Site Gallery</span>
              </button>
            </div>

            <div className="project-summary-ribbon">
              <div className="summary-item">
                <ShieldCheck />
                <span>100% Legal Clearances</span>
              </div>
              <div className="summary-item">
                <Clock />
                <span>Ready for Registry</span>
              </div>
              <div className="summary-item">
                <TrendingUp />
                <span>High Growth Corridor</span>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING & CALCULATOR */}
        <PlotInvestmentCalculator 
          initialRate={parseInt(project.price.replace(/[^\d]/g, '')) || 1900} 
          commercialRate={project.commercialPrice && /\d/.test(project.commercialPrice) ? parseInt(project.commercialPrice.replace(/[^\d]/g, '')) : null}
          projectTitle={project.title}
        />

        {/* DETAILED PRICING TABLE (PDF DATA) */}
        {project.pricingTable && (
          <section className="project-pricing-table-section section-padding">
            <div className="container">
              <div className="pricing-table-header">
                <span className="pre-title-center">PRICING STRUCTURE</span>
                <h2 className="section-title-center">Detailed Plot Sizing</h2>
              </div>
              <div className="pricing-table-wrapper-premium">
                <table className="pricing-table-refined">
                  <thead>
                    <tr>
                      <th>Configuration</th>
                      <th>Size / Area</th>
                      <th>Price / Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.pricingTable.map((row, idx) => (
                      <tr key={idx} className={row.config.includes('Commercial') ? 'row-commercial' : ''}>
                        <td className="col-config">{row.config}</td>
                        <td className="col-size">{row.size}</td>
                        <td className="col-price">
                          {row.price ? (
                            row.price
                          ) : (
                            <a 
                              href={`https://wa.me/919918231010?text=I'm interested in ${row.config} for ${project.title}. Please share more information.`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="btn-table-cta"
                            >
                              Connect with Team
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="pricing-disclaimer-bottom">
                  *Prices mentioned are base rates. Registration, development charges, and corner premiums extra.
                </p>
                {project.id !== 'green-garden' && (
                  <div className="project-downloads-wrapper" style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
                    <a href={`/downloads/${project.id === 'muralia-garden' ? 'muraliya-garden' : project.id}/sitemap.pdf`} download className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Download size={18} />
                      Download Site Map
                    </a>
                    <a href={`/downloads/${project.id === 'muralia-garden' ? 'muraliya-garden' : project.id}/pricelist.pdf`} download className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Download size={18} />
                      Download Price List
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* AMENITIES SECTION */}
        <AmenitiesGrid project={project} />

        {/* STRATEGIC POSITIONING (DARK) */}
        <StrategicPositioning project={project} />

        {/* DRONE TOUR SECTION */}
        <DroneTour project={project} />

        {/* WHY INVEST NOW SECTION (PDF SOURCED) */}
        {project.whyInvestNow && project.whyInvestNow.length > 0 && (
          <section className="why-invest-now-section section-padding">
            <div className="container">
              <div className="why-invest-box-premium">
                <div className="why-invest-header">
                  <TrendingUp className="trending-icon" size={32} />
                  <h2 className="section-title-premium">Why Invest Now?</h2>
                </div>
                <div className="why-invest-grid">
                  {project.whyInvestNow.map((reason, idx) => (
                    <div key={idx} className="invest-reason-card">
                      <div className="reason-number">0{idx + 1}</div>
                      <p>{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PROJECT LOCATION MAP */}
        {project.mapEmbedUrl && (
          <section className="project-map-section">
            <div className="container">
              <div className="section-header">
                <span className="subtitle">Location</span>
                <h2>Explore the <span className="text-gold">Surroundings</span></h2>
              </div>
              <div className="map-wrapper-premium">
                <iframe 
                  src={project.mapEmbedUrl}
                  width="100%" 
                  height="450" 
                  style={{ border: 0, borderRadius: '20px' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Project Location"
                ></iframe>
              </div>
            </div>
          </section>
        )}

        {/* FAQ & INQUIRY BOTTOM */}
        <section className="final-cta-section">
          <div className="container">
            <div className="final-cta-grid">
              <div className="faq-area-side">
                <FAQSection faqs={project.faqs} />
              </div>
              <div className="inquiry-area-side">
                <div className="sidebar-sticky-box-refined">
                  <div className="inquiry-form-wrapper-final">
                    <h3>Request More Details</h3>
                    <InquiryForm projectTitle={project.title} hideTitle={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <ProjectStickyCTA project={project} />
    </div>
  );
};

export default ProjectDetail;
