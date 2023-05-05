import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  count: 0
};

export const counterSlice = createSlice({
  name: "counteryou",
  initialState: initialStateValue,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
