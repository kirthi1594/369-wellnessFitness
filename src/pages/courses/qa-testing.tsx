import React from "react";
import { getLayout } from "@/components/layouts/layout";
import Topbar from "@/components/common/topbar";

import CardBordered from "@/components/common/bordered-card";

function QATesting() {
  let data = {
    title: "QA Testing",
    whatis:
      "QA testing, or quality assurance testing, involves systematically evaluating software applications to identify bugs, errors, and functional issues, ensuring the software meets quality standards and user requirements. The goal is to enhance software quality, minimize risks, and deliver a reliable and satisfying user experience.",
    why: "QA testing is essential to ensure software reliability, functionality, and performance, reducing the risk of defects and enhancing the overall quality of the product. It helps identify and fix issues early in the development cycle, saving time and costs, and ultimately leads to higher customer satisfaction and confidence in the software.",
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
  ]

  let coursedata = [
    {
      p: "🎯 HTML, CSS, JavaScript - Basics",
    },
    {
      p: "🎯 Manual Testing",
    },
    {
      p: "🎯 Selenium with Java",
    },
    {
      p: "🎯 API Testing (Using Postman)",
    },
    {
      p: "🎯 REST API (Cucumber Framework)",
    },
    {
      p: "🎯 Load Testing (Using Jmeter)",
    },
  ]

  return (
    <div className="pt-24 pb-16 max-w-6xl m-auto">
      <Topbar {...data} />

      <h2 className="text-2xl text-primary text-center font-bold pt-14 pb-5" id="highlights">Highlights</h2>
      <CardBordered val={data2} />

      <h2
        className="text-2xl text-primary text-center font-bold pt-14 pb-5"
        id="#details"
      >
        Course Details
      </h2>

    </div>
  );
}

export default QATesting;
QATesting.getLayout = getLayout;
