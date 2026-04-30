import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectsSection.css';

import { MapPin, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export const ProjectCard = ({ id, title, location, image, features, type, price, commercialPrice, status, approvalBadge }) => {
  const isSoldOut = status.toLowerCase().includes('sold out');
  const isApproved = features.some(f => f.toLowerCase().includes('approved'));

  return (
    <div className={`project-card ${isSoldOut ? 'sold-out' : ''}`} data-type={type}>
      <div className="project-image-wrapper">
        <div
          className="project-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={`project-status status-${(status || 'Available').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
          {status || 'Available'}
        </div>
        {isApproved && (
          <div className="approval-badge">
            <ShieldCheck size={14} /> 
            {approvalBadge || "Govt. Approved"}
          </div>
        )}
        <div className="project-overlay"></div>
      </div>
      <div className="project-content">
        <span className="project-location"><MapPin size={14} /> {location}</span>
        <h3 className="project-title">{title}</h3>
        <ul className="project-features">
          {features.slice(0, 3).map((feature, idx) => (
            <li key={idx}><Zap size={12} className="text-gold" /> {feature}</li>
          ))}
        </ul>
        <div className="project-actions">
          <Link to={`/project/${id}`} className="btn-outline project-btn">
             Details <ArrowRight size={16} />
          </Link>
          <div className="project-pricing-dual">
            <div className="price-item">
              <span className="price-label">Residential</span>
              <span className="price-value">{price}</span>
            </div>
            {commercialPrice ? (
              <div className="price-item commercial">
                <span className="price-label">Commercial</span>
                <span className="price-value">{commercialPrice}</span>
              </div>
            ) : (
              <div className="price-item commercial-cta">
                <span className="price-label">Commercial</span>
                <Link to={`/project/${id}`} className="contact-team-link">Contact for Price</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const featuredProjectIds = ['shivay-residency', 'shivdhara-residency', 'hanumant-dham', 'muralia-garden'];
  const filteredProjects = projects.filter(p => featuredProjectIds.includes(p.id));

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Exclusive Portfolios</span>
          <h2>Choose From <span className="text-gold">Verified & High-Growth Projects</span></h2>
          <p className="section-desc">Strategic investments in Lucknow's most promising locations, chosen for their growth potential and legal clarity.</p>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="view-more-container" style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/projects" className="btn-primary btn-large">
            Explore All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
