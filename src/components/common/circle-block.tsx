
import Image from "next/image";
import React from "react";
import CenteredTitle from "./title-2";


interface ImageProps {
    src: string;
    title: string;
    description: string;
}
interface CircleImagesProps {

    bigCircleIndex: number;
    title: string;
    subtitle: string;
    images: ImageProps[]
    variation: "horizontal" | "vertical" | "triangel"
}

const CircleImages: React.FC<CircleImagesProps> = ({ images, bigCircleIndex, title, subtitle, variation }) => {
    return (
        <div className="
        "
        data-aos="fade-top"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false">
            <div className="mb-10">
                <CenteredTitle title={title} subtitle={subtitle} />
            </div>
            <div className="flex justify-center items-center max-md:flex-wrap  gap-5 md:space-x-0 lg:m-3">
                {images?.map((image: any, index: any) => {
                    const sizeClass = index === bigCircleIndex ? "w-56 h-60" : "w-56 h-60"; // Determine size
                    const spinClass = index === bigCircleIndex ? "animate-pulse" : ""; // Add pulse animation for the big circle
                    return (
                        <div key={index} className="relative flex flex-col items-center max-md:flex-wrap hover:scale-105">
                            <div className="flex items-center">
                                <div className="">
                                    <div className={`border-2  border-dashed border-gray-300 rounded-full p-1 relative`}>
                                        {/* Spinning border */}
                                        <div className={`absolute inset-0 `}></div>

                                        {/* Image inside, no spin */}
                                        <Image
                                            src={image?.src}
                                            alt={image?.title}
                                            width={200}
                                            height={200}
                                            quality={100}
                                            className={`${sizeClass} rounded-full object-cover relative z-10 `} // Ensure the image doesn't spin
                                        />
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <p className="mt-4 font-bold text-xl font-gemsbuck">{image.title}</p>
                                        {/* <p className="text-sm text-gray-500 ">{image.description}</p> */}
                                    </div>
                                </div>
                                {index !== images.length - 1 && (
                                    <div className="flex justify-center -mt-10">
                                        <div className="hidden md:block w-20 border-b-2 border-dashed border-gray-300" />
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CircleImages;
