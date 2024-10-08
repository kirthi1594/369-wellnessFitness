import React from "react";
import Image from "next/image";
import { getLayout } from "@/components/layouts/layout";
import Hero from "@/components/home/hero-section";
import Blog from "../data/blog.json"
import Card from "@/components/common/card";

function OurTeam() {
  let data = {
    animateFile: "businessteam.json",
    desc: "TechBees hive Technologies is a team of highly skilled professionals passionate about technology and making a difference. We deliver exceptional results and innovative solutions for our clients. With diverse backgrounds, we collaborate to tackle complex challenges and stay at the forefront of advancements. Our cohesive team values open communication and fosters an inclusive environment. Join us to work on exciting projects, expand your skills, and grow professionally. We invest in your development through training, mentorship, and continuous learning opportunities. Together, we shape the future where talent meets innovation, embracing creativity, collaboration, and positive change. Let's unlock limitless possibilities and create a world where technology empowers us to shape a better tomorrow.",
    buttonText: "Join Our Team",
    buttonNav: "/contact-us",
  };

  return (
    <div className="mt-20"
    data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false">
      <div className="max-w-6xl m-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-10 !pt-10">
          {Blog?.map((v, i) => (
            <Card
              variant="centered"
              title={v?.title}
              description={v?.content}
              buttonText="View more"
              buttonLink={`/blog/${v?.slug}`}
              imageUrl={v?.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
OurTeam.getLayout = getLayout;
