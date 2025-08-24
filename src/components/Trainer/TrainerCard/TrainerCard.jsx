import React from "react";
<<<<<<< HEAD
import analytics from "../../../assets/trainerContent.jpg";

export default function MentorSection() {
  return (
    <section className="bg-white py-[2%] px-[5%]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="lg:w-full">
          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-[#0A3A5E]">What Our Students Say</span>{" "}
            <span className="text-[#FF6600]">About Our Mentors</span>
          </h2>
          <p className="text-gray-600 mt-4">
            At Orcas IQ, our mentors make even the toughest topics simple and 
            engaging. With real-world projects, personalized guidance, and 
            constant motivation, they help students build the confidence to 
            excel in their careers.
          </p>

          <div className="mt-8 space-y-6">
            {[
              {
                icon: "💼",
                title: "Industry Experts",
                desc: "Learn from professionals with 6–10+ years of real-world experience."
              },
              {
                icon: "🛠",
                title: "Practical Skills",
                desc: "Hands-on training in AWS, MERN, CI/CD, and more industry tools."
              },
              {
                icon: "🎓",
                title: "Proven Results",
                desc: "800+ students trained and placed in top companies with great packages."
              }
            
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-[#0A3A5E] text-white p-3 rounded-full text-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A3A5E]">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-full">
          <img
            src={analytics}
            alt="Mentorship"
            className="w-full h-[400px] object-cover lg:rounded-none rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
=======
import Trainer from "../../../assets/Analytics.jpg";
import "./trainerCard.css";

const Card = ({ name, title, description, profileLink }) => {
  return (
    <div className="h-auto w-full sm:w-[48%] lg:w-[30%] p-4 box-border shadow-md rounded-lg bg-white flex flex-col justify-between gap-2">
      <img
        src={Trainer}
        alt={name}
        className="h-[200px] w-full object-cover rounded"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-[16px] font-medium text-gray-700">{title}</p>
      <p className="text-[14px] font-light text-gray-600">{description}</p>
      <p className="text-[14px] font-light text-gray-600">{profileLink}</p>
    </div>
  );
};

export default Card;
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
