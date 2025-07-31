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
                <h2 className="text-3xl font-bold mb-2">
                  Why Choose Orcas IQ?
                </h2>
                <h3 className="text-xl font-medium mb-4">
                  Revolutionizing Digital Learning
                </h3>
                <p className="text-gray-700 mb-6">
                  Choosing Orcas IQ means investing in a smarter, career-focused
                  learning journey. Here's what sets us apart:
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

                <p className="text-gray-800 text-lg mb-6">
                  Expert-Curated Curriculum: Designed by industry practitioners,
                  our content reflects the latest trends and real-world needs.
                  <br />
                  Hands-On Training: Every course is project-driven, ensuring
                  you gain practical exposure and confidence to solve real
                  problems.
                  <br />
                  Personalized Learning Experience: Whether you're starting out
                  or already working, our flexible structure fits your goals and
                  schedule.
                  <br />
                  Affordable Excellence: We make high-quality learning
                  accessible without compromising on depth or delivery.
                  <br />
                  Ongoing Support & Mentorship: Our learners receive continuous
                  guidance, feedback, and career support throughout their
                  journey.
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
