import React from 'react';

const Block2Card = ({ bgImage, title, content }: any) => {
    return (
        <div
            className="relative group md:w-[26rem] lg:w-full h-96 bg-cover bg-center "
            style={{ backgroundImage: `url(${bgImage})` }}
            data-aos="fade-top"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
            <div className="absolute inset-0 bg-black opacity-10 "
            ></div>

            {/* Title (Centered) */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <h2 className="text-white text-2xl font-bold group-hover:-translate-y-11 transition-all duration-1000 transform">{title}</h2>
            </div>

            {/* Hidden Content (Visible on Hover) */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 overflow-hidden pt-10">
                <div className="p-4 text-white flex justify-center items-center h-full">
                    <p className='transform transition-all duration-1000 group-hover:translate-y-0 translate-y-full'>
                        {content}
                    </p>
                </div>

            </div>
        </div>
    );
};

const Block2CardGrid = ({ cards }: any) => {

    return (
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 max-md:gap-5">
                {cards?.map((card: any, index: any) => (
                    <Block2Card
                        key={index}
                        bgImage={card?.bgImage}
                        title={card?.title}
                        content={card?.content}
                    />
                ))}
            </div>
        </div>
    );
};

export default Block2CardGrid;
