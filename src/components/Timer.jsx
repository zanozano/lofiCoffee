import React, { useState, useEffect } from 'react';

export const Timer = () => {
    const initialTime = 600;
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(initialTime);

    const handleButtonClick = () => {
        if (isRunning) {
            setIsRunning(false);
            setTime(initialTime);
        } else {
            setIsRunning(true);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    return (
        <div className='time-container'>
            <div className='timer'>
                <p>
                    {formatTime(time)}
                </p>
            </div>
            <button onClick={handleButtonClick}>
                {isRunning ? 'STOP' : 'START'}
            </button>
        </div>
    );
};
