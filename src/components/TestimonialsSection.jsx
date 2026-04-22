import React, { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "I was sceptical about buying a plot — too many agents had disappointed me before. Amit Tiwari showed me the Jila Panchayat documents on the very first visit. That changed everything. No pressure, complete transparency.",
      name: "Rajesh S.",
      role: "Investor"
    },
    {
      text: "As an NRI investing from Riyadh, trust was my biggest concern. They coordinated everything with my family here, sent site videos, shared all documents digitally. Professional process from start to finish.",
      name: "Vikram M.",
      role: "NRI Buyer"
    },
    {
      text: "My entire family was involved in this decision. PBD Groups was patient with every question, never rushed us, and the price we paid was exactly what was quoted. Zero surprises at registration.",
      name: "The Sharma Family",
      role: "Homeowners"
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
                  <div className="testimonial-author">
                    <h4>{test.name}</h4>
                    <span>{test.role}</span>
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
