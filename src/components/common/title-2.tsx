// components/CenteredTitle.js
import React from 'react';

const CenteredTitle = ({ title, subtitle }: any) => {
    return (
        <div className="max-w-6xl m-auto ">
            <h1 className="text-4xl md:text-5xl text-center font-gemsbuck text-gray-800 mb-4 font-bold">
                {title}
            </h1>
            {subtitle && (
                <p className="text-lg md:text-xl  text-gray-900  text-center font-rodin">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default CenteredTitle;
