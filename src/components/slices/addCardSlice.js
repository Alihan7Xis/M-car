import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameCar: "",
  price: "",
  year: "",
  country: "",
};

const addCardSlice = createSlice({
    name: "addCard",
    initialState,
    reducers: {
        setAddCard: (state, action) => {
            state.nameCar = action.payload.nameCar
            state.price = action.payload.price
            state.year = action.payload.year
            state.country = action.payload.country
        }
    }
})

export default addCardSlice.reducer