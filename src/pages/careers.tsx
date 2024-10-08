import React from "react";
import Image from "next/image";
import { getLayout } from "@/components/layouts/layout";
import Hero from "@/components/home/hero-section";
import CardBordered from "@/components/common/bordered-card";

function Careers() {
  let data = {
    animateFile: "meetourteamanimation.json",
    desc: "",
    buttonText: "Meet Our Team",
    buttonNav: "/our-team",
  };

  let data2 = [
    {
      image: "healthcareimg.svg",
      title: "Your Health Matters to Us",
      desc: "We Care About Your Health, Well-Being and Wellness",
      classprops: "w-80 pb-3",
    },
    {
      image: "timemanagementimg.svg",
      title: "Flexible Timings",
      desc: "Work on Your Schedule and Find Work-Life Balance",
      classprops: "w-48 pb-3",
    },
    {
      image: "coffeebreakimg.svg",
      title: "Chill Out Sessions",
      desc: "Take a Break and Recharge with Chill-out Sessions",
      classprops: "w-[183px] pb-3",
    },
    {
      image: "giftimg.svg",
      title: "Exciting Rewards",
      desc: "Thrilling Rewards and Recognition for your Hard Work",
      classprops: "w-80 py-7",
    },
    {
      image: "steppingupimg.svg",
      title: "Learn & Grow",
      desc: "Learn with Us by Working with Team on Projects",
      classprops: "w-56 pb-3",
    },
  ];

  let data3 = [
    {
      jobtitle: "Software Developer",
      experience: "0-2 Years",
      desc: "Join our team of talented developers to design, develop, and implement software solutions that solve real-world problems",
    },
    {
      jobtitle: "UI/UX Designer",
      experience: "0-2 Years",
      desc: "Use your design expertise to create intuitive and visually appealing user interfaces, ensuring an exceptional user experience",
    },
    // {
    //   jobtitle: "Project Manager",
    //   experience: "0-2 Years",
    //   desc: "Lead and oversee the successful execution of projects, ensuring timely delivery and client satisfaction",
    // },
    // {
    //   jobtitle: "Quality Assurance Analyst",
    //   experience: "0-2 Years",
    //   desc: "Ensure the quality and reliability of our software products through rigorous testing and quality control processes",
    // },
  ];

  return (
    <div className="md:pt-36 max-md:pt-20">
      {/* hero section */}
      <Hero {...data}>
        <h2 className="text-5xl font-bold pb-5">
          Fulfilling Career <span className="text-primary">Technology </span>and
          Meaningful Project Contributions
        </h2>
        <p className="py-4">
          At TechBeesHive Technologies, we are constantly seeking talented
          individuals who are passionate about technology and making a
          difference. If you are looking for a fulfilling career that allows you
          to showcase your skills and contribute to meaningful projects, you've
          come to the right place.
        </p>

        {/* <ul className="max-w-lg">
          <li className="flex gap-2  py-2">
            🎯 Inspiring Work Environment: We foster a collaborative and
            innovative work environment that encourages creativity and personal
            growth. We believe in nurturing talent and providing opportunities
            for our team members to thrive.
          </li>
          <li className="flex gap-2 py-2">
            🎯 Cutting-edge Technology: As a software development company, we
            stay at the forefront of technology trends. Working with us means
            being exposed to the latest tools and frameworks, allowing you to
            enhance your expertise and stay ahead in your field.
          </li>
          <li className="flex gap-2  py-2">
            🎯 Meaningful Projects: Our projects are designed to create a
            positive impact on people's lives. Whether it's developing solutions
            for local businesses or working on innovative software products,
            you'll have the opportunity to contribute to projects that matter.
          </li>
          <li className="flex gap-2  py-2">
            🎯 Professional Development: We are committed to the professional
            growth of our team members. We provide continuous learning
            opportunities, training programs, and mentorship to help you expand
            your skills and advance in your career.
          </li>
          <li className="flex gap-2  py-2">
            🎯 Team Collaboration: Collaboration is at the heart of our work
            culture. We believe that great ideas come from diverse perspectives,
            and we encourage open communication and teamwork to achieve the best
            results.
          </li>
          <li className="flex gap-2  py-2">
            🎯 Work-Life Balance: We understand the importance of maintaining a
            healthy work-life balance. We promote flexible work arrangements and
            prioritize the well-being of our team members.
          </li>
        </ul> */}
      </Hero>

      <h2 className="text-center text-4xl font-bold pt-14 max-md:pt-5 pb-5">
        We take care of you
      </h2>
      <p className="pb-7 text-center text-lg">
        Your Well-being is Our Priority: Delivering Exceptional Care and
        Support.
      </p>

      {/* we take care section */}
      <CardBordered val={data2} />

      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        className="max-w-[1380px] bg-[url('/assets/images/bg-footers.jpg')]  mx-auto rounded-lg p-8 grid lg:grid-cols-2 max-md:grid-cols-1 grid-rows-1 gap-4 items-center mt-5"
      >
        <div className="w-full flex justify-center ">
          <Image
            src="/assets/images/digini.jpg"
            alt=""
            height={100}
            width={700}
            quality={100}
            className="object-cover w-[300px] rounded-xl"
          />
        </div>
        <div className="max-w-6xl m-auto pt-16">
          <h2 className="text-4xl font-bold pb-5">
            Ignite Your Potential and Make a Difference in the World of
            Technology
          </h2>
          <p className="pb-7">
            We are constantly seeking talented individuals who are passionate
            about technology and making a difference. Showcase your skills and
            contribute to meaningful projects that create a positive impact.
            Join us for a fulfilling career where you can grow, learn, and
            thrive in the world of technology. With a supportive and
            collaborative work environment, we foster creativity, professional
            development, and work-life balance. Discover how you can be part of
            our team and embark on a rewarding journey where your talent and
            dedication are recognized and valued. Take the next step towards a
            fulfilling career by exploring our open positions and becoming part
            of our talented workforce. Join us to embark on a fulfilling journey
            in the world of technology and be part of our innovative and dynamic
            team.
          </p>
        </div>
      </div>

      {/* job openings section */}
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        className="max-w-6xl m-auto pt-8 pb-14"
      >
        <h2 className="text-2xl font-bold pb-12 text-primary text-center">
          Job Openings
        </h2>

        <div className="w-full h-0.5 bg-slate-200 dividerline"></div>

        {data3?.map((v, i) => (
          <div key={i}>
            <div className="py-4 flex items-center justify-between max-w-4xl m-auto">
              <h2 className="text-primary font-bold text-2xl">{v.jobtitle}</h2>
              <div className="w-96">
                <h3>
                  <b>Experience:</b> {v.experience}
                </h3>
                <p>{v.desc}</p>
              </div>
            </div>
            <div className="w-full h-0.5 bg-slate-200 dividerline"></div>
          </div>
        ))}
      </div>

      <h3 className="text-center max-w-4xl mx-auto text-2xl font-bold">
        🎯 Join us on this exciting journey of innovation and impact. Together,
        let's create technology solutions that shape the future.
      </h3>

      {/* tech stack */}
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        className="pb-14"
      >
        <h2 className="font-bold text-2xl text-center pt-8 text-primary">
          Our Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="mt-8 dark:bg-white border flex flex-col gap-1 justify-start items-center border-gray-300 rounded-lg max-w-sm p-10 shadow-md">
            <h2 className="text-xl pb-7 text-primary underline font-bold">
              Web
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <Image
                src={"/assets/images/htmllogo.png"}
                alt="html"
                width={100}
                height={100}
                className="h-16 w-auto"
              />
              <Image
                src={"/assets/images/csslogo.png"}
                alt="css"
                width={100}
                height={100}
                className="h-16 w-auto"
              />
              <Image
                src={"/assets/images/javascriptlogo.png"}
                alt="javascript"
                width={100}
                height={100}
                className="h-16 w-auto"
              />
              <Image
                src={"/assets/images/reactlogo.png"}
                alt="react"
                width={100}
                height={100}
                className="h-14 w-auto"
              />
              <Image
                src={"/assets/images/nextjslogo.png"}
                alt="nextjs"
                width={100}
                height={100}
                className="h-14 w-auto"
              />
              <Image
                src={"/assets/images/jquerylogo.png"}
                alt="jquery"
                width={100}
                height={100}
                className="h-12 w-auto"
              />
              <Image
                src={"/assets/images/bootstraplogo.png"}
                alt="Bootstrap"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
              <Image
                src={"/assets/images/tailwindcsslogo.png"}
                alt="tailwindcss"
                width={100}
                height={100}
                className="h-5 w-auto"
              />
            </div>
          </div>

          <div className="mt-8 dark:bg-white border flex flex-col gap-1 justify-start items-center border-gray-300 rounded-lg max-w-sm p-10 shadow-md">
            <h2 className="text-xl pb-7 text-primary underline font-bold">
              API
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <Image
                src={"/assets/images/nodejslogo.png"}
                alt="Node js"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
              <Image
                src={"/assets/images/phplogo.png"}
                alt="PHP"
                width={100}
                height={100}
                className="h-12 w-auto"
              />
              <Image
                src={"/assets/images/laravellogo.png"}
                alt="Laravel"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
            </div>
          </div>

          <div className="mt-8 dark:bg-white border flex flex-col gap-1 justify-start items-center border-gray-300 rounded-lg max-w-sm p-10 shadow-md">
            <h2 className="text-xl pb-7 text-primary underline font-bold">
              Mobile
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <Image
                src={"/assets/images/flutterlogo.png"}
                alt="Flutter"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
              <Image
                src={"/assets/images/dartlogo.png"}
                alt="Dart"
                width={100}
                height={100}
                className="h-16 w-auto"
              />
              <Image
                src={"/assets/images/androidlogo.png"}
                alt="Android"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
              <Image
                src={"/assets/images/ioslogo.png"}
                alt="IOS"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="mt-8 dark:bg-white border flex flex-col gap-1 justify-start items-center border-gray-300 rounded-lg max-w-lg p-10 shadow-md">
            <h2 className="text-xl pb-7 text-primary underline font-bold">
              Database
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <Image
                src={"/assets/images/elasticlogo.png"}
                alt="Elastic"
                width={100}
                height={100}
                className="h-12 w-auto"
              />
              <Image
                src={"/assets/images/mongodblogo.png"}
                alt="MongoDB"
                width={100}
                height={100}
                className="h-14 w-auto"
              />
              <Image
                src={"/assets/images/firebaselogo.png"}
                alt="Firebase"
                width={100}
                height={100}
                className="h-24 w-auto"
              />
              <Image
                src={"/assets/images/mysqllogo.png"}
                alt="MySQL"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
            </div>
          </div>

          <div className="mt-8 dark:bg-white border flex flex-col gap-1 justify-start items-center border-gray-300 rounded-lg max-w-lg p-10 shadow-md">
            <h2 className="text-xl pb-7 text-primary underline font-bold">
              Infrastructure
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <Image
                src={"/assets/images/linuxlogo.png"}
                alt="Linux"
                width={100}
                height={100}
                className="h-24 w-auto"
              />
              <Image
                src={"/assets/images/dockerlogo.png"}
                alt="Docker"
                width={100}
                height={100}
                className="h-16 w-auto"
              />
              <Image
                src={"/assets/images/kuberneteslogo.png"}
                alt="Kubernetes"
                width={100}
                height={100}
                className="h-16 w-auto"
              />
              <Image
                src={"/assets/images/awslogo.png"}
                alt="AWS"
                width={100}
                height={100}
                className="h-16 w-auto"
              />
              <Image
                src={"/assets/images/jenkinslogo.png"}
                alt="Jenkins"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-8 dark:bg-white border flex flex-col gap-1 justify-start items-center border-gray-300 rounded-lg max-w-6xl p-10 shadow-md">
            <h2 className="text-xl pb-7 text-primary underline font-bold">
              Design
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <Image
                src={"/assets/images/figmalogo.png"}
                alt="figmalogo.png"
                width={100}
                height={100}
                className="h-16 w-auto"
              />
              <Image
                src={"/assets/images/adobexdlogo.png"}
                alt="adobexdlogo.png"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
              <Image
                src={"/assets/images/illustratorlogo.png"}
                alt="illustratorlogo.png"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
              <Image
                src={"/assets/images/photoshoplogo.png"}
                alt="photoshoplogo.png"
                width={100}
                height={100}
                className="h-11 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
Careers.getLayout = getLayout;
