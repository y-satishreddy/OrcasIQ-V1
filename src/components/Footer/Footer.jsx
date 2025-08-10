import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
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
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-[#0A3D62] to-[#052136] text-white px-[5%] py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
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
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-1">
            <a href="tel:+919390526524" className="hover:underline">
              +91 9390526524
            </a>
          </p>
          <p className="mb-3">
            <a
              href="mailto:yettapusatishreddy@gmail.com"
              className="hover:underline"
            >
              yettapusatishreddy@gmail.com
            </a>
          </p>
          <div className="flex gap-4 text-2xl mt-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919390526524"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://linkedin.com/in/satishreddy"
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
          </div>
        </motion.div>

        {/* Navigation */}
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
              <input
                type="checkbox"
                checked={subscribed}
                onChange={() => setSubscribed(!subscribed)}
              />
              Subscribe me for new updates
            </label>
            <button
              type="submit"
              className="bg-white text-[#08385f] font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Submit
            </button>
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
          href="https://your-portfolio-link.com"
          className="underline hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          Satish Reddy
        </a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
