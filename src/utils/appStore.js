import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesreducer from "./moviesSlice";
import gptReducer from "./gptSlice";
const appStore = configureStore({
    reducer : {
        user : userSliceReducer,
        movies : moviesreducer,
        gpt : gptReducer,
    },
});

export default appStore;