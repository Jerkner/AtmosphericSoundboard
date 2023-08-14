// Import necessary modules and components
import React, { useContext } from 'react';
import MenuItems from './MenuItems'; // Import the MenuItems component
import { ImCross } from 'react-icons/im'; // Import the cross icon
import { ThemeContext } from '../ThemeContext'; // Import the ThemeContext
import { themeClassName } from '../themes/themeClassName'; // Import the themeClassName function

// Define the MenuOpen component
export default function MenuOpen(props) {
    // Use the useContext hook to access the theme context
    const { themeComponent } = useContext(ThemeContext);

    // Get the CSS class name based on the theme using themeClassName function
    const themeClass = themeClassName(themeComponent);

    // Define a function to handle item click and close the menu
    const handleItemClickAndCloseMenu = (theme) => {
        props.handleItemClick(theme); // Call the handleItemClick function passed via props
        props.onClick(); // Call the onClick function passed via props to close the menu
    };

    // Render the open menu with back button, cross icon, and menu items
    return (
        <main className={`menu-screen ${themeClass}-menu-screen`}>
            <button onClick={props.onClick} className={`menu ${themeClass}-menu`}>
                <ImCross className="cross" />
                Back
            </button>
            <MenuItems handleItemClick={handleItemClickAndCloseMenu} />
        </main>
    );
}
