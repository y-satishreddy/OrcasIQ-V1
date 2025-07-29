import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CareerTrainingSection = ({ data }) => {
  const { title, items, image, stats } = data;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row px-[5%] py-[3%] gap-8 overflow-hidden">
      {/* Left Section */}
      <div
        className="w-full md:w-1/2 h-[500px] flex flex-col gap-6"
        data-aos="fade-up"
      >
        <h2 className="text-black font-semibold text-2xl md:text-3xl">
          {title}
        </h2>

        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <img
              src={item.icon}
              alt=""
              className="h-[40px] w-[40px] object-contain mt-1"
            />
            <div>
              <h3 className="text-black font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-[500px] flex flex-col justify-between items-center overflow-hidden">
        {/* Top Image */}
        <div className="w-full h-[80%]" data-aos="fade-up" data-aos-delay="500">
          <img
            src={image}
            alt="training"
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Bottom Stats */}
        <div
          className="flex justify-between w-full h-[15%] px-2 gap-4 mt-4"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 bg-white rounded shadow-md flex flex-col justify-center items-center px-2 py-2"
            >
              <p className="text-lg font-bold text-[#0A3A5E]">{stat.number}</p>
              <p className="text-xs text-gray-600 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTrainingSection;
