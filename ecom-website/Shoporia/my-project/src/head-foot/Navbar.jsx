import React, { useState } from 'react';
import { FaUser, FaQuestionCircle, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // Import FontAwesome icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close the menu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative flex justify-between items-center px-8 py-4 border-b shadow-md text-sm font-light">
      {/* Left Links */}
      <div className="hidden md:flex gap-8">
        <a href="#" className="hover:text-gray-600">MEN</a>
        <a href="#" className="hover:text-gray-600">WOMEN</a>
        <a href="#" className="hover:text-gray-600">NEW ARRIVALS</a>
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center">
        <img
          src="/src/Img/Sephora.png" // Replace with the correct path to your logo
          alt="allbirds logo"
          className="w-20 h-20 rounded-full" // Adjust the size as needed
        />
      </div>

      {/* Right Links */}
      <div className="hidden md:flex gap-6">
        <a href="#" className="hover:text-gray-600">SUSTAINABILITY</a>
        <a href="#" className="hover:text-gray-600">RERUN</a>
        <a href="#" className="hover:text-gray-600">STORES</a>
      </div>

      {/* Icons */}
      <div className="hidden md:flex gap-4 items-center">
        <a href="#" className="hover:text-gray-600">
          <FaUser />
        </a>
        <a href="#" className="hover:text-gray-600">
          <FaQuestionCircle />
        </a>
        <a href="#" className="hover:text-gray-600">
          <FaShoppingCart />
        </a>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden flex items-center gap-2 text-xl"
        onClick={toggleMenu}
      >
        <FaBars />
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-white shadow-lg p-4 transition-all ${isMenuOpen ? 'block' : 'hidden'} z-50`}
      >
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-2xl z-60"
          onClick={closeMenu}
        >
          <FaTimes />
        </button>

        <div className="flex flex-col gap-4 items-center bg-white shadow-md">
          <a href="#" className="hover:text-gray-600">MEN</a>
          <a href="#" className="hover:text-gray-600">WOMEN</a>
          <a href="#" className="hover:text-gray-600">NEW ARRIVALS</a>
          <a href="#" className="hover:text-gray-600">SUSTAINABILITY</a>
          <a href="#" className="hover:text-gray-600">RERUN</a>
          <a href="#" className="hover:text-gray-600">STORES</a>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-gray-600">
              <FaUser />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaQuestionCircle />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaShoppingCart />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
