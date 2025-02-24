import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import carReducer from "./carSlice";
import userReducer from "./userSlice";
import rentReducer from "./rentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    car: carReducer,
    user: userReducer,
    rent: rentReducer,
  },
});

export default store;
