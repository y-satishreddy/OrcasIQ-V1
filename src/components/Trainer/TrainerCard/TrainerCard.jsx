import React from "react";
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
