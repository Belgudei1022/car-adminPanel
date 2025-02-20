import React from "react";
import Layout from "../../../shared/pages/layout";
import Title from "../components/title";
import CustomerList from "../components/customerList";

const UserInformation = () => {
  return (
    <Layout>
      <div className="w-full max-w-[1440px] h-screen p-[20px] px-[40px] relative">
        <Title />
        <CustomerList />
      </div>
    </Layout>
  );
};

export default UserInformation;
