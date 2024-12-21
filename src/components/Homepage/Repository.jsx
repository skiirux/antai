import React from "react";
import { CircleStackIcon } from "@heroicons/react/24/outline";

// Repository component that displays a list of repositories
const Repository = ({ filterdData }) => {
  return (
    <div className="flex flex-col w-full">
      {filterdData.length >= 1 ? (
        // Map through the filtered data and display each repository
        filterdData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-4 gap-3 hover:bg-gray-100 ${
              index !== filterdData.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="flex gap-2 items-center">
              <span className="font-semibold">{item.title}</span>
              <span className="bg-[#EFF8FF] border border-[#B2DDFF] text-primary text-xs px-2 rounded-full">
                {item.type}
              </span>
            </div>
            <div className="flex gap-4 md:gap-8 text-sm font-light">
              <span className="flex items-center gap-2">
                {item.language}
                <span className="bg-[#1570EF] p-1 rounded-full"></span>
              </span>
              <span className="flex items-center gap-2">
                <CircleStackIcon className="w-4" />
                {item.size}
              </span>
              <span>{item.updatedAt}</span>
            </div>
          </div>
        ))
      ) : (
        // Display message if no repositories are available
        <div className="flex flex-col border-b p-4 gap-3 text-gray-500 text-center">
          Looks like there is no repository to show.
        </div>
      )}
    </div>
  );
};

export default Repository;