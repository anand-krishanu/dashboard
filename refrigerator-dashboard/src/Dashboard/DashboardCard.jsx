import React from "react";

const DashboardCard = ({ heading, value, weather, image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <h3 className="card-heading">{heading}</h3>
        </div>
        
        <div className="card-content">
          <img
            src={image}
            alt="weather icon"
            className="card-icon"
          />
          <div className="card-values">
            <div className="main-value">{value}</div>
            <div className="weather-label">{weather}</div>
          </div>
        </div>

        <div className="card-footer">
          <span className="status-indicator">● Live</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;