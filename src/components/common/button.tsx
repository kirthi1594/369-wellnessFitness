// import React from 'react';
// import Link from 'next/link';

// interface ButtonProps {
//     link: string;
//     text: string;
//     className?: string;
//     type?: "submit" | "reset";
// }

// const ButtonLink: React.FC<ButtonProps> = ({ link, text, className, type }) => {
//     return (
//         <Link href={link} passHref>
//             <button
//                 type={type}
//                 className={`${className} relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-md group`}
//             >
//                 <span
//                     className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4"
//                 >
//                     <span
//                         className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
//                     ></span>
//                 </span>
//                 <span
//                     className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-ml-4 group-hover:-mb-4"
//                 >
//                     <span
//                         className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
//                     ></span>
//                 </span>
//                 <span
//                     className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-red-600 rounded-md group-hover:translate-x-0"
//                 ></span>
//                 <span
//                     className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
//                 >
//                     {text}
//                 </span>
//             </button>
//         </Link>
//     );
// };

// export default ButtonLink;

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    // link: string;
    // text: string;
    // className?: string;
    // type?: "submit" | "reset";
    link: string;
    text: string;
    className?: string;
    type?: "submit" | "reset";
}

const ButtonLink: React.FC<ButtonProps> = ({ link, text, className, type }) => {
    return (
        <Link href={`${link}`}>
        <button type={type} className={`${className} relative flex h-auto w-auto px-3.5 py-1.5 items-center justify-center overflow-hidden bg-background text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-primary before:duration-500 before:ease-out hover:shadow-prbg-primary hover:before:h-20 hover:before:w-full rounded-md hover:before:rounded-none`}>
            <span className="relative z-10">{text}</span>

        {/* <Link href={link} passHref>
            <button
                type={type}
                className={`${className} relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-600 rounded-md group`}
            >
                <span
                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-600 rounded group-hover:-mr-4 group-hover:-mt-4"
                >
                    <span
                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                </span>
                <span
                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-600 rounded group-hover:-ml-4 group-hover:-mb-4"
                >
                    <span
                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                </span>
                <span
                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-yellow-700 rounded-md group-hover:translate-x-0"
                ></span>
                <span
                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                >
                    {text}
                </span> */}
            </button>
        </Link>
    );
};

export default ButtonLink;
