// Import necessary modules and components
import React, { useContext } from 'react';
import SoundControl from '../../SoundControl'; // Import the SoundControl component
import { Rain } from 'react-rainfall'; // Import the Rain component for rain animation
import { amazonSoundFiles } from './amazonSounds'; // Import the sound files for the Amazon theme
import './amazon.css'; // Import the CSS styles for the Amazon theme
import { ThemeContext } from '../../ThemeContext'; // Import the ThemeContext for theme data

// Define the Amazon theme component
export default function Amazon({ audioRef, draggingRef, isPlaying }) {
    // Use the custom theme hook to access theme data
    const { themeComponent } = useContext(ThemeContext);
    // Determine the sound files based on the current theme
    const soundFiles = themeComponent === 'Amazon' ? amazonSoundFiles : {};

    // Function to render a group of sound controls
    const renderSoundGroup = (startIdx, endIdx) => {
        return (
            <div className="group">
                {Object.keys(soundFiles)
                    .slice(startIdx, endIdx)
                    .map(soundName => (
                        <SoundControl
                            key={soundName}
                            soundName={soundName}
                            audioRef={audioRef}
                            draggingRef={draggingRef}
                            isPlaying={isPlaying}
                        />
                    ))}
            </div>
        );
    };

    // Render the Amazon theme component structure
    return (
        <>
            {/* Render the first group of sound controls */}
            {renderSoundGroup(0, 2)}
            {/* Render the second group of sound controls */}
            {renderSoundGroup(2)}
            {/* Render the rain animation */}
            <div className="amazon-react-rain">
                <Rain numDrops="50" />
            </div>
        </>
    );
}
