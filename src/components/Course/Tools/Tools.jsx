import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Tools = ({ data }) => {
  const {
    sectionTitle,
    sectionDescription,
    leftCards,
    rightInfo: {
      title: sideTitle,
      description: sideDescription,
      points: sidePoints,
    },
  } = data;

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="benefits px-[5%] py-[1%] mt-3 flex flex-col gap-2 overflow-x-hidden">
      {/* Section Title */}
      <h2 className="text-black font-medium text-3xl">{sectionTitle}</h2>
      <p className="text-justify">{sectionDescription}</p>

      {/* Cards & Side Info Section */}
      <div className="modules-main flex flex-col md:flex-row items-stretch w-full gap-6 mt-4">
        
        {/* Left Cards Section */}
        <div
          className="modules-main-part_one flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
          data-aos="fade-right"
        >
          {leftCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 flex flex-col gap-3 shadow-md h-full"
            >
              <img src={card.icon} alt="logo" className="h-[40px] w-[40px]" />
              <h3 className="text-black font-medium text-xl">{card.title}</h3>
              <p className="text-sm text-left text-gray-700">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Info Section */}
        <div
          className="modules-main-part_two flex-1 flex flex-col justify-between bg-white rounded-xl p-6 shadow-md"
          data-aos="fade-left"
        >
          <div>
            <h2 className="font-semibold text-2xl mb-2">{sideTitle}</h2>
            <p className="text-sm pb-4 text-justify text-gray-700">
              {sideDescription}
            </p>
          </div>
          <ul className="space-y-3 flex-1 flex flex-col justify-center">
            {sidePoints.map((point, index) => (
              <li className="flex items-start gap-2 text-justify" key={index}>
                <span>–</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tools;
