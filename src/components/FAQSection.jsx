import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { globalFaqs } from '../data/globalFaqs';
import './FAQSection.css';

const FAQSection = ({ faqs = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Filter out global FAQs that might already be present in project-specific faqs to avoid duplicates
  const filteredGlobal = globalFaqs.filter(
    gf => !faqs.some(pf => pf.q.toLowerCase() === gf.q.toLowerCase())
  );

  const allFaqs = [...faqs, ...filteredGlobal];

  if (allFaqs.length === 0) return null;

  return (
    <div className="faq-block">
      <span className="pre-title-gold">HAVE QUESTIONS?</span>
      <h3 className="section-title-premium" style={{ marginBottom: '30px' }}>Frequently Asked Questions</h3>
      <div className="faq-list">
        {allFaqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="faq-question">
              <span>{faq.q}</span>
              {activeIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
