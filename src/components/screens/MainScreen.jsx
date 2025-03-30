import React, { useState, useEffect } from "react";
import { Home, NewAdded, Looking } from "../pages";
import { useNavigate } from "react-router-dom";
import SearchBar from "../elements/SearchBar";
import CountrySlider from "../elements/CountrySlider";
import Autoslider from "../elements/Autoslider";
import { airports, roomOptions, destinations } from "../contents/searchbar";
import { selectPackage } from "../contents/selectpackage";
import { destinationsData } from "../contents/destination";
import { autoSlides } from "../contents/autoslides";
import { homeslides } from "../contents/homeslider";
import axios from "axios";
import { Base_Url } from "../../utils/Api";

const MainScreen = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Base_Url}/home/homepage`);

        setData({
          featuredDeals: response.data.featuredDeals,
          destination: response.data.destinations,
          reviews: response.data.reviews,
          blogs: response.data.blogs,
        });
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false); // Ensure loading is false after response or error
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const handleClick = () => {
    navigate("/ContactUs");
  };

  return loading ? (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  ) : (
    <div>
      <div className="relative">
        {/* This is the Home component */}
        {/* <Home homeslides={data?.homeslides || homeslides || []} /> */}
        <Home homeslides={homeslides || []} />

        {/* Recent Projects section overlapping the Home component */}
        <div className="absolute md:bottom-0 left-0 w-full z-10 flex justify-center items-center md:bg-white font-body text-md text-white py-2 md:p-4">
          <SearchBar
            airports={airports}
            destinations={destinations}
            roomOptions={roomOptions}
          />
        </div>
      </div>
      <div className="mt-[350px] md:mt-0 w-full z-10 flex justify-center items-center bg-white/30 font-body text-black py-2 mb-10">
        <div className="text-2xl md:text-4xl mt-10 font-bold text-center max-w-4xl">
          Select Your best Package For Your Travel
        </div>
      </div>
      {/* <NewAdded data={data?.featuredDeals} /> */}
      {data?.featuredDeals && <NewAdded data={data.featuredDeals} />}
      {/* <NewAdded data={selectPackage || []} /> */}
      <div className="md:h-12 h-5 -mt-1 bg-gradient-to-t from-[#00AEEF] to-[#00AEEF]"></div>
      <div className="container mt-4 md:mt-0 flex flex-col justify-center items-center mx-auto p-4 text-center">
        <h3 className="text-xl md:text-2xl  text-orange-600 mb-6 font-medium">
          Popular Destinations
        </h3>
        <h2 className="text-3xl md:text-4xl max-w-3xl text-center font-semibold mb-6">
          Select Our Best Popular Destinations
        </h2>
        {data?.destination && <CountrySlider destinations={data.destination} />}
        {/* <CountrySlider destinations={destinationsData || []} /> */}
      </div>
      <Looking />
      <div className="md:p-0 mt-3 md:mt-10">
        <Autoslider slides={autoSlides} />
      </div>
    </div>
  );
};

export default MainScreen;
