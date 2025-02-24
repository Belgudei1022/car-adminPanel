// import React from "react";
// import Sidebar from "../components/sidebar";

// const Layout = ({ children }) => {
//   return (
//     <div className="w-full h-fit flex flex-col lg:flex-row">
//       <Sidebar />
//       <main className="lg:max-w-[1670px] w-full min-h-screen bg-[#F9FAFB] flex justify-center p-4">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Layout;


import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 transition-all duration-300">
      {/* Mobile Nav */}
      <Nav toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex flex-1">
        {/* Sidebar - Hidden on mobile, visible on lg+ */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;