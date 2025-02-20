import React from "react";
import Sidebar from "../components/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-fit flex flex-row">
      <Sidebar />
      <main className="max-w-[1670px] w-full h-screen absolute right-0 bg-[#F9FAFB] flex justify-center ">
        {children}
      </main>
    </div>
  );
};

export default Layout;
