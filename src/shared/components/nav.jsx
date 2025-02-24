import React from "react";

const Nav = ({ toggleSidebar }) => {
  return (
    <div className="w-full h-16 bg-white shadow-sm px-4 flex items-center justify-between lg:hidden sticky top-0 z-50">
      <h1 className="text-lg font-semibold text-gray-800">Admin Panel</h1>
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <svg
          className="w-6 h-6 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 17H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 7H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Nav;