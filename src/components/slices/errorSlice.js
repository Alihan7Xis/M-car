import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors: [],
};

const errorSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = [];
    },
  },
});

export const { setErrors, clearErrors } = errorSlice.actions;
export default errorSlice.reducer;
