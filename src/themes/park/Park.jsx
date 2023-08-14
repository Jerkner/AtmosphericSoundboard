// Import necessary modules and components
import React, { useContext } from 'react';
import SoundControl from '../../SoundControl'; // Import the SoundControl component
import { parkSoundFiles } from './parkSounds'; // Import the sound files for the Park theme
import './park.css'; // Import the CSS styles for the Park theme
import { ThemeContext } from '../../ThemeContext'; // Import the ThemeContext for theme data

// Define the Park theme component
export default function Park({ audioRef, draggingRef, isPlaying }) {
    // Use the custom theme hook to access theme data
    const { themeComponent } = useContext(ThemeContext);
    // Determine the sound files based on the current theme
    const soundFiles = themeComponent === 'Park' ? parkSoundFiles : {};

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

    // Render the Park theme component structure
    return (
        <>
            {/* Render the first group of sound controls */}
            {renderSoundGroup(0, 2)}
            {/* Render the second group of sound controls */}
            {renderSoundGroup(2)}
        </>
    );
}
