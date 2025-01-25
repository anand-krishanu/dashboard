import React from "react";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header>
        <h1>Smart Fridge Dashboard</h1>
      </header>
      <div className="cards">
        <DashboardCard
          location="Fridge Interior"
          time="Current"
          temperature="4"
          weather="Cool"
          wind="N/A"
          humidity="60"
          sunHours="N/A"
          image="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
        />
        <DashboardCard
          location="Live Location"
          time="Now"
          temperature="N/A"
          weather="Gurugram"
          wind="N/A"
          humidity="N/A"
          sunHours="N/A"
          image="https://cdn-icons-png.flaticon.com/512/684/684908.png"
        />
        <DashboardCard
          location="Humidity Levels"
          time="Current"
          temperature="N/A"
          weather="Humidity"
          wind="N/A"
          humidity="60"
          sunHours="N/A"
          image="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
        />
        <DashboardCard
          location="Pathogen Gas"
          time="Detected"
          temperature="N/A"
          weather="Methane"
          wind="N/A"
          humidity="N/A"
          sunHours="N/A"
          image="https://cdn-icons-png.flaticon.com/512/3064/3064494.png"
        />
        <DashboardCard
          location="Pathogen Removal"
          time="In Progress"
          temperature="N/A"
          weather="In Progress"
          wind="N/A"
          humidity="N/A"
          sunHours="N/A"
          image="https://cdn-icons-png.flaticon.com/512/2316/2316631.png"
        />
        <DashboardCard
          location="Pathogen Found"
          time="Yes"
          temperature="N/A"
          weather="Pathogen Present"
          wind="N/A"
          humidity="N/A"
          sunHours="N/A"
          image="https://cdn-icons-png.flaticon.com/512/2917/2917631.png"
        />
      </div>
    </div>
  );
};

export default Dashboard;
