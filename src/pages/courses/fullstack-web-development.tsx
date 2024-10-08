import React from "react";
import { getLayout } from "@/components/layouts/layout";
import Topbar from "@/components/common/topbar";
import CardBordered from "@/components/common/bordered-card";

function FullStack() {
  let data = {
    title: "Full Stack Web Development",
    whatis:
      "Full stack web development refers to the practice of building and maintaining all the components of a web application or website. It involves working on both the front-end and the back-end of a web project.The front end of a web application is the part that users interact with directly.The back end, on the other hand, refers to the server-side of the application. It involves handling data, logic, and communication with databases and external services.",
    why: "Full stack web development offers versatility, efficiency, and a holistic understanding of the development process. It provides career opportunities and is in high demand. Full stack developers are startup-friendly and contribute to multiple areas of product development. Continuous learning is a part of full stack development, keeping developers updated with new technologies and trends.",
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
      p: "🎯 HTML",
    },
    {
      p: "🎯 CSS",
    },
    {
      p: "🎯 JavaScript",
    },
    {
      p: "🎯 Bootstrap",
    },
    {
      p: "🎯 Tailwind CSS",
    },
    {
      p: "🎯 React JS",
    },
    {
      p: "🎯 Next JS",
    },
    {
      p: "🎯 TypeScript",
    },
  ];

  let backend = [
    {
      p: "🎯 PHP",
    },
    {
      p: "🎯 Laravel (Framework of PHP)",
    },
    {
      p: "🎯 Node JS",
    },
    {
      p: "🎯 SQL",
    },
    {
      p: "🎯 MySQL",
    },
  ];

  return (
    <div className="pt-24 pb-16 max-w-6xl m-auto">
      <Topbar {...data} />

      <h2 className="text-2xl text-primary text-center font-bold pt-24 pb-5">
        Highlights
      </h2>
      <CardBordered val={data2} />

      <h2 className="text-2xl text-primary text-center font-bold pt-14 pb-5">
        Course Details
      </h2>
    </div>
  );
}

export default FullStack;
FullStack.getLayout = getLayout;
