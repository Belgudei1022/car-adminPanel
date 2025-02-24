import React from "react";

const CarItem = ({ data }) => {
  return (
    <div className="flex flex-row justify-between">
      <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
        {data.brandName}
      </p>
      <p className="font-medium w-[200px] h-[30px] text-center flex align-center justify-center">
        {data.modelName}
      </p>
      <p className="font-medium w-[100px] h-[30px] text-center flex align-center justify-center">
        {data.price}
      </p>
      <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
        {data.color}
      </p>
      <p className="font-medium w-[100px] h-[30px] text-center flex align-center justify-center">
        {data.type}
      </p>
      <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
        {data.seats}
      </p>
      <p className="font-medium w-[100px] h-[30px] text-center flex align-center justify-center">
        {data.engine}
      </p>
      <p className="font-medium w-[150px] h-[30px] text-center flex align-center justify-center">
        {data.roadLimit}
      </p>
      <p className="font-medium w-[150px] h-[30px] text-center flex align-center justify-center">
        {data.fuelCapacity}
      </p>
    </div>
  );
};

export default CarItem;
