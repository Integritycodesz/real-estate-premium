import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, CheckCircle, MapPin } from 'lucide-react';
import './SocialProofPopup.css';

const activities = [
  { name: "Rahul Sharma", location: "Gomti Nagar", action: "booked a site visit", project: "Shivay Residency", icon: <Calendar size={18} /> },
  { name: "Amit Yadav", location: "Aliganj", action: "booked a plot", project: "Rajgharana", icon: <ShoppingBag size={18} /> },
  { name: "Priya Singh", location: "Indira Nagar", action: "requested a callback", project: "Hanumant Dham", icon: <CheckCircle size={18} /> },
  { name: "Suresh Gupta", location: "Vikas Nagar", action: "booked a site visit", project: "Barsana Estate", icon: <Calendar size={18} /> },
  { name: "Neha Verma", location: "Jankipuram", action: "booked a plot", project: "Muraliya Garden", icon: <ShoppingBag size={18} /> },
  { name: "Vikram Mehra", location: "Hazratganj", action: "booked a site visit", project: "Nature Green", icon: <Calendar size={18} /> },
  { name: "Anjali Dwivedi", location: "Ashiyana", action: "booked a plot", project: "Shivay Residency", icon: <ShoppingBag size={18} /> },
  { name: "Rajesh Khanna", location: "LDA Colony", action: "requested floor plans", project: "Rajgharana", icon: <CheckCircle size={18} /> },
  { name: "Sandeep Pandey", location: "Telibagh", action: "booked a site visit", project: "Hanumant Dham", icon: <Calendar size={18} /> },
  { name: "Meera Kapoor", location: "Mahanagar", action: "booked a plot", project: "Barsana Estate", icon: <ShoppingBag size={18} /> },
  { name: "Kunal Jaiswal", location: "Chowk", action: "booked a site visit", project: "Shivay Residency", icon: <Calendar size={18} /> },
  { name: "Swati Mishra", location: "Chinhat", action: "booked a plot", project: "Nature Green", icon: <ShoppingBag size={18} /> },
  { name: "Deepak Soni", location: "Aminabad", action: "requested callback", project: "Rajgharana", icon: <CheckCircle size={18} /> },
  { name: "Pooja Trivedi", location: "Charbagh", action: "booked a site visit", project: "Muraliya Garden", icon: <Calendar size={18} /> },
  { name: "Arun Pratap", location: "Dubagga", action: "booked a plot", project: "Barsana Estate", icon: <ShoppingBag size={18} /> },
  { name: "Sneha Rastogi", location: "Aishbagh", action: "booked a site visit", project: "Shivay Residency", icon: <Calendar size={18} /> },
  { name: "Manoj Bajpai", location: "Alambagh", action: "requested pricing", project: "Hanumant Dham", icon: <CheckCircle size={18} /> },
  { name: "Ritu Saxena", location: "Rajajipuram", action: "booked a plot", project: "Rajgharana", icon: <ShoppingBag size={18} /> },
  { name: "Gaurav Shukla", location: "Butler Colony", action: "booked a site visit", project: "Nature Green", icon: <Calendar size={18} /> },
  { name: "Tarun Gill", location: "Sushant Golf City", action: "booked a plot", project: "Shivay Residency", icon: <ShoppingBag size={18} /> }
];

const SocialProofPopup = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      // Pick a random activity
      const nextIdx = Math.floor(Math.random() * activities.length);
      setCurrentIdx(nextIdx);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial delay
    const initialTimer = setTimeout(showNotification, 8000);

    // Repeat every 15 seconds
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const activity = activities[currentIdx];

  return (
    <div className={`social-proof-popup ${isVisible ? 'visible' : ''}`}>
      <div className="social-icon">
        {activity.icon}
      </div>
      <div className="social-content">
        <p className="social-text">
          <span className="name">{activity.name}</span> from <span className="loc">{activity.location}</span>
        </p>
        <p className="social-action">
          {activity.action} for <span className="project">{activity.project}</span>
        </p>
        <p className="social-time">Just now</p>
      </div>
      <div className="social-close" onClick={() => setIsVisible(false)}>×</div>
    </div>
  );
};

export default SocialProofPopup;
