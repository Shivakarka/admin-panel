import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="bg-blue-100 w-full">
        <h1 className="text-center text-5xl w-full mb-9 mt-7">Dashboard</h1>
        <div className="flex mx-7 justify-around">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-4xl leading-tight font-medium mb-2">
              Total Users
            </h5>
            <p className="text-gray-700 mb-4 text-2xl mt-7">10+</p>
          </div>

          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-6">
            <h5 className="text-gray-900 text-4xl leading-tight font-medium mb-2">
              Projects Assigned
            </h5>
            <p className="text-gray-700  mb-4  text-2xl mt-7">20</p>
          </div>

          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-4xl leading-tight font-medium mb-2">
              Number of Clients
            </h5>
            <p className="text-gray-700  text-2xl mt-7 mb-4">1204</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
