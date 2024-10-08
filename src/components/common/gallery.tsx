import Image from 'next/image';

// Define the props interface for the ImageGrid component
interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

interface ImageGridProps {
    images: ImageProps[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-fit">
            {/* First image: full width on small screens, spans 2 columns and 4 rows on medium and larger screens */}
            <div className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-4 sm:row-span-2">
                <div className="overflow-hidden rounded-md">
                    <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Image
                            src={images[0].src}
                            alt={images[0].alt}
                            width={images[0].width || 1000}
                            height={images[0].height || 1000}
                            className="rounded-md h-96 md:h-screen w-full object-cover"
                        />
                    </div>
                </div>
            </div>


            {/* Second image: spans 2 columns and 2 rows on medium and larger screens */}
            <div className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-3">
                <div className="overflow-hidden rounded-md">
                    <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Image
                            src={images[1].src}
                            alt={images[1].alt}
                            width={images[1].width || 500}
                            height={images[1].height || 700}
                            className="rounded-md h-full w-full object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Third image: occupies 1 column on small screens, spans 2 rows starting at col 3 on md */}
            <div className="col-span-1 md:col-start-3 md:row-span-2 md:row-start-3">
                <div className="overflow-hidden rounded-md">
                    <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Image
                            src={images[2].src}
                            alt={images[2].alt}
                            width={images[2].width || 500}
                            height={images[2].height || 700}
                            className="rounded-md h-full w-full object-fill"
                        />
                    </div>
                </div>
            </div>

            {/* Fourth image: spans 2 rows starting at col 4 on medium and larger screens */}
            <div className="col-span-1 md:col-start-4 md:row-span-2 md:row-start-3">
                <div className="overflow-hidden rounded-md">
                    <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Image
                            src={images[3].src}
                            alt={images[3].alt}
                            width={images[3].width || 500}
                            height={images[3].height || 700}
                            className="rounded-md h-full w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGrid;
