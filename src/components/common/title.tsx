import React from 'react';
import { Dumbells } from '../icons/dumbells';

const TitleWithNumber = ({ title, number }: any) => {
    return (
        <div className="relative py-5">
            {/* Background Number (optional) */}
            {/* {number && (
                <span className="absolute -top-2  text-gray-500 text-8xl font-bold opacity-20 -z-10 flex justify-center items-center">
                    {number}
                </span>
            )} */}
               { (
                <span className="absolute -top-2  text-green-500 text-8xl font-bold opacity-20 -z-10 flex justify-center items-center">
              {/* <Dumbells className="transform transition-transform duration-700 group-hover:text-primary text-black group-hover:-rotate-180 " /> */}

                </span>
            )}

            {/* Title */}
            <h2 className="relative z-10 text-5xl font-gemsbuck  font-bold text-primary">
                {title}
            </h2>
        </div>
    );
};

export default TitleWithNumber;
