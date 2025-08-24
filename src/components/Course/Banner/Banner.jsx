import React, { useEffect } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom"; // ✅ import
=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronRight, FaRegCalendarAlt, FaGlobe } from "react-icons/fa";

const DynamicBanner = ({ data }) => {
  const {
    linkText,
    breadcrumbText,
    heading,
    description1,
    description2,
    buttonText,
    calendarInfo,
    globeInfo,
    imageUrl,
  } = data;

<<<<<<< HEAD
  const navigate = useNavigate(); // ✅ hook

=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

<<<<<<< HEAD
  // ✅ Fallback image if no imageUrl is provided
  const fallbackImage =
    "https://via.placeholder.com/400x300.png?text=Banner+Image";

  return (
    <div className="w-full bg-gradient-to-r from-[#0A3A5E] to-black py-[1%] px-[5%] courts-banner-font-family overflow-x-hidden">
=======
  return (
    <div className="w-full bg-[#0A3A5E] py-[1%] px-[5%] courts-banner-font-family overflow-x-hidden">
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
      <div className="h-auto w-full flex justify-between items-center flex-wrap md:flex-nowrap">
        {/* Text Section */}
        <div className="w-full md:w-[70%] banner-content" data-aos="fade-right">
          <div>
<<<<<<< HEAD
            {/* ✅ Home navigation */}
            <button
              onClick={() => navigate("/")}
              className="text-white hover:text-[#2EC4B6] underline-animate text-base"
            >
              {linkText}
            </button>{" "}
=======
            <a
              href="#"
              className="text-white hover:text-[#2EC4B6] underline-animate text-base"
            >
              {linkText}
            </a>{" "}
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
            <FaChevronRight size={10} className="inline text-white" />
            <p className="inline text-white">{breadcrumbText}</p>
          </div>

          <div className="py-3">
            <h2 className="text-white font-medium text-3xl">{heading}</h2>
          </div>

          <p className="text-white text-base">{description1}</p>

          <div className="py-3">
            <p className="text-white text-base">{description2}</p>
          </div>

<<<<<<< HEAD
          {/* ✅ Enroll navigation */}
          <button
            onClick={() => navigate("/contact-course-form")}
=======
          <button
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
            className="text-[#0A3A5E] text-base font-medium rounded bg-white py-2 px-4 mt-2
            active:scale-95 transition-all duration-100 ease-in-out"
          >
            {buttonText}
          </button>

          <div className="flex text-white gap-[20px] flex-wrap mt-4">
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt size={18} />
              <p>{calendarInfo}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe size={18} />
              <p>{globeInfo}</p>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Image Section (Hidden on Mobile) */}
        <div
          className="hidden md:block w-full md:w-[30%] mt-6 md:mt-0 banner-image"
          data-aos="fade-left"
        >
          <img
            src={imageUrl || fallbackImage}
=======
        {/* Image Section */}
        <div
          className="w-full md:w-[30%] mt-6 md:mt-0 banner-image"
          data-aos="fade-left"
        >
          <img
            src={imageUrl}
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
            alt="Banner Visual"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicBanner;
