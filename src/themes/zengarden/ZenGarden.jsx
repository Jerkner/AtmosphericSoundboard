// Import necessary modules and components
import React, { useContext } from 'react';
import SoundControl from '../../SoundControl'; // Import the SoundControl component
import { zenGardenSoundFiles } from './zenGardenSounds'; // Import the sound files for the Zen Garden theme
import './zengarden.css'; // Import the CSS styles for the Zen Garden theme
import { ThemeContext } from '../../ThemeContext'; // Import the ThemeContext for theme data


// Define the Zen Garden theme component
export default function ZenGarden({ audioRef, draggingRef, isPlaying }) {
    // Use the custom theme hook to access theme data
    const { themeComponent } = useContext(ThemeContext);
    // Determine the sound files based on the current theme
    const soundFiles = themeComponent === 'ZenGarden' ? zenGardenSoundFiles : {};

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

    // Render the Zen Garden theme component structure
    return (
        <>
            {/* Render the first group of sound controls */}
            {renderSoundGroup(0, 2)}
            {/* Render the second group of sound controls */}
            {renderSoundGroup(2)}
        </>
    );
}
