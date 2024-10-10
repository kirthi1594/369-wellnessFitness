import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonLink from "../common/button";

const Hero = ({
  children,
  buttonText,
  buttonNav,
  desc,
  title,
  image,
  imageSec
}: any) => {
  return (
    <div className="bg-hero-bg bg-cover bg-center relative max-md:mt-28"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="grid lg:grid-cols-2 max-lg:grid-cols-1 grid-rows-1 items-center lg:px-20 max-md:px-4 p-6 gap-10 lg:h-screen max-md:mb-5">
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white font-gemsbuck !max-w-7xl">
            {title}
          </h1>
          {children}
          {desc && <p className="text-white leading-6 font-rodin text-sm lg:text-base">{desc}</p>}
          {buttonNav && buttonText && (
            <ButtonLink
              link={buttonNav || '#'}
              text={buttonText || 'Learn More'}
              className={"!bg-red-500 !py-2 !text-black !font-bold hover:!text-white"}
            />
          )}
        </div>

        <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          className="rounded-md flex justify-center items-center"
        >
          <div className="lg:mt-5 relative">
            <div className="absolute top-10 left-10 bg-radial-gradient bg-20 h-20 w-20 -z-10"></div>

            <div className="rounded-full">
              <Image
                src={`/assets/gym/${image}`}
                className="object-cover rounded-full aspect-square border-l-2 border-l-white border-r-2 border-r-dashed border-r-white p-2 
                min-lg:h-60 min-lg:w-60"
                alt=""
                height={400}
                width={400}
                quality={100}
              />
            </div>
            <div className="max-sm:ml-10  absolute -left-14 -bottom-10 bg-radial-gradient bg-20 z-10 max-md:bottom-0">
              <Image
                src={`/assets/gym/${imageSec}`}
                className="object-cover rounded-full aspect-square border-l-2 border-l-white border-r-2 border-r-dashed border-r-white p-2 object-left max-md:h-32 max-md:w-32 "
                alt=""
                height={200}
                width={200}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
