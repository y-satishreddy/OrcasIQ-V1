import React from "react";
import ModuleContent from "./ModuleContent"; // Importing the ModuleContent component 
const modules = [
  {
    title: "Java",
    tech: "Back End Technology – JAVA",
    desc: "Build a solid foundation in object-oriented programming with hands-on Java projects.",
    price: "₹999",
    image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    title: "SQL",
    tech: "Back End Technology – SQL",
    desc: "Master structured query language and manage databases efficiently with real-world projects.",
    price: "₹899",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  },
  {
    title: "Python",
    tech: "Back End Technology – Python",
    desc: "Learn Python programming from basics to advanced with hands-on coding challenges.",
    price: "₹1099",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    title: "Web Development",
    tech: "Full Stack – Web Development",
    desc: "Build dynamic and responsive websites using HTML, CSS, JavaScript, and modern frameworks.",
    price: "₹1499",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Web_Development_Icon.png",
  },
];

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-[1%] px-[5%] w-full">
      <ModuleContent/>
      {modules.map((module, index) => (
          <div
    key={index}
    className="bg-white shadow-lg w-[250px] sm:w-[48%] lg:w-[23%] p-4 flex flex-col text-left"
  >

          <img
            src={module.image}
            alt={module.title}
            className="h-20 mb-3 self-center"
          />
          <div className="bg-[#002e5b] text-white px-3 py-1 rounded mb-3 text-sm font-semibold w-fit">
            {module.tech}
          </div>
          <p className="text-gray-700 text-sm mb-2">{module.desc}</p>
         
          <div className="flex justify-between mt-6">
            <button className="bg-[#002e5b] text-white px-4 py-2 rounded hover:bg-[#001d3a]">
              Buy Now
            </button>
            <button className="bg-gray-100 text-[#002e5b] px-4 py-2 rounded hover:bg-gray-200">
              View All
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
