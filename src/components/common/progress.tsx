import React, { useEffect, useState } from 'react';

const ProgressBar = ({ targetProgress }:any
) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Reset progress to 0 when targetProgress changes
        setProgress(0);

        // Animation duration in milliseconds
        const duration = 2000; // Total duration for the progress animation
        const increment = targetProgress / (duration / 20); // Calculate increment value per interval
        let currentProgress = 0;

        const interval = setInterval(() => {
            if (currentProgress < targetProgress) {
                currentProgress += increment; // Increment progress
                setProgress(Math.min(currentProgress, targetProgress)); // Ensure progress doesn't exceed target
            } else {
                clearInterval(interval); // Stop when target is reached
            }
        }, 20); // Update every 20 milliseconds for smoother animation

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [targetProgress]);

    return (
        <div className="relative w-full h-4 bg-gray-300 rounded-lg overflow-hidden">
            <div
                className="absolute h-full bg-blue-600 transition-all duration-500 ease-in-out"
                style={{
                    width: `${progress}%`,
                    transform: `translateX(0%)`, // Reset translateX to 0 for smooth animation
                }}
            ></div>
        </div>
    );
};

export default ProgressBar;
