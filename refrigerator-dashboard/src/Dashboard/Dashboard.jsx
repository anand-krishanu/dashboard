import React from "react";

import DashboardCard from "./DashboardCard";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
      <header>
        Smart Fridge Dashboard
      </header>
      <div className="cards">
        <DashboardCard title="Temperature" value="4°C" />
        <DashboardCard title="Live Location" value="Gurugram" />
        <DashboardCard title="Humidity" value="60%" />
        <DashboardCard title="Pathogen Gas Detected" value="Methane" />
        <DashboardCard title="Pathogen Removed" value="In Progress" />
      </div>
    </div>
    )
}

export default Dashboard;