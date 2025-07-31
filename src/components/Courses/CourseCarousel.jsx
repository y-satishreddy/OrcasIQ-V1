import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DataAnalyticsImage from "../../assets/Course/DataAnalytics.jpg";
import DataScience from "../../assets/Course/DataSciecne.jpg";
import Devops from "../../assets/Course/Devops.jpg";
import DigitalMarketing from "../../assets/Course/DigitalMarketing.jpg";
import FullStack from "../../assets/Course/FullStack.png";
const courses = [
  {
    id: 1,
    title: "Data Analytics",
    description:
      "Master tools like Excel, SQL, and Power BI to analyze data effectively. Learn how to uncover business trends, make data-driven decisions, and present insights with clarity.",
    image: DataAnalyticsImage,
  },
  {
    id: 2,
    title: "Data Science",
    description:
      "Explore machine learning, Python, and real-world datasets. Build models, clean data, and visualize outcomes to discover insights and solve modern business problems.",
    image: DataScience,
  },
  {
    id: 3,
    title: "Java Full Stack",
    description:
      "Learn to build full-stack web apps using Java, Spring Boot, and React. Master frontend and backend technologies, deployment, and APIs for end-to-end development.",
    image: FullStack,
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Develop expertise in SEO, Google Ads, content marketing, and analytics. Plan and execute campaigns that grow brand visibility and generate business leads online.",
    image: DigitalMarketing,
  },
  {
    id: 5,
    title: "DevOps",
    description:
      "Gain practical skills in CI/CD, Docker, Kubernetes, and cloud platforms. Automate deployments, monitor infrastructure, and improve software delivery pipelines.",
    image: Devops,
  },
];

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
  >
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
  >
    <FaArrowRight />
  </button>
);

// Custom Dots
const CustomDots = ({ dots }) => (
  <div className="flex justify-center items-center mt-4 gap-2">
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
    centerMode: true,
    centerPadding: "10%",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
          centerMode: true,
          centerPadding: "5%",
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden relative">
      <Slider {...settings}>
        {courses.map((course) => (
          <div key={course.id} className="px-2 flex justify-center">
            <div className="w-[290px] bg-white shadow-md overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-44 object-cover bg-center"
              />
              <div className="p-4 text-left">
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
