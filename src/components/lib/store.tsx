"use client";
import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer, { UserInfoState } from './features/userInfo/userInfoSlice';
import loaderReducer from './features/loader/loaderSlice';
import fetchDataReducer from './features/fetchDataSlice';
import { loadState, saveState } from './features/localStorage';

// Load persisted state from localStorage
const preloadedState = loadState()
    || {
    // cart: { /* default cart state */ },
    // counter: { /* default counter state */ },
    // location: { /* default location state */ },
    // product: { products: [] },
    // service: { /* default service state */ },
    // dynamicApiCall: { /* default API call state */ },
    userInfo: {
        userInfo: null,
        userInfos: [],
        userInfoFiltered: [],
        loading: false,
        error: null,
    } as UserInfoState,
}

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            userInfo: userInfoReducer,
            loading: loaderReducer,
            fetchData: fetchDataReducer,
        },
        preloadedState, // Initialize store with persisted state
    });

    // Save the state to localStorage whenever it changes
    store.subscribe(() => {
        saveState({
            userInfo: store.getState().userInfo, // Persist userInfo state
        });
    });

    return store;
};

// Infer the type of the store
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
