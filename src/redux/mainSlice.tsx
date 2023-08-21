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
export const {updateResults, updateUserInfo} = speechSlice.actions;

export default speechSlice.reducer;
