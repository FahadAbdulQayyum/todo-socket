import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the loader
const initialState = {
    // isLoading: false, // Default state: no loading
    loading: false, // Default state: no loading
};

// Create the loader slice
const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            // state.isLoading = action.payload; // Set loading state based on payload
            state.loading = action.payload; // Set loading state based on payload
        },
    },
});

// Export actions and reducer
export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;













// import { createSlice } from '@reduxjs/toolkit';

// export interface LoadingState {
//     loading: boolean;
// }

// const initialState: LoadingState = {
//     loading: false, // Default to false
// };

// const loadingSlice = createSlice({
//     name: "loading",
//     initialState,
//     reducers: {
//         setLoading: (state, action) => {
//             state.loading = action.payload; // Set loading to true or false
//         },
//     },
// });

// // Export action
// export const { setLoading } = loadingSlice.actions;

// // Export reducer
// export default loadingSlice.reducer;
