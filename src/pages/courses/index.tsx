import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getLayout } from "@/components/layouts/layout";

function Courses() {
  let data = [
    {
      image: "full-stack.jpeg",
      title: "Full Stack Web Development",
      desc: "Comprehensive full stack web development course covering front-end and back-end technologies to build dynamic and responsive web applications.",
      duration: "12 weeks",
      // fees: "29999",
      buttonNav: "/courses/fullstack-web-development",
      width: 340,
    },
    {
      image: "mobile-app-2.jpg",
      title: "Mobile App Development",
      desc: "Hands-on mobile app development course exploring Android platform to create innovative and user-friendly mobile applications.",
      duration: "12 weeks",
      // fees: "29999",
      buttonNav: "/courses/mobile-app-development",
      width: 340,
    },
    {
      image: "qa-test.jpg",
      title: "QA Testing",
      desc: "Practical QA testing course providing skills and techniques to ensure software quality through systematic testing, bug tracking, and test automation.",
      duration: "12 weeks",
      // fees: "29999",
      buttonNav: "/courses/qa-testing",
      width: 340,
    },
    {
      image: "aws.jpeg",
      title: "AWS",
      desc: "Comprehensive AWS course covering key services and best practices to effectively deploy, manage, and scale applications in the Amazon Web Services cloud infrastructure.",
      duration: "12 weeks",
      // fees: "29999",
      buttonNav: "/courses/aws",
      width: 340,
    },
    {
      image: "cyber.jpg",
      title: "Cyber Security",
      desc: "Equipping learners with knowledge and skills to protect digital assets, detect vulnerabilities, and mitigate risks in today's evolving threat landscape.",
      duration: "12 weeks",
      // fees: "29999",
      buttonNav: "/courses/cyber-security",
      width: 340,
    },
  ];
  return (
    <div className="pt-24 pb-14 max-w-[1320px] mx-auto grid xl:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-10">
      {data?.map((v, i) => (
        <div
          key={i}
          className="bg-white w-96 rounded-lg shadow-lg p-6 hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
        >
          <div className="h-60  flex justify-center mb-3 relative overflow-hidden bg-cover bg-no-repeat">
            <Image
              src={"/assets/images/" + v?.image}
              alt={v?.title}
              className=" mb-4 ransition duration-300 ease-in-out hover:scale-105 hover:rounded-lg  "
              width={v?.width}
              height={100}
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">{v?.title}</h2>
          <p className="text-gray-600 mb-6 line-clamp-3">{v?.desc}</p>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-500 font-semibold">
                Duration: {v?.duration}
              </p>
              {/* <p className="text-lg font-semibold animate-pulse">₹{v.fees}</p> */}
            </div>
            <Link href={v?.buttonNav}>
              <button className="bg-primary button text-white rounded-full px-4 p-2">
                View More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;
Courses.getLayout = getLayout;
