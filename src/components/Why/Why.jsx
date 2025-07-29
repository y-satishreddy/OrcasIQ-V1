import React, { useState } from "react";
import Girl from "../../assets/Science.jpg";
import "./why.css"; // Animation classes

const AboutOrcasIQ = () => {
  const [showMore, setShowMore] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleLearnMore = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShowMore(true);
      setAnimateOut(false);
    }, 600);
  };

  const handleBack = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShowMore(false);
      setAnimateOut(false);
    }, 600);
  };

  return (
    <div
      className={`w-full px-[5%] py-[1%] bg-white flex justify-center ${
        showMore ? "min-h-[70vh]" : "h-[70vh] items-center"
      }`}
    >
      <div
        className={`flex ${
          showMore ? "flex-col md:flex-row gap-10" : "flex-row gap-x-8 h-full"
        } w-full`}
      >
        {/* Show image only when not in 'showMore' state */}
        {!showMore && (
          <div className="w-1/2 h-full flex items-center">
            <img
              src={Girl}
              alt="Student"
              className="h-full w-full object-cover rounded shadow-md"
            />
          </div>
        )}

        {/* Content Section */}
        <div
          className={`${showMore ? "w-full" : "w-1/2"} ${
            animateOut ? "slide-fade-out" : "slide-fade-in"
          } flex items-center justify-center`}
        >
          <div className="text-left">
            {!showMore ? (
              <>
                <h2 className="text-3xl font-bold mb-2">WHY ORCAS IQ</h2>
                <h3 className="text-xl font-medium mb-4">
                  Revolutionizing Digital Learning
                </h3>
                <p className="text-gray-700 mb-6">
                  OrcasIQ offers expert-led, practical training to build
                  real-world skills and career confidence.
                </p>
                <button
                  onClick={handleLearnMore}
                  className="bg-[#0A3A5E] text-white px-5 py-2 rounded hover:bg-[#082c48] transition"
                >
                  Learn More
                </button>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-4">About OrcasIQ</h2>
                <p className="text-gray-800 text-lg mb-4">
                  OrcasIQ is a next-generation digital learning platform
                  designed to empower learners through personalized, expert-led
                  instruction. Whether you're a student looking to enhance your
                  skills, or a professional aiming for career growth, our
                  practical training programs are crafted to deliver real-world
                  outcomes.
                </p>
                <p className="text-gray-800 text-lg mb-4">
                  With a focus on innovation, accessibility, and quality
                  education, OrcasIQ is committed to shaping the future of
                  learning by making it interactive, affordable, and globally
                  relevant.
                </p>
                <p className="text-gray-800 text-lg mb-6">
                  We are continuously adding more modules, features, and
                  advanced training paths to meet the evolving demands of
                  learners across the globe. Our mission is to bridge the gap
                  between education and employability with actionable, practical
                  learning.
                </p>
                <button
                  onClick={handleBack}
                  className="bg-[#0A3A5E] text-white px-5 py-2 rounded hover:bg-[#082c48] transition"
                >
                  Back
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOrcasIQ;
