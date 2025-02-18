import React from "react";
import Sidebar from "../components/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-fit flex flex-row">
      <Sidebar />
      <main className="lg:w-4/5 w-full h-screen absolute right-0 bg-[#fff]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
