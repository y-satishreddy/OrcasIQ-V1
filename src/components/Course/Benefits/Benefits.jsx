import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CourseBenefits = ({ data }) => {
  const { sectionTitle, sectionDescription, benefits } = data;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="px-[5%] py-[2%] mt-3 flex flex-col gap-4"
      data-aos="fade-up"
    >
      <h2 className="text-black font-semibold text-2xl md:text-3xl">
        {sectionTitle}
      </h2>
      <p className="text-justify text-gray-700">{sectionDescription}</p>

      <div className="flex flex-wrap -mx-2">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="px-2 mb-4 w-full sm:w-1/2 lg:w-1/4"
            data-aos="fade-up"
            data-aos-delay={index * 100} // stagger animations
          >
            <div className="w-full shadow-md p-4 rounded-lg flex flex-col gap-2 bg-white h-full">
              <img
                src={item.icon}
                alt={item.title}
                className="h-[40px] w-[40px]"
              />
              <h3 className="text-black font-semibold text-xl">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseBenefits;
