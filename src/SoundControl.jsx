import React, { useContext, useEffect, useState } from 'react';
import { themeClassName } from './themes/themeClassName';
import { ThemeContext } from './ThemeContext';
import { amazonSoundFiles } from './themes/amazon/amazonSounds';
import { harborSoundFiles } from './themes/harbor/harborSounds';
import { zenGardenSoundFiles } from './themes/zengarden/zenGardenSounds';
import { parkSoundFiles } from './themes/park/parkSounds';

// SoundControl component responsible for controlling sound playback and volume
const SoundControl = ({ soundName, audioRef, draggingRef }) => {
    // Use useContext to access theme data and isPlaying value from the context
    const { themeComponent, isPlaying } = useContext(ThemeContext);
    
    // State to manage the volume of the sound
    const [volume, setVolume] = useState(0.5);

    // Determine the sound files based on the current theme
    const soundFiles =
        themeComponent === 'Amazon' ? amazonSoundFiles :
        themeComponent === 'Harbor' ? harborSoundFiles :
        themeComponent === 'ZenGarden' ? zenGardenSoundFiles :
        themeComponent === 'Park' ? parkSoundFiles :
        null;

    // Effect to handle audio control when isPlaying, volume, or soundName changes
    useEffect(() => {
        const audio = audioRef.current[soundName];

        if (!audio) return;

        // Mute/unmute audio based on the isPlaying value from context
        audio.muted = !isPlaying;
        audio.volume = volume;

        if (isPlaying) {
            if (audio.paused) {
                audio.play().catch(error => {
                    console.log(`Audio ${soundName} autoplay prevented:`, error);
                });
            }
        } else {
            audio.pause();
        }
    }, [isPlaying, soundName, volume, audioRef]);

    // Function to handle volume change
    const handleVolumeChange = event => {
        const volumeValue = parseFloat(event.target.value);
        setVolume(volumeValue);

        const audio = audioRef.current[soundName];
        if (audio) {
            audio.volume = volumeValue;
        }
    };

    // Function to handle touch events
    const handleTouch = isStart => {
        draggingRef.current = isStart;
    };

    // Get the CSS class name for styling based on the current theme
    const themeClass = themeClassName(themeComponent);

    // Render the SoundControl component structure
    return (
        <div className={`sound ${themeClass}-sound`}>
            <h1 className={`h1 ${themeClass}-h1`}>{soundName}</h1>
            {/* Audio element for sound playback */}
            <audio ref={el => (audioRef.current[soundName] = el)} loop>
                <source src={`/assets/${soundFiles[soundName]}.mp3`} />
            </audio>
            {/* Input element for volume control */}
            <input
                className={`input ${themeClass}-input`}
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                onMouseDown={() => handleTouch(true)}
                onMouseUp={() => handleTouch(false)}
                onTouchStart={() => handleTouch(true)}
                onTouchEnd={() => handleTouch(false)}
            />
        </div>
    );
};

// Export the SoundControl component as the default export
export default SoundControl;
