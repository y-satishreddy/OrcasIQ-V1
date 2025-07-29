import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContentWithImages = ({ data }) => {
  if (!data) return null;

  const { heading, description, items } = data;

  return (
    <div className="w-full px-[5%] py-[1%] bg-white">
      {/* Heading and Description */}
      <div className="mb-6">
        <h2 className="font-semibold text-3xl mb-2">{heading}</h2>
        <p className="text-base text-justify">{description}</p>
      </div>

      {/* Two-Column Section */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {items?.map((item, index) => (
          <div key={index} className="p-4 w-full md:w-1/2">
            <h3 className="text-lg font-semibold mb-3 text-center pb-2">
              {item.title}
            </h3>

            {/* Display each image centered */}
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                data-aos="fade-up"
                className="w-[450px] h-[300px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentWithImages;
