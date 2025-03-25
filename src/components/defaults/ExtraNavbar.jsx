import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ExtraNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [region, setRegion] = useState("UK"); // Default to UK

  return (
    <header className="bg-[#2E4A42] text-white py-1 text-base">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left Side - Contact Info */}
        <div className="flex items-center space-x-6 sm:space-x-4">
          <a
            href="tel:+17632275032"
            className="flex items-center space-x-2 transition-colors duration-300 ease-in-out hover:text-[#D35400] text-lg"
          >
            <FaPhoneAlt />
            <span className="hidden sm:inline">0203 780 5023</span>
          </a>
          <a
            href="mailto:admin@vivavistavactions.co.uk"
            className="flex items-center space-x-2 transition-colors duration-300 ease-in-out hover:text-[#D35400] text-lg"
          >
            <FaEnvelope />
            <span className="hidden sm:inline">
              admin@vivavistavactions.co.uk
            </span>
          </a>
        </div>

        {/* Center - Social Icons (Hidden on Small Screens) */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="#"
            className="text-[#D35400] transition-colors duration-300 ease-in-out hover:text-orange-500"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="text-[#D35400] transition-colors duration-300 ease-in-out hover:text-orange-500"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="text-[#D35400] transition-colors duration-300 ease-in-out hover:text-orange-500"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="#"
            className="text-[#D35400] transition-colors duration-300 ease-in-out hover:text-orange-500"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>

        {/* Right Side - Region Selector */}
        <div className="relative">
          <button
            className="cursor-pointer flex items-center space-x-2 text-lg font-medium hover:text-gray-300 transition-colors duration-300 ease-in-out"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{region}</span>
            <motion.div
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FaChevronDown />
            </motion.div>
          </button>

          {isDropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-0 mt-2 w-36 bg-white text-black rounded-lg shadow-lg overflow-hidden border"
            >
              {["UK", "ENG", "Canada"].map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 hover:bg-gray-200 text-[#D35400] font-semibold cursor-pointer transition-all duration-200"
                  onClick={() => {
                    setRegion(item);
                    setIsDropdownOpen(false);
                  }}
                >
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default ExtraNavbar;
