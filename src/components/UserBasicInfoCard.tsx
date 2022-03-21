import React from "react";

const UserBasicInfoCard = ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  return (
    <div className="bg-white flex flex-col items-start justify-center p-2 m-1 rounded-md max-h-[80px]">
      <h4 className="font-semibold">{fullName}</h4>
      <h4>{email}</h4>
    </div>
  );
};

export default UserBasicInfoCard;
