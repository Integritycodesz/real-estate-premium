import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    // Trigger once on load
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, [pathname]); // Re-run on route change

  return null;
};

export default ScrollReveal;
