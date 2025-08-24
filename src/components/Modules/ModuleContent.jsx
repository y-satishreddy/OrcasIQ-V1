import React from "react";
<<<<<<< HEAD
import { FaBolt, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";

const features = [
  {
    icon: <MdOutlineCategory size={26} className="text-[#0A3A5E]" />,
    title: "🎯 Focused Learning",
    desc: "One skill at a time.",
  },
  {
    icon: <FaBolt size={26} className="text-[#0A3A5E]" />,
    title: "⚡ Learn Your Way",
    desc: "Anytime, anywhere.",
  },
  {
    icon: <FaBriefcase size={26} className="text-[#0A3A5E]" />,
    title: "💼 Job-Ready",
    desc: "Skills employers want.",
  },
  {
    icon: <FaLaptopCode size={26} className="text-[#0A3A5E]" />,
    title: "💻 Real Projects",
    desc: "Hands-on practice.",
  },
];

const ModuleIntro = () => {
  return (
    <section className="w-full bg-[white] px-[5%] md:px-16">
      <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[28px] font-bold text-[#0A3A5E] mb-4 leading-snug">
            Build Skills, One Module at a Time
          </h2>
          <p className="text-gray-700 text-base sm:text-lg lg:text-[16px] leading-relaxed mb-6">
            Learn Java, SQL, Python, and web development through focused modules with
            hands-on projects, expert guidance, and real-world applications. Our flexible
            system helps students, professionals, and career switchers build job-ready
            skills at their own pace, mastering the tools top employers seek.
          </p>
          {/* View All Button */}
          <button className="mt-2 px-5 py-2 border border-[#0A3A5E] text-[#0A3A5E] rounded-lg hover:bg-[#0A3A5E]/5 transition text-sm sm:text-base lg:text-[14px]">
            View All Modules
          </button>

          {/* Desktop Only - Check Modules Text */}
          <h3 className="hidden md:flex mt-6 text-lg sm:text-xl lg:text-[18px] font-semibold text-[#0A3A5E] items-center gap-2">
            📚 Check the below modules
          </h3>
        </div>

        {/* Features Section */}
        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-xl p-5 flex flex-col items-start gap-2 hover:shadow-md transition"
              >
                <span className="bg-[#0A3A5E]/10 p-3 rounded-lg">
                  {feature.icon}
                </span>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg lg:text-[16px]">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-base sm:text-lg lg:text-[16px]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Only - Check Modules Text */}
          <h3 className="block md:hidden mt-6 text-lg sm:text-xl lg:text-[18px] font-semibold text-[#0A3A5E] flex items-center gap-2">
            📚 Check the below modules
          </h3>
        </div>
      </div>
    </section>
=======
// If using React Router

const ModuleIntro = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Build Skills, One Module at a Time
      </h2>
      <p className="text-gray-700 text-justify md:text-lg leading-relaxed mb-2">
        Our individual modules are designed to help you build strong, job-ready skills one
        technology at a time. Whether you want to master Java, SQL, Python, or web development,
        each course offers focused, practical learning with real-world application.
      </p>
      <p className="text-gray-700 text-justify md:text-lg leading-relaxed mb-2">
        With hands-on exercises, expert-curated content, and mentorship from industry professionals,
        you’ll gain the confidence to apply your knowledge in real projects. Our modular system
        helps you learn at your own pace — perfect for students, working professionals, and job
        seekers aiming to upskill or switch careers.
      </p>
      <p className="text-gray-700 text-justify md:text-lg leading-relaxed mb-4">
        From back-end development using Java and SQL, to front-end and full-stack web applications,
        every course is crafted to ensure you master the tools that top employers look for.
      </p>

     
    </div>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  );
};

export default ModuleIntro;
