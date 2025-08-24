<<<<<<< HEAD
import { Users, Award, MessageCircle, Target } from "lucide-react";

export default function CoursesIntro() {
  return (
    <section className="bg-gradient-to-r from-[#0A3A5E] to-black h-auto flex items-center">
      <div className="w-full px-[6%] py-[2%] text-white flex flex-col justify-center gap-5">

        {/* Heading */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[28px] font-bold leading-snug">
            Explore Our Courses
          </h2>
          <p className="text-base sm:text-lg lg:text-[16px] text-white/90 font-medium">
            Develop skills that set you apart in today’s job market
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-[16px] text-white/80 text-justify leading-relaxed">
At Orcas IQ, we provide high-quality, career-focused training designed to prepare you for real-world challenges. Our programs blend practical projects, expert mentorship, and industry best practices to ensure you graduate with confidence and capability. We stay aligned with the latest industry trends so you’re always ahead of the curve. From the first lesson to job placement, we’re committed to guiding you every step of the way.
        </p>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-2">
          <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">
            <Users className="w-6 h-6 text-yellow-400" />
            <span className="text-sm sm:text-base font-medium">1:1 Mentorship</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">
            <Award className="w-6 h-6 text-green-400" />
            <span className="text-sm sm:text-base font-medium">Industry Certification</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">
            <MessageCircle className="w-6 h-6 text-blue-400" />
            <span className="text-sm sm:text-base font-medium">Soft Skills Training</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">
            <Target className="w-6 h-6 text-pink-400" />
            <span className="text-sm sm:text-base font-medium">Job Placement Support</span>
          </div>
        </div>

        {/* Scroll Prompt */}
        <p className="text-sm sm:text-base font-semibold mt-4 text-white/90">
          ⬇ Below courses are available ⬇
        </p>

      </div>
    </section>
  );
}
=======
import React from "react";
import { BsSoundwave } from "react-icons/bs";

const TrainerContent = () => {
  return (
    <div className="text-black text-left">
      <h1 className="text-3xl font-bold mb-2">
        Instructor Excellence at Orcas IQ
      </h1>

      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          At Orcas IQ, we offer a curated selection of high-demand, skill-driven
          programs that open doors to exciting career opportunities:
          <br />
          Data Analytics: Master data tools, visualization techniques, and
          business insights with real-time case studies.
          <br />
          Data Science: Learn Python, machine learning, and predictive modeling
          to solve complex data challenges.
          <br />
          Full Stack Development: Gain end-to-end coding skills to build modern,
          responsive web applications.
          <br />
          Digital Marketing: Get hands-on with SEO, social media, content
          strategy, and performance marketing. All our courses are designed to
          ensure learners gain not just knowledge, but also the confidence to
          apply it in real-world scenarios.
        </p>
      </div>
    </div>
  );
};

export default TrainerContent;
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
