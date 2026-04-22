import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { locations, propertyTypes } from '../data/properties';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    location: 'All Locations',
    type: 'All Types',
    bedrooms: 'Any',
    bathrooms: 'Any',
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
            <label>Property type</label>
            <select name="type" value={filters.type} onChange={handleChange}>
              {propertyTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>

          <div className="search-field">
            <label>Bedrooms</label>
            <select name="bedrooms" value={filters.bedrooms} onChange={handleChange}>
              <option value="Any">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          <div className="search-field">
            <label>Bathrooms</label>
            <select name="bathrooms" value={filters.bathrooms} onChange={handleChange}>
              <option value="Any">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          <div className="search-field">
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
