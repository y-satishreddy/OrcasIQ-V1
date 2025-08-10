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
    <div className="w-full px-[5%] py-[5%] md:py-[2%] bg-white flex justify-center items-center font-['Roboto']">
      <div
        className={`flex flex-col md:flex-row ${
          showMore ? "gap-10" : "gap-0"
        } w-full items-center`}
      >
        {/* Image Section */}
        {!showMore && (
          <div className="w-full md:w-1/2 h-[250px] md:h-full flex items-center mb-4 md:mb-0">
            <img
              src={Girl}
              alt="Student"
              className="h-full w-full object-cover rounded md:rounded-[0] shadow-md"
            />
          </div>
        )}

        {/* Content Section */}
        <div
          className={`${
            showMore ? "w-full" : "w-full md:w-1/2"
          } ${animateOut ? "slide-fade-out" : "slide-fade-in"} flex items-center justify-center`}
        >
          <div className="text-left md:px-[5%]">
            {!showMore ? (
              <>
                <h2 className="font-['Poppins'] font-bold text-black text-3xl sm:text-4xl lg:text-[28px] mb-2 leading-tight">
                  About Us
                </h2>
                <h3 className="font-['Poppins'] font-medium text-black text-lg sm:text-xl lg:text-[20px] mb-4 leading-snug">
                  Revolutionizing{" "}
                  <span className="text-[#0A3A5E] font-semibold">Digital Learning</span>
                </h3>
                <p className="font-['Roboto'] text-[#333333] text-base sm:text-lg lg:text-[16px] mb-6 leading-relaxed">
                  Choosing{" "}
                  <span className="text-[#0A3A5E] font-semibold">Orcas IQ</span> means investing in a smarter, career-focused
                  learning journey. Here's what sets us apart:
                </p>
                <button
                  onClick={handleLearnMore}
                  className="bg-[#0A3A5E] btn-primary"
                >
                  Learn More
                </button>
              </>
            ) : (
              <>
                <h2 className="font-['Poppins'] font-bold text-black text-3xl sm:text-4xl lg:text-[28px] mb-4 leading-tight">
                  About{" "}
                  <span className="text-[#0A3A5E] font-semibold">OrcasIQ</span>
                </h2>
                <p className="font-['Roboto'] text-[#333333] text-base sm:text-lg lg:text-[16px] leading-relaxed mb-6 text-justify">
                  <span className="text-[#0A3A5E] font-semibold">Orcas IQ</span> is a next-generation edtech organization committed to delivering accessible, outcome-oriented training across high-growth domains such as Data Analytics, Data Science, Full Stack Development, and Digital Marketing. With a mission to bridge the skill gap between academic learning and industry expectations, we empower learners—both freshers and working professionals—with real-world expertise through expert-led sessions and hands-on project work.<br /><br />
                  Driven by the motto{" "}
                  <span className="text-[#0A3A5E] font-semibold">"Learn. Apply. Succeed."</span>, our programs are built to ensure not just conceptual clarity but also practical application and career readiness. Our structured curriculum, designed in collaboration with industry practitioners, emphasizes employability, problem-solving, and upskilling through continuous mentorship and guidance.<br/><br/>
                  Since inception,{" "}
                  <span className="text-[#0A3A5E] font-semibold">Orcas IQ</span> has successfully trained and transformed hundreds of learners, many of whom have gone on to secure competitive roles in reputed organizations. Our growing portfolio of positive student outcomes and industry partnerships stands as a testament to our quality, commitment, and vision for accessible and impactful education.
                </p>
                <button
                  onClick={handleBack}
                  className="bg-[#0A3A5E] btn-primary"
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
