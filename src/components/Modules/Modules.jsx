import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaClock, FaStar } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModuleContent from "./ModuleContent";
import WebImage from "../../assets/Web Development.png";
import { Link } from "react-router-dom";

const modules = [
  {
    title: "Java",
    instructor: "John Smith",
    duration: "6 Weeks",
    rating: 4.8,
    desc: "Build a strong foundation in Java with real-world projects and hands-on coding.",
    price: "₹999",
    image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
  },
  {
    title: "SQL",
    instructor: "Emily Davis",
    duration: "4 Weeks",
    rating: 4.5,
    desc: "Master SQL and database management skills with practical applications.",
    price: "₹899",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
  },
  {
    title: "Python",
    instructor: "Michael Brown",
    duration: "8 Weeks",
    rating: 4.9,
    desc: "Learn Python from basics to advanced with coding challenges and projects.",
    price: "₹1099",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
  },
  {
    title: "Web Development",
    instructor: "Sarah Johnson",
    duration: "10 Weeks",
    rating: 4.7,
    desc: "Become a full-stack web developer with HTML, CSS, JS, and frameworks.",
    price: "₹1499",
    image: WebImage
  }
];

// Arrows with mobile positioning
const PrevArrow = ({ onClick, mobile }) => (
  <div
    className={`absolute ${mobile ? "left-3" : "left-2"} top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black text-white p-2 rounded-full`}
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick, mobile }) => (
  <div
    className={`absolute ${mobile ? "right-3" : "right-2"} top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black text-white p-2 rounded-full`}
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const Card = ({ module }) => (
  <div className="bg-white rounded shadow-lg border border-gray-200 overflow-hidden w-[270px] h-[340px] flex flex-col hover:shadow-xl transition-all duration-300">
    {/* Image */}
    <div className="w-full h-[130px] flex items-center justify-center bg-gray-50">
      <img
        src={module.image}
        alt={module.title}
        className="max-h-[90%] max-w-[90%] object-contain"
      />
    </div>

    {/* Content */}
    <div className="p-3 flex flex-col flex-grow">
      <h3 className="font-bold text-base leading-snug">{module.title}</h3>
      <p className="text-xs text-gray-700 mt-1">Instructor: {module.instructor}</p>
      <p className="text-xs text-gray-700 flex items-center gap-1 mt-1">
        <FaClock className="text-gray-500" /> {module.duration}
      </p>

      {/* Description */}
      <p className="text-xs text-gray-700 mt-1 line-clamp-2">{module.desc}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-1 text-xs">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar
            key={i}
            className={i < Math.floor(module.rating) ? "text-yellow-500" : "text-gray-300"}
          />
        ))}
        <span className="ml-1">({module.rating})</span>
      </div>

      {/* Price */}
      <p className="text-sm font-bold mt-1 text-[#0A3A5E]">Price: {module.price}</p>

      {/* Button */}
      <Link
        to="/module-contact-form"
        className="mt-auto w-full bg-[#0A3A5E] text-white py-2 rounded-md text-sm font-semibold active:scale-95 transform transition-transform duration-150 hover:bg-[#082b46] text-center block"
      >
        Enroll Now
      </Link>
    </div>
  </div>
);

const CardList = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const mobileSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    prevArrow: <PrevArrow mobile />,
    nextArrow: <NextArrow mobile />
  };

  return (
    <div className="py-[2%] bg-white">
      <ModuleContent />
      <div className="py-[2%] px-[5%] w-full">
        {isMobile ? (
          <Slider {...mobileSettings}>
            {modules.map((module, index) => (
              <div key={index} className="!flex !justify-center">
                <Card module={module} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {modules.map((module, index) => (
              <Card key={index} module={module} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;
