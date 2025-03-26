import React from "react";
import { Home, NewAdded, Looking, ClientTestimonials } from "../pages";
import { useNavigate } from "react-router-dom";
import SearchBar from "../elements/SearchBar";
import CountrySlider from "../elements/CountrySlider";
import Autoslider from "../elements/Autoslider";

const MainScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ContactUs");
  };

  return (
    <div>
      <div className="relative">
        {/* This is the Home component */}
        <Home />

        {/* Recent Projects section overlapping the Home component */}
        <div className="absolute md:bottom-0 left-0 w-full z-10 flex justify-center items-center md:bg-white font-body text-md text-white py-2">
          <SearchBar />
        </div>
      </div>
      <div className="mt-80 md:mt-0 w-full z-10 flex justify-center items-center bg-white/30 font-body text-black py-2 mb-10">
        <div className="text-2xl md:text-6xl mt-10 font-bold text-center max-w-4xl">
          Select Your best Package For Your Travel
        </div>
      </div>
      <NewAdded />
      <div className="h-12 bg-gradient-to-t from-green-500 to-green-500"></div>
      <div className="container mt-4 md:mt-0 flex flex-col justify-center items-center mx-auto p-12 text-center">
        <h3 className="text-xl md:text-2xl  text-orange-600 mb-6 font-medium">
          Popular Destinations
        </h3>
        <h2 className="text-3xl md:text-6xl max-w-3xl text-center font-semibold mb-6">
          Select Our Best Popular Destinations
        </h2>
        <CountrySlider />
      </div>
      <Looking />
      <div className="p-2 md:p-0 mt-3 md:mt-10">
        <Autoslider />
      </div>
    </div>
  );
};

export default MainScreen;
