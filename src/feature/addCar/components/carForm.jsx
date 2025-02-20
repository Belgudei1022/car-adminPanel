import React, { useState } from "react";
import axios from "axios";

const CarForm = () => {
  const [brandName, setBrandName] = useState("");
  const [modelName, setModelName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [seats, setSeats] = useState("");
  const [engine, setEngine] = useState("");
  const [roadLimit, setRoadLimit] = useState("");
  const [fuelCapacity, setFuelCapacity] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("http://localhost:3000/brand/add", { brandName });
      // await axios.post("http://localhost:3000/model/add", {
      //   brandName,
      //   modelName,
      // });
      const cars = await axios.post("http://localhost:3000/cars/add", {
        brandName,
        modelName,
        price,
        color,
        type,
        seats,
        engine,
        roadLimit,
        fuelCapacity,
      });
      console.log("Car added successfully:", cars.data);
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <div className="bg-[#fff] rounded-2xl shadow-2xl absolute right-[350px] top-[50px] left-[400px] bottom-[100px] border-[1px] border-[#dddddd] z-1">
      <form
        onSubmit={handleForm}
        className="flex flex-col justify-around p-[48px] gap-[50px]">
        <div className="w-full flex justify-center">
          <h1 className="w-fit text-[28px] font-medium">Бүртгэл</h1>
        </div>
        <div className="grid grid-cols-2 items-center flex-wrap px-[10px] gap-[20px]">
          <div className="w-full flex flex-col px-[20px]">
            <select
              className="border-b-[2px] h-[60px]"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}>
              <option value="" disabled>
                Машины Брэнд
              </option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Nissan">Nissan</option>
            </select>
          </div>
          <div className="w-full flex flex-col px-[20px]">
            <input
              type="text"
              placeholder="Машины Модел"
              className="border-b-[2px] border-b-[rgb(180,180,180)] h-[60px] focus:border-[#000] focus:outline-none"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col px-[20px]">
            <input
              type="text"
              placeholder="Машины Үнэ"
              className="border-b-[2px] border-b-[rgb(180,180,180)] h-[60px] focus:border-[#000] focus:outline-none"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col px-[20px]">
            <input
              type="text"
              placeholder="Машины Өнгө"
              className="border-b-[2px] border-b-[rgb(180,180,180)] h-[60px] focus:border-[#000] focus:outline-none"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col px-[20px]">
            <input
              type="text"
              placeholder="Машины Араа"
              className="border-b-[2px] border-b-[rgb(180,180,180)] h-[60px] focus:border-[#000] focus:outline-none"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col px-[20px]">
            <input
              type="text"
              placeholder="Машины Суудлын Тоо"
              className="border-b-[2px] border-b-[rgb(180,180,180)] h-[60px] focus:border-[#000] focus:outline-none"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col px-[20px]">
            <input
              type="text"
              placeholder="Машины Хөдөлгүүр"
              className="border-b-[2px] border-b-[rgb(180,180,180)] h-[60px] focus:border-[#000] focus:outline-none"
              value={engine}
              onChange={(e) => setEngine(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col px-[20px]">
            <input
              type="text"
              placeholder="Машины Замын Хязгаар"
              className="border-b-[2px] border-b-[rgb(180,180,180)] h-[60px] focus:border-[#000] focus:outline-none"
              value={roadLimit}
              onChange={(e) => setRoadLimit(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col px-[20px]">
            <input
              type="text"
              placeholder="Машины Түлшний Багтаамж"
              className="border-b-[2px] border-b-[rgb(180,180,180)] h-[60px] focus:border-[#000] focus:outline-none"
              value={fuelCapacity}
              onChange={(e) => setFuelCapacity(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex justify-end px-[25px]">
          <button
            type="submit"
            className="w-[150px] h-[50px] bg-gradient-to-br from-[#000000] to-[#090835] text-white rounded-md">
            Болсон
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
