import React from "react";

export default function TabButtons({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-center mb-6">
      {/* SAAS Button */}
      <button
        onClick={() => setActiveTab("SAAS")}
        className={`flex-1 px-8 py-3 rounded-lg ${
          activeTab === "SAAS"
            ? "bg-indigo-600 text-white"
            : "bg-gray-200 text-gray-900"
        }`}
      >
        SAAS
      </button>

      {/* Self-Hosted Button */}
      <button
        onClick={() => setActiveTab("Self-Hosted")}
        className={`flex-1 px-8 py-3 rounded-lg ${
          activeTab === "Self-Hosted"
            ? "bg-indigo-600 text-white"
            : "bg-gray-200 text-gray-900"
        }`}
      >
        Self-Hosted
      </button>
    </div>
  );
}
