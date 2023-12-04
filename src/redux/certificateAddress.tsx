import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../helpers/apiHelper';

const dataSlice = createSlice({
    name: 'data',
    initialState: { data: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      });
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      });
      builder.addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    },
  });

export default dataSlice.reducer;
