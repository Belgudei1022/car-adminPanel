import React, { useState } from "react";
import Layout from "../../../shared/pages/layout";
import Nav from "../../../shared/components/nav";
import Card from "../components/card";
import RentedCars from "../components/rentedCars";
import Graphic from "../components/graphic";

const Dashboard = () => {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [cardData, setCardData] = useState([
    { name: "Нийт ашиг", value: "$ 58397583753" },
    { name: "Нийт ашиг", value: "$ 58397583753" },
    { name: "Нийт ашиг", value: "$ 58397583753" },
    { name: "Нийт ашиг", value: "$ 58397583753" },
  ]);

  return (
    <Layout>
      <div className="w-full h-screen p-[20px] px-[40px] ">
        <div className="w-full px-[10px] flex flex-col gap-[20px]">
          <div className="title">
            <p className="text-black text-[26px] mt-[5px]  font-medium">
              Өнөөдрийн статистик
            </p>
            <p className="text-black text-[20px] mt-[5px] font-medium">
              {date}
            </p>
          </div>
          <div className="flex flex-row mt-[40px] justify-between gap-4">
            {cardData.map((el) => {
              return <Card data={el} />;
            })}
          </div>
          <div className="w-full h-full flex flex-row gap-4">
            <Graphic />
            <RentedCars />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
