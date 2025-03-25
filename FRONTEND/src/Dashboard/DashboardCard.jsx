import React from "react";

const DashboardCard = ({ heading, value, secondaryValue, image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <h3 className="card-heading">{heading}</h3>
        </div>

        <div className="card-content">
          <img src={image} alt="icon" className="card-icon" />
          <div className="card-values">
            <div className="main-value">{value}</div>
            <div className="weather-label">{secondaryValue}</div>
          </div>
        </div>

        <div className="card-footer">
          <span
            className={`status-indicator ${
              secondaryValue === "Live" ? "online" : "offline"
            }`}
          >
            ● {secondaryValue}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;