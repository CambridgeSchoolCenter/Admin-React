import { createSlice } from '@reduxjs/toolkit';

///////  Initialization ///////

// Input
const userInputInitialState = {
    value: '',
};

// Select (name, surname curse)
const userSelectInitialState = {
    value: 'name',
};

// Category
const userCategoryInitialState = {
    value: 'All',
};



///////  Slices ///////


// Input
const userInputSlice = createSlice({
    name: 'userInput',
    initialState: userInputInitialState,
    reducers: {
        setUserInput: (state, action) => {
            state.value = action.payload;
        },
    },
});


// Select
const userSelectSlice = createSlice({
    name: 'select',
    initialState: userSelectInitialState,
    reducers: {
        setSelectInput: (state, action) => {
            state.value = action.payload;
        },
    },
});

// category
const userCategorySlice = createSlice({
    name: 'category',
    initialState: userCategoryInitialState,
    reducers: {
        setCategoryInput: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Exporting function
export const { setUserInput } = userInputSlice.actions;
export const { setSelectInput } = userSelectSlice.actions;
export const { setCategoryInput } = userCategorySlice.actions;

// Exporting reducers
export const userInputReducer = userInputSlice.reducer;
export const userSelectReducer = userSelectSlice.reducer;
export const userCategoryReducer = userCategorySlice.reducer;