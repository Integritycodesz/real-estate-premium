import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import FlashDealsBanner from '../components/FlashDealsBanner';
import { ProjectCard } from '../components/ProjectsSection';
import { projects } from '../data/projects';
import DeveloperAbout from '../components/DeveloperAbout';
import ChannelPartner from '../components/ChannelPartner';
import FAQSection from '../components/FAQSection';
import DistanceTable from '../components/DistanceTable';
import '../components/ProjectsSection.css';
import './PageStyles.css';

const Projects = () => {
  const location = useLocation();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilters, setActiveFilters] = useState(null);

  const handleSearch = (filters) => {
    setActiveFilters(filters);
    
    const results = projects.filter(project => {
      if (filters.location !== 'All Locations' && !project.location.includes(filters.location)) return false;
      if (filters.type !== 'All Types' && project.type !== filters.type) return false;
      return true;
    });
    
    setFilteredProjects(results);
  };

  useEffect(() => {
    if (location.state && location.state.filters) {
      const timer = setTimeout(() => {
        handleSearch(location.state.filters);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="page-wrapper fade-in">
      <header className="page-hero-header projects-header">
        <div className="container">
          <div className="hero-grid-about">
            <div className="hero-text-side">
              <span className="badge-gold">OUR PORTFOLIO</span>
              <h1 className="hero-title-large">
                Verified Land.<br />
                <span className="text-gold">Real Delivery.</span>
              </h1>
              
              <div className="hero-glass-box">
                <p className="glass-lead">
                  Explore Lucknow’s primary growth corridors with 100% legally cleared residential plots.
                </p>
                <p className="glass-body">
                  Join 500+ families already living in our fully delivered estates along the Raebareli Road corridor.
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

      <div className="container">
        <DistanceTable />
      </div>

      <section className="projects-faq-section section-padding">
        <div className="container">
          <FAQSection faqs={[]} /> {/* Empty array for faqs will fallback to globalFaqs */}
        </div>
      </section>

      <DeveloperAbout />
      <ChannelPartner />
    </div>
  );
};

export default Projects;
