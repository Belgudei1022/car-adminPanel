import React from 'react';

const Today = () => {
    const today = new Date().toLocaleDateString("mn-MN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
      <div className="bg-[#D9D9D9] flex align-center justify-between w-[40%] h-fit p-[20px] m-[50px] border-1 border-stone-400 rounded-xl">
        <h1 className="text-xl font-medium">Өнөөдрийн гүйлгээ </h1>
        <span className="text-xl font-medium">{today}</span>
      </div>
    );
}

export default Today;
