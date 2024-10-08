import React from "react";
import { getLayout } from "@/components/layouts/layout";
import Hero from "@/components/home/hero-section";
import Hero2 from "@/components/home/hero2";
import Image from "next/image";

function OurStory() {
  let data = {
    animateFile: "ourstoryanimation1.json",
    desc: "At TechBeesHive Technologies, we believe in the power of dreams and their ability to inspire and create positive change. Our story is about bringing together talents and technology to turn those dreams into reality. This journey is made possible by our dedicated team of experts. We understand that everyone has their own unique dreams and aspirations. Our goal is to provide everyone with the opportunity to shine, make a difference, and leave a lasting impact. Our team of experts plays a vital role in achieving this.",
    buttonText: "Get In Touch",
    buttonNav: "/contact-us",
  };

  let data2 = {
    animateFile: "timelineanimation.json",
    desc: "We started our journey in Krishnagiri, a place brimming with untapped potential. Our mission was clear: create an environment that enables these talents to thrive without limitations. Our expert team is the backbone of TechBeesHive Technologies. They are highly skilled professionals who are passionate about technology and making a difference. With their expertise and experience, we deliver exceptional results to our clients. Every project we undertake is not just a technical challenge, it's an opportunity to create meaningful change in people's lives. Our team works closely with our clients, listening attentively to their needs and goals. Together, we collaborate to transform their dreams into reality. With the guidance and support of our expert team, they gain confidence, achieve their goals, and experience deep satisfaction. These moments remind us of the true value of our work. We believe that technology, when used with purpose and kindness, can do more than solve problems. It can connect people, bridge gaps, and inspire change. Our expert team is at the forefront of leveraging technology to create a positive impact.",
  };

  return (
    <div className="pt-24">
      <Hero {...data}>
        <h5 className="text-xl font-semibold pb-3">Our Story</h5>
        <h2 className="text-5xl font-bold pb-5">
          <span className="text-primary">TechBees </span>Origins
        </h2>
      </Hero>

      {/* our history section */}
      <div className="pb-12">
      <Hero2 {...data2}>
        <h5 className="text-xl font-semibold pb-3">Our History</h5>
        <h2 className="text-4xl font-bold pb-5">
          Tracing the Path of{" "}
          <span className="text-primary">Innovation and Success</span>
        </h2>
        TechBees hive Technologies' Journey to Empowerment
      </Hero2>
      </div>

      {/* timeline section */}
      {/* <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        className="pb-10"
      >
        <h2 className="text-5xl font-bold pb-5 text-center pt-20">
          <span className="text-primary">Our Journey </span>So far
        </h2>

        <div className="py-8  antialiased">
          <div className="relative container mx-auto px-2 flex flex-col space-y-8">
            <div className="absolute z-0 w-2 h-full bg-gray-300 shadow-md inset-0 left-[52px] md:mx-auto md:right-0 md:left-0"></div>

            <div>
              <div className="relative z-10">
                <Image
                  src={'/assets/images/2020icon.png'}
                  alt="year"
                  height={100}
                  width={100}
                  className="timeline-img h-24 w-24 object-cover rounded-full shadow-md border-4 border-gray-500 xs:absolute md:mx-auto md:left-0 md:right-0"
                />
              </div>
              <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16 ">
                <div
                  className="absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-gray-200 xs:top-11 xs:left-[104px] md:left-14"
                  aria-hidden="true"
                ></div>
                <div className="bg-gray-200 dark:text-black p-6 rounded-md shadow-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  similique hic, reprehenderit modi nulla quod. Natus tempore
                  consequatur saepe maxime. Ad, facere. Rerum enim doloremque
                  obcaecati harum quos nostrum repellendus!
                </div>
              </div>
            </div>

            <div>
              <div className="relative z-10">
                <Image
                  src={'/assets/images/2020icon.png'}
                  alt="year"
                  height={100}
                  width={100}
                  className="timeline-img h-24 w-24 object-cover rounded-full shadow-md border-4 border-gray-500 xs:absolute md:mx-auto md:left-0 md:right-0"
                />
              </div>
              <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:mr-auto md:pl-0 md:pr-16">
                <div
                  className="timelinearrow absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-gray-200 xs:top-11 xs:right-auto xs:left-[104px] sm:left-auto sm:right-[56px]"
                  aria-hidden="true"
                ></div>
                <div className="bg-gray-200 dark:text-black p-6 rounded-md shadow-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  similique hic, reprehenderit modi nulla quod. Natus tempore
                  consequatur saepe maxime. Ad, facere. Rerum enim doloremque
                  obcaecati harum quos nostrum repellendus!
                </div>
              </div>
            </div>

            <div>
              <div className="relative z-10">
                <Image
                  src={'/assets/images/2020icon.png'}
                  alt="year"
                  height={100}
                  width={100}
                  className="timeline-img h-24 w-24 object-cover rounded-full shadow-md border-4 border-gray-500 xs:absolute md:mx-auto md:left-0 md:right-0"
                />
              </div>
              <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16 ">
                <div
                  className="absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-gray-200 xs:top-11 xs:left-[104px] md:left-14"
                  aria-hidden="true"
                ></div>
                <div className="bg-gray-200 dark:text-black p-6 rounded-md shadow-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  similique hic, reprehenderit modi nulla quod. Natus tempore
                  consequatur saepe maxime. Ad, facere. Rerum enim doloremque
                  obcaecati harum quos nostrum repellendus!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default OurStory;
OurStory.getLayout = getLayout;
