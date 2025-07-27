import React from "react";

const ContentWithImages = ({ data }) => {
  if (!data) return null;

  const { heading, description, items } = data;

  return (
    <>
      <div className="content-companies w-full px-[5%] py-[1%]">
        <h2 className="font-semibold text-3xl">{heading}</h2>
        <p className="text-base pb-2 text-justify pt-2">{description}</p>
      </div>

      <div className="flex flex-wrap gap-4 py-[1%] px-[5%] justify-between">
        {items?.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col p-2 w-full md:w-[45%]"
          >
            <h2 className="font-medium text-2xl p-2 text-center">{item.title}</h2>
            <img
              src={item.image}
              alt={item.title}
              className="h-[80%] w-[80%] object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ContentWithImages;
