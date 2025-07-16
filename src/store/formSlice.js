import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormValues: (state, action) => {
      state.values = action.payload;
    },
    clearFormValues: (state) => {
      state.values = {};
    },
  },
});

export const { setFormValues, clearFormValues } = formSlice.actions;
export default formSlice.reducer;
