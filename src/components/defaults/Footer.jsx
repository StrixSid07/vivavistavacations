import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { logo } from "../../assets";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/Projects" },
    { name: "How We Work", href: "/HowWeWork" },
    { name: "Blogs", href: "/Blogs" },
    { name: "Contact Us", href: "/ContactUs" },
  ];

  // Scroll to top on route change
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="bg-[#0b1121] text-white py-10 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: About Section */}
        <div>
          <img src={logo} alt="Pramukh Homes" className="h-16 md:mb-4" />

          <h2 className="text-2xl font-bold mb-5">Viva Vista Vacations</h2>
          <p className="mb-4 w-80">
            Discover the best travel deals with Viva Vista Vacations.
          </p>
          <p className="mb-4 w-80">
            Book your dream holiday with our exclusive offers.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-5">Quick Links</h2>
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="hover:text-amber-500">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-5">Contact Info</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="text-white text-center sm:text-left mb-4 sm:mb-0">
                <span className="font-bold text-yellow-600"> Phone:</span>
                <span className="transition duration-700 ease-in-out hover:text-yellow-600">
                  <a href="tel:+020 3780 5023"> 020 3780 5023</a>
                </span>{" "}
              </div>
            </li>
            <li className="flex items-center">
              <span className="font-bold text-yellow-600"> Email:</span> <br />
              <span className="transition duration-700 ease-in-out hover:text-yellow-600">
                <a href="mailto:support@gmail.com">&nbsp;support@gmail.com</a>
              </span>
            </li>
            <li className="flex items-center">
              <div className="text-white group sm:text-left mb-4 sm:mb-0 ml-0">
                <span className="font-bold   text-yellow-600"> Address:</span>
                <br />{" "}
                <a
                  href="/"
                  target="_blank"
                  className="transition-all  ease-in-out group-hover:text-yellow-600"
                >
                  01, 195-197 Wood Street, London, England, E17 3NU
                </a>
              </div>
            </li>
          </ul>
          <div className="flex mt-4 space-x-4">
            <div className=" flex flex-col justify-center items-center space-y-2 group">
              <a
                href="https://www.facebook.com/"
                target="_new"
                className="transition-all ease-out duration-500 group-hover:text-blue-900"
              >
                <FaFacebookF size={24} />
              </a>
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2 group mt-2">
              <a
                href="https://www.instagram.com/"
                target="_new"
                className="group-hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center">
        <div
          variant="small"
          className="-mb-1 mt-3 text-center font-normal text-white md:mb-0"
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
      </div>
    </footer>
  );
};

export default Footer;
