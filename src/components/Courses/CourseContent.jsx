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
