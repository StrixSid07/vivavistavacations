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

const MainScreen = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [packagesRes, destinationRes, homeslides] = await Promise.all([
  //         axios.get("https://67e680f86530dbd31110414e.mockapi.io/package"),
  //         axios.get("https://67e680f86530dbd31110414e.mockapi.io/countryslider"),
  //         axios.get("https://67e680f86530dbd31110414e.mockapi.io/homeslider"),
  //       ]);

  //       setData({
  //         packages: packagesRes.data,
  //         destinations: destinationRes.data,
  //         homeslides: homeslides.data,
  //       });
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   if (data) {
  //     setLoading(false);
  //   }
  // }, [data]);

  const handleClick = () => {
    navigate("/ContactUs");
  };

  return loading ? (
    <div className="flex items-center justify-center h-screen bg-white">
      <p className="text-2xl font-semibold">Loading...</p>
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
      {/* <NewAdded data={data?.packages || selectPackage || []} /> */}
      <NewAdded data={selectPackage || []} />
      <div className="md:h-12 h-5 -mt-1 bg-gradient-to-t from-green-500 to-green-500"></div>
      <div className="container mt-4 md:mt-0 flex flex-col justify-center items-center mx-auto p-12 text-center">
        <h3 className="text-xl md:text-2xl  text-orange-600 mb-6 font-medium">
          Popular Destinations
        </h3>
        <h2 className="text-3xl md:text-4xl max-w-3xl text-center font-semibold mb-6">
          Select Our Best Popular Destinations
        </h2>
        {/* <CountrySlider destinations={data?.destinations || destinationsData || []}/> */}
        <CountrySlider destinations={destinationsData || []} />
      </div>
      <Looking />
      <div className="p-2 md:p-0 mt-3 md:mt-10">
        <Autoslider slides={autoSlides} />
      </div>
    </div>
  );
};

export default MainScreen;
