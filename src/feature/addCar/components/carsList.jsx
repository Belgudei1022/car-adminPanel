import { useEffect } from "react";
import React from "react";
import CarItem from "./carItem";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCars } from "../../../redux/carSlice";

const CarsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = axios.get("http://localhost:3000/cars");
    console.log(data.response);
    dispatch(setCars());
  }, []);
  return (
    <div className="w-full h-[700px] bg-white drop-shadow-xl rounded-2xl p-[20px] flex flex-col gap-[5px] mt-[50px]">
      <div className="w-full flex flex-row justify-between mb-[10px] pb-[20px] border-b-1 border-stone-200">
        <h1 className="font-medium text-[20px] ">Бүртгэгдсэн машинууд</h1>
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
          Брэнд
        </p>
        <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
          Модел
        </p>
        <p className="font-medium w-[100px] h-[30px] text-center flex align-center justify-center">
          Үнэ
        </p>
        <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
          Өнгө
        </p>
        <p className="font-medium w-[100px] h-[30px] text-center flex align-center justify-center">
          Араа
        </p>
        <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
          Суудал
        </p>
        <p className="font-medium w-[100px] h-[30px] text-center flex align-center justify-center">
          Хөдөлгүүр
        </p>
        <p className="font-medium w-[150px] h-[30px] text-center flex align-center justify-center">
          Замын Хязгаар
        </p>
        <p className="font-medium w-[150px] h-[30px] text-center flex align-center justify-center">
          Түлшний багтаамж
        </p>
        <p className="font-medium w-[100px] h-[30px] text-center flex align-center justify-center">
          Байгаа эсэх
        </p>
      </div>
      <div className="flex flex-col gap-[5px]"></div>
    </div>
  );
};

export default CarsList;
