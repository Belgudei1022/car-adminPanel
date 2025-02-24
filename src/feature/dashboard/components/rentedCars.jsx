import React from "react"; // Removed unused useState import
import RentRow from "./rentRow";
import { useSelector } from "react-redux";

const RentedCars = () => {
  // Fix the useSelector to properly access the rents from Redux store
  const rents = useSelector((state) => state);

  // Log the state for debugging (optional)
  console.log("Rents from store:", rents);

  return (
    <div className="w-auto h-[400px] bg-white drop-shadow-xl rounded-2xl p-[20px] flex flex-col gap-[5px]">
      <h1 className="font-medium text-[20px] pb-[10px] border-b-1 border-stone-200">
        Түрээслэгдэж байгаа машинууд
      </h1>
      <div className="flex flex-row justify-between">
        <p className="font-medium w-[60px] h-[30px] text-center flex items-center justify-center">
          Түрээс
        </p>
        <p className="font-medium w-[90px] h-[30px] text-center flex items-center justify-center">
          Хэрэглэгч
        </p>
        <p className="font-medium w-[70px] h-[30px] text-center flex items-center justify-center">
          Машин
        </p>
        <p className="font-medium w-[130px] h-[30px] text-center flex items-center justify-center">
          Эхэлсэн огноо
        </p>
        <p className="font-medium w-[130px] h-[30px] text-center flex items-center justify-center">
          Дуусах огноо
        </p>
        <p className="font-medium w-[100px] h-[30px] text-center flex items-center justify-center">
          Төлсөн эсэх
        </p>
      </div>
      <div className="flex flex-col">
        {rents && rents.length > 0 ? (
          rents.map((el, index) => <RentRow key={index} data={el} />)
        ) : (
          <p>No rented cars available</p>
        )}
      </div>
    </div>
  );
};

export default RentedCars;
