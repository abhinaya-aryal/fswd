import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlus, FaEllipsisVertical } from "react-icons/fa6";
import Contents from "./Contents.jsx";

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-900 text-white font-medium h-16 px-4 md:px-16 text-lg shadow-md">
      <div className="flex justify-between items-center h-full max-w-6xl mx-auto">
        {/* Left Side: Logo & Navigation Links */}
        <div className="flex items-center gap-8 h-full">
          <div className="font-bold text-2xl tracking-wide">Issue Tracker</div>
          <div className="flex items-center gap-6">
            <NavLink
              exact="true"
              to="/"
              className="hover:text-gray-300 transition duration-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/issues"
              className="hover:text-gray-300 transition duration-200"
            >
              Issue List
            </NavLink>
            <NavLink
              to="/report"
              className="hover:text-gray-300 transition duration-200"
            >
              Report
            </NavLink>
          </div>
        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center gap-4">
          <button className="bg-white text-blue-600 p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-200">
            <FaPlus size={20} />
          </button>
          <button className="bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-200">
            <FaEllipsisVertical size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function Page() {
  return (
    <>
      <NavBar />
      <Contents />
    </>
  );
}
