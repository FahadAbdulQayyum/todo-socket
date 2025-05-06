import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
interface FetchDataState {
    data: any[]; // Replace `any` with a proper type if available
    loading: boolean;
    error: string | null;
}

const initialState: FetchDataState = {
    data: [],
    loading: false,
    error: null,
};

// Create an async thunk to fetch data dynamically based on parameters
export const fetchData = createAsyncThunk(
    'fetchData/fetchData',
    async (
        params: {
            collection: string; // Name of the collection (e.g., 'users', 'agents')
            page?: number; // Pagination: Current page
            limit?: number; // Pagination: Number of items per page
            filters?: Record<string, any>; // Optional filters for querying
        },
        { rejectWithValue }
    ) => {
        try {
            const response = await axios.post('/api/fetchData', params); // Call your API endpoint
            return response.data[params.collection]; // Extract the data for the specified collection
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);

// Create the fetchDataSlice
const fetchDataSlice = createSlice({
    name: 'fetchData',
    initialState,
    reducers: {
        resetData: (state) => {
            state.data = []; // Clear the data
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // Update the data array
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

// Export the reducer and actions
export const { resetData } = fetchDataSlice.actions;
export default fetchDataSlice.reducer;