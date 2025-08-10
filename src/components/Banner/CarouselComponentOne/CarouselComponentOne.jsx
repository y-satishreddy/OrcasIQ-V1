import React from "react";
import ScienceImage from "../../../assets/bannerImages/data-science.jpg";
import { Link } from "react-router-dom";
const CarouselComponentOne = () => {
  return (
    <div className="w-full h-full bg-black px-[5%] py-[2%] md:py-0 text-white flex flex-col-reverse md:flex-row-reverse items-center justify-end gap-[30px] overflow-hidden">
      <div className="md:w-1/2 w-full text-left space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-[28px] font-bold leading-snug">
          Data Science <br /> Professional Program
        </h2>
        <p className="text-base sm:text-lg lg:text-[16px] text-gray-300">
          Master the most in-demand data science tools like Python, R, TensorFlow,
          Scikit-learn, and more. Build job-ready skills through real-world projects
          and get certified to kickstart your career in data science.
        </p>
        <button className="bg-white text-black font-semibold text-sm sm:text-base px-4 py-2 rounded hover:bg-gray-200 active:scale-95 transition-transform duration-200">
         <Link to="/contact-course-form"> Enroll Now</Link>
        </button>
      </div>

      <div className="md:w-[70%] w-full mt-6 md:mt-0 relative">
        <div className="relative w-full min-h-[280px] h-auto md:h-[100%] overflow-hidden">
          <img
            src={ScienceImage}
            alt="Data Science"
            className="w-full h-full md:h-full object-cover"
          />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent to-black" />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponentOne;
