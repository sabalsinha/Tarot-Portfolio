import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold text-pink-400">TarotWithNiishhi</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {["home", "about", "services", "feedback", "contact"].map((section) => (
            <li key={section} className="hover:text-pink-400 cursor-pointer">
              <Link to={section} smooth={true} duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden z-50 cursor-pointer"
        >
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-black/90 text-white transform ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-hidden z-40`}
      >
        <ul className="flex flex-col gap-6 p-6 text-lg">
          {["home", "about", "services", "feedback", "contact"].map((section) => (
            <li
              key={section}
              onClick={() => setNavOpen(false)}
              className="hover:text-pink-400 cursor-pointer"
            >
              <Link to={section} smooth={true} duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
