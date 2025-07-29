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
          className="modules-main-part_one flex-1 flex flex-col gap-y-[30px]"
          data-aos="fade-right"
        >
          {[0, 1].map((rowIndex) => (
            <div
              className="flex flex-wrap gap-x-[30px] justify-start"
              key={rowIndex}
            >
              {leftCards
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((card, index) => (
                  <div
                    className="w-full max-w-[260px] h-[230px] bg-white rounded p-4 flex flex-col gap-[10px] shadow-md justify-start"
                    key={index}
                  >
                    <img
                      src={card.icon}
                      alt="logo"
                      className="h-[40px] w-[40px]"
                    />
                    <h3 className="text-black font-medium text-2xl">
                      {card.title}
                    </h3>
                    <p className="text-[13px] text-left text-gray-700">
                      {card.description}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Right Info Section */}
        <div
          className="modules-main-part_two flex-1 bg-white rounded-2xl p-6 shadow-md"
          data-aos="fade-left"
        >
          <h2 className="font-semibold text-3xl">{sideTitle}</h2>
          <p className="text-base pb-4 text-justify text-gray-700">
            {sideDescription}
          </p>
          <ul className="space-y-3">
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
