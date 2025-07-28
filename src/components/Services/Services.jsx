import React from "react";
import CorporateImg from "../../assets/Corporate-Training.jpg";
import CRTImg from "../../assets/Aptitude.jpg";
import CollegeImg from "../../assets/College-Training.jpg";

const ServicesSection = () => {
  return (
    <div className="px-[5%] py-[2%] bg-white text-gray-800">
      {/* Heading and Paragraphs */}
      <div className="mb-12 text-left">
        <h2 className="text-4xl font-bold mb-4">Explore Our Services</h2>
        <p className="mb-4 text-lg text-justify">
          At our organization, we are committed to fostering career excellence
          through world-class training services. Our programs are built with a
          clear focus on current industry trends, real-world challenges, and
          future-ready skill sets. We understand that every learner has unique
          goals, which is why our offerings are designed to be flexible,
          practical, and results-driven.
        </p>
        <p className="text-lg text-justify">
          Our Corporate Training services are tailored to help businesses
          upskill their workforce with customized modules that improve
          productivity, enhance leadership, and support digital transformation.
          These sessions are delivered by seasoned professionals with years of
          experience in real-world enterprise environments.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Corporate Training */}
        <div className="shadow-sm bg-white p-4">
          <img
            src={CorporateImg}
            alt="Corporate Training"
            className="w-full h-[400px] object-cover mb-4"
          />
          <div>
            <h3 className="text-xl font-bold mb-2 text-left">
              Corporate Training
            </h3>
            <a
              href="#"
              className="text-sm text-black underline text-left block"
            >
              More Details
            </a>
          </div>
        </div>

        {/* CRT and College Training */}
        <div className="grid grid-cols-1 gap-6">
          {/* CRT Training */}
          <div className="shadow-sm bg-white p-4">
            <img
              src={CRTImg}
              alt="CRT Training"
              className="w-full h-[135px] object-cover mb-4"
            />
            <div>
              <h3 className="text-xl font-bold mb-2 text-left">CRT Training</h3>
              <a
                href="#"
                className="text-sm text-black underline text-left block"
              >
                More Details
              </a>
            </div>
          </div>

          {/* College Training */}
          <div className="shadow-sm bg-white p-4">
            <img
              src={CollegeImg}
              alt="College Training"
              className="w-full h-[135px] object-cover mb-4"
            />
            <div>
              <h3 className="text-xl font-bold mb-2 text-left">
                College Training
              </h3>
              <a
                href="#"
                className="text-sm text-black underline text-left block"
              >
                More Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
