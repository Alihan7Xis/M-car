import { configureStore } from "@reduxjs/toolkit";
import errorsReducer from "../slices/errorSlice";
import userReducer from "../slices/userSlice";
import sortReducer from "../slices/sortSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    errors: errorsReducer,
    sort: sortReducer,
  },
});
