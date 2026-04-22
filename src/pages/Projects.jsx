import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import { propertiesData } from '../data/properties';
import './PageStyles.css';

const Projects = () => {
  const location = useLocation();
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [activeFilters, setActiveFilters] = useState(null);

  useEffect(() => {
    if (location.state && location.state.filters) {
      handleSearch(location.state.filters);
      setActiveFilters(location.state.filters);
    }
  }, [location.state]);

  const handleSearch = (filters) => {
    setActiveFilters(filters);
    
    const results = propertiesData.filter(property => {
      if (filters.location !== 'All Locations' && property.location !== filters.location) return false;
      if (filters.type !== 'All Types' && property.propertyType !== filters.type) return false;
      if (filters.bedrooms !== 'Any' && property.bedrooms < parseInt(filters.bedrooms)) return false;
      if (filters.bathrooms !== 'Any' && property.bathrooms < parseInt(filters.bathrooms)) return false;
      if (filters.minPrice && property.priceValue < parseInt(filters.minPrice)) return false;
      if (filters.maxPrice && property.priceValue > parseInt(filters.maxPrice)) return false;
      return true;
    });
    
    setFilteredProperties(results);
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
              Showing {filteredProperties.length} properties matching your criteria.
            </p>
          )}
        </div>

        {filteredProperties.length > 0 ? (
          <div className="property-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px', marginBottom: '100px'}}>
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div style={{padding: '100px 0', textAlign: 'center', marginBottom: '100px'}}>
            <h3>No properties found matching your criteria.</h3>
            <p style={{color: 'var(--text-secondary)', marginTop: '10px'}}>Try adjusting your filters.</p>
            <button className="btn-primary" style={{marginTop: '20px'}} onClick={() => {
              setActiveFilters(null);
              setFilteredProperties(propertiesData);
            }}>Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
