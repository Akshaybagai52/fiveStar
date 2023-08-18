import { configureStore } from "@reduxjs/toolkit";
import speechReducer from './redux/mainSlice'

export default configureStore({
    reducer: {speechReducer},
})