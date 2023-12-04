import {configureStore} from '@reduxjs/toolkit';
import { speechReducer, addressReducer } from './redux/mainSlice';
import addressOptionsReducer from './redux/addressSlice';
import certificateAddress from './redux/certificateAddress';

const store = configureStore({
  reducer: {
    speech: speechReducer,
    addressOptions: addressOptionsReducer,
    address: addressReducer,
    certificateAddress: certificateAddress,
  },
});

export default store;
