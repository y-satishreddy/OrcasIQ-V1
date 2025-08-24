import React from "react";
<<<<<<< HEAD
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaLaptopCode,
  FaChartLine,
  FaBullhorn,
} from "react-icons/fa";

const EventCard = ({
  icon,
  bgGradient,
  title,
  description,
  isPrimary,
  date,
  location,
  tagline,
  extraPoints = [],
  customHeight,
}) => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="group rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between"
      style={{
        background: bgGradient,
        minHeight: customHeight || "280px",
      }}
    >
      {/* Icon & Date */}
      <div className="flex items-center mb-3">
        <div className="p-2.5 bg-white rounded-full shadow text-[#0A3A5E] mr-3">
          {icon}
        </div>
        <span className="flex items-center text-xs font-medium text-white">
          <FaCalendarAlt className="mr-1" /> {date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-1 text-white leading-snug">{title}</h3>

      {/* Tagline */}
      <p className="text-base sm:text-lg lg:text-[14px] italic text-gray-200 mb-2">
        {tagline}
      </p>

      {/* Description */}
      <p className="text-base sm:text-lg lg:text-[14px] text-gray-100 mb-3">
        {description}
      </p>

      {/* Extra Points */}
      {extraPoints.length > 0 && (
        <ul className="list-disc list-inside space-y-0.5 text-base sm:text-lg lg:text-[14px] text-gray-100 mb-3">
          {extraPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}

      {/* Location */}
      <div className="flex items-center text-base sm:text-lg lg:text-[16px] font-medium text-gray-200 mb-3">
        <FaMapMarkerAlt className="mr-1" /> {location}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleScrollToContact}
          className={`px-4 py-2 rounded-md text-xs font-semibold shadow-md transform transition-all duration-300 hover:scale-105 ${
            isPrimary
              ? "bg-[#0A3A5E] text-white hover:bg-black"
              : "bg-black text-white hover:bg-[#0A3A5E]"
          }`}
        >
          {isPrimary ? "Join Now" : "Register"}
        </button>

        {isPrimary && (
          <button
            onClick={handleScrollToContact}
            className="flex items-center text-white font-semibold text-xs transform transition-all duration-300 hover:scale-105 hover:underline"
          >
            View Details <FaArrowRight className="ml-1" />
          </button>
        )}
      </div>
=======

const EventCard = ({
  bgColor,
  textColor,
  title,
  description,
  height,
  isPrimary,
}) => {
  return (
    <div
      className={`rounded-2xl px-[5%] py-[4%] shadow-lg flex flex-col justify-between w-full`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        height: height,
      }}
    >
      {/* Top section */}
      <div className="flex justify-between items-center text-sm font-medium mb-2">
        <span>Coming Soon</span>
        <button
          className={`text-sm px-4 py-2 rounded font-semibold backdrop-blur-sm transition-all`}
          style={{
            backgroundColor: isPrimary
              ? "rgba(255,255,255,0.85)"
              : "rgba(10, 58, 94, 0.85)",
            color: isPrimary ? "#333" : "#fff",
          }}
        >
          Register Now
        </button>
      </div>

      {/* Title */}
      <h3 className={`text-xl font-bold`}>{title}</h3>

      {/* Description */}
      <p className="text-sm mt-2">{description}</p>

      {isPrimary && (
        <a href="#" className="mt-2 text-sm underline font-semibold">
          Coming Soon
        </a>
      )}
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
    </div>
  );
};

const LiveEventsSection = () => {
  return (
<<<<<<< HEAD
    <section className="w-full py-12 px-[5%] bg-white text-black">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-[28px] font-extrabold mb-3 text-[#0A3A5E] tracking-tight">
          Our Live Events
        </h2>
        <div className="w-16 h-1 bg-black rounded mb-4"></div>
        <p className="text-base sm:text-lg lg:text-[16px] text-gray-600 leading-relaxed text-justify">
          Our live events bring together industry experts and passionate learners
          to explore the latest trends and skills. Each session is designed to
          deliver practical knowledge, inspiration, and real-time interaction.
          Join us to grow, connect, and take your learning experience to the
          next level.
        </p>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <EventCard
          icon={<FaChartLine />}
          bgGradient="linear-gradient(135deg, #0A3A5E, #092b45)"
          title="Live Data Analytics Masterclass"
          tagline="Learn to tell stories with data"
          description="Understand the basics of Excel, SQL, and dashboards with real-time projects."
          date="Coming Soon"
          location="Online | Hyderabad"
          customHeight="320px"
        />

        <EventCard
          icon={<FaLaptopCode />}
          bgGradient="linear-gradient(135deg, #0A3A5E, #000000)"
          title="Data Science Masterclass"
          tagline="Build models. Solve problems."
          description="Learn Python, analyze data, and create predictive ML models."
          date="Coming Soon"
          location="Online | Hyderabad"
          isPrimary={true}
          customHeight="360px"
          extraPoints={[
            "Python + Pandas live hands-on coding",
            "Build your first ML model",
            "Q&A with industry mentors",
            "Free workshop certificate",
          ]}
        />

        <EventCard
          icon={<FaBullhorn />}
          bgGradient="linear-gradient(135deg, #000000, #0A3A5E)"
          title="Digital Marketing"
          tagline="Turn clicks into conversions"
          description="Learn SEO, Google Ads, and Social Media Strategies to grow brands."
          date="Coming Soon"
          location="Online | Hyderabad"
          customHeight="300px"
        />
      </div>
    </section>
=======
    <div className="w-full px-[5%] py-[1%] bg-white">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Live Events</h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          Our live events are designed to inspire, engage, and educate learners
          through real-time interactions with industry experts. From workshops
          and webinars to bootcamps and Q&A sessions, each event delivers
          practical insights and hands-on exposure. Participants gain the
          opportunity to clarify doubts, explore real-world applications, and
          connect with peers and mentors. These events add immense value to the
          learning journey, making concepts clearer and career goals more
          achievable.
        </p>
      </div>

      {/* Horizontal Cards */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Card 1 */}
        <div className="w-full md:w-1/3">
          <EventCard
            bgColor="#0A3A5E"
            textColor="white"
            title="AI & ML Event"
            description="Discover the future of virtual education with top speakers from around the world."
            height="250px"
          />
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3">
          <EventCard
            bgColor="#FF6B41"
            textColor="white"
            title="Java Full Stack Development By OrcasIQ – Join Now"
            description="Discover the future of virtual education with top speakers from around the world."
            height="300px"
            isPrimary={true}
          />
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3">
          <EventCard
            bgColor="#ffffff"
            textColor="#0A3A5E"
            title="Frontend Mastery Bootcamp"
            description="Hands-on sessions to master React, Tailwind, and advanced frontend skills with mentors."
            height="250px"
          />
        </div>
      </div>
    </div>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  );
};

export default LiveEventsSection;
