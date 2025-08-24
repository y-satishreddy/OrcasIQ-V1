import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DataAnalyticsImage from "../../assets/Course/DataAnalytics.jpg";
import DataScience from "../../assets/Course/DataSciecne.jpg";
import Devops from "../../assets/Course/Devops.jpg";
import DigitalMarketing from "../../assets/Course/DigitalMarketing.jpg";
import FullStack from "../../assets/Course/FullStack.png";
<<<<<<< HEAD
import { FaRegCalendarAlt } from "react-icons/fa";
import { path } from "framer-motion/client";

=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
const courses = [
  {
    id: 1,
    title: "Data Analytics",
    description:
      "Master tools like Excel, SQL, and Power BI to analyze data effectively. Learn how to uncover business trends, make data-driven decisions, and present insights with clarity.",
    image: DataAnalyticsImage,
<<<<<<< HEAD
    path:"/data-analytics", // Add path for routing
=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  },
  {
    id: 2,
    title: "Data Science",
    description:
      "Explore machine learning, Python, and real-world datasets. Build models, clean data, and visualize outcomes to discover insights and solve modern business problems.",
    image: DataScience,
<<<<<<< HEAD
    path: "/data-science",
=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  },
  {
    id: 3,
    title: "Java Full Stack",
    description:
      "Learn to build full-stack web apps using Java, Spring Boot, and React. Master frontend and backend technologies, deployment, and APIs for end-to-end development.",
    image: FullStack,
<<<<<<< HEAD
    path: "/full-stack-java",
=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Develop expertise in SEO, Google Ads, content marketing, and analytics. Plan and execute campaigns that grow brand visibility and generate business leads online.",
    image: DigitalMarketing,
<<<<<<< HEAD
    path: "/digital-marketing",
=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  },
  {
    id: 5,
    title: "DevOps",
    description:
      "Gain practical skills in CI/CD, Docker, Kubernetes, and cloud platforms. Automate deployments, monitor infrastructure, and improve software delivery pipelines.",
    image: Devops,
<<<<<<< HEAD
    path: "/devops",
  },
];

// Arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 z-10 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md hover:bg-gray-200 hidden sm:block"
=======
  },
];

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  >
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
<<<<<<< HEAD
    className="absolute right-2 z-10 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md hover:bg-gray-200 hidden sm:block"
=======
    className="absolute right-0 z-10 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  >
    <FaArrowRight />
  </button>
);

<<<<<<< HEAD
// Dots
const CustomDots = ({ dots }) => (
  <div className="flex justify-center items-center gap-2 mt-4">
=======
// Custom Dots
const CustomDots = ({ dots }) => (
  <div className="flex justify-center items-center mt-4 gap-2">
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
    {dots.map((dot, index) => (
      <div
        key={index}
        className={`h-[8px] rounded-full transition-all duration-300 ${
          dot.props.className.includes("slick-active")
            ? "bg-[#002f5f] w-6"
            : "bg-gray-400 w-2"
        }`}
      />
    ))}
  </div>
);

const CoursesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
<<<<<<< HEAD
    cssEase: "ease-in-out",
=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
    centerMode: true,
    centerPadding: "10%",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
<<<<<<< HEAD
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 10,
=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => <CustomDots dots={dots} />,
    customPaging: () => <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
<<<<<<< HEAD
          centerMode: false,
          centerPadding: "0px",
          arrows: false,
=======
          centerMode: true,
          centerPadding: "5%",
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
        },
      },
    ],
  };

  return (
<<<<<<< HEAD
    <div className="w-full relative bg-white">
      <Slider {...settings}>
        {courses.map((course) => (
          <div
            key={course.id}
            className="px-3 flex justify-center items-center h-full"
          >
            {/* Desktop View */}
            <div className="hidden sm:block w-full max-w-[300px] bg-white shadow-md">
=======
    <div className="w-full overflow-hidden relative">
      <Slider {...settings}>
        {courses.map((course) => (
          <div key={course.id} className="px-2 flex justify-center">
            <div className="w-[290px] bg-white shadow-md overflow-hidden">
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-44 object-cover bg-center"
              />
              <div className="p-4 text-left">
<<<<<<< HEAD
                <h3 className="text-2xl sm:text-3xl lg:text-[20px] font-bold mb-1">
                  {course.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-[15px] text-gray-600 mb-3 leading-relaxed">
                  {course.description}
                </p>
 <div className="flex items-center mb-3">
  <FaRegCalendarAlt className="w-4 h-4 text-[#002f5f] mr-2" />
  <span className="text-sm font-medium text-gray-700">6 Months Program</span>
</div>


                <div className="flex gap-2">
                  <Link
                    to="/contact-course-form"
                    className="bg-[#002f5f] text-white py-1 px-4 rounded hover:opacity-90 w-full text-sm text-center block"
                  >
                    Buy Now
                  </Link>
                  <Link
                    to={course.path}
                    className="bg-[#002f5f] text-white py-1 px-4 rounded hover:opacity-90 w-full text-sm text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className="block sm:hidden bg-white overflow-hidden shadow-xl transition-transform duration-300 flex flex-col w-full">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[20px] font-semibold mb-2 text-[#002f5f]">
                    {course.title}
                  </h3>
                  <p className="text-base sm:text-lg lg:text-[15px] text-gray-600 mb-4 line-clamp-4 leading-relaxed">
                    {course.description}
                  </p>
                </div>
                <div className="mt-auto">
<div className="flex items-center mb-3">
  <FaRegCalendarAlt className="w-4 h-4 text-[#002f5f] mr-2" />
  <span className="text-sm font-medium text-gray-700">6 Months Program</span>
</div>


                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact-course-form" className="flex-1">
                      <button className="w-full bg-[#002f5f] btn-primary">
                        Buy Now
                      </button>
                    </Link>
                    <Link to={course.path} className="flex-1">
                      <button className="w-full  btn-primary">
                        View Details
                      </button>
                    </Link>
                  </div>
=======
                <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {course.description}
                </p>
                <div className="flex items-center mb-3">
                  <span className="text-yellow-500 text-xl mr-2">
                    ⭐⭐⭐⭐⭐
                  </span>
                  <span className="font-semibold text-gray-700">(412)</span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-[#002f5f] text-white py-1 px-4 rounded hover:opacity-90 w-full text-sm">
                    Buy Now
                  </button>
                  <button className="bg-[#002f5f] text-white py-1 px-4 rounded hover:opacity-90 w-full text-sm">
                    View Details
                  </button>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoursesCarousel;
