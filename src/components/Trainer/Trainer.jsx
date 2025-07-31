import React from "react";
import Card from "../Trainer/TrainerCard/TrainerCard";
import AnalyticsImage2 from "../../assets/Analytics.jpg";
import TrainerContent from "./TrainerContent/TrainerContent";

const trainers = [
  {
    name: "Alice Johnson",
    title: "Senior Data Scientist",
    description:
      "Expert in machine learning and AI with 8+ years of experience.",
    profileLink: "Trained over 800+ students",
  },
  {
    name: "Mark Thompson",
    title: "Cloud DevOps Engineer",
    description: "Certified AWS DevOps pro with a focus on CI/CD pipelines.",
    profileLink: "Trained over 900+ students",
  },
  {
    name: "Priya Verma",
    title: "Full Stack Developer",
    description:
      "Specializes in MERN stack and scalable frontend architecture.",
    profileLink: "Trained over 950+ students",
  },
];

const TrainersSection = () => {
  return (
    <div className="pl-[5%] pr-[5%] py-[1%]">
      <TrainerContent />
      <br />

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-between">
        {trainers.map((trainer, index) => (
          <Card key={index} {...trainer} />
        ))}
      </div>
    </div>
  );
};

export default TrainersSection;
