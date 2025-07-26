import React from 'react';

const GetInTouch = () => {
  return (
    <div className="w-full px-[5%] py-[3%] bg-white min-h-screen flex flex-col md:flex-row justify-between items-center gap-12">
      
      {/* Left Section */}
      <div className="md:w-1/2 space-y-8 flex flex-col justify-center animate-fade-in">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-3">
            Get in Touch with <br /> OrcasIQ
          </h1>
          <p className="text-gray-700 text-md mb-2">
            Fill out the form to get started. We'll reach out and guide you through your course options.
          </p>
          <p className="text-sm text-gray-600">Reach out — we typically respond within 24 hours.</p>
        </div>

        <div className="bg-[#08385f] text-white p-6 rounded-xl shadow-xl max-w-md">
          <h2 className="text-xl font-bold mb-2">Ready to Learn with OrcasIQ?</h2>
          <p className="text-sm mb-4">
            Discover programs tailored to students, professionals, and lifelong learners.
            Browse our full course list and find the right path for your future.
          </p>
          <button className="bg-white text-[#08385f] font-semibold px-4 py-2 rounded hover:bg-gray-200 transition">
            Back To Courses
          </button>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="md:w-1/2 w-full p-8 rounded-xl shadow-xl max-w-md animate-fade-in">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Form</h2>

        <form className="space-y-4">
          {[
            "Enter Your Name",
            "Enter Your Mail",
            "Enter Your Phone Number",
            "Select Your Course",
          ].map((placeholder, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={placeholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#08385f] transition duration-300"
            />
          ))}

          <button
            type="submit"
            className="w-full bg-[#08385f] text-white font-semibold px-4 py-3 rounded hover:bg-[#052c4a] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
