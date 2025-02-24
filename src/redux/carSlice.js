import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload || [];
    },
    removeCar: (state, action) => {
      if (Array.isArray(state.cars)) {
        state.cars = state.cars.filter((car) => car.id !== action.payload);
      } else {
        console.error(
          "removeCar error: state.cars is not an array",
          state.cars
        );
      }
    },
  },
});

export const { setCars, removeCar } = carSlice.actions;
export default carSlice.reducer;
