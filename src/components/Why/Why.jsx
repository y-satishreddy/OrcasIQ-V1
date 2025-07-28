import React, { useState } from "react";
import Girl from "../../assets/Science.jpg";
import "./why.css";
const AboutOrcasIQ = () => {
  const [showMore, setShowMore] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleLearnMore = () => {
    setAnimateOut(true); // trigger out animation
    setTimeout(() => {
      setShowMore(true);
      setAnimateOut(false);
    }, 600); // wait for out animation to finish
  };

  const handleBack = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShowMore(false);
      setAnimateOut(false);
    }, 600);
  };

  return (
    <div className="h-[70vh] flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-5xl">
        {/* First View */}
        {!showMore && (
          <div className={`${animateOut ? "slide-fade-out" : "slide-fade-in"}`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={Girl}
                  alt="Student"
                  className="w-full max-w-[350px] rounded shadow-md object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 text-left">
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
              </div>
            </div>
          </div>
        )}

        {/* About Section View */}
        {showMore && (
          <div className={`${animateOut ? "slide-fade-out" : "slide-fade-in"}`}>
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-4">About OrcasIQ</h2>
              <p className="text-gray-800 text-lg mb-6">
                OrcasIQ is a next-generation digital learning platform designed
                to empower learners through personalized, expert-led
                instruction. Whether you're a student looking to enhance your
                skills, or a professional aiming for career growth, our
                practical training programs are crafted to deliver real-world
                outcomes. With a focus on innovation, accessibility, and quality
                education, OrcasIQ is committed to shaping the future of
                learning by making it interactive, affordable, and globally
                relevant.
              </p>
              <button
                onClick={handleBack}
                className="bg-[#0A3A5E] text-white px-5 py-2 rounded hover:bg-[#082c48] transition"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutOrcasIQ;
