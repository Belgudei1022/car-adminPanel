import React from "react";
import Layout from "../../../shared/pages/layout";
import Today from "../components/today";
import Left from "../components/left";
import Right from "../components/right";

const Transactions = () => {
  return (
    <Layout>
      <Today />
      <div className="w-full h-full flex flex-row gap-[20px] mx-[50px]">
        <Left />
        <Right />
      </div>
    </Layout>
  );
};

export default Transactions;
