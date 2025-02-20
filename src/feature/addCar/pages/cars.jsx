import React, { useState } from "react";
import Layout from "../../../shared/pages/layout";
import Title from "../components/title";
import CarForm from "../components/carForm";
import CarsList from "../components/carsList";

const Cars = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to close the form
  const closeForm = () => setIsFormVisible(false);

  return (
    <Layout>
      <div className="w-full max-w-[1440px] h-screen p-[20px] px-[40px] relative">
        <div className="flex flex-row items-center justify-between">
          <Title />
          <button
            className="w-[30px] h-[30px] bg-[#f9fafb] rounded-lg drop-shadow-md font-bold"
            onClick={() => setIsFormVisible(!isFormVisible)}>
            {isFormVisible ? "-" : "+"}
          </button>
        </div>

        {isFormVisible && (
          <div
            className="absolute inset-0  bg-opacity-0 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeForm}>
            <div
              className="bg-[#ffffff00] p-6 rounded-xl "
              onClick={(e) => e.stopPropagation()}>
              <CarForm />
            </div>
          </div>
        )}

        <CarsList />
      </div>
    </Layout>
  );
};

export default Cars;
