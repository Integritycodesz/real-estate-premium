import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { projects } from '../data/projects';
import './PageStyles.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  // Custom gallery images provided by the user
  const siteImages = [
    { url: new URL('../assets/WhatsApp_Image_2026-01-21_at_1.25.48_PM_1769362975229.jpeg', import.meta.url).href, title: "Site Progress View", category: "Site Development", project: "Ongoing Development" },
    { url: new URL('../assets/WhatsApp_Image_2026-01-29_at_10.59.55_PM_1769755149841-1.jpeg', import.meta.url).href, title: "Customer Site Visit", category: "Site Development", project: "Live Site Visit" },
    { url: new URL('../assets/WhatsApp-Image-2026-01-18-at-11.48.35-AM-1-scaled.jpeg', import.meta.url).href, title: "Project Overview", category: "Site Development", project: "Raebareli Road Site" },
    { url: new URL('../assets/WhatsApp-Image-2026-01-18-at-11.48.36-AM-1-scaled.jpeg', import.meta.url).href, title: "Infrastructure Work", category: "Site Development", project: "Road Development" },
    { url: new URL('../assets/WhatsApp-Image-2026-01-18-at-11.48.37-AM-scaled.jpeg', import.meta.url).href, title: "Boundary Wall Construction", category: "Site Development", project: "Secured Perimeter" },
    { url: new URL('../assets/WhatsApp-Image-2026-01-18-at-11.48.39-AM-1-scaled.jpeg', import.meta.url).href, title: "Street Lighting Install", category: "Site Development", project: "Utilities Phase" },
    { url: new URL('../assets/WhatsApp-Image-2026-01-18-at-11.48.40-AM-1-scaled.jpeg', import.meta.url).href, title: "Main Entrance Gate", category: "Site Development", project: "Grand Entrance" },
    { url: new URL('../assets/WhatsApp-Image-2026-01-18-at-11.48.41-AM-1-scaled.jpeg', import.meta.url).href, title: "Plot Leveling", category: "Site Development", project: "Land Preparation" },
    { url: new URL('../assets/WhatsApp-Image-2026-01-18-at-11.48.42-AM.jpeg', import.meta.url).href, title: "On-site Office", category: "Site Development", project: "Sales & Support" },
    { url: new URL('../assets/WhatsApp-Image-2026-01-18-at-11.48.41-AM.jpeg', import.meta.url).href, title: "Greenery & Landscaping", category: "Site Development", project: "Park Development" },
    { url: new URL('../assets/WhatsApp-Image-2026-01-18-at-11.48.43-AM-1-scaled.jpeg', import.meta.url).href, title: "Family Site Inspection", category: "Site Development", project: "Trust & Transparency" }
  ];

  // Only show the custom images in the gallery
  const categories = ['All', 'Site Development'];
  const galleryItems = siteImages.filter(item => filter === 'All' || item.category === filter);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="page-wrapper fade-in">
      <header className="page-hero-header" style={{
        backgroundImage: "url('/popup-site-view.jpg')",
      }}>
        <div className="container">
          <div className="hero-grid-gallery">
            <div className="hero-text-side">
              <span className="badge-gold">VISUAL JOURNEY</span>
              <h1 className="hero-title-large">
                Captured <span className="text-gold">Moments.</span><br />
                Delivered Dreams.
              </h1>

              <div className="hero-glass-box standalone">
                <p className="glass-body large">
                  Witness the transformation of land into living legacies. From aerial site developments to project visualizations, explore our commitment to quality and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container section-padding">
        {/* Filter Bar */}
        <div className="filter-scroll-container">
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-main-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-image-card"
              onClick={() => openLightbox(item)}
            >
              <div className="image-zoom-wrapper">
                <img src={item.url} alt={item.title} loading="lazy" />
              </div>

              <div className="card-hover-overlay">
                <div className="maximize-icon">
                  <Maximize2 size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>

          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
