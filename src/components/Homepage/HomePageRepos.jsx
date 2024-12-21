import React, { useState, useEffect } from "react";
import {
  ArrowPathIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Repository from "./Repository";
import { ClipLoader } from "react-spinners";

const HomePageRepos = () => {
  const [repos, setRepos] = useState([]);
  const [filterdData, setFilterdData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch repositories from GitHub API
  const fetchRepos = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.github.com/users/skiirux/repos",
        {
          // headers: {
          //     Authorization: `token YOUR_PERSONAL_ACCESS_TOKEN` // Optional
          // }
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data = await response.json();
      setRepos(data);
      setFilterdData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  // Filter repositories based on search input
  const handleFilter = (e) => {
    const value = e.target.value;
    const filtered = repos.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        (item.language &&
          item.language.toLowerCase().includes(value.toLowerCase()))
    );
    setFilterdData(filtered);
  };

  // Refresh repositories
  const handleRefresh = () => {
    fetchRepos();
  };

  // Map filtered data to display format
  const filteredData = filterdData.map((repo) => ({
    title: repo.name,
    type: repo.private ? "Private" : "Public",
    language: repo.language || "N/A", // Fallback value for language
    size: `${repo.size} KB`,
    updatedAt: new Date(repo.updated_at).toLocaleDateString(),
  }));

  return (
    <div className="p-2 h-screen overflow-y-auto">
      <div className="bg-white w-full rounded-xl border flex flex-col">
        <div className="flex flex-col gap-4 border-b p-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex flex-col">
              <span className="font-semibold text-xl">Repositories</span>
              <span className="font-light text-sm">
                {filteredData.length} total repositories
              </span>
            </div>
            <div className="flex gap-2">
              <button
                className="flex text-xs items-center p-2 px-4 gap-2 rounded-md border"
                onClick={handleRefresh}
              >
                <ArrowPathIcon className="size-4" />
                Refresh All
              </button>
              <button className="flex text-xs items-center p-2 px-4 gap-2 bg-[#1570EF] text-white rounded-md">
                <PlusIcon className="size-4" />
                Add Repository
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="inputSearch"
              className="border w-fit rounded-md flex gap-2 items-center px-2 py-2"
            >
              <MagnifyingGlassIcon className="size-4 stroke-2" />
              <input
                id="inputSearch"
                placeholder="Search Repositories"
                onChange={handleFilter}
                className="text-xs w-[200px] placeholder:text-gray-700 outline-none"
              />
            </label>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center p-4">
            <ClipLoader size={35} color={"#1570EF"} loading={loading} />
          </div>
        ) : (
          <Repository filterdData={filteredData} />
        )}
      </div>
    </div>
  );
};

export default HomePageRepos;