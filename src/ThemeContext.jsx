// Import necessary modules and components
import React, { createContext, useContext, useState } from 'react';
import { themeClassName } from './themes/themeClassName';

// Create a new context for the theme data
export const ThemeContext = createContext();

// Custom hook to access the theme context data
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component responsible for managing and providing theme data to the app
export const ThemeProvider = ({ children }) => {
// State to manage the currently selected theme component
const [themeComponent, setThemeComponent] = useState('Amazon');

// State to manage the play/pause state of audio
const [isPlaying, setIsPlaying] = useState(false);

// Get the CSS class name for the current theme component
const themeClass = themeClassName(themeComponent);

// Create an object that holds all the context values
const contextValue = {
    themeComponent,         // The currently selected theme component
    setThemeComponent,      // Function to set the theme component
    themeClassName: themeClass, // The CSS class name for styling
    isPlaying,              // Current play/pause state of audio
    setIsPlaying,           // Function to set the play/pause state
};

// Provide the context values to the children components
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
