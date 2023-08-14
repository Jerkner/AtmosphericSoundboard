// Import necessary modules and components
import React, { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import the hamburger menu icon
import { themeClassName } from '../themes/themeClassName'; // Import the themeClassName function
import { ThemeContext } from '../ThemeContext'; // Import the ThemeContext

// Define the MenuClosed component
export default function MenuClosed(props) {
    // Use the useContext hook to access the theme context
    const { themeComponent } = useContext(ThemeContext);

    // Get the CSS class name based on the theme using themeClassName function
    const themeClass = themeClassName(themeComponent);

    // Render the closed menu button with the hamburger icon and theme text
    return (
        <button onClick={props.onClick} className={`menu ${themeClass}-menu`}>
            <GiHamburgerMenu className='hamburger' />Themes
        </button>
    );
}
