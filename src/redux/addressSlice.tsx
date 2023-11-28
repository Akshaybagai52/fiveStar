import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk action to fetch data
export const fetchAddressOptions = createAsyncThunk(
  'addressOptions/fetchAddressOptions',
  async () => {
    const response = await axios.get('https://fivestaraccess.com.au/FivestarApp/all_delivery_address.php');
    return response.data.records.map((item:any) => ({
      label: item.fields['Project Address'],
      value: item.fields['Project Address'],
      id: item.id,
    }));
  }
);

const addressOptionsSlice = createSlice({
  name: 'addressOptions',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddressOptions.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default addressOptionsSlice.reducer;
