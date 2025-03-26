import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const SpeedDiel = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 px-3 py-4 md:gap-4 md:px-4 md:py-6 rounded-2xl bg-white/70 transition-colors duration-500 ease-in-out hover:bg-white shadow-lg z-50">
      {/* Phone Link */}
      <a
        href="tel:+02037805023"
        className="text-green-500 hover:text-green-600 transition-transform transform hover:scale-110"
      >
        <FaPhoneAlt size={28} />
      </a>

      {/* WhatsApp Link */}
      <a
        href="https://wa.me/442037805023"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-600 transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Email Link */}
      <a
        href="mailto:admin@vivavistavactions.co.uk"
        className="text-green-500 hover:text-green-600 transition-transform transform hover:scale-110"
      >
        <FaEnvelope size={28} />
      </a>
    </div>
  );
};

export default SpeedDiel;
