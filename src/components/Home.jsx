import React from "react";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <h1 className="text-center text-5xl w-full mt-7">Admin Panel Home</h1>
    </div>
  );
};

export default Home;
