import React, { useState } from "react";
import Layout from "../../../shared/pages/layout";
import Title from "../components/title";
import CarForm from "../components/carForm";
import CarsList from "../components/carsList";
import FetchData from "../../../shared/service/api";

const Cars = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <Layout>
      <div className="w-full max-w-[1440px] min-h-screen p-4 relative">
        <div className="flex flex-row items-center justify-between">
          <Title />
          <button
            className="w-10 h-10 bg-[#f9fafb] rounded-lg drop-shadow-md font-bold"
            onClick={() => setIsFormVisible(!isFormVisible)}
          >
            {isFormVisible ? "-" : "+"}
          </button>
        </div>

        {isFormVisible && (
          <div className="absolute inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
            <div
              className="bg-white p-6 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <CarForm onClose={() => setIsFormVisible(false)} />
            </div>
          </div>
        )}
        <FetchData />
        <CarsList />
      </div>
    </Layout>
  );
};

export default Cars;
