import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card fade-in">
      <div className="property-image-container">
        <img src={property.image} alt={property.name} className="property-image" />
        <div className="property-badge">{property.development}</div>
      </div>
      
      <div className="property-details">
        <h3 className="property-title">{property.name}</h3>
        <p className="property-price">From {property.price}</p>
        
        <div className="property-stats">
          <div className="stat">
            <span className="stat-value">{property.bedrooms < 10 ? `0${property.bedrooms}` : property.bedrooms}</span>
            <span className="stat-label">Bedrooms</span>
          </div>
          <div className="stat">
            <span className="stat-value">{property.bathrooms < 10 ? `0${property.bathrooms}` : property.bathrooms}</span>
            <span className="stat-label">Bathrooms</span>
          </div>
        </div>
        
        <div className="property-meta">
          <p>Floor Area {property.floorArea}</p>
          <p>{property.propertyType}</p>
          <p>{property.location}</p>
        </div>
        
        <Link to={`/contact?property=${property.id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
