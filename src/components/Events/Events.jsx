import React from "react";

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
    </div>
  );
};

const LiveEventsSection = () => {
  return (
    <div className="w-full px-[5%] py-[1%] bg-white">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Live Events</h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          Our live events bring together industry experts and passionate
          learners to explore the latest trends and skills. Each session is
          designed to deliver practical knowledge, inspiration, and real-time
          interaction. Join us to grow, connect, and take your learning
          experience to the next level. Our live events bring together industry
          experts and passionate learners to explore the latest trends and
          skills. Each session is designed to deliver practical knowledge,
          inspiration, and real-time interaction. Join us to grow, connect, and
          take your learning experience to the next level.
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
  );
};

export default LiveEventsSection;
