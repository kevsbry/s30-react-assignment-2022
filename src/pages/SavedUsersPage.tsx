import React, { useEffect, useState } from "react";
import { User } from "../typings/user";
import UserBasicInfoCard from "../components/UserBasicInfoCard";

const SavedUsersPage = () => {
  const [savedUsers, setSavedUsers] = useState<User[]>([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") ?? "[]") as User[];
    setSavedUsers(users);
  }, []);

  return (
    <div className="bg-page min-h-screen p-4 flex flex-row flex-wrap">
      {savedUsers.map(({ name, email }, i) => (
        <UserBasicInfoCard
          key={`${i}-${email}`}
          fullName={`${name?.title} ${name?.first} ${name?.last}`}
          email={email ?? ""}
        />
      ))}
    </div>
  );
};

export default SavedUsersPage;
