import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import './ProjectStickyCTA.css';

const ProjectStickyCTA = ({ project }) => {
  const whatsappUrl = `https://wa.me/917054550296?text=${encodeURIComponent(project.whatsappMessage || "Hi PBD Group, I’m interested in your property projects. I’d like to know more about the available projects, pricing and site visit options. Please assist me.")}`;
  const callUrl = "tel:+917054550296";

  return (
    <div className="project-sticky-cta">
      <div className="sticky-cta-container">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="sticky-btn whatsapp">
          <MessageCircle size={20} />
          <span>WhatsApp Now</span>
        </a>
        <a href={callUrl} className="sticky-btn call">
          <Phone size={20} />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectStickyCTA;
