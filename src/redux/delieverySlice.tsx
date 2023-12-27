import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {};

const deliverySlice = createSlice({
  name: 'delieveryDetails',
  initialState,
  reducers: {
    updateCheckoutDetails: (state, action) => {
      state.address = action.payload;
    },
  },
});
export const {updateCheckoutDetails} = deliverySlice.actions;

export const delieveryReducer = deliverySlice.reducer;
