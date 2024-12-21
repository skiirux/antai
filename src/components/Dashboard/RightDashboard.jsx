import React, { useState } from "react";
import { useNavigate } from "react-router";

// RightDashboard component that handles the sign-in process and tab switching
const RightDashboard = () => {
  const [activeTab, setActiveTab] = useState("SAAS"); // Default active tab
  const navigate = useNavigate();

  // Handle sign-in button click
  const handleSignIn = () => {
    navigate("/home");
  };

  return (
    <div className="flex w-full max-w-[400px] md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4 mx-auto md:mx-0">
      <div className="bg-white flex flex-col rounded-xl w-full border">
        <div className="border-b flex flex-col p-5 w-full gap-4">
          <div className="flex items-center justify-center gap-4">
            <img src="/assets/logo.png" alt="logo" />
            <span className="text-2xl">CodeAnt AI</span>
          </div>
          <div className="flex justify-center text-2xl font-semibold mt-2">
            Welcome to CodeAnt AI
          </div>
          <div>
            <div className="bg-gray-100/70 border rounded-xl flex">
              <button
                className={`p-3 rounded-xl w-1/2 ${
                  activeTab === "SAAS" ? "bg-[#1570EF] text-white" : ""
                }`}
                onClick={() => setActiveTab("SAAS")}
              >
                SAAS
              </button>
              <button
                className={`p-3 rounded-xl w-1/2 ${
                  activeTab === "Self-Hosted" ? "bg-[#1570EF] text-white" : ""
                }`}
                onClick={() => setActiveTab("Self-Hosted")}
              >
                Self Hosted
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <div className="flex items-center justify-center w-full">
            {activeTab === "SAAS" ? (
              <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                <button
                  onClick={handleSignIn}
                  className="border items-center flex w-full gap-3 p-4 rounded-xl justify-center"
                >
                  <img src="/assets/github.svg" alt="github" className="w-5" />
                  Sign in with Github
                </button>
                <button
                  onClick={handleSignIn}
                  className="border items-center flex w-full gap-3 p-4 rounded-xl justify-center"
                >
                  <img
                    src="/assets/bitbucket.svg"
                    alt="bitbucket"
                    className="w-5"
                  />
                  Sign in with Bitbucket
                </button>
                <button
                  onClick={handleSignIn}
                  className="border items-center flex w-full gap-3 p-4 rounded-xl justify-center"
                >
                  <img
                    src="/assets/azure.svg"
                    alt="azure-devops"
                    className="w-5"
                  />
                  Sign in with Azure Devops
                </button>
                <button
                  onClick={handleSignIn}
                  className="border items-center flex w-full gap-3 p-4 rounded-xl justify-center"
                >
                  <img src="/assets/gitlab.svg" alt="gitlab" className="w-5" />
                  Sign in with GitLab
                </button>
              </div>
            ) : (
              <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                <button
                  onClick={handleSignIn}
                  className="border items-center flex w-full gap-3 p-4 rounded-xl justify-center"
                >
                  <img src="/assets/gitlab.svg" alt="gitlab" className="w-5" />
                  Sign in with GitLab
                </button>
                <button
                  onClick={handleSignIn}
                  className="border items-center flex w-full gap-3 p-4 rounded-xl justify-center"
                >
                  <img src="/assets/sso.svg" alt="sso" className="w-5" />
                  Sign in with SSO
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
      <div className="text-center md:text-left"> 
        <span>
          By signing up you agree to the{" "}
          <b className="hover:text-gray-500 cursor-pointer">Privacy Policy.</b>
        </span>
        </div>
      </div>
    </div>
  );
};

export default RightDashboard;