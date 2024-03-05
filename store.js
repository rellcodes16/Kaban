import dataReducer from './src/features/dataSlice'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        data: dataReducer,
    }
})


export default store;



