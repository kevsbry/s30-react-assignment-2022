import axios from "axios";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../typings/user";

interface IUser extends User {
  isLoading: boolean;
  isError: boolean;
}

const initialState: IUser = {
  isLoading: true,
  isError: false,
};

export const fetchUser = createAsyncThunk<IUser>(
  "user/fetchUser",
  async (_args, { dispatch }) => {
    dispatch(setLoadingStatus(true));
    const res = await axios.get("https://randomuser.me/api");

    if (res.status !== 200) {
      return {
        isLoading: false,
        isError: true,
      };
    }

    const data = res.data as { results: User[] };
    const user = data.results[0];

    dispatch(saveUser(user));

    return {
      name: user.name,
      email: user.email,
      picture: user.picture,
      isError: false,
      isLoading: false,
    };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    saveUser: (_state, action: PayloadAction<User>) => {
      const { name, email, picture } = action.payload;

      const users = JSON.parse(localStorage.getItem("users") ?? "[]") as User[];
      users.push({ picture, name, email });

      localStorage.setItem("users", JSON.stringify(users));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      const { name, email, isError, isLoading, picture } = action.payload;

      state.name = name;
      state.email = email;
      state.isLoading = isLoading;
      state.isError = isError;
      state.picture = picture;
    });
  },
});

export const { setLoadingStatus, saveUser } = userSlice.actions;

export default userSlice.reducer;
