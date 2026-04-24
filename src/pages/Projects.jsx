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
          <div style={{ maxWidth: '800px' }}>
            <div style={{ paddingLeft: '40px' }}>
              <p className="reveal-text delay-1" style={{ textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--accent-gold)', marginBottom: '15px', fontWeight: '700', fontSize: '0.9rem' }}>
                OUR PORTFOLIO
              </p>
              <h1 className="reveal-text delay-2" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.4)', marginBottom: '20px', fontSize: '5rem', lineHeight: '1', fontWeight: '800', letterSpacing: '-1px' }}>
                Our Projects.<br />
                <span style={{ color: 'var(--accent-gold)' }}>Your Future Home.</span>
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
                Explore our curated catalog of premium, legally approved real estate across Lucknow's most promising development corridors.
              </p>
              <p style={{ marginBottom: '30px', opacity: 0.8, fontSize: '1.05rem' }}>
                Every PBD project is selected for its strategic location, verified documentation, and long-term appreciation potential. We don't just sell plots; we deliver secure foundations for your family's future.
              </p>
              <div style={{ display: 'flex', gap: '50px' }}>
                <div className="reveal-text delay-4">
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '2px' }}>100%</div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6, fontWeight: '700' }}>Legal Clarity</div>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div className="reveal-text delay-4" style={{ animationDelay: '1s' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '2px' }}>Prime</div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6, fontWeight: '700' }}>Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FlashDealsBanner />
      
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
