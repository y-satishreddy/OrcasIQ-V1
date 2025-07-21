import { useState } from 'react';
import Logo from '../../assets/Logo.jpeg';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { label: 'Courses', link: '/' },
    { label: 'Modules', link: '/modules' },
    { label: 'Services', link: '/services' },
    { label: 'Events', link: '/events' }
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className='h-12 w-full flex justify-center items-center px-[5%] shadow navbar'>
        <div className='h-full w-[1200px] flex justify-between items-center'>

          {/* Logo + Desktop Menu */}
          <div className='h-full w-[50%] flex items-center gap-[2%]'>
            <img src={Logo} alt="Logo" className='h-full' />

            <ul className='hidden md:flex h-full w-[65%] justify-between items-center'>
              {items.map((link, index) => (
                <li key={index} className='h-[80%] w-[20%] flex justify-center items-center list-items'>
                  <a href={link.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Search + Contact */}
          <div className='hidden md:flex h-full w-[30%] items-center justify-between'>
            <div className='h-[70%] w-[60%] bg-gray-100 ml-10 rounded flex items-center justify-between p-[2%] border border-gray-400'>
              <input
                type="text"
                className='bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2 w-full'
                placeholder='Search here...'
              />
              <FaSearch className='text-[#0A3A5E]' />
            </div>
            <button className='contact-btn bold'>Contact Us</button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className='block md:hidden flex items-center'>
            <FaBars size={24} onClick={() => setMenuOpen(true)} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Overlay */}
          {/* <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setMenuOpen(false)}
          ></div> */}

          {/* Side Drawer */}
          <div className='fixed top-0 right-0 w-[85%] h-full bg-white shadow-lg z-50 p-6 transition-all'>
            <div className='flex justify-end items-center mb-6'>
              {/* <img src={Logo} alt="Logo" className='h-10' /> */}
              <FaTimes size={24} onClick={() => setMenuOpen(false)} />
            </div>

            {/* Mobile Search */}
            <div className='bg-gray-100 rounded flex items-center justify-between px-3 py-2 mb-4 border border-gray-400'>
              <input
                type="text"
                className='bg-transparent outline-none w-full text-gray-700 placeholder-gray-500 px-2'
                placeholder='Search...'
              />
              <FaSearch className='text-[#0A3A5E]' />
            </div>

            {/* Mobile Menu Links */}
            <ul className='flex flex-col gap-4'>
              {items.map((item, idx) => (
                <li key={idx} className='text-lg'>
                  <a href={item.link} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
              <button className=''>Contact Us</button>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
