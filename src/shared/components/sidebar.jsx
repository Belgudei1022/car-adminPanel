import React from "react";
import Buttons from "./buttons";
import LogOut from "./logOut";

const Sidebar = () => {
  return (
    <div className="w-1/5 h-screen bg-black fixed px-[20px] hidden flex-col justify-between lg:flex">
      <Buttons />
      <LogOut />
    </div>
  );
};

export default Sidebar;
