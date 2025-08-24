import { useEffect, useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
import Logo from "../../assets/Logo.jpeg";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
<<<<<<< HEAD
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [navLoaded, setNavLoaded] = useState(false);

  const navigate = useNavigate();
=======
  const [menuOpen, setMenuOpen] = useState(false);
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
<<<<<<< HEAD
    window.addEventListener("scroll", handleScroll);
    setNavLoaded(true);
=======

    window.addEventListener("scroll", handleScroll);
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
<<<<<<< HEAD
    { label: "Courses", link: "#courses" },
    { label: "Modules", link: "#modules" },
    { label: "Services", link: "#services" },
    { label: "Events", link: "#events" },
  ];

  const courses = ["data science", "data analytics", "fullstack", "devops", "digital marketing"];
  const modules = ["java", "excel", "sql", "python", "html", "css"];

  const handleSearch = () => {
    const keyword = searchInput.trim().toLowerCase();
    if (courses.includes(keyword)) {
      navigate(`/courses/${keyword.replace(/\s+/g, "-")}`);
    } else if (modules.includes(keyword)) {
      navigate("/modules");
    } else {
      navigate("/error");
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const openMenu = () => {
    setIsMenuVisible(true);
    setIsClosing(false);
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuVisible(false);
      setIsClosing(false);
    }, 400);
  };

  const scrollToSection = (link) => {
    navigate("/");
    setTimeout(() => {
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay to allow page transition
  };

  return (
    <>
      <nav
        className={`navbar fixed top-0 w-full z-50 transition-all duration-300
          ${hasScrolled ? "shadow-navbar" : ""}
          ${navLoaded ? "animate-slide-down" : ""}
        `}
      >
        <div className="max-w-[100%] mx-auto flex justify-between items-center h-[70px] px-[5%]">
          <div className="flex items-center gap-8">
            <img
              src={Logo}
              alt="Logo"
              className="h-10 cursor-pointer"
              onClick={() => navigate("/")}
            />
            <ul className="hidden md:flex gap-6">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="nav-link cursor-pointer"
                  onClick={() => scrollToSection(item.link)}
                >
                  {item.label}
=======
    { label: "Courses", link: "/" },
    { label: "Modules", link: "/modules" },
    { label: "Services", link: "/services" },
    { label: "Events", link: "/events" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${
          hasScrolled ? "shadow-navbar" : ""
        }`}
      >
        <div className="max-w-[100%] mx-auto flex justify-between items-center h-[70px] px-[5%]">
          {/* Logo + Desktop Menu */}
          <div className="flex items-center gap-8">
            <img src={Logo} alt="Logo" className="h-10" />

            <ul className="hidden md:flex gap-6">
              {items.map((link, index) => (
                <li key={index} className="nav-link">
                  <a href={link.link}>{link.label}</a>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          <div className="hidden md:flex items-center gap-6">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search here..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleEnterKey}
              />
              <FaSearch className="icon" onClick={handleSearch} />
            </div>
            <a href="#contact">
              <button className="contact-btn">Contact Us</button>
            </a>
          </div>

          <div className="md:hidden">
            <FaBars size={24} onClick={openMenu} />
=======
          {/* Search + Contact (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="search-box">
              <input type="text" placeholder="Search here..." />
              <FaSearch className="icon" />
            </div>
            <button className="contact-btn">Contact Us</button>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <FaBars size={24} onClick={() => setMenuOpen(true)} />
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
          </div>
        </div>
      </nav>

<<<<<<< HEAD
      {isMenuVisible && (
        <div
          className={`mobile-menu fixed top-0 right-0 w-[85%] h-full bg-white shadow-lg z-50 p-6 
            ${isClosing ? "animate-slide-out-right" : "animate-slide-in-right"} 
            md:animate-slide-down md:w-full md:h-auto md:left-0 md:right-0`}
        >
          <div className="flex justify-end mb-6">
            <FaTimes size={24} onClick={closeMenu} />
          </div>

          <div className="search-box mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleEnterKey}
            />
            <FaSearch className="icon" onClick={handleSearch} />
=======
      {/* Spacer to prevent overlap */}
      <div className="h-[70px]"></div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-[85%] h-full bg-white shadow-lg z-50 p-6">
          <div className="flex justify-end mb-6">
            <FaTimes size={24} onClick={() => setMenuOpen(false)} />
          </div>

          <div className="search-box mb-4">
            <input type="text" placeholder="Search..." />
            <FaSearch className="icon" />
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
          </div>

          <ul className="flex flex-col gap-4">
            {items.map((item, idx) => (
<<<<<<< HEAD
              <li
                key={idx}
                className="text-lg cursor-pointer"
                onClick={() => {
                  closeMenu();
                  scrollToSection(item.link);
                }}
              >
                {item.label}
              </li>
            ))}
            <a href="#contact" onClick={closeMenu}>
              <button className="contact-btn mt-4 w-full">Contact Us</button>
            </a>
=======
              <li key={idx} className="text-lg">
                <a href={item.link} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <button className="contact-btn mt-4 w-full">Contact Us</button>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
