import React from "react";
import Sidebar from "../components/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-fit flex flex-col lg:flex-row">
      <Sidebar />
      <main className="lg:max-w-[1670px] w-full min-h-screen bg-[#F9FAFB] flex justify-center p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
