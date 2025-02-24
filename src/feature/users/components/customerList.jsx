import React from "react";
import { useSelector } from "react-redux";
import CustomerItem from "./CustomerItem";

const CustomerList = () => {
  const users = useSelector((state) => state.user.users.user);

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-6 overflow-x-auto">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        Registered Users
      </h1>
      
      {/* Table Headers - Hidden on mobile */}
      <div className="hidden md:grid grid-cols-8 gap-4 border-b pb-2 text-sm font-medium text-gray-600">
        <p>ID</p>
        <p>Last Name</p>
        <p>First Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Address</p>
        <p>ID Image</p>
        <p>License</p>
      </div>

      {/* Mobile: Card Layout | Desktop: Table Rows */}
      <div className="space-y-4 md:space-y-0">
        {users.map((user) => (
          <CustomerItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default CustomerList;