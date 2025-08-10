import React, { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBook,
  FaBriefcase,
  FaRegCommentDots,
} from "react-icons/fa";
import Layout from "../../components/Layouts/Layout";

const courses = [
  "Web Development",
  "Data Science",
  "UI/UX Design",
  "Digital Marketing",
  "Machine Learning",
  "Cloud Computing",
];

const experiences = [
  "Fresher",
  "0-1 Year",
  "1-3 Years",
  "3-5 Years",
  "5+ Years",
];

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://example.com/api/contact", formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        experience: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="w-full h-screen bg-gradient-to-br from-[#0A3A5E] to-black px-[5%] flex flex-col md:flex-row items-center justify-between text-white">
        {/* Left Section */}
        <div className="md:w-1/2 h-full flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Get in Touch with <br /> OrcasIQ
          </h1>
          <p className="text-lg opacity-90">
            Fill out the form to explore courses designed for your growth.
            We’ll respond within 24 hours to help you choose the right path.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/20 max-w-md">
            <h2 className="text-xl font-semibold mb-2">Why Choose OrcasIQ?</h2>
            <p className="text-sm opacity-90 mb-3">
              Learn from experts, gain real-world skills, and join a network of
              passionate learners.
            </p>
            <button className="bg-white text-[#0A3A5E] font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 transition">
              View Courses
            </button>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 h-full flex justify-center items-center">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#0A3A5E] mb-5">
              Contact Form
            </h2>

            <form className="space-y-3" onSubmit={handleSubmit}>
              {/* Name & Email */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-2">
                    <FaUser /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3A5E]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-2">
                    <FaEnvelope /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3A5E]"
                  />
                </div>
              </div>

              {/* Phone & Course */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-2">
                    <FaPhone /> Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3A5E]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-2">
                    <FaBook /> Course
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3A5E] bg-white"
                  >
                    <option value="">Select Course</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Experience */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-2">
                    <FaBriefcase /> Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3A5E] bg-white"
                  >
                    <option value="">Select Experience</option>
                    {experiences.map((exp) => (
                      <option key={exp} value={exp}>
                        {exp}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  {/* Empty to align grid */}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-2">
                  <FaRegCommentDots /> Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Your message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3A5E]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#0A3A5E] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#052c4a] transition btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetInTouch;
