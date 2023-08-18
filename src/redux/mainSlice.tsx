import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
    results: []
}

const speechSlice = createSlice({
    name: 'speech',
    initialState,
    reducers: {
        updateResults: (state, action) => {
            state.results = action.payload
        }
    }
})
export const {updateResults} = speechSlice.actions;

export default speechSlice.reducer