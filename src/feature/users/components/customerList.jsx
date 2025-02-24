import React from "react";
import CustomerItem from "./customerItem";
import { useSelector } from "react-redux";
const CustomerList = () => {
  const users = useSelector((state) => state.user.users);

  return (
    <div className="w-full h-[700px] bg-white drop-shadow-xl rounded-2xl p-[20px] flex flex-col gap-[5px] mt-[50px]">
      <div className="w-full flex flex-row justify-between mb-[10px] pb-[20px] border-b-1 border-stone-200">
        <h1 className="font-medium text-[20px] ">Бүртгэлтэй хэрэглэгчид</h1>
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
          Дугаар
        </p>
        <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
          Овог
        </p>
        <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
          Нэр
        </p>
        <p className="font-medium w-[120px] h-[30px] text-center flex align-center justify-center">
          Цахим хаяг
        </p>
        <p className="font-medium w-[120px] h-[30px] text-center flex align-center justify-center">
          Нууц үг
        </p>
        <p className="font-medium w-[150px] h-[30px] text-center flex align-center justify-center">
          Утасны дугаар
        </p>
        <p className="font-medium w-[150px] h-[30px] text-center flex align-center justify-center">
          Хаяг
        </p>
        <p className="font-medium w-[150px] h-[30px] text-center flex align-center justify-center">
          Ирэгний үнэмлэх
        </p>
        <p className="font-medium w-[150px] h-[30px] text-center flex align-center justify-center">
          Машины үнэмлэх
        </p>
      </div>
      <div className="flex flex-col gap-[5px]">
        {users.map((user) => (
          <CustomerItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
