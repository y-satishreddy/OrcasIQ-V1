import React from "react";
import ScienceImage from "../../../assets/Science.jpg"; // Replace with your image if needed

const CarouselComponentTwo = () => {
  return (
    <div className="w-full bg-[#f5f5f5] py-[1%] px-[5%] text-black flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Left Content */}
      <div className="md:w-1/2 w-full text-left space-y-5">
        <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
          Data Analytics
          <br />
          Professional Program
        </h2>
        <p className="text-base sm:text-lg text-black">
          Gain hands-on expertise in Excel, SQL, Power BI, Tableau, and more.
          Get certified and land your dream role in data analytics.
        </p>
        <button className="bg-black text-white font-semibold px-6 py-3 hover:bg-gray-200 transition duration-300">
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
          {/* Gradient Overlay (Hidden on Mobile) */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#f5f5f5] hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponentTwo;
