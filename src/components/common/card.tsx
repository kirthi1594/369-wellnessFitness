// components/Card.tsx
import React from 'react';
import Image from 'next/image';
import { Dumbells } from '../icons/dumbells';
import ButtonLink from './button';


interface CardProps {
    variant: 'centered' | 'left' | 'noContent';
    title: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    imageUrl?: any;
    svgIcon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
    variant,
    title,
    description,
    buttonText,
    buttonLink,
    imageUrl,
    svgIcon,
}) => {
    const renderContent = () => {
        switch (variant) {
            case 'centered':
                return (
                    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-96">
                        <div className="relative w-full h-48 !rounded-md">
                            <Image className="object-contain !rounded-md" src={imageUrl || svgIcon} alt={title} layout="fill" />
                        </div>
                        <div className="p-6 max-w-sm">
                            <h2 className="text-3xl font-bold mb-3 font-gemsbuck">{title}</h2>
                            <p className="mb-3 font-rodin text-lg overflow-hidden text-ellipsis line-clamp-3" >
                                {description}
                            </p>
                            <ButtonLink link={buttonLink || '#'} text={buttonText || 'Learn More'} />
                        </div>

                    </div>
                );
            case 'left':
                return (
                    <div className={`grid grid-cols-2 bg-white shadow-lg rounded-lg in overflow-hidden hover:shadow-xl transition-shadow duration-300 ${variant === "left"}`}>
                        <div className="relative  h-auto">
                            <Image className="object-cover" src={imageUrl || svgIcon} alt={title} layout="fill" quality={100}  />
                        </div>
                        <div className="p-2 md:h-40">
                            <h2 className="text-xl font-bold mb-2">{title}</h2>
                            <p className="text-gray-600 mb-4">{description}</p>
                            <ButtonLink link={buttonLink || '#'} text={buttonText || 'Learn More'} />
                        </div>
                    </div>
                );
            case 'noContent':
                return (
                    <div className="w-72 p-4 cursor-pointer rounded-lg shadow-lg relative transition-transform transform  group">
                        <h3 className="text-2xl font-bold text-secoondary group-hover:text-primary transition-all font-gemsbuck">
                            No Content
                        </h3>
                        <div className="text-gray-400 text-lg mt-4 h-fit font-rodin">No additional content available</div>
                        <div className="absolute bg-primary p-2 rounded-tl-lg rounded-br-lg bottom-0 right-0 flex justify-center items-center transition-all group-hover:bg-gray-900">
                            <Dumbells className="transform transition-transform duration-700 group-hover:text-primary text-white group-hover:-rotate-180 " />
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return <div className="m-4 max-w-md mx-auto">{renderContent()}</div>;
};

export default Card;
