import React, { useState } from "react";

const Certificate = ({ data }) => {
  const [showImage, setShowImage] = useState(false);

  const {
    image,
    heading,
    description,
    bulletPoints,
  } = data;

  return (
    <div className="min-h-[80vh] w-full px-[5%] md:px-[5%] py-[1%] flex flex-col md:flex-row gap-4">
      {/* Left: Image Section */}
      <div className="w-full md:w-1/2 bg-[#0A3A5E] relative flex items-center justify-center rounded-lg overflow-hidden">
        <img
          src={image}
          alt="Career Training"
          className="w-[100%] h-[250px] md:w-[400px] md:h-[350px] object-cover rounded"
        />
        <button
          className="btn text-white text-sm bg-black px-4 py-2 rounded absolute bottom-4 active:scale-95 transition-all duration-100 ease-in-out"
          onClick={() => setShowImage(true)}
        >
          View
        </button>
      </div>

      {/* Right: Text & List Section */}
      <div className="w-full md:w-1/2 bg-white rounded-2xl p-5 flex flex-col justify-between shadow-md">
        <div>
          <h2 className="font-semibold text-xl md:text-3xl mb-3">{heading}</h2>
          <p className="text-base md:text-lg pb-4">{description}</p>
          <ul className="space-y-3">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-sm md:text-base">
                <span>–</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {showImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50">
          <span
            onClick={() => setShowImage(false)}
            className="absolute top-5 right-6 text-white text-4xl cursor-pointer"
          >
            &times;
          </span>
          <img
            src={image}
            alt="Fullscreen"
            className="max-w-[90%] max-h-[90%] border-4 border-white rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Certificate;
