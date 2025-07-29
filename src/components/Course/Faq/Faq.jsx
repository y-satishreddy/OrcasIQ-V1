import React, { useEffect, useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

// Reusable FAQ item
const FaqItem = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b border-gray-300 py-4 cursor-pointer"
      onClick={() => setOpen(!open)}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="600"
    >
      <div className="flex items-start justify-between">
        <p className="text-black text-sm md:text-base font-medium max-w-[90%]">
          {question}
        </p>
        <span className="text-[#0A3A5E] text-xl">
          {open ? <BsDash /> : <BsPlus />}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] mt-2" : "max-h-0"
        }`}
      >
        <p className="text-black text-sm">{answer}</p>
      </div>
    </div>
  );
};

// Main FAQ Section
const FAQSection = ({ data }) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Split data into two columns
  const mid = Math.ceil(data.length / 2);
  const leftColumn = data.slice(0, mid);
  const rightColumn = data.slice(mid);

  return (
    <div className="w-full bg-white px-[5%] py-[3%] overflow-hidden">
      <h2
        className="text-black text-2xl md:text-3xl font-bold mb-6"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Frequently Asked Questions
      </h2>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
        <div>
          {leftColumn.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </div>
        <div>
          {rightColumn.map((item, index) => (
            <FaqItem
              key={index + mid}
              question={item.question}
              answer={item.answer}
              index={index + mid}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
