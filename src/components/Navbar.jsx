import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import "../index.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`px-10 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img className="w-10" src={logo} alt="logo" />
        </div>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-2xl focus:outline-none text-white"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links and Social Media Section */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 w-full backdrop-blur-lg p-6 lg:flex lg:flex-row lg:static lg:bg-transparent lg:w-auto gap-4 items-center justify-center`}
        >
          {/* Centered Links (Home, About, etc.) */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center w-full lg:w-auto">
            <a
              href="#home"
              className="block py-2 px-4 text-sm font-semibold text-white hover:text-purple-500 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 px-4 text-sm font-semibold text-white hover:text-purple-500 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#experience"
              className="block py-2 px-4 text-sm font-semibold text-white hover:text-purple-500 transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block py-2 px-4 text-sm font-semibold text-white hover:text-purple-500 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#technology"
              className="block py-2 px-4 text-sm font-semibold text-white hover:text-purple-500 transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block py-2 px-4 text-sm font-semibold text-white hover:text-purple-500 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col lg:flex-row gap-4 text-xl text-white justify-center items-center mt-4 lg:mt-0 lg:ml-6">
            <a
              href="https://www.linkedin.com/in/lakshya-pradhan-a78a06246/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/LakshyaPrd"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
              className=" transition-colors duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/laxey.pr?igsh=MXZ1Z3c4cGQ2bGpheA=="
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              aria-label="Instagram"
              className="hover:text-pink-400 transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/PradhanLak9655"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              aria-label="Twitter"
              className="hover:text-neutral-500 transition-colors duration-200"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
