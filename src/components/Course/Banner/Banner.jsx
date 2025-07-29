import React, { useEffect } from "react";
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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full bg-[#0A3A5E] py-[1%] px-[5%] courts-banner-font-family overflow-x-hidden">
      <div className="h-auto w-full flex justify-between items-center flex-wrap md:flex-nowrap">
        {/* Text Section */}
        <div className="w-full md:w-[70%] banner-content" data-aos="fade-right">
          <div>
            <a
              href="#"
              className="text-white hover:text-[#2EC4B6] underline-animate text-base"
            >
              {linkText}
            </a>{" "}
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

          <button
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

        {/* Image Section */}
        <div
          className="w-full md:w-[30%] mt-6 md:mt-0 banner-image"
          data-aos="fade-left"
        >
          <img
            src={imageUrl}
            alt="Banner Visual"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicBanner;
