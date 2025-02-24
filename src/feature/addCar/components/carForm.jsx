import React, { useState } from "react";
import axios from "axios";

const CarForm = ({ onClose }) => {
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
      console.log("Car added:", response.data);
      onClose();
    } catch (error) {
      setError("Failed to add car");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white bg-opacity-95 rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-lg mx-4 border border-gray-200">
        <form onSubmit={handleForm} className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Add Car</h1>
            <button type="button" onClick={onClose} className="text-xl text-gray-500 hover:text-gray-800">
              ×
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50 text-gray-700"
            >
              <option value="" disabled>Car Brand</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Nissan">Nissan</option>
            </select>
            <input
              name="modelName"
              type="text"
              placeholder="Model"
              value={formData.modelName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50"
            />
            <input
              name="price"
              type="text"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50"
            />
            <input
              name="color"
              type="text"
              placeholder="Color"
              value={formData.color}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50"
            />
            <input
              name="type"
              type="text"
              placeholder="Transmission"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50"
            />
            <input
              name="seats"
              type="number"
              placeholder="Seats"
              value={formData.seats}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50"
            />
            <input
              name="engine"
              type="text"
              placeholder="Engine"
              value={formData.engine}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50"
            />
            <input
              name="roadLimit"
              type="text"
              placeholder="Road Limit"
              value={formData.roadLimit}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50"
            />
            <input
              name="fuelCapacity"
              type="text"
              placeholder="Fuel Capacity"
              value={formData.fuelCapacity}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all disabled:opacity-50"
          >
            {loading ? "Saving..." : "Add Car"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarForm;