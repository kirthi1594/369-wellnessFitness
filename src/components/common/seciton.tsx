
import React from "react";
import Image from "next/image";
import TitleWithNumber from "./title";
import ButtonLink from "./button";

const Section = ({
  image,
  title,
  content,
  reverse = false,
  titleNumber,
  buttonName,
  buttonLink,
}: any) => {
  return (
    <div className="lg:max-w-4xl m-auto xl:max-w-6xl px-4 sm:px-6">
      {/* <div
        className={`flex  ${
          reverse ? "lg:flex-row-reverse " : ""
        } items-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-10 max-md:gap-10`}
      > */}
        <div
        className={`flex flex-col-reverse lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        } items-center space-y-6 lg:space-y-0 lg:space-x-10 max-md:gap-10`}
      >
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2"
          data-aos={`${reverse ? "fade-left" : "fade-right"}`}
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {/* <div className="relative w-full md:h-[300px] !h-96 max-md:w-auto lg:h-[400px] rounded-lg overflow-hidden shadow-lg max-md:mx-5 bg-slate-600 ">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            /> */}
                      <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg bg-slate-600">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 px-6 lg:px-0 sm:px-6">
          <TitleWithNumber title={title} number={titleNumber} />
          <div className="mb-10">
            <p className="text-base sm:text-lg text-gray-950 mt-4 leading-relaxed font-rodin">
              {content}
            </p>
          </div>
          {buttonName && <ButtonLink link={buttonLink} text={buttonName} />}
        </div>
      </div>
    </div>
  );
};

export default Section;
