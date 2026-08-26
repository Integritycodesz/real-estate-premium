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
    const isDefault = 
      (!filters.location || filters.location === 'All Locations') &&
      (!filters.type || filters.type === 'All Types') &&
      (!filters.priceRange || filters.priceRange === 'All Prices');

    setActiveFilters(isDefault ? null : filters);
    
    const results = projects.filter(project => {
      // 1. Location filter
      if (filters.location && filters.location !== 'All Locations') {
        const hasLocationMatch = 
          project.locationFilter?.includes(filters.location) ||
          project.location?.toLowerCase().includes(filters.location.toLowerCase());
        if (!hasLocationMatch) return false;
      }
      
      // 2. Plot Type filter
      if (filters.type && filters.type !== 'All Types') {
        const typeNorm = filters.type.toLowerCase();
        const hasTypeMatch = 
          project.typeFilter?.some(t => t.toLowerCase() === typeNorm || t.toLowerCase().includes(typeNorm)) ||
          project.type?.toLowerCase().includes(typeNorm) ||
          (typeNorm.startsWith('residen') && project.type?.toLowerCase().includes('residential')) ||
          (typeNorm.startsWith('residen') && project.typeFilter?.includes('Residential'));
        if (!hasTypeMatch) return false;
      }

      // 3. Price Range filter
      if (filters.priceRange && filters.priceRange !== 'All Prices') {
        const minP = project.minPrice || 1000000;
        const maxP = project.maxPrice || 10000000;

        if (filters.priceRange === '1500000-2000000') {
          if (minP > 2000000 || maxP < 1500000) return false;
        } else if (filters.priceRange === '2000000-3000000') {
          if (minP > 3000000 || maxP < 2000000) return false;
        } else if (filters.priceRange === '3000000-4000000') {
          if (minP > 4000000 || maxP < 3000000) return false;
        } else if (filters.priceRange === '5000000+') {
          if (maxP < 5000000) return false;
        }
      }
      
      return true;
    });
    
    setFilteredProjects(results);
  };

  const handleClearFilters = () => {
    setActiveFilters(null);
    setFilteredProjects(projects);
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
          <SearchBar onSearch={handleSearch} initialFilters={activeFilters} />
          {activeFilters && (
            <div className="filter-results-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px 0' }}>
              <p className="filter-results-info" style={{ margin: 0 }}>
                Showing <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'} matching your criteria.
              </p>
              <button 
                onClick={handleClearFilters}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--accent-gold, #c5a869)', 
                  cursor: 'pointer', 
                  fontSize: '0.85rem', 
                  textDecoration: 'underline',
                  fontWeight: 600
                }}
              >
                Reset Filters
              </button>
            </div>
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
            <button className="btn-primary" onClick={handleClearFilters}>Clear All Filters</button>
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
