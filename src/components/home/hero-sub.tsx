import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSub = ({
  children,
  animateFile,
  buttonText,
  buttonNav,
  desc,
  svgicon,
}: any) => {
  return (
    <div className="bg-slate-300  transition-style"
    >
      <div className="">
        <div className="grid lg:grid-cols-2 max-md:grid-cols-1 grid-rows-1 items-center lg:px-20 max-md:px-8   max-md:p-7 lg:gap-40 max-md:gap-10 overflow-hidden ">
          <div
            data-aos="fade-top"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            className=""
          >
            {children}
            {desc && <p className="text-white leading-6 ">{desc}</p>}
            {buttonNav && buttonText && (
              <Link href={buttonNav}>
                <button className="text-white button bg-primary hover:bg-primary/90 text-md rounded-full px-6 p-3 mt-6">
                  {buttonText}
                </button>
              </Link>
            )}
          </div>

          <div
            data-aos="fade-top"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            className=""
          >
            {/* <div className="container-circle"> */}
            <div className="circle-img">
              <Image src="/assets/images/gym-18.png" alt="" height={180} width={780} quality={100} />
            </div>
            {/* <div className="circle-spin"> */}
            {/* <div className="circle"> */}
            {/* <div className="bg-cyan-50 h-full w-full rounded-full p-10"></div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSub;
