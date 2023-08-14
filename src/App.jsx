// Import necessary modules and components
import React, { useRef, useEffect } from 'react';
import './App.css';
import MenuButton from './Menu/MenuButton';
import { useTheme } from './ThemeContext'; // Import the custom theme hook
import { themeClassName } from './themes/themeClassName'; // Import the themeClassName function
import { getThemeComponent } from './themes/themes'; // Import the getThemeComponent function

// Define the main App component
export default function App() {
    // Create a ref to manage audio elements
    const audioRef = useRef({});
    // Create a ref to manage dragging state
    const draggingRef = useRef({});
    // Use the custom theme hook to access theme data
    const { themeComponent, isPlaying, setIsPlaying } = useTheme();

    // Reset audioRef when the theme changes
    useEffect(() => {
        audioRef.current = {};
    }, [themeComponent]);

    // Get the current theme component based on the selected theme
    const ThemeComponent = getThemeComponent(themeComponent);

    // Function to handle play/pause of audio elements
    const handlePlayPause = async () => {
        const playPromiseArray = Object.values(audioRef.current).map(async audioElement => {
            if (isPlaying) {
                await audioElement.pause();
            } else {
                try {
                    await audioElement.play();
                } catch (error) {
                    console.log('Audio autoplay prevented:', error);
                }
            }
        });

        await Promise.all(playPromiseArray);

        // Toggle the play/pause state
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    };

    // Get the CSS class name for the current theme
    const themeClass = themeClassName(themeComponent);

    // Reset isPlaying when the theme changes
    useEffect(() => {
        setIsPlaying(false);
    }, [themeComponent]);

    // Render the main app structure
    return (
        <div className={`app-container ${themeClass}-container`}>
            {/* Render the menu button */}
            <MenuButton />
            {/* Render the ThemeComponent if available */}
            {ThemeComponent && (
                <ThemeComponent
                    audioRef={audioRef}
                    draggingRef={draggingRef}
                    isPlaying={isPlaying}
                />
            )}
            {/* Render the play/pause button */}
            <button className={`play-button ${themeClass}-play-button`} onClick={handlePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
}
