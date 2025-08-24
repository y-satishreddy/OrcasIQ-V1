import React from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const PricingSection = ({ data }) => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/contact-course-form");
  };

  return (
    <div className="w-full px-[5%] bg-white">
      {/* Heading */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {data?.title}
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl">{data?.subtitle}</p>
=======

const PricingSection = ({ data }) => {
  return (
    <div className="w-full overflow-hidden px-4 md:px-[5%] py-6 bg-white">
      {/* Heading */}
      <div className="mb-10 text-left" data-aos="fade-left">
        <h2 className="text-black font-semibold text-2xl md:text-3xl">
          {data?.title}
        </h2>
        <p className="text-lg text-justify text-gray-600">{data?.subtitle}</p>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
      </div>

      {/* Plans */}
      {Array.isArray(data?.plans) && data.plans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
          {data.plans.map((plan, index) => {
            // Handle price + discount
            const priceParts = plan.price.split("/");
            const hasDiscount = priceParts.length > 1;

            return (
              <div
                key={index}
                className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 text-sm text-gray-800">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price + Button */}
                <div className="mt-6 text-center">
                  {hasDiscount ? (
                    <div>
                      <span className="block text-gray-500 line-through text-sm">
                        ₹{priceParts[0].trim()}
                      </span>
                      <span className="text-2xl font-bold text-green-600">
                        ₹{priceParts[1].trim()}
                      </span>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{plan.price}
                    </span>
                  )}

                  <button
                    onClick={handleEnrollClick}
                    className="w-full mt-4 py-2.5 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 active:scale-95 transition-transform duration-150"
                  >
                    {plan.buttonText || "Enroll"}
                  </button>
                </div>
              </div>
            );
          })}
=======
          {data.plans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 100}
              className="w-full h-full flex flex-col justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3">{plan.title}</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {plan.description}
                </p>
                <ul className="pl-5 list-disc space-y-2 text-gray-800 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <p className="text-2xl font-bold text-gray-900 mb-3">
                  ₹{plan.price}
                  <span className="text-sm font-normal">/-</span>
                </p>
                <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                  {plan.buttonText || "Enroll"}
                </button>
              </div>
            </div>
          ))}
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
        </div>
      ) : (
        <p className="text-center text-red-500 mt-10">
          No pricing data available.
        </p>
      )}
    </div>
  );
};

export default PricingSection;
