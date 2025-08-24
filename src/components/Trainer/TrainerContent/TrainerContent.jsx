import React from "react";
import { BsSoundwave } from "react-icons/bs";
<<<<<<< HEAD
import "./trainerContent.css"; // font and animation styles

const TrainerContent = () => {
  return (
    <div className="text-black text-left mt-4 slide-left-animation">
      <h1 className="heading mb-2">
        What Our Students Say About Our Mentors
      </h1>

      <div className="flex items-center gap-2 mb-4">
        <h2 className="subheading">Hear from Our Learners</h2>
=======

const TrainerContent = () => {
  return (
    <div className="text-black text-left">
      <h1 className="text-3xl font-bold mb-2">
        Instructor Excellence at Orcas IQ
      </h1>

      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Hear from Our Learners</h2>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
        <BsSoundwave className="text-2xl text-gray-600" />
      </div>

      <div className="space-y-4 text-justify leading-relaxed">
<<<<<<< HEAD
        <p className="paragraph">
          The instructors at Orcas IQ made learning so simple and clear, even the toughest topics felt easy. They were always supportive and ready to help whenever we got stuck. The hands-on training and real-time projects really helped us understand how things work in the real world. Many of us came from non-technical backgrounds but still felt confident because of the way they taught. Their constant motivation kept us going, and today many of us are placed in good companies with great packages. It truly felt like learning from mentors who cared about our growth.
=======
        <p>
          OrcasIQ has completely reshaped the way I learn and apply new
          knowledge. The instructors are not only highly qualified, but they
          also have a deep understanding of how to make learning effective and
          enjoyable. Every lesson is thoughtfully structured, filled with
          real-life case studies, and focused on hands-on application. Even as a
          working professional, I found the pace manageable and the content
          incredibly relevant to industry standards.
        </p>
        <p>
          What really stood out was the level of support from the teaching
          staff. They were always available to clarify doubts, provide feedback,
          and encourage further exploration. I went from being unsure about my
          data and tech skills to feeling confident enough to apply them in
          real-world projects. Thanks to the expert guidance at OrcasIQ, I now
          feel empowered to take on greater responsibilities at work and
          continue my learning journey with clarity and motivation.
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
        </p>
      </div>
    </div>
  );
};

export default TrainerContent;
