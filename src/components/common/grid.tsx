import React from 'react';
import Image from 'next/image';

const TwoRowGrid = ({
    firstRow: { imageFirst: imageFirstRow1, image1, title1, number1, text1, imageSecond: imageSecondRow1, image2, title2, number2, text2 },
    secondRow: { imageFirst: imageFirstRow2, image3, title3, number3, text3, imageSecond: imageSecondRow2, image4, title4, number4, text4 },
}: any) => {
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2 ">

            {/* First Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* First Column of First Row */}
                {imageFirstRow1 ? (
                    <>
                        <Image src={image1} alt="First Column Image 1" className="w-full h-auto" width={500} height={300} />
                        <div className="bg-primary flex flex-col  justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{number1}. {title1}</h3>
                            <p className='!text-sm'>{text1}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-gray-600 flex flex-col  justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{number1}. {title1}</h3>
                            <p className='!text-sm'>{text1}</p>
                        </div>
                        <Image src={image1} alt="First Column Image 1" className="w-full h-auto" width={500} height={300} />
                    </>
                )}

                {/* Second Column of First Row */}
                {imageSecondRow1 ? (
                    <>
                        <Image src={image2} alt="Second Column Image 2" className="w-full h-auto" width={500} height={300} />
                        <div className="bg-primary flex flex-col  justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{number2}. {title2}</h3>
                            <p className='!text-sm'>{text2}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-primary flex flex-col  justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{number2}. {title2}</h3>
                            <p className='!text-sm'>{text2}</p>
                        </div>
                        <Image src={image2} alt="Second Column Image 2" className="w-full h-auto" width={500} height={300} />
                    </>
                )}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                {/* First Column of Second Row */}
                {imageFirstRow2 ? (
                    <>
                        <Image src={image3} alt="First Column Image 3" className="w-full h-auto" width={500} height={300} />
                        <div className="bg-gray-900 flex flex-col  justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{number3}. {title3}</h3>
                            <p className='!text-sm'>{text3}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-primary flex flex-col  justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{number3}. {title3}</h3>
                            <p className='!text-sm'>{text3}</p>
                        </div>
                        <Image src={image3} alt="First Column Image 3" className="w-full h-auto" width={500} height={300} />
                    </>
                )}

                {/* Second Column of Second Row */}
                {imageSecondRow2 ? (
                    <>
                        <Image src={image4} alt="Second Column Image 4" className="w-full h-auto" width={500} height={300} />
                        <div className="bg-gray-700 flex flex-col  justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{number4}. {title4}</h3>
                            <p className='!text-sm'>{text4}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-primary flex flex-col  justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{number4}. {title4}</h3>
                            <p className='!text-sm'>{text4}</p>
                        </div>
                        <Image src={image4} alt="Second Column Image 4" className="w-full h-auto" width={500} height={300} />
                    </>
                )}
            </div>
        </div>
    );
};

export default TwoRowGrid;
