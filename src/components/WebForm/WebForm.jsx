<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import FormImage from "../../assets/FormImage.jpg"; // Adjust path as needed

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://your-api-endpoint.com/form", formData);
      console.log("Form submitted successfully:", res.data);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("There was an error submitting the form.");
    }
  };

=======
import React from "react";
import FormImage from "../../assets/FormImage.jpg"; // Adjust path as needed

const ContactForm = () => {
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  return (
    <div className="w-full px-[5%] py-[1%] bg-white">
      <div className="flex flex-col md:flex-row justify-between gap-8 w-full max-w-[100%] mx-auto">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 h-[500px] shadow bg-white p-6 flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome To Orcas IQ
          </h2>
          <p className="text-gray-600 text-lg">
            Fill the form to reach out to us
          </p>

<<<<<<< HEAD
          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
=======
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Enter your name"
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
<<<<<<< HEAD
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
=======
              placeholder="Enter your email"
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
<<<<<<< HEAD
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
=======
              placeholder="Enter your phone number"
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="3"
<<<<<<< HEAD
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
=======
              placeholder="Enter your message"
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
<<<<<<< HEAD
              className="w-full bg-[#0e4065] text-white py-2 hover:bg-[hsl(206,76%,23%)] btn-primary transition"
=======
              className="w-full bg-[#0A3A5E] text-white py-2 hover:bg-blue-800 transition"
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 h-[500px] shadow-md">
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
