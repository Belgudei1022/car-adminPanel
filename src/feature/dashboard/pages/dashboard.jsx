import React, { useState } from "react";
import Layout from "../../../shared/pages/layout";
import Card from "../components/Card";
import RentedCars from "../components/RentedCars";
import Graphic from "../components/Graphic";

const Dashboard = () => {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [cardData] = useState([
    { name: "Total Profit", value: "$58,397753", data: "+1,232" },
    { name: "Total Transactions", value: "$58,3,753", data: "-232" },
    { name: "Total Users", value: "12,345", data: "+1,232" },
    { name: "Total Cars", value: "567", data: "+1,232" },
  ]);

  return (
    <Layout>
      <div className="w-full p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Today's Statistics
          </h1>
          <p className="text-sm text-gray-500 mt-1">{date}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
          {cardData.map((el, index) => (
            <Card key={index} data={el} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Graphic />
          <RentedCars />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;