import React from "react";

const PricingSection = ({ data }) => {
  return (
    <div className="w-full overflow-hidden px-4 md:px-[5%] py-6 bg-white">
      {/* Heading */}
      <div className="mb-10 text-left" data-aos="fade-left">
        <h2 className="text-black font-semibold text-2xl md:text-3xl">
          {data?.title}
        </h2>
        <p className="text-lg text-justify text-gray-600">{data?.subtitle}</p>
      </div>

      {/* Plans */}
      {Array.isArray(data?.plans) && data.plans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
