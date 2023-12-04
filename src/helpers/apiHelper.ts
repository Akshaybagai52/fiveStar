import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://fivestaraccess.com.au/FivestarApp/project_master_list.php');
  console.log("first")
  return response.json();
});
