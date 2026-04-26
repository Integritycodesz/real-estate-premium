import React, { useState } from 'react';
import { BadgeCheck } from 'lucide-react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "I was skeptical about buying a plot in Lucknow — too many agents had disappointed me before. PBD Group showed me the Jila Panchayat documents for Shivay Residency on the very first visit. That changed everything. No pressure, complete transparency.",
      name: "Rajesh Shrivastava",
      role: "Investor",
      project: "Shivay Residency",
      location: "Alambagh, Lucknow"
    },
    {
      text: "As an NRI investing from Riyadh, trust was my biggest concern. The team coordinated everything for our plot in Rajgharana with my family in Lucknow. They sent site videos and shared all registry documents digitally. Extremely professional.",
      name: "Vikram Malhotra",
      role: "NRI Buyer",
      project: "Rajgharana",
      location: "Riyadh / Lucknow"
    },
    {
      text: "Buying a plot in Hanumant Dham was a family decision. PBD Group was patient with our 50+ questions, never rushed us, and the final price was exactly what was quoted. Zero surprises at the sub-registrar office.",
      name: "The Sharma Family",
      role: "Homeowners",
      project: "Hanumant Dham",
      location: "Telibagh, Lucknow"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Client Experiences</span>
          <h2>What Families Say <br/><span className="text-gold">About Their Experience</span></h2>
        </div>

        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={handlePrev}>❮</button>
          
          <div className="carousel-track">
            {testimonials.map((test, index) => {
              // Calculate relative position for cover-flow effect
              let position = "next";
              if (index === activeIndex) position = "active";
              else if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) position = "prev";
              
              return (
                <div key={index} className={`testimonial-card glass-panel ${position}`}>
                  <div className="quote-mark">"</div>
                  <p className="testimonial-text">{test.text}</p>
                  <div className="testimonial-footer">
                    <div className="author-info">
                      <div className="author-header">
                        <h4>{test.name}</h4>
                        <div className="verified-status">
                          <BadgeCheck size={16} className="verified-icon" />
                          <span>Verified User</span>
                        </div>
                      </div>
                      <span className="author-location">{test.location}</span>
                    </div>
                    <div className="project-tag">
                      Ref: {test.project}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="carousel-btn next" onClick={handleNext}>❯</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
