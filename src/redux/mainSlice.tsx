import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  audioVoice: [],
  userInformation: {},
};

const speechSlice = createSlice({
  name: 'speech',
  initialState,
  reducers: {
    updateResults: (state, action) => {
      state.audioVoice = [action.payload];
    },
    updateUserInfo: (state, action) => {
      state.userInformation = action.payload;
    },
  },
});
const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    updateAddressResults: (state, action) => {
      state.address = action.payload;
    },
  },
});
export const {updateResults, updateUserInfo} = speechSlice.actions;
export const {updateAddressResults } = addressSlice.actions

export const speechReducer = speechSlice.reducer;
export const addressReducer = addressSlice.reducer;
