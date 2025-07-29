import React, { useState, useEffect } from "react";

const Certificate = ({ data }) => {
  const [showImage, setShowImage] = useState(false);
  const { image, heading, description, bulletPoints } = data;

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showImage]);

  return (
    <div className="w-full px-[5%] py-[4%] bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side */}
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="relative w-full h-full md:min-h-[400px] bg-[#0A3A5E] rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={image}
              alt="Certificate Preview"
              className="w-full h-full object-cover"
            />
            <button
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm px-4 py-2 rounded hover:bg-opacity-90 transition"
              onClick={() => setShowImage(true)}
            >
              View
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center md:min-h-[400px]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {heading}
          </h2>
          <p
            className="text-base mb-4 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {description}
          </p>
          <ul
            className="space-y-3 text-base"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-lg">✅</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 overflow-hidden">
          <button
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={() => setShowImage(false)}
          >
            &times;
          </button>
          <img
            src={image}
            alt="Fullscreen"
            className="max-w-[90%] max-h-[90%] rounded-lg border-4 border-white"
          />
        </div>
      )}
    </div>
  );
};

export default Certificate;
