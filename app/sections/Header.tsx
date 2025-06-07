"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, HardHat } from "lucide-react"; // Changed icon import here

const navItems = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Core Skills" },
  { id: "experience", label: "Work Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact Me" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-gray-900 to-lime-600 shadow-md backdrop-blur bg-opacity-90"
    >
      <div className="w-full flex justify-between items-center px-4 py-3 md:px-8">
        {/* Left: Icon + Name */}
        <div className="flex items-center gap-3">
          <div className="bg-lime-500 rounded-full p-2 shadow-md">
            <HardHat className="text-black w-6 h-6" /> {/* Updated icon */}
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">
              Donald Upshaw
            </span>
            <span className="text-white text-sm sm:text-base md:text-lg opacity-80 -mt-1">
              Forklift Operator • Machine Operator • Packaging Specialist
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-white hover:text-lime-300 transition-colors duration-300 hover:scale-105"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-sm font-medium bg-gradient-to-b from-black via-gray-900 to-lime-600">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-white hover:text-lime-300 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
