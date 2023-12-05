import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearctView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});


export const {toggleGptSearctView} =gptSlice.actions;
export default gptSlice.reducer;