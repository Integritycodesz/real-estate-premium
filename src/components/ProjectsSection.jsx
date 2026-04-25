import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectsSection.css';

export const ProjectCard = ({ id, title, location, image, features, type, price, status }) => {
  return (
    <div className="project-card" data-type={type}>
      <div className="project-image-wrapper">
        <div 
          className="project-image" 
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="project-status">{status || 'Available'}</div>
        <div className="project-overlay"></div>
      </div>
      <div className="project-content">
        <span className="project-location">📍 {location}</span>
        <h3 className="project-title">{title}</h3>
        <ul className="project-features">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <div className="project-actions">
          <Link to={`/project/${id}`} className="btn-outline project-btn">View Details</Link>
          <div className="project-price-start">
            <span className="price-label">Starting Price</span>
            <span className="price-value">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const featuredProjectIds = ['shivay-residency', 'hanumant-dham', 'shivdhara-residency'];
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
