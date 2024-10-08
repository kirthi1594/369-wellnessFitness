import React from "react";
import { getLayout } from "@/components/layouts/layout";
import Head from "next/head";
import { Quote1Icon, Quote2Icon } from "@/components/icons/all-icons";
import AboutSec from "@/components/home/about-sec";
import Image from "next/image";
import Section from "@/components/common/seciton";
import ProfileCard from "@/components/common/profile-card";
import Card from "@/components/common/profile-card";
import CircleImages from "@/components/common/circle-block";
import { VerticalTabs } from "@/components/common/tab";
import CenteredTitle from "@/components/common/title-2";
import Accordion from "@/components/common/accordion";
import Hero from "@/components/home/hero-section";


function AboutUs() {
  let data = {
    animateFile: "connectinganimation.json",
    animationImage1: "/assets/images/about (2).jpg",
    animationImage2: "/assets/images/about (1).jpg",
    desc: "Founded in September 2022, TechBeesHive Technologies is a dynamic and thriving software development company located in Krishnagiri. With a passion for technology and a vision to empower local talent, we have been delivering exceptional software solutions to clients worldwide.",
    buttonText: "Contact Us",
    buttonNav: "/contact-us",
  };

  const trainersData = [
    {
      name: "George Johnson",
      title: "Support Specialist",
      imageUrl: "/images/george-johnson.jpg"
    },
    {
      name: "Anna Smith",
      title: "Fitness Coach",
      imageUrl: "/images/anna-smith.jpg"
    },
    {
      name: "Michael Brown",
      title: "Yoga Instructor",
      imageUrl: "/images/michael-brown.jpg"
    },
    {
      name: "Sophia Lee",
      title: "Strength Trainer",
      imageUrl: "/images/sophia-lee.jpg"
    },
    {
      name: "David Wilson",
      title: "Nutritionist",
      imageUrl: "/images/david-wilson.jpg"
    },
    {
      name: "Emma Davis",
      title: "Pilates Instructor",
      imageUrl: "/images/emma-davis.jpg"
    }
  ];

  const images = [
    { src: "/assets/gym/service/services-4.jpg", title: "Inclusivity ", description: "We welcome all fitness levels and backgrounds." },
    { src: "/assets/gym/service/services-5.jpg", title: "Integrity", description: "We promote honesty and transparency in all interactions." },
    { src: "/assets/gym/service/services-6.jpg", title: "Passion", description: "We are passionate about helping others succeed." },
    { src: "/assets/gym/service/services-7.jpg", title: "Community", description: "We foster a supportive and motivating environment." },
  ];

  const bigCircleIndex = 2;


  const tabsData = [
    {
      label: 'Empowering Your Fitness Journey',
      content: 'At 369 Wellness & Fitness, we are committed to supporting every aspect of your fitness journey. From your very first step into our gym, you will find an environment that motivates you to push beyond your limits and achieve your personal best. We believe in fostering a strong sense of community where members uplift one another, creating a positive atmosphere of shared success. Whether you are new to fitness or a seasoned athlete, our goal is to help you build confidence in your abilities and celebrate every milestone along the way.',
    },
    {
      label: 'Your Health, Our Priority',
      content: 'Your health is our top priority. Thats  why we take a tailored approach to fitness, offering personalized workout plans and nutritional guidance designed to meet your unique needs. Our expert trainers work closely with you to understand your fitness goals, crafting programs that focus on long-term success. Whether you are aiming to lose weight, build muscle, or improve your overall well-being, we are here to guide you every step of the way, ensuring that you see lasting results that transform not just your body, but your lifestyle.',
    },
    {
      label: 'Cutting-Edge Fitness, Timeless Results',
      content: 'At 369 Wellness & Fitness, we combine the latest in fitness technology with time-tested training techniques to offer you the best possible experience. Our state-of-the-art equipment, along with our innovative approach to fitness, ensures that every workout is both effective and exciting. From advanced cardio machines to comprehensive strength-training setups, we provide everything you need to meet your fitness goals. Our expert trainers stay ahead of the curve, regularly updating their knowledge to bring you the latest fitness trends and techniques for maximum results.',
    },
    {
      label: 'Community-Driven Fitness',
      content: 'We believe that fitness is not a solo journey. It’s about being part of a community that inspires you to show up, work hard, and never give up. At 369 Wellness & Fitness, you will find a welcoming environment where members of all levels come together to pursue their health and fitness goals. Our group classes foster a sense of camaraderie and motivation, while our personal trainers and support staff are always available to offer guidance and encouragement. Join us, and become part of a fitness family that’s as dedicated to your success as you are.',
    },
    {
      label: 'Where Wellness Meets Lifestyle',
      content: 'At 369 Wellness & Fitness, we’re not just about short-term results; we’re about cultivating healthy habits that last a lifetime. Our holistic approach to fitness emphasizes not only physical strength but mental clarity and emotional well-being. Through our wide variety of fitness programs, nutritional coaching, and wellness workshops, we aim to help you achieve a balanced and sustainable lifestyle. We believe that fitness is about more than just looking good—it’s about feeling good and living your best life, inside and out.',
    },
  ];


  return (
    <div className="">
      {/* <Hero {...data}>
        <h5 className="text-xl font-semibold pb-3  max-md:pt-20 text-white">About Us</h5>
        <h2 className="lg:text-4xl max-md:text-3xl font-bold pb-5 leading-tight text-white">
          Your Trusted{" "}
          <span className="text-primary"> Fitness </span> Partner
        </h2>
      </Hero> */}

      <Hero
        data={data}
        title="Connect with Your Fitness Journey"
        desc="Your health and fitness goals matter to us! Whether you have questions, need guidance, or want to explore our services, we're here to support you every step of the way. Don't hesitate—reach out to us today!."
        buttonText="Start Your Transformation"
        buttonNav="/contact-us"
        image="hero-1.jpg"
        imageSec="hero-2.jpg"
      />

      <Section
        image="/assets/gym/service/gym-20.jpg" // Use optimized images in public directory
        title="Our Mission"
        content=" At FitZone, our mission is to inspire and empower individuals to lead healthier, happier lives through fitness and wellness. We believe that everyone deserves access to quality training and support."
        titleNumber="01"
      />
      <Section
        image="/assets/gym/service/services-2.jpg" // Use optimized images in public directory
        title="Our Vision"
        content="We envision a community where health and fitness are accessible to all. Our goal is to create an inclusive environment where everyone feels welcomed and motivated to reach their fitness goals."
        titleNumber="02"
        reverse={true}
      />
      <CircleImages images={images} bigCircleIndex={bigCircleIndex} variation="horizontal" title="" subtitle="" />

      <div className="max-w-5xl m-auto my-20 flex flex-col gap-10">
        <CenteredTitle title={"Why Choose Us?"} subtitle={`${"Excellence, Dedication, and Results You Can Trust"}`} />
        <VerticalTabs tabs={tabsData} defaultActiveIndex={0} />
      </div>

    </div>
  );
}

export default AboutUs;
AboutUs.getLayout = getLayout;
