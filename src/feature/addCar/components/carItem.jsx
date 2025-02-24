import React from "react";

const CarItem = ({ data, onDelete }) => {
  // console.log(data);
  return (
    <div className="md:grid md:grid-cols-10 gap-4 p-4 md:p-0 bg-white md:bg-transparent rounded-lg shadow-sm md:shadow-none hover:bg-gray-50 transition-colors">
      <p className="md:text-sm text-gray-700 font-medium md:font-normal">
        <span className="md:hidden font-semibold">Brand: </span>
        {data.brandName}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">Model: </span>
        {data.modelName}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">Price: </span>
        {data.price}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">Color: </span>
        {data.color}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">Type: </span>
        {data.type}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">Seats: </span>
        {data.seats}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">Engine: </span>
        {data.engine}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">Road Limit: </span>
        {data.roadLimit}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">Fuel Capacity: </span>
        {data.fuelCapacity}
      </p>
      <button
        className="text-red-500 hover:text-red-700 font-semibold"
        onClick={onDelete}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px]">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
              stroke="#bd0000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
};

export default CarItem;
