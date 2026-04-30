import React from 'react';
import { 
  ShieldCheck, 
  Map, 
  Zap, 
  Droplets, 
  Lock, 
  Trees, 
  Waves, 
  Lightbulb 
} from 'lucide-react';
import './AmenitiesGrid.css';

const amenityIcons = {
  "Gated Entry": <Lock size={32} />,
  "Wide Internal Roads": <Map size={32} />,
  "Electricity Connection": <Zap size={32} />,
  "Water Supply": <Droplets size={32} />,
  "24x7 Security / Boundary Wall": <ShieldCheck size={32} />,
  "Landscaped Parks": <Trees size={32} />,
  "Drainage System": <Waves size={32} />,
  "Street Lighting": <Lightbulb size={32} />
};

const AmenitiesGrid = ({ project }) => {
  // Use custom list if provided, otherwise default based on photo
  const list = project.amenitiesList || [
    "Gated Entry",
    "Wide Internal Roads",
    "Electricity Connection",
    "Water Supply",
    "24x7 Security / Boundary Wall",
    "Landscaped Parks",
    "Drainage System",
    "Street Lighting"
  ];

  return (
    <section className="amenities-section-premium">
      <div className="container">
        <div className="amenities-header-center">
          <span className="pre-title-center">PROJECT FEATURES</span>
          <h2 className="section-title-center">Essential Amenities</h2>
        </div>
        
        <div className="amenities-card-grid">
          {list.map((item, idx) => (
            <div key={idx} className="amenity-card-item">
              <div className="amenity-icon-box">
                {amenityIcons[item] || <ShieldCheck size={32} />}
              </div>
              <span className="amenity-name-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGrid;
