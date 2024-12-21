import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRightOnRectangleIcon as LogoutIcon,
  Bars3Icon as MenuIcon,
  BookOpenIcon as GuideIcon,
  ChevronDownIcon as DropdownIcon,
  CloudIcon as CloudSecurityIcon,
  CodeBracketIcon as CodeReviewIcon,
  Cog6ToothIcon as SettingsIcon,
  HomeIcon as HomePageIcon,
  PhoneIcon as SupportIcon,
  XMarkIcon as CloseIcon,
} from "@heroicons/react/24/outline";
import HomePageRepos from "./HomePageRepos"; // Import the HomePageRepos component

const HomeSideBar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const mobileViewRef = useRef(false);

  useEffect(() => {
    const handleWindowResize = () => {
      const windowWidth = window.innerWidth;
      const isMobileView = windowWidth < 768;
      setMobileView(isMobileView);
      mobileViewRef.current = isMobileView;
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="w-full md:w-64 border-r flex flex-col h-full">
      {/* Header */}
      <div className="bg-white flex justify-between items-center h-16 px-4 border-b z-10">
        <div className="flex items-center gap-3 py-4 px-4">
          <img src="/assets/logo.png" alt="logo" className="w-6" />
          <h1 className="text-lg font-semibold">CodeAnt AI</h1>
        </div>

        <button
          className="md:hidden"
          onClick={() => setSidebarVisible((prev) => !prev)}
        >
          {sidebarVisible ? (
            <CloseIcon className="w-6 h-6 text-gray-700" />
          ) : (
            <MenuIcon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* HomePageRepos for mobile view */}
      {mobileView && (
        <div className="px-4 py-4">
          <HomePageRepos />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`${
          mobileView ? "fixed" : "static"
        } top-0 left-0 w-full md:w-64 transition-transform ${
          mobileView && !sidebarVisible ? "-translate-x-full" : "translate-x-0"
        } flex flex-col bg-transparent`}
        style={{
          height: mobileView ? "100vh" : "100%",
          overflow: "hidden",
          zIndex: mobileView ? 40 : "auto",
        }}
      >
        {/* White background section */}
        <div className="bg-white" style={{ height: "fit-content" }}>
          {/* User Info */}
          <div className="flex justify-between items-center py-4 px-4">
            <span className="text-sm border p-2 rounded-xl flex gap-2 items-center">
              <span>Mohit Kumar...</span>
              <DropdownIcon className="w-5" />
            </span>
            {mobileView && sidebarVisible && (
              <button onClick={() => setSidebarVisible(false)}>
                <CloseIcon className="w-6 h-6 text-gray-700" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="px-4 py-2 space-y-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-lg"
            >
              <HomePageIcon className="w-6" />
              <span className="ml-3">Repositories</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <CodeReviewIcon className="w-6" />
              <span className="ml-3">AI Code Review</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <CloudSecurityIcon className="w-6" />
              <span className="ml-3">Cloud Security</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <GuideIcon className="w-6" />
              <span className="ml-3">How to Use</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <SettingsIcon className="w-6" />
              <span className="ml-3">Settings</span>
            </a>

            {/* Support and Logout for mobile view */}
            {mobileView && sidebarVisible && (
              <>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  <SupportIcon className="w-5" />
                  <span className="ml-3">Support</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  <LogoutIcon className="w-5" />
                  <span className="ml-3">Logout</span>
                </a>
              </>
            )}
          </nav>
        </div>

        {/* Transparent overlay section */}
        {mobileView && sidebarVisible && (
          <div className="flex-1 bg-black bg-opacity-50 pointer-events-none overflow-hidden" />
        )}

        {/* Footer for desktop view */}
        {!mobileView && (
          <div className="mt-auto px-4 py-4">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <SupportIcon className="w-5" />
              <span className="ml-3">Support</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <LogoutIcon className="w-5" />
              <span className="ml-3">Logout</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeSideBar;