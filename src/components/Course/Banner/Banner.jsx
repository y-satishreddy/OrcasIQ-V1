import React from "react";
import { FaChevronRight, FaRegCalendarAlt, FaGlobe } from "react-icons/fa";
import Image from "../../../assets/girl.png" ;// Adjust the path if needed
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

  return (
    <div className="h-[auto] w-[100%] bg-[#0A3A5E] py-[1%] px-[5%] courts-banner-font-family flex justify-between items-center">
      <div className="h-[100%] w-[80%] banner-content">
        <div>
          <a
            href="#"
            className="text-[white] hover:text-[#2EC4B6] underline-animate text-base"
          >
            {linkText}
          </a>{" "}
          <FaChevronRight size={10} className="inline text-[white]" />
          <p className="inline text-[white]">{breadcrumbText}</p>
        </div>
        <div className="py-3">
          <h2 className="text-[white] font-[500]  text-3xl">{heading}</h2>
        </div>
        <div>
          <p className="text-[white] text-base">{description1}</p>
        </div>
        <div className="py-3">
          <p className="text-[white] text-base">{description2}</p>
        </div>
        <button
          className="text-[#0A3A5E] text-base font-[500] rounded bg-[white] py-1 px-2
           active:scale-95  hover:text-[#2EC4B6] transition-all duration-100 ease-in-out"
        >
          {buttonText}
        </button>
        <div className="flex text-[white] gap-[10px]">
          <div className="flex py-4 gap-[5px]">
            <FaRegCalendarAlt size={20} />
            <p className="inline">{calendarInfo}</p>
          </div>
          <div className="flex py-4 gap-[5px]">
            <FaGlobe size={20} />
            <p className="inline">{globeInfo}</p>
          </div>
        </div>
      </div>
      <div className="h-[100%] w-[20%] banner-image">
        <img src={Image} alt="Banner Visual" className="h-[100%]" />
      </div>
    </div>
  );
};

export default DynamicBanner;
