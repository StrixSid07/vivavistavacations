import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import {
  logo,
  payment1,
  payment2,
  payment3,
  payment4,
  payment5,
  support,
} from "../../assets";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const navInfos = [
    { name: "About Us", href: "/AboutUs" },
    { name: "FAQ's", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/termsandcondition" },
    { name: "Services", href: "/" },
  ];

  const quickLinks = [
    { name: "Contact Us", href: "/" },
    { name: "Cookies", href: "/cookies" },
    { name: "Group Booking", href: "/" },
    { name: "Blog", href: "/" },
  ];

  // Scroll to top on route change
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="bg-[#0b1121] text-white py-10 px-5 md:px-10 md:pt-28 lg:px-10 pt-20">
      <div className="max-w-full p-10 mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Column 1: About Section */}
        <div>
          <img
            src={logo}
            alt="Viva Vissta  Vacation"
            className="h-24 md:mb-4"
          />
          <div className="flex justify-center items-center gap-2 md:hidden mb-4">
            <div className="flex flex-col justify-center items-center w-56 md:hidden">
              {/* Icon with circular background and border */}
              <div className="w-24 h-24 flex items-center justify-center bg-[#304F47] rounded-full border-2 border-orange-500 mt-6">
                <img src={support} className="h-20 p-2" alt="support" />
              </div>
              {/* Text below the icon */}
              <p className="mt-3 text-orange-500 font-medium">
                Around-the-Clock Care!
              </p>
            </div>
            <a
              href="https://wa.me/442037805023" // Replace with your WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-60 justify-between mb-8 gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              <span>Chat on WhatsApp</span>
              <HiChevronRight className="text-xl" />
            </a>
          </div>

          <h2 className="md:text-2xl text-xl md:font-bold font-medium mb-5">
            Viva Vista Vacations
          </h2>
          <p className="mb-4 flex flex-wrap">
            Discover the best travel deals with Viva Vista Vacations.
          </p>
          <p className="mb-4 flex flex-wrap">
            Book your dream holiday with our exclusive offers.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-5">Contact Info</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-white text-center sm:text-left mb-4 sm:mb-0">
                <span className="font-bold text-orange-600">
                  {" "}
                  <FaPhoneAlt size={18} />
                </span>
                <span className="transition duration-700 ease-in-out hover:text-orange-600">
                  <a href="tel:+020 3780 5023"> 020 3780 5023</a>
                </span>{" "}
              </div>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-orange-600">
                <FaEnvelope size={18} />
              </span>
              <span className="transition duration-700 ease-in-out hover:text-orange-600">
                <a
                  href="mailto:admin@vivavistavactions.co.uk"
                  className="block w-44 overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  admin@vivavistavactions.co.uk
                </a>
              </span>
            </li>
            <li className="flex items-center">
              <div className="text-white flex w-64 items-start justify-center gap-1 group sm:text-left mb-4 sm:mb-0 ml-0">
                <span className="font-bold   text-orange-600">
                  {" "}
                  <FaLocationDot size={18} />
                </span>
                <br />{" "}
                <a
                  href="/"
                  target="_blank"
                  className="transition-all ease-in-out group-hover:text-orange-600"
                >
                  01, 195-197 Wood Street, London, England, E17 3NU
                </a>
              </div>
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 mt-5 md:flex hidden">
            Follow Us:
          </h2>
          <div className="md:flex mt-4 space-x-4 hidden">
            <div className=" flex flex-col justify-center items-center space-y-2 group">
              <a
                href="#"
                className="transition-all ease-out duration-500 group-hover:text-blue-900"
              >
                <FaFacebookF size={24} />
              </a>
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2 group mt-2">
              <a
                href="#"
                className="transition-all ease-out duration-500 group-hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2 group mt-2">
              <a
                href="#"
                className="transition-all ease-out duration-500 group-hover:text-blue-500"
              >
                <FaTwitter size={24} />
              </a>
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2 group mt-2">
              <a
                href="#"
                className="transition-all ease-out duration-500 group-hover:text-green-700"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-5 flex flex-row">Quick Links</h2>
          <ul className="space-y-4">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="hover:text-orange-600">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Information Links */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-5">Information</h2>
          <ul className="space-y-4">
            {navInfos.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="hover:text-orange-600">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: We Accepts */}
        <div className="md:flex flex-col justify-center items-center hidden">
          <h2 className="md:text-2xl text-lg font-medium md:font-bold mb-5 md:text-center">
            We Accept:
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-5 gap-1 md:max-w-60 max-w-80">
            {[payment1, payment2, payment3, payment4, payment5].map(
              (payment, index) => (
                <img
                  key={index}
                  src={payment}
                  alt={`Payment method ${index + 1}`}
                  className="h-12"
                />
              )
            )}
          </div>

          <div className="flex md:flex-col flex-row items-start justify-center text-center mt-6">
            <div className="md:hidden">
              {/* Icon with circular background and border */}
              <div className="w-16 h-16 flex items-center justify-center bg-[#304F47] rounded-full border-2 border-orange-500">
                <img src={support} className="h-16 p-2" alt="support" />
              </div>
              {/* Text below the icon */}
              <p className="mt-3 text-start text-orange-500 font-bold">
                Around-the-Clock Care!
              </p>
            </div>
            <a
              href="https://wa.me/442037805023" // Replace with your WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-60 justify-between gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              <span>Chat on WhatsApp</span>
              <HiChevronRight className="text-xl" />
            </a>
            <div className="md:flex flex-col justify-center items-center w-56 hidden">
              {/* Icon with circular background and border */}
              <div className="w-24 h-24 flex items-center justify-center bg-[#304F47] rounded-full border-2 border-orange-500 mt-6">
                <img src={support} className="h-20 p-2" alt="support" />
              </div>
              {/* Text below the icon */}
              <p className="mt-3 text-orange-500 font-bold">
                Around-the-Clock Care!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-1 text-center">
        <div className="flex flex-col justify-center items-center mb-6 md:hidden">
          <h2 className="md:text-2xl text-lg font-medium md:font-bold mb-5 md:text-center">
            We Accept:
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-5 gap-1 md:max-w-60 max-w-80">
            {[payment1, payment2, payment3, payment4, payment5].map(
              (payment, index) => (
                <img
                  key={index}
                  src={payment}
                  alt={`Payment method ${index + 1}`}
                  className="h-12"
                />
              )
            )}
          </div>
        </div>

        <div className="flex mt-4 justify-center items-center space-x-8 md:hidden">
          <div className=" flex flex-col justify-center items-center space-y-2 group">
            <a
              href="#"
              className="transition-all ease-out duration-500 group-hover:text-blue-900"
            >
              <FaFacebookF size={24} />
            </a>
          </div>
          <div className=" flex flex-col justify-center items-center space-y-2 group mt-2">
            <a
              href="#"
              className="transition-all ease-out duration-500 group-hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <div className=" flex flex-col justify-center items-center space-y-2 group mt-2">
            <a
              href="#"
              className="transition-all ease-out duration-500 group-hover:text-blue-500"
            >
              <FaTwitter size={24} />
            </a>
          </div>
          <div className=" flex flex-col justify-center items-center space-y-2 group mt-2">
            <a
              href="#"
              className="transition-all ease-out duration-500 group-hover:text-green-700"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
        <div
          variant="small"
          className="-mb-1 mt-3 pt-2 text-center font-normal text-white md:mb-0"
        >
          &copy; {currentYear}{" "}
          <span className="text-orange-600 transition duration-700 hover:text-orange-400">
            <a href="https://www.vivavistavacations.co.uk/">
              Viva Vista Vacations
            </a>
            .
          </span>{" "}
          All Rights Reserved.
        </div>

        <p>
          The Foreign, Commonwealth & Development Office (FCDO) provides the
          latest travel advice by country, including safety and security, travel
          warnings, and health. For the latest FCDO advice, visit
        </p>
        <a
          href="www.travelaware.campaign.gov.uk"
          className="text-blue-600 transition duration-700 hover:text-blue-400"
        >
          www.travelaware.campaign.gov.uk
        </a>
      </div>
    </footer>
  );
};

export default Footer;
