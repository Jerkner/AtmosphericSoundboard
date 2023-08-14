// Import necessary modules and components
import React, { useState } from 'react';
import MenuClosed from './MenuClosed'; // Import the component for the closed menu state
import MenuOpen from './MenuOpen'; // Import the component for the open menu state
import { useTheme } from '../ThemeContext'; // Import the custom theme hook

// Define the MenuButton component
export default function MenuButton() {
    // Use state to track whether the menu is open or closed
    const [openMenu, setOpenMenu] = useState(true);

    // Use the custom theme hook to access theme-related functions
    const { setThemeComponent } = useTheme();

    // Function to toggle the menu between open and closed states
    const toggleMenu = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu);
    };

    // Function to handle item click with theme selection
    const handleItemClickWithTheme = (theme) => {
        // Set the selected theme using the theme context function
        setThemeComponent(theme);
        // Close the menu after selecting a theme
        setOpenMenu(false);
    };

    // Render the appropriate menu state based on the openMenu state
    return openMenu ? (
        // Render the closed menu state with toggleMenu as onClick handler
        <MenuClosed onClick={toggleMenu} />
    ) : (
        // Render the open menu state with toggleMenu and handleItemClickWithTheme as onClick handlers
        <MenuOpen onClick={toggleMenu} handleItemClick={handleItemClickWithTheme} />
    );
}
