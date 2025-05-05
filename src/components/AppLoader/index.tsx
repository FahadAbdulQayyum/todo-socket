"use client"; // Mark this file as a Client Component

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../lib/store';

const AppLoader = () => {
    // const isLoading = useSelector((state) => state.loader?.isLoading);
    const isLoading = useSelector((state: RootState) => state.loading.loading);


    return (
        <>
            {isLoading && (
                <div className="loader-container">
                    <div className="loader-background-blur"></div>
                    <div className="loader-spinner">
                        {/* Add your awesome loader here */}
                        <div className="spinner"></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AppLoader;