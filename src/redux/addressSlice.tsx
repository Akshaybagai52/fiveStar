import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk action to fetch data
export const fetchAddressOptions = createAsyncThunk(
  'addressOptions/fetchAddressOptions',
  async () => {
    const response = await axios.get(
      'https://fivestaraccess.com.au/fivestaraccess_formapp/project_master_list.php',
    );
    return response.data.map((item: any) => ({
      customer_name: item['Customer Name'],
      value: item['id'],
      label: item['Project #'],
      // id: item.id,
      customer_abn: item['Customer ABN'],
    }));
  },
);

const addressOptionsSlice = createSlice({
  name: 'addressOptions',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAddressOptions.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default addressOptionsSlice.reducer;
