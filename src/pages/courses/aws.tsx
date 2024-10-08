import React from "react";
import { getLayout } from "@/components/layouts/layout";
import Topbar from "@/components/common/topbar";
import CardBordered from "@/components/common/bordered-card";


function AWS() {
  let data = {
    title: "AWS",
    whatis:
      "AWS, Amazon Web Services, is a leading cloud computing platform that offers a wide range of scalable and on-demand services, enabling businesses and individuals to build and manage applications and infrastructure in the cloud with ease, flexibility, and reliability.",
    why: "Businesses choose AWS for its scalability, reliability, and flexibility, allowing them to efficiently handle varying workloads and pay for resources as needed. With comprehensive security measures, a broad portfolio of services, and cost-effective pricing models, AWS provides the infrastructure, innovation, and global reach needed to accelerate digital transformation and drive business growth.",
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
      p: "🎯 Introduction to AWS and its core services",
    },
    {
      p: "🎯 Computing services: EC2 instances, AWS Lambda, and containerization",
    },
    {
      p: "🎯 Storage services: Amazon S3, Amazon EBS, and Amazon Glacier",
    },
    {
      p: "🎯 Database services: Amazon RDS, Amazon DynamoDB, and Amazon Redshift",
    },
    {
      p: "🎯 Networking and content delivery: Amazon VPC, Amazon Route 53, and Amazon CloudFront",
    },
    {
      p: "🎯 Security and identity services: AWS IAM, AWS Cognito, and AWS WAF",
    },
    {
      p: "🎯 Monitoring, management, and automation: Amazon CloudWatch, AWS CloudTrail, and AWS Systems Manager",
    },
  ]

  return (
    <div className="pt-24 pb-16 max-w-6xl m-auto">
      <Topbar {...data} />

      <h2 className="text-2xl text-primary text-center font-bold pt-14 pb-5" id="highlights">Highlights</h2>
      <CardBordered val={data2} />

      <h2 className="text-2xl text-primary text-center font-bold pt-14 pb-5">
        Course Details
      </h2>


    </div>
  );
}

export default AWS;
AWS.getLayout = getLayout;
