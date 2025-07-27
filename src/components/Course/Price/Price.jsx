import React from "react";

const PricingSection = ({ data }) => {
  return (
    <div className="px-[5%] py-[1%] bg-white text-gray-800">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2">{data?.title}</h2>
        <p className="text-gray-600">{data?.subtitle}</p>
      </div>

      {Array.isArray(data?.plans) && data.plans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md p-6 flex flex-col justify-between ${plan.bgColor || "bg-gray-100"}`}
            >
              <div>
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <p className="text-gray-700 mb-4">{plan.description}</p>
                <ul className="space-y-2 text-gray-700">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <p className="text-2xl font-semibold mb-2">
                  ₹{plan.price}
                  <span className="text-sm font-normal">/-</span>
                </p>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                  {plan.buttonText || "Enroll"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">No pricing data available.</p>
      )}
    </div>
  );
};

export default PricingSection;
