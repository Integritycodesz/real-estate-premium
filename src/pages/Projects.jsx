import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
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
      // Basic matching for projects since they have different fields than properties
      if (filters.location !== 'All Locations' && !project.location.includes(filters.location)) return false;
      if (filters.type !== 'All Types' && project.type !== filters.type) return false;
      // We ignore bedrooms/bathrooms/price for now as they are not structured the same way
      return true;
    });
    
    setFilteredProjects(results);
  };

  return (
    <div className="page-wrapper fade-in">
      <div className="page-hero-header projects-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Explore our catalog of premium, legally approved real estate in Lucknow's most promising corridors.</p>
        </div>
      </div>
      
      <div className="container">

        
        <div className="projects-filter-section" style={{marginBottom: '60px'}}>
          <SearchBar onSearch={handleSearch} />
          {activeFilters && (
            <p style={{marginTop: '20px', color: 'var(--text-secondary)'}}>
              Showing {filteredProjects.length} projects matching your criteria.
            </p>
          )}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects-grid" style={{ marginBottom: '100px' }}>
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                {...project}
              />
            ))}
          </div>
        ) : (
          <div style={{padding: '100px 0', textAlign: 'center', marginBottom: '100px'}}>
            <h3>No projects found matching your criteria.</h3>
            <p style={{color: 'var(--text-secondary)', marginTop: '10px'}}>Try adjusting your filters.</p>
            <button className="btn-primary" style={{marginTop: '20px'}} onClick={() => {
              setActiveFilters(null);
              setFilteredProjects(projects);
            }}>Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
