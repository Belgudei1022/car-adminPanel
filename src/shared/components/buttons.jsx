import React from "react";
import { Link } from "react-router";

const Buttons = () => {
  return (
    <div className="flex flex-col w-fit mt-[100px] gap-[10px] px-[20px] ">
      <Link to="/dashboard">
        <div className="flex flex-row gap-[10px] align-center">
          <svg
            className="w-[26px] h-[26px] mt-[2px]"
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
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
                d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"></path>{" "}
            </g>
          </svg>
          <button className="text-white text-[18px] font-medium text-start">
            Dashboard
          </button>
        </div>
      </Link>
      <Link to="/cars">
        <div className="flex flex-row gap-[10px] align-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[26px] h-[22px] mt-[3px]">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z"
                fill="#ffffff"></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                fill="#ffffff"></path>{" "}
            </g>
          </svg>
          <button className="text-white text-[18px] font-medium text-start">
            Add Cars
          </button>
        </div>
      </Link>
      <Link to="/order">
        <div className="flex flex-row gap-[10px] align-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[26px] h-[22px] mt-[3px]">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect
                x="3"
                y="6"
                width="18"
                height="13"
                rx="2"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"></rect>{" "}
              <path
                d="M3 10H20.5"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"></path>{" "}
              <path
                d="M7 15H9"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"></path>{" "}
            </g>
          </svg>
          <button className="text-white text-[18px] font-medium text-start">
            Orders
          </button>
        </div>
      </Link>
      <Link to="user">
        <div className="flex flex-row gap-[10px] align-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[26px] h-[22px] mt-[2px]">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M17.9998 15.8369C19.4557 16.5683 20.704 17.742 21.6151 19.2096C21.7955 19.5003 21.8857 19.6456 21.9169 19.8468C21.9803 20.2558 21.7006 20.7585 21.3198 20.9204C21.1323 21 20.9215 21 20.4998 21M15.9998 11.5322C17.4816 10.7959 18.4998 9.26686 18.4998 7.5C18.4998 5.73314 17.4816 4.20411 15.9998 3.46776M13.9998 7.5C13.9998 9.98528 11.9851 12 9.49984 12C7.01455 12 4.99984 9.98528 4.99984 7.5C4.99984 5.01472 7.01455 3 9.49984 3C11.9851 3 13.9998 5.01472 13.9998 7.5ZM2.55907 18.9383C4.15337 16.5446 6.66921 15 9.49984 15C12.3305 15 14.8463 16.5446 16.4406 18.9383C16.7899 19.4628 16.9645 19.725 16.9444 20.0599C16.9287 20.3207 16.7578 20.64 16.5494 20.7976C16.2818 21 15.9137 21 15.1775 21H3.82219C3.08601 21 2.71791 21 2.45028 20.7976C2.24189 20.64 2.07092 20.3207 2.05527 20.0599C2.03517 19.725 2.2098 19.4628 2.55907 18.9383Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"></path>{" "}
            </g>
          </svg>
          <button className="text-white text-[18px] font-medium text-start">
            Customers
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Buttons;
