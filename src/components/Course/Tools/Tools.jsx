import React from "react";

const Tools = ({ data }) => {
  const {
    sectionTitle,
    sectionDescription,
    leftCards,
    rightInfo: { title: sideTitle, description: sideDescription, points: sidePoints },
  } = data;

  return (
    <div className="benefits px-[5%] py-[1%] mt-3 flex flex-col gap-2">
      <h2 className="text-black font-medium text-3xl">{sectionTitle}</h2>
      <p className="text-base">{sectionDescription}</p>

      <div className="modules-main flex flex-col md:flex-row items-stretch w-full gap-6">
        {/* Left Side */}
        <div className="modules-main-part_one flex-1 flex flex-col gap-y-[30px]">
          {[0, 1].map(rowIndex => (
            <div className="flex gap-x-[30px]" key={rowIndex}>
              {leftCards.slice(rowIndex * 2, rowIndex * 2 + 2).map((card, index) => (
                <div
                  className="w-[40%] bg-white rounded p-4 flex flex-col gap-[10px] shadow-md"
                  key={index}
                >
                  <img src={card.icon} alt="logo" className="h-[40px] w-[40px]" />
                  <h3 className="text-black font-medium text-2xl">{card.title}</h3>
                  <p className="text-[13px]">{card.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="modules-main-part_two flex-1 bg-white rounded-2xl p-6">
          <h2 className="font-semibold text-3xl">{sideTitle}</h2>
          <p className="text-base pb-4">{sideDescription}</p>
          <ul className="space-y-3">
            {sidePoints.map((point, index) => (
              <li className="flex items-start gap-2" key={index}>
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
