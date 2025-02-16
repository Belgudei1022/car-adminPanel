import React from "react";

const Pic = () => {
  return (
    <div className="w-1/2 h-full relative">
      <img
        src="https://i.pinimg.com/736x/77/32/b9/7732b96a0e08f3a45f6cd879665d7ee4.jpg"
        alt="Car rental admin panel background"
        className="w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bottom-30">
        <h2 className="text-white text-3xl font-bold text-center  animate-typing overflow-hidden whitespace-nowrap border-r-4">
          Welcome to your Car app's admin panel
        </h2>
      </div>
    </div>
  );
};

export default Pic;

