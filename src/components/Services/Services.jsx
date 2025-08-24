import React from "react";
<<<<<<< HEAD
import {
  Briefcase,
  Target,
  GraduationCap,
  ArrowRight,
  Star,
  CheckCircle,
  Award
} from "lucide-react";
import CorporateImg from "../../assets/Corporate-Training.jpg";
import ExcellenceImage from "../../assets/College-Training.jpg";

const services = [
  {
    title: "Corporate Training",
    icon: <Briefcase className="w-6 h-6 text-blue-500" />,
    desc: "Customized workforce training aligned to industry trends."
  },
  {
    title: "CRT Programs",
    icon: <Target className="w-6 h-6 text-green-500" />,
    desc: "Aptitude, technical & communication skill preparation."
  },
  {
    title: "College Partnerships",
    icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
    desc: "Bridging academics with career-ready training."
  }
];

const ServicesSection = () => {
  return (
    <section
      className="relative h-auto md:h-[100vh] px-[5%] py-8 flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${CorporateImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-16">
        
        {/* Left Content */}
        <div className="max-w-3xl text-white flex flex-col justify-center h-full">
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-yellow-400 w-8 h-8" />
            <span className="uppercase tracking-widest text-sm text-gray-300 font-roboto">
              Our Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-poppins">
            Explore Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-base md:text-[16px] text-gray-200 mb-8 max-w-2xl font-roboto">
            At Orcas IQ, we deliver high-impact, industry-aligned training solutions
            that empower individuals and organizations with future-ready skills.
          </p>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition"
              >
                <div className="bg-white/20 p-3 rounded-lg">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-poppins">{service.title}</h3>
                  <p className="text-gray-300 text-base md:text-[16px] font-roboto">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center w-48 h-12 bg-[#0A3A5E] rounded-lg shadow-lg font-semibold transition-transform transform hover:scale-105 hover:bg-[rgb(11,66,108)] font-poppins"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Right Visual */}
        <div className="hidden lg:flex flex-col items-center justify-center relative bg-white/10 p-8 rounded-2xl backdrop-blur-sm shadow-xl border border-white/20">
          {/* Image */}
          <img
            src={ExcellenceImage}
            alt="Training Excellence"
            className="w-64 h-64 object-cover rounded-xl border border-white/20"
          />

          {/* Floating Icon Overlay */}
          <div className="absolute -bottom-10 bg-[#0A3A5E] p-4 rounded-full shadow-lg">
            <Award className="w-10 h-10 text-yellow-400" />
          </div>

          <p className="text-white text-center text-lg font-semibold mt-12 font-poppins">
            Excellence in Training
          </p>
        </div>
      </div>
    </section>
=======
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
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  );
};

export default ServicesSection;
