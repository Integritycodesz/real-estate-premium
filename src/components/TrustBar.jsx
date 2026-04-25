import React from 'react';
import { ShieldCheck, CircleDollarSign, MapPin, UserCheck, FileText } from 'lucide-react';
import './TrustBar.css';

const trustItems = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Jila Panchayat Approved",
    subtitle: "Every plot verified"
  },
  {
    icon: <CircleDollarSign size={24} />,
    title: "Zero Hidden Charges",
    subtitle: "Transparent pricing always"
  },
  {
    icon: <MapPin size={24} />,
    title: "Raebareli Road Experts",
    subtitle: "Focus on growth corridor"
  },
  {
    icon: <UserCheck size={24} />,
    title: "Personal Buyer Guidance",
    subtitle: "10 years of expertise"
  },
  {
    icon: <FileText size={24} />,
    title: "Full Documentation",
    subtitle: "From enquiry to registry"
  }
];

const TrustBar = () => {
  return (
    <div className="trust-bar-section">
      <div className="container">
        <div className="trust-bar-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-item">
              <div className="trust-icon-wrapper">
                {item.icon}
              </div>
              <div className="trust-text">
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
