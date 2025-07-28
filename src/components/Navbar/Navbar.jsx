import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.jpeg";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { label: "Courses", link: "/" },
    { label: "Modules", link: "/modules" },
    { label: "Services", link: "/services" },
    { label: "Events", link: "/events" },
  ];

  return (
    <>
      <nav
        className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${
          hasScrolled ? "shadow-navbar" : ""
        }`}
      >
        <div className="max-w-[100%] mx-auto flex justify-between items-center h-[70px] px-[5%]">
          {/* Logo + Menu */}
          <div className="flex items-center gap-8">
            <img src={Logo} alt="Logo" className="h-10" />

            <ul className="hidden md:flex gap-6">
              {items.map((link, index) => (
                <li key={index} className="nav-link">
                  <a href={link.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Search + Contact */}
          <div className="hidden md:flex items-center gap-6">
            <div className="search-box">
              <input type="text" placeholder="Search here..." />
              <FaSearch className="icon" />
            </div>
            <button className="contact-btn">Contact Us</button>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <FaBars size={24} onClick={() => setMenuOpen(true)} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-[85%] h-full bg-white shadow-lg z-50 p-6">
          <div className="flex justify-end mb-6">
            <FaTimes size={24} onClick={() => setMenuOpen(false)} />
          </div>

          <div className="search-box mb-4">
            <input type="text" placeholder="Search..." />
            <FaSearch className="icon" />
          </div>

          <ul className="flex flex-col gap-4">
            {items.map((item, idx) => (
              <li key={idx} className="text-lg">
                <a href={item.link} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <button className="contact-btn mt-4 w-full">Contact Us</button>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
