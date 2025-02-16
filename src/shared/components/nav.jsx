import React from "react";

const Nav = () => {
  return (
    <div className="w-full h-[60px] flex flex-row justify-between items-center bg-[#F8F8F8] px-[10px]">
      <div></div>
      <button className="w-[40px] h-[40px] rounded-lg flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M5 12H20"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"></path>{" "}
            <path
              d="M5 17H20"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"></path>{" "}
            <path
              d="M5 7H20"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Nav;
