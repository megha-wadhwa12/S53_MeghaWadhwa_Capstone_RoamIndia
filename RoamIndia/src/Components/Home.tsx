import React, { useRef } from "react";
import CarouselImage1 from "./../assets/Banner1.png"; // Import carousel images
import CarouselImage2 from "../assets/Banner2.png";
import CarouselImage3 from "../assets/Banner3.png";
// import RoamIndia from "../assets/RoamIndiaText.png";
import Subline from "../assets/Subline.png";
import Navbar from "./Navbar";
import { TypewriterEffect } from './TypeWriterEffect'
import AboutUs from "./AboutUs";
import TrendingDestinations from "./TrendingDestinations";
import TopAttractions from "./TopAttractions";
import Footer from "./Footer";

const Home: React.FC = () => {
  const DiscoverRef = useRef<HTMLDivElement>(null)


  const handleClick = () => {
    if(DiscoverRef.current){
      (DiscoverRef.current as HTMLDivElement).scrollIntoView({ behavior: "smooth" });
    }
  };

  const words = [
    {
      text: "ROAM",
      className: "text-black-500 dark:text-white-500 asul-regular text-white",

    },
    {
      text: "INDIA",
      className: "text-black-500 dark:text-white-500 asul-regular text-white",

    },
  ];
  return (
    <div className="
    bg-white">
      <Navbar />
      <div className="absolute flex flex-col gap-6 justify-center right-20 items-center w-7/12 h-[22rem] z-10">
        {/* <img
          className="top-50 l-200 z-10 w-[30rem] h-96"
          src={RoamIndia}
          alt="RoamIndia"
        /> */}.
        <TypewriterEffect words={words} cursorClassName="block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500" />
        <img
          className="top-50 l-200 z-10 w-[30rem] h-96"
          src={Subline}
          alt="RoamIndia"
        />
        <button className="btn btn-wide bg-black text-white" onClick={()=>handleClick()}>
          DISCOVER YOUR JOURNEY
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="carousel w-screen h-[28rem]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={CarouselImage1} className="w-full" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={CarouselImage2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={CarouselImage3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <TrendingDestinations />
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={DiscoverRef}>
      <TopAttractions/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
