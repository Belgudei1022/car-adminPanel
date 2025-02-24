import React from "react";

const Card = ({ data }) => {
  const dataColor =
    data.data && data.data.includes("+") ? "text-[#6FE700]" : "text-[#E50000]";
  const dataImage =
    data.data && data.data.includes("+")
      ? "src/assets/arrow-small-up.png"
      : "src/assets/arrow-small-down.png";

  return (
    <div className="h-[200px] rounded-xl bg-white drop-shadow-xl w-auto flex flex-col p-[24px] gap-[10px]">
      <h2 className="text-[22px] font-medium text-stone-800">{data.name}</h2>
      <p className="text-[34px] font-semibold mt-[10px]">{data.value}</p>
      <p className="px-[5px] flex flex-row gap-[2px] items-center">
        Өмнөх сараас
        <img src={dataImage} alt="" className="w-[16px] h-[16px]" />
        <span className={`${dataColor}`}>{data.data}</span>
      </p>
    </div>
  );
};

export default Card;
