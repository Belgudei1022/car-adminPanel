import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rents: [],
};

const rentSlice = createSlice({
  name: "rent",
  initialState,
  reducers: {
    setRent: (state, action) => {
      state.rents = action.payload || [];
    },
  },
});

export const { setRent } = rentSlice.actions;
export default rentSlice.reducer;
