import {configureStore} from '@reduxjs/toolkit';
import { speechReducer, addressReducer } from './redux/mainSlice';
import addressOptionsReducer from './redux/addressSlice';
import certificateAddress from './redux/certificateAddress';
import { delieveryReducer } from './redux/delieverySlice';

const store = configureStore({
  reducer: {
    speech: speechReducer,
    addressOptions: addressOptionsReducer,
    address: addressReducer,
    certificateAddress: certificateAddress,
    delieveryDetails: delieveryReducer,
  },
});

export default store;
