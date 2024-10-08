import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";

const Hero2 = ({ children, animateFile, buttonText, buttonNav, desc }: any) => {
  return (
    <div className="flex flex-wrap max-xl:pt-24 pt-5 justify-evenly max-xl:gap-14 items-center max-md:px-5">
      <Lottie
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        loop={true}
        animationData={require("../../../public/assets/lottie/" + animateFile)}
        className="max-w-2xl "
      />
      <div
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        className="max-w-lg max-md:px-3"
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
    </div>
  );
};

export default Hero2;
