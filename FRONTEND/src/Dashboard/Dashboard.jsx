import React from "react";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";
import Header from "../DashboardHeader/DashboardHeader";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header" />
      <Header />

      <div className="cards-container">
        <div className="cards-grid">
          <DashboardCard
            heading="Temperature"
            value="22°C"
            secondaryValue="Sunny"
            image="src\assets\sun.png"
          />
          <DashboardCard
            heading="Humidity"
            value="65%"
            secondaryValue="Moderate"
            image="src\assets\humidity.png"
          />
          <DashboardCard
            heading="Live Location"
            value="Gurugram"
            secondaryValue="Haryana"
            image="https://cdn-icons-png.flaticon.com/512/684/684908.png"
          />
          <DashboardCard
            heading="Pathogen Gas Detected"
            value="Gas Name"
            secondaryValue="Normal"
            image="src\assets\pathogen.png"
          />
          <DashboardCard
            heading="Pathogen Removed"
            value="In Process"
            secondaryValue="Low"
            image="src\assets\fridge.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;