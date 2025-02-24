import React from "react";
import Layout from "../../../shared/pages/layout";
import Title from "../components/title";
import CustomerList from "../components/customerList";

const UserInformation = () => {
  return (
    <Layout>
      <div className="w-full max-w-[1440px] min-h-screen p-4">
        <Title />
        <CustomerList />
      </div>
    </Layout>
  );
};

export default UserInformation;
