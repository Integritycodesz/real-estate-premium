import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { locations, propertyTypes } from '../data/properties';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    location: 'All Locations',
    type: 'All Types',
    minPrice: '',
    maxPrice: ''
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
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

          <div className="search-field price-field">
            <label>Price Range (₹)</label>
            <div className="price-inputs">
              <input type="number" name="minPrice" placeholder="Min" value={filters.minPrice} onChange={handleChange} />
              <span>-</span>
              <input type="number" name="maxPrice" placeholder="Max" value={filters.maxPrice} onChange={handleChange} />
            </div>
          </div>
        </div>
        
        <button className="search-button" onClick={handleSearch}>
          <Search size={20} />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};


export default SearchBar;
