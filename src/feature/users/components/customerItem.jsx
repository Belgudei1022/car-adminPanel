import React from "react";

const CustomerItem = ({ user }) => {
  return (
    <div className="flex flex-row justify-between">
      <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
        {user.userID}
      </p>
      <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
        {user.lastName}
      </p>
      <p className="font-medium w-[80px] h-[30px] text-center flex align-center justify-center">
        {user.firstName}
      </p>
      <p className="font-medium w-[120px] h-[30px] text-center flex align-center justify-center">
        {user.email}
      </p>
      <p className="font-medium w-[150px] h-[30px] text-center flex align-center justify-center">
        {user.phone}
      </p>
      <p className="font-medium w-[150px] h-[30px] text-center flex align-center justify-center">
        {user.address}
      </p>
      <p className="font-medium w-[150px] h-[30px] text-center flex align-center justify-center">
        {user.identityImage}
      </p>
      <p className="font-medium w-[150px] h-[30px] text-center flex align-center justify-center">
        {user.licenseImage}
      </p>
    </div>
  );
};

export default CustomerItem;
