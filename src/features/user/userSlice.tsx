import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: [],

  reducers: {
    // createUser: (state, action) => {},
    // deleteUser: (state, action) => {},
  },
});

// export const { createUser, deleteUser } = UserSlice.actions;
export const userReducer = UserSlice.reducer;
