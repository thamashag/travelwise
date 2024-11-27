"use client";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-transparent">
      <div className="flex items-center h-20">
        <div className="max-w-screen-xl w-full flex items-center justify-between">
          {/* Logo */}
          <div className="mx-[20px] md:mx-[40px] lg:mx-[100px] text-2xl uppercase text-white">
            Travelwise
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 flex text-lg gap-10 text-white">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Hamburger Menu Button */}
          <div
            className="lg:hidden text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center gap-5 py-5 md:hidden">
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
