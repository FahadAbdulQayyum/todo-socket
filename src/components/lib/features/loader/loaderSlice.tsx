import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the loader
const initialState = {
    loading: false, // Default state: no loading
};

// Create the loader slice
const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload; // Set loading state based on payload
        },
    },
});

// Export actions and reducer
export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;