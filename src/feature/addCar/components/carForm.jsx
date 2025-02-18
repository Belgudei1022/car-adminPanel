import React from "react";

const CarForm = () => {
  return (
    <div className="bg-white w-[500px] h-[500px] mt-[50px] rounded-xl p-[20px] px-[30px] ">
      <form action="" className="flex flex-col gap-[20px]">
        <div className="flex flex-row gap-[30px] flex-wrap">
          <div className="flex flex-col gap-[5px] w-fit">
            <p className="font-medium">Машины Брэнд</p>
            <input type="text" className="border-[0.5px] rounded-lg" />
          </div>
          <div className="flex flex-col gap-[5px] w-fit">
            <p className="font-medium">Машины Модел</p>
            <input type="text" className="border-[0.5px] rounded-lg" />
          </div>
          <div className="flex flex-col gap-[5px] w-fit">
            <p className="font-medium">Машины Үнэ</p>
            <input type="text" className="border-[0.5px] rounded-lg" />
          </div>
          <div className="flex flex-col gap-[5px] w-fit">
            <p className="font-medium">Машины Өнгө</p>
            <input type="text" className="border-[0.5px] rounded-lg" />
          </div>
          <div className="flex flex-col gap-[5px] w-fit">
            <p className="font-medium">Машины Араа</p>
            <input type="text" className="border-[0.5px] rounded-lg" />
          </div>
          <div className="flex flex-col gap-[5px] w-fit">
            <p className="font-medium">Машины Суудлын Тоо</p>
            <input type="text" className="border-[0.5px] rounded-lg" />
          </div>
          <div className="flex flex-col gap-[5px] w-fit">
            <p className="font-medium">Машины Хөдөлгүүр</p>
            <input type="text" className="border-[0.5px] rounded-lg" />
          </div>
          <div className="flex flex-col gap-[5px] w-fit">
            <p className="font-medium">Машины Замын Хязгаар</p>
            <input type="text" className="border-[0.5px] rounded-lg" />
          </div>
          <div className="flex flex-col gap-[5px] w-fit">
            <p className="font-medium">Машины Түлшний сав</p>
            <input type="text" className="border-[0.5px] rounded-lg" />
          </div>
        </div>
        <div className="w-full flex justify-end px-[50px]">
          <button
            type="submit"
            className="w-[100px] h-[30px] bg-neutral-900 text-white rounded-md">
            Болсон
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
