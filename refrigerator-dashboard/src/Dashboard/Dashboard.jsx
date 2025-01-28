import React from "react";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Whatever this is</h1>
      </header>
      
      <div className="cards-container">
        <div className="cards-grid">
          <DashboardCard
            heading="smth1"
            value="null"
            weather="null"
            image="https://cdn-icons-png.flaticon.com/512/2698/2698194.png"
          />
          <DashboardCard
            heading="smth2"
            value="null"
            weather="null"
            image="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
          />
          <DashboardCard
            heading="smth3"
            value="null"
            weather="null"
            image="https://cdn-icons-png.flaticon.com/512/3064/3064494.png"
          />
          <DashboardCard
            heading="smth4"
            value="null"
            weather="null"
            image="https://cdn-icons-png.flaticon.com/512/2316/2316631.png"
          />
          <DashboardCard
            heading="smth5"
            value="null"
            weather="null"
            image="https://cdn-icons-png.flaticon.com/512/2917/2917631.png"
          />
          <DashboardCard
            heading="smth6"
            value="null"
            weather="null"
            image="https://cdn-icons-png.flaticon.com/512/684/684908.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;