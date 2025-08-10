import React from "react";
import { BsSoundwave } from "react-icons/bs";
import "./trainerContent.css"; // font and animation styles

const TrainerContent = () => {
  return (
    <div className="text-black text-left mt-4 slide-left-animation">
      <h1 className="heading mb-2">
        What Our Students Say About Our Mentors
      </h1>

      <div className="flex items-center gap-2 mb-4">
        <h2 className="subheading">Hear from Our Learners</h2>
        <BsSoundwave className="text-2xl text-gray-600" />
      </div>

      <div className="space-y-4 text-justify leading-relaxed">
        <p className="paragraph">
          The instructors at Orcas IQ made learning so simple and clear, even the toughest topics felt easy. They were always supportive and ready to help whenever we got stuck. The hands-on training and real-time projects really helped us understand how things work in the real world. Many of us came from non-technical backgrounds but still felt confident because of the way they taught. Their constant motivation kept us going, and today many of us are placed in good companies with great packages. It truly felt like learning from mentors who cared about our growth.
        </p>
      </div>
    </div>
  );
};

export default TrainerContent;
