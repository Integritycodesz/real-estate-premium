import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import './StrategicPositioning.css';

const StrategicPositioning = ({ project }) => {
  return (
    <section className="strategic-positioning-section">
      <div className="container">
        <div className="strategic-grid">
          <div className="strategic-content">
            <span className="pre-title-gold">LOCATION ADVANTAGE</span>
            <h2 className="section-title-premium">Strategic Positioning</h2>
            <p className="strategic-lead">
              Situated in a rapidly developing pocket of Lucknow, 
              {project.title} offers the perfect balance of peaceful living and urban accessibility.
            </p>
            <ul className="strategic-bullets">
              <li>Well-connected to Lucknow city core</li>
              <li>Proximity to upcoming growth corridors</li>
              <li>Easy access to highways and main roads</li>
              <li>Surrounded by developing residential & commercial pockets</li>
            </ul>

            <div className="gps-coordinates-card">
              <div className="gps-info">
                <MapPin className="gps-icon" />
                <div className="gps-text">
                  <span className="gps-label">GPS Coordinates</span>
                  <span className="gps-val">{project.coordinates || "Contact for Coordinates"}</span>
                </div>
              </div>
              <a 
                href={project.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.title + ' ' + project.location)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-google-maps"
              >
                <Navigation size={18} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          <div className="strategic-map-frame">
            <iframe 
              src={project.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56963.53507198755!2d80.95759795000001!3d26.7536965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3893693e507%3A0x7d67280f5313d39c!2sRaebareli%20Rd%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714044000000!5m2!1sen!2sin"} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Strategic Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPositioning;
