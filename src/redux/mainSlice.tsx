import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  audioVoice: [],
};


const speechSlice = createSlice({
  name: 'speech',
  initialState,
  reducers: {
    updateResults: (state, action) => {
      state.audioVoice = [action.payload];
    },
  },
});
export const {updateResults} = speechSlice.actions;

export default speechSlice.reducer;
