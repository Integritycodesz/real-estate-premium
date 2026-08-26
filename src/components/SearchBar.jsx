import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { locations, propertyTypes, priceRanges } from '../data/properties';
import './SearchBar.css';

const SearchBar = ({ onSearch, initialFilters }) => {
  const [filters, setFilters] = useState({
    location: initialFilters?.location || 'All Locations',
    type: initialFilters?.type || 'All Types',
    priceRange: initialFilters?.priceRange || 'All Prices'
  });

  useEffect(() => {
    if (initialFilters) {
      setFilters({
        location: initialFilters.location || 'All Locations',
        type: initialFilters.type || 'All Types',
        priceRange: initialFilters.priceRange || 'All Prices'
      });
    } else {
      setFilters({
        location: 'All Locations',
        type: 'All Types',
        priceRange: 'All Prices'
      });
    }
  }, [initialFilters]);

  const handleChange = (e) => {
    const updated = { ...filters, [e.target.name]: e.target.value };
    setFilters(updated);
    if (onSearch) onSearch(updated);
  };

  const handleSearch = () => {
    if (onSearch) onSearch(filters);
  };

  return (
    <div className="search-bar-wrapper fade-in">
      <div className="search-bar-container">
        <div className="search-fields">
          <div className="search-field">
            <label>Location</label>
            <select name="location" value={filters.location} onChange={handleChange}>
              {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>
          </div>
          
          <div className="search-field">
            <label>Plot type</label>
            <select name="type" value={filters.type} onChange={handleChange}>
              {propertyTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>

          <div className="search-field">
            <label>Price Range (₹)</label>
            <select name="priceRange" value={filters.priceRange} onChange={handleChange}>
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>
        </div>
        
        <button className="search-button" onClick={handleSearch} type="button">
          <Search size={20} />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

