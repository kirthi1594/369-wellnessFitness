
import CardBordered from "@/components/common/bordered-card";
import Topbar from "@/components/common/topbar";
import { getLayout } from "@/components/layouts/layout";
import React from "react";

function CyberSec() {
  let data = {
    title: "Cyber Security",
    whatis:
      "Cybersecurity refers to the practice of protecting computer systems, networks, and data from unauthorized access, attacks, damage, or theft, aiming to ensure the confidentiality, integrity, and availability of information in the digital realm.",
    why: "Cybersecurity is crucial in today's interconnected world to safeguard sensitive information, prevent unauthorized access or data breaches, defend against cyber threats, maintain business continuity, protect individuals' privacy, and uphold the trust and integrity of digital systems and services.",
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

  let coursedata = [
    {
      p: "🎯 Introduction to cybersecurity principles and concepts",
    },
    {
      p: "🎯 Network security and protocols",
    },
    {
      p: "🎯 Secure coding practices and software vulnerabilities",
    },
    {
      p: "🎯 Cryptography and encryption techniques",
    },
    {
      p: "🎯 Web application security and secure development practices",
    },
    {
      p: "🎯 Incident response and handling",
    },
    {
      p: "🎯 Ethical hacking and penetration testing",
    },
    {
      p: "🎯 Risk assessment and management",
    },
    {
      p: "🎯 Security policies and compliance frameworks",
    },
    {
      p: "🎯 Mobile and wireless security",
    },
    {
      p: "🎯 Cloud security and virtualization",
    },
    {
      p: "🎯 Security audits and assessments",
    },
    {
      p: "🎯 Cyber threat intelligence and analysis",
    },
    {
      p: "🎯 Social engineering and phishing awareness",
    },
    {
      p: "🎯 Digital forensics and incident investigation",
    },
  ];
  return (
    <div className="pt-24 pb-16 max-w-6xl m-auto">
      <Topbar {...data} />
    
      <h2
        className="text-2xl text-primary text-center font-bold pt-14 pb-5"
        id="highlights"
      >
        Highlights
      </h2>
      <CardBordered val={data2} />

      <h2 className="text-2xl text-primary text-center font-bold pt-14 pb-5">
        Course Details
      </h2>

    </div>
  );
}

export default CyberSec;
CyberSec.getLayout = getLayout;
