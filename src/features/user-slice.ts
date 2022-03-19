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

    return {
      name: user.name,
      email: user.email,
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      const { name, email, isError, isLoading } = action.payload;

      state.name = name;
      state.email = email;
      state.isLoading = isLoading;
      state.isError = isError;
    });
  },
});

export const { setLoadingStatus } = userSlice.actions;

export default userSlice.reducer;
