import React from "react";

const RentRow = ({ data }) => {
  return (
    <div className="flex flex-row h-[30px]  justify-between">
      <p className="font-medium w-[60px] h-[30px] text-center flex align-center justify-center">
        {data.rentalId}
      </p>
      <p className="font-medium w-[90px] h-[30px] text-center flex align-center justify-center">
        {data.userId}
      </p>
      <p className="font-medium w-[70px] h-[30px] text-center flex align-center justify-center">
        {data.carId}
      </p>
      <p className="font-medium w-[130px] h-[30px] text-center flex align-center justify-center">
        {data.startDate}
      </p>
      <p className="font-medium w-[130px] h-[30px] text-center flex align-center justify-center">
        {data.endDate}
      </p>
      <p className="font-medium w-[100px] h-[30px] text-center flex align-center justify-center">
        {data.paymentStatus}
      </p>
    </div>
  );
};

export default RentRow;
