import { configureStore } from "@reduxjs/toolkit";
import errorsReducer from "../slices/errorSlice";
import userNameReducer from "../slices/userSlice"
import carsReducer from "../slices/carSlice";

export const store = configureStore({
  reducer: {
    userName: userNameReducer,
    errors: errorsReducer,
    cars: carsReducer,
  },
});
