import React from 'react';
import './ScarcityBar.css';

const ScarcityBar = ({ percentage, urgencyLine }) => {
  return (
    <div className="scarcity-card">
      <div className="scarcity-header">
        <span className="scarcity-label">Inventory Status</span>
        <span className="scarcity-percentage">{percentage}% Sold</span>
      </div>
      <div className="progress-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {urgencyLine && <p className="urgency-text">{urgencyLine}</p>}
    </div>
  );
};

export default ScarcityBar;
