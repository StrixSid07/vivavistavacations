import React, { useEffect, useState } from "react";
import { Navbar, ExtraNavbar, Footer } from "./defaults";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  ForSale,
  ForRent,
  NewProperty,
  Blogs,
  ContactUs,
  WhyUs,
  Services,
  AboutUs,
  WhatWeDo,
  HowWeWork,
  DetailedView,
  BlogDetail,
} from "./pages";
import { MainScreen } from "./screens";

const Main = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hideExtraNavbar, setHideExtraNavbar] = useState(false);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // At the top of the page
        setHideExtraNavbar(false);
      } else if (currentScrollY > scrollY) {
        // Scrolling down
        setHideExtraNavbar(true);
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <Router>
      <div>
        {/* <div
          className={`z-50 top-0 transition-transform duration-0 ease-out ${
            hideExtraNavbar ? "-translate-y-full duration-300" : ""
          }`}
        >
          <ExtraNavbar />
        </div>

        <div
          className={`fixed w-full z-40 transition-transform duration-0 ease-out ${
            hideExtraNavbar ? "top-0" : ""
          }`}
        >
          <Navbar />
        </div> */}

        <div
          className={`fixed w-full z-50 bg-[#2E4A42] ${
            // Only hide ExtraNavbar if hideExtraNavbar is true and the device is larger than tablet
            hideExtraNavbar && !isMobileOrTablet
              ? "transition-transform duration-300 ease-in-out -translate-y-full"
              : ""
          }`}
        >
          <ExtraNavbar />
        </div>

        <div
          className={`fixed w-full z-40 ${
            // For mobile/tablet, always position Navbar below ExtraNavbar (e.g., top-[30px])
            isMobileOrTablet
              ? "top-[30px]"
              : hideExtraNavbar
              ? "top-0 transition-transform duration-300 ease-in-out"
              : "top-[30px]"
          }`}
        >
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/Projects" element={<ForSale />} />
          <Route path="/DetailedView" element={<DetailedView />} />
          <Route path="/OurServices" element={<Services />} />
          <Route path="/WhyUs" element={<WhyUs />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/HowWeWork" element={<HowWeWork />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;
