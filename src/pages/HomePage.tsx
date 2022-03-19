import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchUser } from "../features/user-slice";

const HomePage = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return <div>email: {user.isLoading ? "loading" : user.email}</div>;
};

export default HomePage;
