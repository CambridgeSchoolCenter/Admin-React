import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for both slices

const userInitialState = {
    value: [],
};

const DataSlice = createSlice({
    name: 'Data',
    initialState: userInitialState,
    reducers: {
        SetData: (state, action) => {
            state.value = action.payload;
        },
    },
});



export const { SetData } = DataSlice.actions;


// Export the reducers for both slices
export default DataSlice.reducer;
