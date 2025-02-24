import React, { useState } from "react";
import axios from "axios";

const CarForm = ({ onClose }) => { // Add onClose prop
  const [formData, setFormData] = useState({
    brandName: "",
    modelName: "",
    price: "",
    color: "",
    type: "",
    seats: "",
    engine: "",
    roadLimit: "",
    fuelCapacity: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/cars", formData);
      console.log("Car added successfully:", response.data);
      onClose(); // Close form on success
    } catch (error) {
      console.error("Error adding car:", error);
      setError("Failed to add car");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fff] rounded-2xl shadow-2xl absolute right-[350px] top-[50px] left-[400px] bottom-[100px] border-[1px] border-[#dddddd] z-1">
      <form
        onSubmit={handleForm}
        className="flex flex-col justify-around p-[48px] gap-[50px]"
      >
        <div className="w-full flex justify-between items-center">
          <h1 className="text-[28px] font-medium">Бүртгэл</h1>
          <button type="button" onClick={onClose} className="text-2xl">
            ×
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="grid grid-cols-2 items-center flex-wrap px-[10px] gap-[20px]">
          <div className="w-full flex flex-col px-[20px]">
            <select
              name="brandName"
              className="border-b-[2px] h-[60px]"
              value={formData.brandName}
              onChange={handleChange}
            >
              <option value="" disabled>
                Машины Брэнд
              </option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Nissan">Nissan</option>
            </select>
          </div>
          {/* Other inputs converted similarly */}
          <div className="w-full flex flex-col px-[20px]">
            <input
              name="modelName"
              type="text"
              placeholder="Машины Модел"
              className="border-b-[2px] border-b-[rgb(180,180,180)] h-[60px] focus:border-[#000] focus:outline-none"
              value={formData.modelName}
              onChange={handleChange}
            />
          </div>
          {/* Add remaining inputs with name attributes */}
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
            disabled={loading}
            className="w-[150px] h-[50px] bg-gradient-to-br from-[#000000] to-[#090835] text-white rounded-md disabled:opacity-50"
          >
            {loading ? "Saving..." : "Болсон"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;

 