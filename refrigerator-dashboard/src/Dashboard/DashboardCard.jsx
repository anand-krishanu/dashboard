import React from "react";

const DashboardCard = ({ location, time, temperature, weather, wind, humidity, sunHours, image }) => {
  return (
    <div className="row d-flex justify-content-center py-5">
      <div className="col-md-8 col-lg col-xl">
        <div className="card text-body" style={{ borderRadius: "35px" }}>
          <div className="card-body p-6">
            <div className="d-flex">
              <h6 className="flex-grow-1">{location}</h6>
              <h6>{time}</h6>
            </div>

            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold">{temperature}°C</h6>
              <span className="small" style={{ color: "#868B94" }}>{weather}</span>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                <div>
                  <i className="fas fa-wind fa-fw" style={{ color: "#868B94" }}></i> 
                  <span className="ms-1"> {wind} km/h</span>
                </div>
                <div>
                  <i className="fas fa-tint fa-fw" style={{ color: "#868B94" }}></i> 
                  <span className="ms-1"> {humidity}%</span>
                </div>
                <div>
                  <i className="fas fa-sun fa-fw" style={{ color: "#868B94" }}></i> 
                  <span className="ms-1"> {sunHours}h</span>
                </div>
              </div>
              <div>
                <img 
                  src={image} 
                  alt="weather icon" 
                  width="100px" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
