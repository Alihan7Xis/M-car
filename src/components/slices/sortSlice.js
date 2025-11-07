import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  sortType: "nosorting",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    addCar: (state, action) => {
      state.cars.push({ id: crypto.randomUUID(), ...action.payload });
    },
    deleted: (state,action) => {
    state.cars = state.cars.filter((elId) => elId.id !== action.payload.id) 
    }
  },
});

export const { setCars, setSortType, addCar, deleted } = sortSlice.actions;
export default sortSlice.reducer;
