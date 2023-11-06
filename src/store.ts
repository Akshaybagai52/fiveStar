import { configureStore } from '@reduxjs/toolkit';
import speechReducer from './redux/mainSlice';
import addressOptionsReducer from './redux/addressSlice';

const store = configureStore({
  reducer: {
    speech: speechReducer,
    addressOptions: addressOptionsReducer,
  },
});

export default store;
