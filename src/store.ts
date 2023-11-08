import {configureStore} from '@reduxjs/toolkit';
import { speechReducer, addressReducer } from './redux/mainSlice';
import addressOptionsReducer from './redux/addressSlice';

const store = configureStore({
  reducer: {
    speech: speechReducer,
    addressOptions: addressOptionsReducer,
    address: addressReducer,
  },
});

export default store;
