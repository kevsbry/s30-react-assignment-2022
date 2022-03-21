import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchUser } from "../features/user-slice";

import { AiOutlineLoading, AiOutlineReload } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

const UserDetails = ({
  picture,
  title,
  first,
  last,
  email,
}: {
  picture: string;
  title: string;
  first: string;
  last: string;
  email: string;
}) => {
  return (
    <>
      <img
        className="rounded-full m-0 border-[6px] border-slate-100"
        src={picture}
        alt="user"
      />
      <h4 className="text-slate-900">
        {title} {first} {last}
      </h4>
      <h4 className="font-light m-0 text-slate-700">{email}</h4>
    </>
  );
};

const UserInfoCard = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const refreshUser = () => {
    dispatch(fetchUser());
  };

  return (
    <div className="relative flex flex-col items-center justify-center prose prose-slate bg-white rounded-md pt-12 pb-12 min-w-[340px] min-h-[320px] xs:min-w-[280px] xd:min-h-[260px]">
      <button
        disabled={user.isLoading}
        onClick={refreshUser}
        className={`absolute top-0 right-4 3 mt-4 mb-4 text-primary-color hover:cursor-pointer hover:opacity-75 transition-all ${
          user.isLoading ? "opacity-40" : null
        }`}
      >
        <AiOutlineReload size={30} />
      </button>

      {user.isLoading ? (
        <AiOutlineLoading className="text-slate-400 animate-spin" size={50} />
      ) : !user.isError ? (
        <UserDetails
          picture={user.picture?.large ?? ""}
          title={user.name?.title ?? ""}
          first={user.name?.first ?? ""}
          last={user.name?.last ?? ""}
          email={user.email ?? ""}
        />
      ) : (
        <BiErrorCircle className="text-slate-700" size={50} />
      )}
    </div>
  );
};

export default UserInfoCard;
