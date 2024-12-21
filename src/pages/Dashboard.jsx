import React, { useState } from "react";
import LeftDashBoard from "../components/Dashboard/LeftDashBoard";
import RightDashboard from "../components/Dashboard/RightDashboard";

// Dashboard component that manages the layout and active tab state
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("SAAS"); // Default active tab

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left dashboard component */}
      <LeftDashBoard />
      {/* Right dashboard component with active tab state */}
      <RightDashboard activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Dashboard;