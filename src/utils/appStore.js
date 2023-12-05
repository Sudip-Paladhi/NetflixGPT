import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesreducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
    reducer : {
        user : userSliceReducer,
        movies : moviesreducer,
        gpt : gptReducer,
        config : configReducer,
    },
});

export default appStore;