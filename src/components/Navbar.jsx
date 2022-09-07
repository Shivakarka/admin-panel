import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-ful h-16 flex items-center px-14 justify-between bg-blue-600">
      <Link to="/">
        <h1 className="text-3xl text-teal-200 font-semibold font-Montesarrat">
          Admin Panel
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
