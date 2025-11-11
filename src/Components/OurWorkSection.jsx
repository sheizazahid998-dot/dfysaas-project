import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MarketPlace from "../assets/images/MarketPlace.webp";
import ShopPlace from "../assets/images/ShopPlace.webp";
import GetSmarter from "../assets/images/GetSmarter.webp";
import TutorFinder from "../assets/images/TutorFinder.webp";
import GetWell from "../assets/images/GetWell.webp";
import ThetaHealing from "../assets/images/ThetaHealing.webp";
import AutoCareer from "../assets/images/AutoCareer.webp";
import AutoHR from "../assets/images/AutoHR.webp";
import AutoSocial from "../assets/images/AutoSocial.webp";
import HistoryChecker from "../assets/images/HistoryChecker.webp";
import demand from "../assets/images/demand.webp";
import GetService from "../assets/images/GetService.png";
import design from "../assets/images/design.webp";
import tripovy from "../assets/images/tripovy.webp";
import MalGrow from "../assets/images/MalGrow.webp";
import MyCloud from "../assets/images/MyCloud.webp";
import RapidSoft from "../assets/images/RapidSoft.webp";
import RestaurantOwner from "../assets/images/RestaurantOwner.webp";
import SearchGI from "../assets/images/SearchGI.webp";
import StoryRunway from "../assets/images/StoryRunway.webp";

const cards = [
  {
    img: MarketPlace,
    title: "KIJENGA – Market Placee",
    desc: "The free platform is the best way to find professional contractors and expert advice for renovation in Saskatoon and nearby areas.",
  },
  {
    img: ShopPlace,
    title: "Shop Kijenga – Market Place",
    desc: "Kijenga, a unique marketplace, facilitates the hiring of plumbers at affordable prices to meet and exceed customer expectations.",
  },
  {
    img: GetSmarter,
    title: "MdM and GP Answers",
    desc: "Microsoft monitors quality and compatibility data is an excellent solution to identify operating system issues before they affect machines.",
  },
  {
    img: TutorFinder,
    title: "TutorFinder",
    desc: "The UK-based SaaS platform provides the opportunity to become a tutor or find the right teacher for kids in your vicinity.",
  },
  {
    img: GetWell,
    title: "Get well 3",
    desc: "An online platform that provides weight loss coaching and personalized eating plans to achieve optimum health and prevent chronic diseases",
  },
  {
    img: ThetaHealing,
    title: "ThetaHealing",
    desc: "A platform to practice and train modern meditation techniques using spiritual philosophy to enhance and evolve mind, body, and spirit",
  },
  {
    img: AutoCareer,
    title: "AutoCareer",
    desc: "The professional jobs network helps uncover exciting job openings, helpful advice, and fantastic career options across the US and Canada.",
  },
  {
    img: AutoHR,
    title: "Auto Moto HR",
    desc: "The automoto jobs network is a one-stop hassle-free solution for recruiting, onboarding, and managing your employees.",
  },
  {
    img: AutoSocial,
    title: "Auto Moto Social",
    desc: "The social jobs network is a great way to find exciting job opportunities, expert advice, and fantastic companies in the US and Canada.",
  },
  {
    img: HistoryChecker,
    title: "Hapity",
    desc: "A one-click solution to stream live from your phone or website while keeping full ownership of the videos.",
  },
  {
    img: demand,
    title: "On-Demand Driver",
    desc: "An easy, affordable, same-day delivery solution that allows users to send and track items in a few clicks.",
  },
  {
    img: GetService,
    title: "Service Buddy",
    desc: "The advanced app help service companies (like plumbers, electricians, Hvacs, etc.) streamline and optimize their entire field service management process",
  },
  {
    img: design,
    title: "Design My New Smile",
    desc: "The SaaS solutions is a masterstroke of React Native that connects you with the right dentist or clinic",
  },
  {
    img: tripovy,
    title: "Tripovy",
    desc: "Save, compare, and book flights from the palm of your hand with this easy-to-navigate web application",
  },
  {
    img: MalGrow,
    title: "Malgrow",
    desc: "Simple ERP software designed exclusively for entrepreneurs to help them track their business growth easily",
  },
  {
    img: MyCloud,
    title: "Park My Cloud",
    desc: "The cloud-based SaaS platform enables IT firms to manage, govern, and optimize their spending across multiple public clouds",
  },
  {
    img: RapidSoft,
    title: "Rapid Soft",
    desc: "A modern ERP system with mulitple modules to run the business process of small manufacturing units with ease.",
  },
  {
    img: RestaurantOwner,
    title: "Restaurant Genie",
    desc: "A powerful ordering system designed to increase restaurant revenue streams by allowing them to accept online orders.",
  },
  {
    img: SearchGI,
    title: "Search GI",
    desc: "A free social media platform for sharing quality content and creating engaging websites to make a strong online presence.",
  },
  {
    img: StoryRunway,
    title: "Story Runway",
    desc: "DFY SaaS is honored to create a one-of-a-kind run-time video generation solution",
  },
];

// ==== Custom Arrows ====
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 
               flex items-center justify-center 
               bg-[#e9e3e3] hover:bg-[#d6d1d1] 
               shadow-md rounded-full w-[45px] h-[45px]"
  >
    <FaArrowRight className="text-red-500 text-lg" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-12 top-1/2 -translate-y-1/2  
               flex items-center justify-center 
               bg-[#e9e3e3] hover:bg-[#d6d1d1] 
               shadow-md rounded-full w-[45px] h-[45px]"
  >
    <FaArrowLeft className="text-red-500 text-lg" />
  </button>
);

const OurWorkSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="mt-10 sm:mt-14 xs:mt-8">
        <ul className="flex justify-center flex-wrap gap-[6px]">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-300 transition-all duration-300"></div>
    ),
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 880, // small laptops / big tabs
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 600, // phones (300px–599px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-[#f6f6f6]">
      <h2 className="text-center text-[#112b98] font-poppins text-[38px] sm:text-[40px] font-bold mb-10">
        Our Work
      </h2>

      <div className="px-24 lg:px-20 mobile-sm:px-4">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-3 mb-6">
              <div className="bg-white p-4 rounded-[14px] shadow-md mx-auto flex flex-col items-center text-center">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-contain rounded-lg h-[270px] w-[90%]"
                />
                <h3 className="text-[#112b98] font-poppins font-bold text-[18px] mt-3">
                  {card.title}
                </h3>
                <p className="mt-2 text-[#727272] font-poppins text-[15px]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Active dot color */}
      <style jsx global>{`
        .slick-dots {
          bottom: -40px !important;
        }

        .slick-dots li.slick-active div {
          background-color: #112b98;
        }
      `}</style>
    </section>
  );
};

export default OurWorkSection;
