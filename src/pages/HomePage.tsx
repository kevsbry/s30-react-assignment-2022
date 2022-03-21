import React from "react";
import UserInfoCard from "../components/UserInfoCard";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-page min-h-screen grid grid-cols-8">
      <div className="col-start-2 col-span-6 flex flex-col items-center pt-12">
        <UserInfoCard />
        <Button
          name="View saved Users"
          onClick={() => {
            navigate("/saved-users");
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
