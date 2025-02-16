import React from "react";

const LoginForm = () => {
  return (
    <div className="w-1/2 h-3/4 flex items-center justify-center relative ">
      <form
        action=""
        className="flex flex-col  w-3/4 h-full px-[20px] py-[40px] align-center rounded-4xl gap-[20px] items-center justify-center absolute">
        <h1 className="text-[24px] font-medium text-center ">Нэвтрэх</h1>
        <div className="flex flex-col gap-[20px] mt-[25px] w-full items-center">
          <input
            type="text"
            className="border-1 border-stone-300 w-[300px] h-[35px] rounded-xl"
          />
          <input
            type="text"
            className="border-1 border-stone-300 w-[300px] h-[35px] rounded-xl"
          />
        </div>
        <button className="w-[300px] h-[50px] bg-[#222222] text-white rounded-xl">
          Нэвтрэх
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
