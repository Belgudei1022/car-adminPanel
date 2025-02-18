import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.user = action.payload), (state.auth = true);
    },
    logout: (state) => {
      (state.user = null), (state.auth = false);
    },
  },
});
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
