import React, { useState } from "react";
import Layout from "../../../shared/pages/layout";
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
    { name: "Нийт ашиг", value: "$ 58397583753", data: "+1232" },
    { name: "Нийт Гүйлгээ", value: "$ 58397583753" },
    { name: "Нийт Хэрэглэгчид", value: "$ 58397583753" },
    { name: "Нийт Машин", value: "$ 58397583753" },
  ]);

  return (
    <Layout>
      <div className="w-full max-w-[1440px] min-h-screen p-4">
        <div className="w-full px-4 flex flex-col gap-4">
          <div className="title">
            <p className="text-black text-lg lg:text-2xl font-medium">
              Өнөөдрийн статистик
            </p>
            <p className="text-black text-sm lg:text-lg font-medium">{date}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardData.map((el, index) => (
              <Card key={index} data={el} />
            ))}
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4">
            <Graphic className="w-full lg:w-1/2" />
            <RentedCars className="w-full lg:w-1/2" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
