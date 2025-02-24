import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../../../redux/carSlice";
import CarItem from "./CarItem";

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car.cars.car);
  console.log(cars);

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cars/delete/${id}`);
      dispatch(removeCar(id));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-6 overflow-x-auto">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        Бүртгэгдсэн машинууд (Registered Cars)
      </h1>

      <div className="hidden md:grid grid-cols-10 gap-4 border-b border-stone-200 pb-2 text-sm font-medium text-gray-600">
        <p>Brand</p>
        <p>Model</p>
        <p>Price</p>
        <p>Color</p>
        <p>Type</p>
        <p>Seats</p>
        <p>Engine</p>
        <p>Road Limit</p>
        <p>Fuel Capacity</p>
        <p>Actions</p>
      </div>

      <div className="space-y-4 md:space-y-0">
        {cars && cars.length > 0 ? (
          cars.map((car) => (
            <CarItem
              key={car.id}
              data={car}
              onDelete={() => deleteCar(car.id)}
            />
          ))
        ) : (
          <p className="text-gray-600 mt-4">No cars available</p>
        )}
      </div>
    </div>
  );
};

export default CarsList;
