import React from "react";
import Layout from "../../../shared/pages/layout";
import Title from "../components/title";
import CarForm from "../components/carForm";

const AddCar = () => {
  return (
    <Layout>
      <div className="w-full h-screen p-[20px] px-[40px]">
        <Title />
        <CarForm />
      </div>
    </Layout>
  );
};

export default AddCar;
