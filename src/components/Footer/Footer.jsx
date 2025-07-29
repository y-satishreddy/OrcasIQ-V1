import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
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
  };

  return (
    <motion.footer
      className="bg-[#08385f] text-white px-[5%] py-[1%]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-2">Orcas IQ</h2>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeInUp}>
          <p className="mb-1">+91 9390526524</p>
          <p className="mb-3">yettapusatishreddy@gmail.com</p>
          <div className="flex gap-4 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/919390526524" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href="https://linkedin.com/in/satishreddy" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </motion.div>

        {/* Navigation */}
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
              <input
                type="checkbox"
                checked={subscribed}
                onChange={() => setSubscribed(!subscribed)}
              />
              <label className="text-sm">Subscribe me for the new Updates</label>
            </div>
            <button
              type="submit"
              className="bg-white text-[#08385f] font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Submit
            </button>
            <p className="text-xs text-white mt-2">
             @ Developed by <a href="https://your-portfolio-link.com" className="underline font-medium" target="_blank" rel="noreferrer">Satish Reddy</a>
            </p>
          </form>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
