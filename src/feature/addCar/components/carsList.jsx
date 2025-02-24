import { useDispatch, useSelector } from "react-redux";
import CarItem from "./carItem";

const CarsList = () => {
  const cars = useSelector((state) => {
    return state.car.cars.car;
  });

  return (
    <div className="w-full h-[700px] bg-white drop-shadow-xl rounded-2xl p-[20px] flex flex-col gap-[5px] mt-[50px]">
      <div className="w-full flex flex-row justify-between mb-[10px] pb-[20px] border-b-1 border-stone-200">
        <h1 className="font-medium text-[20px]">Бүртгэгдсэн машинууд</h1>
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-medium w-[80px] h-[30px] text-start flex align-center justify-center">
          Брэнд
        </p>
        <p className="font-medium w-[200px] h-[30px] text-start flex align-center justify-center">
          Модел
        </p>
        <p className="font-medium w-[100px] h-[30px] text-start flex align-center justify-center">
          Үнэ
        </p>
        <p className="font-medium w-[80px] h-[30px] text-start flex align-center justify-center">
          Өнгө
        </p>
        <p className="font-medium w-[100px] h-[30px] text-start flex align-center justify-center">
          Араа
        </p>
        <p className="font-medium w-[80px] h-[30px] text-start flex align-center justify-center">
          Суудал
        </p>
        <p className="font-medium w-[100px] h-[30px] text-start flex align-center justify-center">
          Хөдөлгүүр
        </p>
        <p className="font-medium w-[150px] h-[30px] text-start flex align-center justify-center">
          Замын Хязгаар
        </p>
        <p className="font-medium w-[150px] h-[30px] text-start flex align-center justify-center">
          Түлшний багтаамж
        </p>
      </div>
      <div className="flex flex-col gap-[5px]">
        {cars && cars.length > 0 ? (
          cars.map((car) => <CarItem key={car.id} data={car} />)
        ) : (
          <p>No cars available</p>
        )}
      </div>
    </div>
  );
};

export default CarsList;
