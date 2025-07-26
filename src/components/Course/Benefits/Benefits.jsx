import React from "react";

const CourseBenefits = ({ data }) => {
  const { sectionTitle, sectionDescription, benefits } = data;

  return (
    <div className="px-[5%] py-[2%] mt-3 flex flex-col gap-4">
      <h2 className="text-black font-semibold text-2xl md:text-3xl">
        {sectionTitle}
      </h2>
      <p className="text-base text-gray-700">{sectionDescription}</p>

      <div className="flex flex-wrap -mx-2">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="px-2 mb-4 w-full sm:w-1/2 lg:w-1/4"
          >
            <div className="w-full shadow-md p-4 rounded-lg flex flex-col gap-2 bg-white h-full">
              <img
                src={item.icon}
                alt={item.title}
                className="h-[40px] w-[40px]"
              />
              <h3 className="text-black font-semibold text-xl">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseBenefits;
