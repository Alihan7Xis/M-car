import { createSlice } from "@reduxjs/toolkit";

const initialState = ""

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});

export const { toggleMark } = carsSlice.actions;
export default carsSlice.reducer;
