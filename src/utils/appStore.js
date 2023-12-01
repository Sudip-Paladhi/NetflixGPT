import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesreducer from "./moviesSlice";
const appStore = configureStore({
    reducer : {
        user : userSliceReducer,
        movies : moviesreducer,
    },
});

export default appStore;