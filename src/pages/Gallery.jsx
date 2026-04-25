import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { projects } from '../data/projects';
import './PageStyles.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  // Extract all unique categories from projects
  const categories = ['All', ...new Set(projects.map(p => p.type))];

  // Flatten all gallery images from projects for a combined view
  const galleryItems = projects.flatMap(project => [
    { url: project.image, title: project.title, category: project.type, project: project.title },
    ...project.gallery.map(img => ({ url: img, title: `${project.title} - View`, category: project.type, project: project.title }))
  ]).filter(item => filter === 'All' || item.category === filter);

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
                <div className="overlay-content">
                  <span className="project-tag">{item.project}</span>
                  <h3 className="image-title">{item.title}</h3>
                </div>
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
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p className="text-gold">{selectedImage.project}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
