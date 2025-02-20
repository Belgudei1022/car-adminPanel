import React from "react";
import { Link } from "react-router";
import { logout } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

const LogOut = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout);
  };
  return (
    <Link to="/">
      <div
        className="px-[20px] mb-[60px] flex flex-row align-center gap-[10px]"
        onClick={handleLogOut}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[26px] h-[30px] ">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H17C17.5523 21 18 20.5523 18 20C18 19.4477 17.5523 19 17 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H17C17.5523 5 18 4.55228 18 4C18 3.44772 17.5523 3 17 3H6ZM15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289C13.9024 7.68342 13.9024 8.31658 14.2929 8.70711L16.5858 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16.5858L14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L15.7071 7.29289Z"
              fill="#ffffff"></path>{" "}
          </g>
        </svg>
        <button className="text-white text-[22px] font-medium text-start">
          Sign Out
        </button>
      </div>
    </Link>
  );
};

export default LogOut;
