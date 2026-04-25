import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import FlashDealsBanner from '../components/FlashDealsBanner';
import { ProjectCard } from '../components/ProjectsSection';
import { projects } from '../data/projects';
import '../components/ProjectsSection.css';
import './PageStyles.css';

const Projects = () => {
  const location = useLocation();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilters, setActiveFilters] = useState(null);

  useEffect(() => {
    if (location.state && location.state.filters) {
      handleSearch(location.state.filters);
      setActiveFilters(location.state.filters);
    }
  }, [location.state]);

  const handleSearch = (filters) => {
    setActiveFilters(filters);
    
    const results = projects.filter(project => {
      if (filters.location !== 'All Locations' && !project.location.includes(filters.location)) return false;
      if (filters.type !== 'All Types' && project.type !== filters.type) return false;
      return true;
    });
    
    setFilteredProjects(results);
  };

  return (
    <div className="page-wrapper fade-in">
      <header className="page-hero-header projects-header">
        <div className="container">
          <div className="hero-grid-about">
            <div className="hero-text-side">
              <span className="badge-gold">OUR PORTFOLIO</span>
              <h1 className="hero-title-large">
                Our Projects.<br />
                <span className="text-gold">Your Future Home.</span>
              </h1>
              
              <div className="hero-glass-box">
                <p className="glass-lead">
                  Explore our curated catalog of premium, legally approved real estate along the Raebareli Road corridor, Lucknow.
                </p>
                <p className="glass-body">
                  Every PBD project is selected for its strategic location, verified documentation, and long-term appreciation potential.
                </p>
                <div className="glass-stats">
                  <div className="glass-stat">
                    <div className="stat-val">100%</div>
                    <div className="stat-lab">Legal Clarity</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="glass-stat">
                    <div className="stat-val">Prime</div>
                    <div className="stat-lab">Locations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <FlashDealsBanner />
      
      <div className="container section-padding">
        <div className="projects-filter-wrapper">
          <SearchBar onSearch={handleSearch} />
          {activeFilters && (
            <p className="filter-results-info">
              Showing {filteredProjects.length} projects matching your criteria.
            </p>
          )}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects-grid listing-grid">
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                {...project}
              />
            ))}
          </div>
        ) : (
          <div className="no-results-box">
            <h3>No projects found matching your criteria.</h3>
            <p>Try adjusting your filters or clearing them to see all properties.</p>
            <button className="btn-primary" onClick={() => {
              setActiveFilters(null);
              setFilteredProjects(projects);
            }}>Clear All Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
