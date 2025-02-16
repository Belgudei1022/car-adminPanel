import React, { useState } from "react";
import RentRow from "./rentRow";

const RentedCars = () => {
  const [rentedCars, setRentedCars] = useState([
    {
      rentalId: 1,
      carId: 1,
      userId: 1,
      startDate: "2022-01-01",
      endDate: "2022-01-02",
      paymentStatus: "Төлөгдсөн",
    },
  ]);
  return (
    <div className="w-1/2 h-[400px] bg-white rounded-2xl p-[20px] flex flex-col gap-[5px]">
      <h1 className="font-medium text-[20px] pb-[10px] border-b-1 border-stone-200">
        Түрээслэгдэж байгаа машинууд
      </h1>
      <div className="flex flex-row justify-between">
        <p className="font-medium w-[60px] h-[30px] text-center flex align-center justify-center">
          Түрээс
        </p>
        <p className="font-medium w-[90px] h-[30px] text-center flex align-center justify-center">
          Хэрэглэгч
        </p>
        <p className="font-medium w-[70px] h-[30px] text-center flex align-center justify-center">
          Машин
        </p>
        <p className="font-medium w-[130px] h-[30px] text-center flex align-center justify-center">
          Эхэлсэн огноо
        </p>
        <p className="font-medium w-[130px] h-[30px] text-center flex align-center justify-center">
          Дуусах огноо
        </p>
        <p className="font-medium w-[100px] h-[30px] text-center flex align-center justify-center">
          Төлсөн эсэх
        </p>
      </div>
      <div className="flex flex-col">
        {" "}
        {rentedCars.map((el) => {
          return <RentRow data={el} />;
        })}
      </div>
    </div>
  );
};

export default RentedCars;
