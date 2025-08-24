import React from "react";
<<<<<<< HEAD
import AnalyticsImage from "../../../assets/bannerImages/new.jpg";
import { Link } from "react-router-dom";
const CarouselComponentTwo = () => {
  return (
    <div className="w-full h-full bg-[#f5f5f5] px-[5%] py-[2%] md:py-0 text-black flex flex-col-reverse md:flex-row-reverse items-center justify-end gap-[30px] overflow-hidden">
      <div className="md:w-1/2 w-full text-left space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-[28px] font-bold leading-snug">
          Data Analytics <br /> Professional Program
        </h2>
        <p className="text-base sm:text-lg lg:text-[16px] text-gray-700">
          Master the most in-demand analytics tools like Excel, SQL, Power BI,
          Tableau, and more. Build job-ready skills through real-world projects
          and get certified to kickstart your career in data analytics.
        </p>
        <button className="bg-black text-white font-semibold text-sm sm:text-base px-4 py-2 rounded hover:bg-gray-800 active:scale-95 transition-transform duration-200">
         <Link to="//contact-course-form"> Enroll Now</Link>
        </button>
      </div>

      <div className="md:w-[70%] w-full mt-6 md:mt-0 relative">
        <div className="relative w-full min-h-[280px] h-auto md:h-[100%] overflow-hidden ">
          <img
            src={AnalyticsImage}
            alt="Data Analytics"
            className="w-full h-full md:h-full object-cover"
          />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent to-[#f5f5f5]" />
=======
import ScienceImage from "../../../assets/Analytics.jpg"; // Replace with your image

const CarouselComponentTwo = () => {
  return (
    <div className="w-full h-full bg-black py-[1%] px-[5%] text-white flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Left Content */}
      <div className="md:w-1/2 w-full text-center md:text-left space-y-5">
        <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
          Data Analytics
          <br />
          Professional Program
        </h2>
        <p className="text-base sm:text-lg text-gray-300">
          Gain hands-on expertise in Excel, SQL, Power BI, Tableau, and more.
          Get certified and land your dream role in data analytics.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 hover:bg-gray-200 transition duration-300">
          Enroll Now
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 w-full relative mt-10 md:mt-0 flex justify-end">
        <div className="relative w-full h-full">
          <img
            src={ScienceImage}
            alt="Data Analytics"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay (always visible now) */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black" />
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
        </div>
      </div>
    </div>
  );
};

export default CarouselComponentTwo;
