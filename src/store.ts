import { configureStore } from '@reduxjs/toolkit';
import speechReducer from './redux/mainSlice';

const store = configureStore({
  reducer: {
    speech: speechReducer,
  },
});

export default store;
