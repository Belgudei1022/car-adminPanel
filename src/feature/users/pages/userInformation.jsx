import React from "react";
import Layout from "../../../shared/pages/layout";
import Title from "../components/Title";
import CustomerList from "../components/customerList";

const UserInformation = () => {
  return (
    <Layout>
      <div className="w-full p-4 sm:p-6 lg:p-8">
        <Title />
        <CustomerList />
      </div>
    </Layout>
  );
};

export default UserInformation;