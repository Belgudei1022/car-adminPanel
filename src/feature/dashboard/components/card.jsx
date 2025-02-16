import React from "react";

const Card = ({ data }) => {
  return (
    <div className=" h-[200px] rounded-xl bg-white  w-[340px] flex flex-col p-[10px] gap-[10px]">
      <h2 className="text-[20px] font-medium text-stone-800 px-[10px]">
        {data.name}
      </h2>
      <p className="text-[30px] px-[10px]">{data.value}</p>
    </div>
  );
};

export default Card;
