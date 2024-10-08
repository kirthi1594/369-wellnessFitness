import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { UserIcon } from "../icons/user-icon";
import { BuildingIcon } from "../icons/building-icon";
// import TitleBar from "../common/title-bar";
// import { Building, User2 } from "lucide-react";

const testimonials = [
  {
    uname: "John Doe",
    organization: "Amaxon",
    desc: "I am extremely impressed with the water purifying system provided by this company. The water now tastes and smells so clean, and I no longer have any concerns about the quality of water my family is consuming. The installation process was quick and hassle-free, and the customer service team was incredibly helpful throughout. I highly recommend this company's products to anyone looking for a reliable and efficient water purification solution.",
    img: "binoyprofile",
  },
  {
    uname: "Abinesh",
    organization: "Flipkart",
    desc: "After researching various water purifying options, I decided to go with this company, and I couldn't be happier with my choice. The purification system not only removed impurities and contaminants but also improved the overall clarity of the water. It's evident that they prioritize quality, and the results speak for themselves. I feel much more confident now about the water my children and I drink every day.",
    img: "binoyprofile",
  },
  {
    uname: "Vimal",
    organization: "Google",
    desc: "As someone who is health-conscious and values clean water, I'm delighted to have found this water purifying company. Their advanced technology and dedication to delivering safe drinking water are truly commendable. The difference in taste and odor is remarkable, and I appreciate the ongoing maintenance and support they provide. This investment in my family's well-being was worth every penny.",
    img: "binoyprofile",
  },
  {
    uname: "Binoy Manoj",
    organization: "Tesla",
    desc: "I recently moved to an area with water quality concerns, and that's when I discovered this water purifying company. From the initial consultation to the installation, the team was professional and knowledgeable. The transformation in our water is astounding; it's crystal clear and free from any strange flavors. I'm grateful for the peace of mind knowing that my family's health is in good hands with this reliable purification system.",
    img: "binoyprofile",
  },
  {
    uname: "Mohan",
    organization: "SpaceX",
    desc: "Having tried various water filtration methods in the past, I can confidently say that this company's water purifying system stands out. The technology they use is cutting-edge, and the results are truly impressive. My family and I have noticed a significant improvement in our overall well-being since switching to purified water. The convenience of having clean water straight from the tap is unbeatable. Kudos to this company for their exceptional products and service!",
    img: "binoyprofile",
  },
  {
    uname: "Naveen Kumar",
    organization: "TCS",
    desc: "I've been a loyal customer of this water purifying company for years, and they never cease to amaze me with their commitment to excellence. The quality of water I now enjoy is beyond compare – it's like having a natural spring right in my home. The system is low-maintenance, and their customer support is always prompt and helpful. I wouldn't trust any other company with my family's hydration needs.",
    img: "binoyprofile",
  },
  {
    uname: "Tamil",
    organization: "Microsoft",
    desc: "As an environmental advocate, I appreciate companies that contribute to a sustainable future. This water purifying company not only delivers exceptional water quality but also promotes eco-friendly practices. Their system reduces the need for bottled water, significantly cutting down on plastic waste. It's refreshing to see a company aligning their values with their products.",
    img: "binoyprofile",
  },
];

const breakpoints = {
  "1500": {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  "1025": {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  "768": {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  "480": {
    slidesPerView: 1,
    spaceBetween: 12,
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 12,
  },
};

function Testimonials() {
  return (
    <div
      data-aos="fade-up"
      // data-aos-offset="200"
      // data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      data-aos-once="false"
      // data-aos-anchor-placement="top-center"
      className="pb-14 pt-8"
    >
      <h2 className="text-4xl font-bold pb-4 text-center">
        Testimonials
      </h2>
      <Swiper
        // slidesPerView={2}
        // spaceBetween={40}
        breakpoints={breakpoints}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials?.map((v, i) => (
          <SwiperSlide key={i} className="h-full ">
            {/* h-[400px] */}
            <div className="flex flex-col gap-5 w-full p-5 pb-10 rounded-lg border bg-zinc-100 border-zinc-300">
              <div className="flex w-full justify-between items-center mx-auto bg-gradient-to-r from-primary to-secondary rounded-xl px-5 py-4">
                <div className="text-white">
                  <h3 className="font-semibold text-lg flex gap-1 items-center">
                    <UserIcon className="h-5 w-5" /> {v?.uname}
                  </h3>
                  <p className="flex gap-1 items-center">
                    <BuildingIcon className="h-5 w-5" /> {v?.organization}
                  </p>
                </div>
                <div className="h-20 w-20">
                  <Image
                    src={`/assets/images/${v?.img}.jpg`}
                    alt={v?.uname}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="">
                <p>{v?.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
