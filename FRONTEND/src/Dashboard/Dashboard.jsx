import React, { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";
import Header from "../DashboardHeader/DashboardHeader";

import SunIcon from "/src/assets/sun.png";
import HumidityIcon from "/src/assets/humidity.png";
import PathogenIcon from "/src/assets/pathogen.png";
import FridgeIcon from "/src/assets/fridge.png";

const Dashboard = () => {
  const [sensorData, setSensorData] = useState(null);
  const [status, setStatus] = useState("Offline");

  useEffect(() => {
    const socket = new WebSocket(import.meta.env.VITE_WEBSOCKET_URL);

    socket.onopen = () => {
      console.log("WebSocket Connected");
      setStatus("Live");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setSensorData(data);
      setStatus("Live");

      setTimeout(() => setStatus("Offline"), 10000);
    };

    socket.onclose = () => {
      console.log("WebSocket Disconnected");
      setStatus("Offline");
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
      setStatus("Offline");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header" />
      <Header />

      <div className="cards-container">
        <div className="cards-grid">
          <DashboardCard
            heading="Temperature"
            value={sensorData ? `${sensorData.temperature}°C` : "N/A"}
            secondaryValue={status}
            image={SunIcon}
          />
          <DashboardCard
            heading="Humidity"
            value={sensorData ? `${sensorData.humidity}%` : "N/A"}
            secondaryValue={status}
            image={HumidityIcon}
          />
          <DashboardCard
            heading="Pathogen Gas Detected"
            value={sensorData ? (sensorData.pathogen ? "Yes" : "No") : "N/A"}
            secondaryValue={status}
            image={PathogenIcon}
          />
          <DashboardCard
            heading="Live Location"
            value="Gurugram"
            secondaryValue="Haryana"
            image="https://cdn-icons-png.flaticon.com/512/684/684908.png"
          />
          <DashboardCard
            heading="Pathogen Removed"
            value="In Process"
            secondaryValue="Low"
            image={FridgeIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
