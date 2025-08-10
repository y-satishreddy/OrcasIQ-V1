import React from "react";
import analytics from "../../assets/trainerContent.jpg";

export default function MentorSection() {
  return (
    <section className="bg-white md:py-[2%] py-[5%] px-[5%] font-['Roboto']">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 rounded items-center">

        {/* Right Image (first on mobile) */}
        <div className="order-1 lg:order-2 lg:w-full">
          <img
            src={analytics}
            alt="Mentorship"
            className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded lg:rounded-none shadow-lg"
          />
        </div>

        {/* Left Content (second on mobile) */}
        <div className="order-2 lg:order-1 lg:w-full">
          <h2
            className="font-['Poppins'] font-bold leading-tight text-black text-3xl sm:text-4xl lg:text-[28px] mb-4"
          >
            <span className="block sm:inline">What Our Students Say</span>{" "}
            <span className="block sm:inline">About Our Mentors</span>
          </h2>

          <p className="mt-4 text-[#333333] font-['Roboto'] text-base sm:text-lg lg:text-[16px] leading-relaxed">
            At Orcas IQ, our mentors make even the toughest topics simple and engaging. 
            With real-world projects, personalized guidance, and constant motivation, 
            they help students build the confidence to excel in their careers.
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
                <div className="bg-[#0A3A5E] text-white p-3 rounded-full text-lg sm:text-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-['Poppins'] font-semibold text-black text-base sm:text-lg lg:text-[16px]">
                    {item.title}
                  </h4>
                  <p className="font-['Roboto'] text-[#333333] text-base sm:text-lg lg:text-[14px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
