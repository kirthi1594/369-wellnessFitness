import React from "react";
import { getLayout } from "@/components/layouts/layout";
import Topbar from "@/components/common/topbar";

import CardBordered from "@/components/common/bordered-card";


function MobileApp() {
  let data = {
    title: "Mobile App Development",
    whatis:
      "Mobile app development refers to the process of creating software applications specifically designed to run on mobile devices such as smartphones and tablets. It involves the design, development, testing, and deployment of mobile applications for platforms like iOS (Apple) or Android (Google), utilizing programming languages, frameworks, and development tools to deliver functional and user-friendly mobile experiences.",
    why: "Mobile app development is essential for businesses and individuals to reach a wide audience, provide a superior user experience, and stay competitive in the digital market. It offers increased engagement, monetization opportunities, and valuable insights through analytics, fostering innovation and driving digital transformation in the mobile-centric landscape.",
  };

  let data2 = [
    {
      image: "supportive_team.svg",
      title: "Supportive Team",
      classprops: "w-60 pb-5",
    },
    {
      image: "task_based_learning.svg",
      title: "Task Based Learning",
      classprops: "w-72 pb-5",
    },
    {
      image: "practical_oriented_learning.svg",
      title: "Practical Oriented Learning",
      classprops: "w-60 pb-7",
    },
    {
      image: "latest_technologies.svg",
      title: "Latest Technologies",
      classprops: "w-60 pb-4",
    },
    {
      image: "certification.svg",
      title: "Certificate provided",
      classprops: "w-36 pb-3",
    },
  ];

  let frontend = [
    {
      p: "🎯 Flutter(Framework)",
    },
    {
      p: "🎯 Dart",
    },
  ];

  let backend = [
    {
      p: "🎯 Node JS",
    },
    {
      p: "🎯 Mongo DB",
    },
    {
      p: "🎯 Firebase",
    },
    {
      p: "🎯 Laravel",
    },
  ];

  return (
    <div className="pt-24 pb-16 max-w-6xl m-auto">
      <Topbar {...data} />

     
      <h2 className="text-2xl text-primary text-center font-bold pt-14 pb-5">Highlights</h2>
      <CardBordered val={data2} />

      <h2
        className="text-2xl text-primary text-center font-bold pt-14 pb-5"
        
      >
        Course Details
      </h2>
     
    </div>
  )
}

export default MobileApp;
MobileApp.getLayout = getLayout;
