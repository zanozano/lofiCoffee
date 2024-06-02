import React, { useState } from 'react';
import musicIcon from '../assets/music-icon.svg';

export const MusicPanel = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className='panel music-panel' onClick={togglePanel}>
                <img src={musicIcon} alt='music icon' width='44px' />
                <p>Music</p>
            </button>

            <div className={`slide-panel ${isOpen ? 'open' : ''}`}>
                <button onClick={togglePanel}>Close</button>
                <p>Music content goes here...</p>
            </div>
        </>
    );
};
