import React from "react";
import { Home, NewAdded, Looking, ClientTestimonials } from "../pages";
import { useNavigate } from "react-router-dom";
import SearchBar from "../elements/SearchBar";

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
      <Looking />
      <div className="container mx-auto p-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to build your dream home?
        </h2>
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700"
        >
          Request Quote
        </button>
      </div>
      <div>
        <ClientTestimonials />
      </div>
    </div>
  );
};

export default MainScreen;
