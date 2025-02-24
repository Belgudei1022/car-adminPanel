import React from "react";

const CustomerItem = ({ user }) => {
  return (
    <div className="md:grid md:grid-cols-8 gap-4 p-4 md:p-0 bg-white md:bg-transparent rounded-lg shadow-sm md:shadow-none hover:bg-gray-50 transition-colors">
      <p className="md:text-sm text-gray-700 font-medium md:font-normal">
        <span className="md:hidden font-semibold">ID: </span>{user.userID}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">Last: </span>{user.lastName}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">First: </span>{user.firstName}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">Email: </span>{user.email}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">Phone: </span>{user.phone}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">Address: </span>{user.address}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">ID Img: </span>{user.identityImage}
      </p>
      <p className="md:text-sm text-gray-700">
        <span className="md:hidden font-semibold">License: </span>{user.licenseImage}
      </p>
    </div>
  );
};

export default CustomerItem;