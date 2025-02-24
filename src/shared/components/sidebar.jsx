import React from "react";
import Buttons from "./Buttons";
import LogOut from "./LogOut";

const Sidebar = () => {
  return (
    <div className="w-full sm:w-64 h-screen px-4 py-6 bg-gradient-to-b from-gray-900 to-indigo-950 text-white shadow-lg flex flex-col justify-between fixed lg:sticky top-0 z-40">
      <div>
        <Buttons />
      </div>
      <LogOut />
    </div>
  );
};

export default Sidebar;
