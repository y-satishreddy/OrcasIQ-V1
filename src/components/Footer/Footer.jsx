<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
=======
import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
<<<<<<< HEAD
  visible: { transition: { staggerChildren: 0.2 } },
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    try {
      const res = await axios.post(
        "https://your-api-endpoint.com/newsletter",
        { email, subscribed }
      );
      console.log("Newsletter response:", res.data);
      alert("Thank you for subscribing!");
      setEmail("");
      setSubscribed(false);
    } catch (err) {
      console.error("Error submitting newsletter form:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const items = [
    { label: "Courses", link: "#courses" },
    { label: "Modules", link: "#modules" },
    { label: "Services", link: "#services" },
    { label: "Events", link: "#events" },
    { label: "Privacy Policy", link: "#privacy" },
  ];

  const scrollToSection = (link) => {
    navigate("/");
    setTimeout(() => {
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
=======
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email.');
      return;
    }
    alert(`Email: ${email}\nSubscribed: ${subscribed ? 'Yes' : 'No'}`);
    setEmail('');
    setSubscribed(false);
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  };

  return (
    <motion.footer
<<<<<<< HEAD
      className="bg-gradient-to-b from-[#0A3D62] to-[#052136] text-white px-[5%] py-10"
=======
      className="bg-[#08385f] text-white px-[5%] py-[1%]"
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
<<<<<<< HEAD
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-extrabold tracking-wide mb-3">
            Orcas IQ
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering learners with skills in Data Analytics, Data Science, and
            more.
          </p>
=======
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-2">Orcas IQ</h2>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeInUp}>
<<<<<<< HEAD
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-1">
            <a href="tel:+919390526524" className="hover:underline">
              +91 6305829214
            </a>
          </p>
          <p className="mb-3">
            <a
              href="mailto:orcasiq@gmail.com"
              className="hover:underline"
            >
              orcasiq@gmail.com
            </a>
          </p>
          <div className="flex gap-4 text-2xl mt-3">
            <a
              href="https://www.instagram.com/orcasiq_learningsimplified/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/916305829214"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/company/orcas-iq"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 hover:scale-110 transition"
            >
              <FaYoutube />
            </a>
=======
          <p className="mb-1">+91 9390526524</p>
          <p className="mb-3">yettapusatishreddy@gmail.com</p>
          <div className="flex gap-4 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/919390526524" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href="https://linkedin.com/in/satishreddy" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
          </div>
        </motion.div>

        {/* Navigation */}
<<<<<<< HEAD
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {items.map((item, idx) => (
              <li
                key={idx}
                onClick={() => scrollToSection(item.link)}
                className="cursor-pointer text-gray-300 hover:text-white transition"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded bg-white text-black focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="flex items-center gap-2 text-sm text-gray-300">
=======
        <motion.div variants={fadeInUp} className="flex flex-col gap-2">
          <a href="#" className="hover:underline">Courses</a>
          <a href="#" className="hover:underline">Modules</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Events</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label>Email :</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded border-[1px] focus:outline-none text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex items-center gap-2">
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
              <input
                type="checkbox"
                checked={subscribed}
                onChange={() => setSubscribed(!subscribed)}
              />
<<<<<<< HEAD
              Subscribe me for new updates
            </label>
=======
              <label className="text-sm">Subscribe me for the new Updates</label>
            </div>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
            <button
              type="submit"
              className="bg-white text-[#08385f] font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Submit
            </button>
<<<<<<< HEAD
          </form>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="border-t border-gray-700 mt-8 pt-5 text-center text-xs text-gray-400"
        variants={fadeInUp}
      >
        © {new Date().getFullYear()} Orcas IQ | Developed by{" "}
        <a
          href="https://ysatishreddy.netlify.app"
          className="underline hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          Satish Reddy
        </a>
      </motion.div>
=======
            <p className="text-xs text-white mt-2">
             @ Developed by <a href="https://your-portfolio-link.com" className="underline font-medium" target="_blank" rel="noreferrer">Satish Reddy</a>
            </p>
          </form>
        </motion.div>
      </div>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
    </motion.footer>
  );
};

export default Footer;
