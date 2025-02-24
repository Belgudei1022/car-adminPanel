import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import carReducer from "./carSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    car: carReducer,
    user: userReducer,
  },
});

export default store;
