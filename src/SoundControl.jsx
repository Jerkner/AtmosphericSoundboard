import React, { useContext, useEffect, useState } from 'react';
import { themeClassName } from './themes/themeClassName';
import { ThemeContext } from './ThemeContext';
import { amazonSoundFiles } from './themes/amazon/amazonSounds';
import { harborSoundFiles } from './themes/harbor/harborSounds';
import { zenGardenSoundFiles } from './themes/zengarden/zenGardenSounds';
import { parkSoundFiles } from './themes/park/parkSounds';

const SoundControl = ({ soundName, audioRef, draggingRef }) => {
    const { themeComponent, isPlaying } = useContext(ThemeContext); // Use the isPlaying value from the context
    const [volume, setVolume] = useState(0.5);

    const soundFiles =
        themeComponent === 'Amazon' ? amazonSoundFiles :
        themeComponent === 'Harbor' ? harborSoundFiles :
        themeComponent === 'ZenGarden' ? zenGardenSoundFiles :
        themeComponent === 'Park' ? parkSoundFiles :
        null;

    useEffect(() => {
        const audio = audioRef.current[soundName];

        if (!audio) return;

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

    const handleVolumeChange = event => {
        const volumeValue = parseFloat(event.target.value);
        setVolume(volumeValue);

        const audio = audioRef.current[soundName];
        if (audio) {
            audio.volume = volumeValue;
        }
    };

    const handleTouch = isStart => {
        draggingRef.current = isStart;
    };

    const themeClass = themeClassName(themeComponent);

    return (
        <div className={`sound ${themeClass}-sound`}>
            <h1 className={`h1 ${themeClass}-h1`}>{soundName}</h1>
            <audio ref={el => (audioRef.current[soundName] = el)} loop>
                <source src={`/assets/${soundFiles[soundName]}.mp3`} />
            </audio>
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

export default SoundControl;
