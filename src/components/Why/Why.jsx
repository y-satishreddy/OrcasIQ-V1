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
<<<<<<< HEAD
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
=======
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
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
            />
          </div>
        )}

        {/* Content Section */}
        <div
<<<<<<< HEAD
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
=======
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
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
                  learning journey. Here's what sets us apart:
                </p>
                <button
                  onClick={handleLearnMore}
<<<<<<< HEAD
                  className="bg-[#0A3A5E] btn-primary"
=======
                  className="bg-[#0A3A5E] text-white px-5 py-2 rounded hover:bg-[#082c48] transition"
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
                >
                  Learn More
                </button>
              </>
            ) : (
              <>
<<<<<<< HEAD
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
=======
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
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
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
