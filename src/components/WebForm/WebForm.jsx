import React from "react";
import FormImage from "../../assets/FormImage.jpg"; // Adjust the path if needed

const ContactForm = () => {
  return (
    <div className="w-full py-[5%] px-[1%] bg-white">
      <div className="flex flex-col md:flex-row justify-between gap-8 w-full max-w-[1100px] mx-auto">
        
        {/* Left Form Section */}
        <div className="w-full md:w-[600px] h-[500px] shadow bg-white p-6 flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome To Orcas IQ
          </h2>
          <p className="text-gray-600 text-lg">
            Fill the form to reach out to us
          </p>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="3"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-[500px] h-[500px] shadow-md">
          <img
            src={FormImage}
            alt="Classroom"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
