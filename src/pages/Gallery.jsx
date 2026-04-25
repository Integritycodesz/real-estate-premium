import React, { useState } from 'react';
import { X, Maximize2, Search } from 'lucide-react';
import FlashDealsBanner from '../components/FlashDealsBanner';
import { projects } from '../data/projects';
import './PageStyles.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  // Extract all unique categories from projects
  const categories = ['All', ...new Set(projects.map(p => p.type))];

  // Flatten all gallery images from projects for a combined view
  // Also include the main project image
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
          <div style={{ maxWidth: '800px' }}>
            <div style={{ paddingLeft: '40px' }}>
              <p className="reveal-text delay-1" style={{ textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--accent-gold)', marginBottom: '15px', fontWeight: '700', fontSize: '0.9rem' }}>
                VISUAL JOURNEY
              </p>
              <h1 className="reveal-text delay-2" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.4)', marginBottom: '20px', fontSize: '5rem', lineHeight: '1', fontWeight: '800', letterSpacing: '-1px' }}>
                Captured <span style={{ color: 'var(--accent-gold)' }}>Moments.</span><br />
                Delivered Dreams.
              </h1>
            </div>
            
            <div className="reveal-text delay-3" style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: 'rgba(255,255,255,0.95)',
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(20px)',
              padding: '40px',
              borderRadius: '0 20px 20px 0', 
              borderLeft: '4px solid var(--accent-gold)',
              boxShadow: '40px 40px 80px rgba(0,0,0,0.3)',
              marginTop: '10px'
            }}>
              <p style={{ marginBottom: '0', fontSize: '1.2rem', fontWeight: '500', color: '#fff', lineHeight: '1.6' }}>
                Witness the transformation of land into living legacies. From aerial site developments to project visualizations, explore our commitment to quality and transparency.
              </p>
            </div>
          </div>
        </div>
      </header>



      <div className="container" style={{ marginTop: '60px', marginBottom: '100px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '50px' }}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '12px 24px',
                borderRadius: '50px',
                border: 'none',
                background: filter === cat ? 'var(--primary-blue)' : 'var(--bg-secondary)',
                color: filter === cat ? '#fff' : 'var(--text-secondary)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: filter === cat ? '0 10px 20px rgba(10, 40, 110, 0.2)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '25px' 
        }}>
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="gallery-item-card"
              onClick={() => openLightbox(item)}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                cursor: 'pointer',
                group: 'true'
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${item.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.7s cubic-bezier(0.19, 1, 0.22, 1)'
              }} className="gallery-bg-image"></div>
              
              <div className="gallery-card-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '25px'
              }}>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.project}</span>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '5px' }}>{item.title}</h3>
                <Maximize2 size={20} color="#fff" style={{ position: 'absolute', top: '20px', right: '20px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.95)',
            zIndex: 30000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            cursor: 'zoom-out'
          }}
        >
          <button 
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={30} />
          </button>
          
          <img 
            src={selectedImage.url} 
            alt={selectedImage.title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: '12px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              cursor: 'default'
            }}
            onClick={e => e.stopPropagation()}
          />
          
          <div 
            style={{
              position: 'absolute',
              bottom: '40px',
              textAlign: 'center',
              color: '#fff'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{selectedImage.title}</h3>
            <p style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>{selectedImage.project}</p>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item-card:hover .gallery-bg-image {
          transform: scale(1.1);
        }
        .gallery-item-card:hover .gallery-card-overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
