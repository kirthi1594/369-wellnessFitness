import BMICalculator from "@/components/bmi-calculate/bmi";
import Card from "@/components/common/card";
import CircleImages from "@/components/common/circle-block";
import ImageComponent from "@/components/common/circle-block";
import TwoRowGrid from "@/components/common/grid";
import Section from "@/components/common/seciton";
import TitleWithNumber from "@/components/common/title";
import CenteredTitle from "@/components/common/title-2";
import Block2CardGrid from "@/components/home/block-2";
import Block2Card from "@/components/home/block-2";
import CustomPopup from "@/components/home/custom-popup";
import Hero from "@/components/home/hero-section";
import HeroSub from "@/components/home/hero-sub";
import Hero2 from "@/components/home/hero2";
// import Testimonials from "@/components/home/testimonials";
import { getLayout } from "@/components/layouts/layout";
import Blog from "../data/blog.json"
import ImageGrid from "@/components/common/gallery";
import HeroSection from "@/components/home/hero-section";
import Container from "@/components/common/container";

export default function Home() {
  let data = {
    title: "Unleash Your Strength Elevate Your Fitness",
    animateFile: "",
    desc: "At FitZone Gym, we are a fast-growing fitness center dedicated to helping individuals achieve their health and wellness goals. With our state-of-the-art equipment and a passionate team of certified trainers, we provide personalized fitness programs that cater to all levels of experience. Our focus is on delivering a top-quality gym experience that promotes strength, endurance, and overall well-being, ensuring our clients reach new heights in their fitness journey.",
    buttonText: "Get Started",
    buttonNav: "/contact-us",
  };

  const cards = [
    {
      bgImage: '/assets/gym/service/services-8.jpg',
      title: 'Personal Training',
      content: 'Achieve your fitness goals with one-on-one coaching from certified trainers who personalize every session to your needs.',
    },
    {
      bgImage: '/assets/gym/service/gym-28.jpg',
      title: 'Group Fitness Classes',
      content: 'Energize your workout routine with our dynamic group classes, designed to keep you motivated and engaged with every move.',
    },
    {
      bgImage: '/assets/gym/service/gym-32.jpg',
      title: 'State-of-the-Art Equipment',
      content: 'Elevate your fitness journey using the latest technology and premium equipment, ensuring a top-tier workout experience.',
    },
  ];


  const images = [
    { src: "/assets/gym/service/fit.png", title: "STRENGTH ", description: "Aenean sollicitudin" },
    { src: "/assets/gym/service/time.png", title: "TIME", description: "Aenean sollicitudin" },
    { src: "/assets/gym/service/practice.png", title: "PRACTICE", description: "Aenean sollicitudin" },
    { src: "/assets/gym/service/gym-23.jpg", title: "WEIGHT LOSS", description: "Aenean sollicitudin" },
  ];

  const imagesGrid = [
    { src: '/assets/gym/service/gym-25.jpg', alt: 'Image 1', width: 500, height: 200 },
    { src: '/assets/gym/service/gym-16.jpg', alt: 'Image 2', width: 500, height: 400 },
    { src: '/assets/gym/service/gym-31.jpg', alt: 'Image 3', width: 700, height: 700 },
    { src: '/assets/gym/service/services-5.jpg', alt: 'Image 4', width: 700, height: 700 },
  ];


  const slides = [
    {
      image: '/slide1.jpg',
      title: 'Welcome to Our Site',
      content: 'Discover amazing content tailored for you.',
    },
    {
      image: '/slide2.jpg',
      title: 'Join Our Community',
      content: 'Connect with others who share your interests.',
    },
    {
      image: '/slide3.jpg',
      title: 'Stay Updated',
      content: 'Get the latest news and updates directly.',
    },
  ];

  const bigCircleIndex = 2;

  return (
    <main className="">
      {/* <CustomPopup /> */}
      <Hero
        data={""}
        title=" Unleash Your Strength, Elevate Your Fitness"
        desc="Transform Your Body, Mind, and Lifestyle at Our Elite Gym. Achieve your goals with personalized training, dynamic group classes, and a motivating environment designed to bring out your best. It’s not just about workouts – it’s about transforming the way you live."
        buttonText=" Join the Movement"
        buttonNav="/contact-us"
        image="hero-1.jpg"
        imageSec="hero-2.jpg"
      >
      </Hero>

      <div className="max-md:mx-5 xl:m-auto">
        <Block2CardGrid cards={cards} />
      </div>

      <Section
        image="/assets/gym/service/services-11.jpg" // Use optimized images in public directory
        title="Cutting-Edge Facilities"
        content="Our gym offers an unrivaled workout environment equipped with advanced machines, free weights, and functional training spaces. Whether you're a beginner or a seasoned athlete, our facilities cater to all fitness levels. Explore our spacious layouts, clean environments, and dedicated zones designed to help you perform at your best."
        titleNumber="01"
        buttonLink={"/contact-us"}
        buttonName={"Get Start"}
      />
      <Container className="!max-w-full">
        <BMICalculator />
      </Container>
      <Container>
        <Section
          image="/assets/gym/service/services-10.jpg" // Use optimized images in public directory
          title="Certified Expert Trainers"
          content="Our certified trainers are more than just fitness professionals; they are committed to transforming your health journey. From customized workout plans to ongoing progress tracking, you'll have expert guidance every step of the way. With specialized training methods and in-depth knowledge, they’ll push you to unlock your full potential."
          titleNumber="02"
          buttonLink={"/contact-us"}
          buttonName={"Get Start"}
          reverse={true}
        />
      </Container>
      <Section
        image="/369 Fitness/woman-8865733_1920.png" // Use optimized images in public directory
        title="Holistic Health Approach"
        content="We believe in more than just exercise; our gym embraces a holistic approach to health. From nutrition guidance to wellness programs, we focus on the mind-body connection. Our experts help create a balanced lifestyle plan tailored to your goals, ensuring lasting results beyond the gym."
        titleNumber="01"
        buttonLink={"/contact-us"}
        buttonName={"Get Start"}
      />
      <Container>
        <CenteredTitle title={"Why Choose Our Gym?"} subtitle={"Discover the unique advantages we offer to our members."} />
        <div className="my-10"></div>
        <TwoRowGrid
          firstRow={{
            imageFirst: false,
            image1: '/assets/gym/service/gym-36.jpg',
            title1: 'Expert Guidance',
            number1: 1,
            text1: 'Work with certified trainers who specialize in crafting personalized programs that drive results.',
            imageSecond: true,
            image2: '/assets/gym/service/gym-33.jpg',
            title2: 'Flexible Memberships',
            number2: 2,
            text2: 'Enjoy membership plans tailored to your lifestyle and fitness needs, with no hidden fees.',
          }}
          secondRow={{
            imageFirst: false,
            image3: '/assets/gym/service/gym-37.jpg',
            title3: 'Innovative Classes',
            number3: 3,
            text3: 'From high-intensity interval training to yoga, our diverse classes keep your fitness routine exciting.',
            imageSecond: true,
            image4: '/assets/gym/service/gym-31.jpg',
            title4: 'Community Driven',
            number4: 4,
            text4: 'Join a supportive, like-minded community focused on health, fitness, and personal growth.',
          }}
        />
      </Container>
      <Container>
        <CircleImages images={images} bigCircleIndex={bigCircleIndex} variation="horizontal" title={"Highly Effective Workouts"} subtitle={"Maximize your results with our specialized training programs."} />
      </Container>

      {/* <Container>
        <ImageGrid images={imagesGrid} />
      </Container> */}

      <div className="max-w-6xl m-auto ">
        <CenteredTitle title={"Master the Art of Wellness"} subtitle={"Unlock the balance between mind, body, and strength for a healthier, fitter you."} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-10 ">
          {Blog?.slice(0, 3)?.map((v, i) => (
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


    </main>
  );
}

Home.getLayout = getLayout;
