import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64">
      <div className="h-screen py-4 px-3  rounded">
        <ul>
          <li>
            <Link to="/dashboard">
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200"
              >
                <span className="ml-3">Dashboard</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200"
              >
                <span className="ml-3">Users</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
