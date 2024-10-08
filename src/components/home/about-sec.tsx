import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";

const AboutSec = ({
  children,
  //   animateFile,
  animationImage1,
  animationImage2,
  buttonText,
  buttonNav,
  desc,
  svgicon,
}: any) => {
  return (
    <div className="flex flex-wrap justify-evenly max-xl:gap-14 items-center pb-8 ">
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        className="max-md:w-80 md:max-w-lg  "
      >
        {children}
        {desc && <p>{desc}</p>}
        {buttonNav && buttonText && (
          <Link href={buttonNav}>
            <button className="text-white button bg-primary hover:bg-primary/90 text-md rounded-full px-6 p-3 mt-6">
              {buttonText}
            </button>
          </Link>
        )}
      </div>

      <div
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        className="max-w-2xl "
      >
        <div className="mt-14 ">
          <div className="lg:relative  max-md:gap-2 md:gap-5 max-md:flex max-md:flex-wrap max-md:p-3 max-md:items-center max-md:justify-center  max-md:pt-10 ">
            <img
              src={animationImage1}
              alt="First Image"
              className="max-md:w-80 lg:w-full rounded-xl shadow-2xl "
            />

            <img
              src={animationImage2}
              alt="Third Image"
              className="lg:absolute max-md:static  rounded-xl  animate-float max-md:mt-0  lg:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] lg:-bottom-20 -right-10   max-md:w-80  lg:w-96 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
