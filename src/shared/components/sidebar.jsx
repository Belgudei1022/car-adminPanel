// import React from "react";
// import Buttons from "./buttons";
// import LogOut from "./logOut";
// const Sidebar = () => {
//   return (
//     <div className="w-1/5 h-screen bg- fixed px-[20px] hidden flex-col justify-between lg:flex">
//       <Buttons />
//       <LogOut />
//     </div>
//   );
// };
// export default Sidebar;

import React from "react";
import Buttons from "./buttons";
import LogOut from "./logOut";

const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen px-[20px] hidden flex-col justify-between lg:flex bg-gradient-to-b from-[#000000] to-[#08072D]">
      <Buttons />
      <LogOut />
    </div>
  );
};

export default Sidebar;
