import React from "react";

const PricingSection = () => {
  return (
    <div className="px-[5%] py-[1%] bg-white text-gray-800">
      <div className="text-baseline mb-10">
        <h2 className="text-3xl font-bold mb-2">Data Science Course Pricing</h2>
        <p className="text-gray-600">Choose the best option that suits your learning style</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Self-Paced Plan */}
        <div className="bg-purple-50 rounded-xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">Self-Paced Plan</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Pre-recorded modules</li>
              <li>• Learn anytime, anywhere</li>
              <li>• Certificate of completion</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-2xl font-semibold mb-2">₹14,999<span className="text-sm font-normal">/-</span>
            </p>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Buy Now</button>
          </div>
        </div>

        {/* Live Sessions */}
        <div className="bg-blue-50 rounded-xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">Live Sessions</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Live instructor-led classes</li>
              <li>• Doubt-clearing sessions</li>
              <li>• Real-world projects & resume prep</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-2xl font-semibold mb-2">₹29,999<span className="text-sm font-normal">/-</span>
            </p>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Buy Now</button>
          </div>
        </div>

        {/* EMI & Flexibility */}
        <div className="bg-orange-50 rounded-xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">EMI & Flexibility</h3>
            <p className="text-gray-700 mb-4">EMI available on:</p>
            <ul className="text-gray-700 space-y-1">
              <li>• Self-Paced Plan</li>
              <li>• Live Sessions Plan</li>
            </ul>
          </div>
          <div className="mt-6">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
