import React from "react";
import HomeSideBar from "../components/Homepage/HomeSideBar";
import HomePageRepos from "../components/Homepage/HomePageRepos";

// HomePage component that renders the sidebar and the main content
const HomePage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar component */}
      <HomeSideBar />
      {/* Main content area with scrollable repos */}
      <div className="flex-1 overflow-y-auto">
        <HomePageRepos />
      </div>
    </div>
  );
};

export default HomePage;