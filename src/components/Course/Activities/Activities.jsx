import React from "react";

const Activities = ({ data }) => {
  const { title, items, image, stats } = data;

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row px-[5%] py-[1%] gap-8">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-black font-semibold text-2xl md:text-3xl">
          {title}
        </h2>

        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img src={item.icon} alt="" className="h-[40px] w-[40px]" />
            <div>
              <h3 className="text-black font-medium text-lg md:text-xl">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center gap-5">
        <img
          src={image}
          alt=""
          className="w-[460px] h-[320px] object-cover rounded shadow-lg"
        />

        <div className="w-full flex flex-col sm:flex-row justify-between gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 h-[80px] rounded shadow-sm flex flex-col items-center justify-center bg-white"
            >
              <p className="text-lg font-bold text-blue-700">{stat.number}</p>
              <p className="text-xs text-gray-600 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
