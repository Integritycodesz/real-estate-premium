import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectsSection.css';

export const ProjectCard = ({ id, title, location, image, features, type, price }) => {
  return (
    <div className="project-card" data-type={type}>
      <div className="project-image-wrapper">
        <div 
          className="project-image" 
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="project-status">Available</div>
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
          <span className="project-price-start">Starting from {price}</span>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects.slice(0, 3) 
    : projects.filter(p => p.type === filter).slice(0, 3);

  const categories = ['All', 'Residential Plot', 'Luxury Plot', 'Eco Plot'];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Exclusive Portfolios</span>
          <h2>Featured <span className="text-gold">Projects</span></h2>
          <p className="section-desc">Handpicked premium developments on Lucknow's most promising investment corridors.</p>
          <div className="filter-bar" style={{ marginTop: '30px' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


