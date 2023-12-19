import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResult: null,
    movieName: null,
  },
  reducers: {
    toggleGptSearctView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const{movieName, movieResult} =action.payload;
      state.movieName= movieName;
      state.movieResult = movieResult;
    }
  },
});


export const {toggleGptSearctView, addGptMovieResult} =gptSlice.actions;
export default gptSlice.reducer;