"use client"
import { UserInfoState } from './userInfo/userInfoSlice';
export const loadState = () => {
    try {
        if (typeof window === "undefined") return undefined; // Ensure we're in a browser
        const serializedState = localStorage.getItem("reduxState");
        if (serializedState === null) return undefined; // Return undefined if no state is saved
        return JSON.parse(serializedState) as {
            // userInfo: { userInfo: UserInfo };
            userInfo: UserInfoState;
        }; // Parse state
    } catch (err) {
        console.error('Could not load state:', err);
        return undefined;
    }
}
export const saveState = (state: {
    userInfo: UserInfoState;
}) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState); // Save state in localStorage
    } catch (err) {
        console.error('Could not save state:', err);
    }
};