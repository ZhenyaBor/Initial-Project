import { createSlice } from "@reduxjs/toolkit";

export interface TestState {
  text: string;
}

const initialState: TestState = {
  text: "test",
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { changeText } = testSlice.actions;

export default testSlice.reducer;
