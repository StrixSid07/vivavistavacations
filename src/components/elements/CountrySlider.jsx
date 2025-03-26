import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const destinations = [
  {
    country: "Spain",
    cimage:
      "https://images.unsplash.com/photo-1559386081-325882507af7?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    packages: [
      { title: "Lake Garda", price: "$240", location: "Spain" },
      { title: "Mount Etna", price: "$300", location: "Spain" },
      { title: "Costa Brava", price: "$220", location: "Spain" },
      { title: "Seville", price: "$260", location: "Spain" },
      { title: "Madrid Tour", price: "$280", location: "Spain" },
    ],
  },
  {
    country: "Dubai",
    cimage:
      "https://plus.unsplash.com/premium_photo-1697729749013-d5263b662999?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    packages: [
      { title: "Desert Safari", price: "$350", location: "Dubai" },
      { title: "Burj Khalifa", price: "$400", location: "Dubai" },
      { title: "Palm Jumeirah", price: "$320", location: "Dubai" },
      { title: "Dubai Mall", price: "$300", location: "Dubai" },
      { title: "Marina Walk", price: "$330", location: "Dubai" },
    ],
  },
  {
    country: "Switzerland",
    cimage:
      "https://images.unsplash.com/photo-1573137785546-9d19e4f33f87?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    packages: [
      { title: "Zurich Tour", price: "$280", location: "Switzerland" },
      { title: "Alps Hiking", price: "$350", location: "Switzerland" },
      { title: "Lake Geneva", price: "$270", location: "Switzerland" },
      { title: "Lucerne", price: "$290", location: "Switzerland" },
      { title: "Bern City", price: "$310", location: "Switzerland" },
    ],
  },
];

const TravelPackages = () => {
  const [scrollPositions, setScrollPositions] = useState(
    destinations.map(() => 0)
  );

  const CARD_WIDTH = 320;
  const VISIBLE_CARDS = 3;
  const CONTAINER_WIDTH = CARD_WIDTH * VISIBLE_CARDS + 20; // Extra space for balance

  const scrollLeft = (index) => {
    setScrollPositions((prev) =>
      prev.map((pos, i) =>
        i === index ? Math.max(pos - CARD_WIDTH * VISIBLE_CARDS, 0) : pos
      )
    );
  };

  const scrollRight = (index) => {
    const maxScroll =
      (destinations[index].packages.length - VISIBLE_CARDS) * CARD_WIDTH;

    setScrollPositions((prev) =>
      prev.map((pos, i) =>
        i === index
          ? Math.min(pos + CARD_WIDTH * VISIBLE_CARDS, maxScroll)
          : pos
      )
    );
  };

  return (
    <div className="container mx-auto space-y-16 p-10">
      {destinations.map((destination, index) => (
        <div
          key={index}
          className={`flex items-center justify-between w-full gap-10 ${
            index % 2 !== 0
              ? "md:flex-row-reverse flex-col"
              : "md:flex-row flex-col"
          }`}
        >
          {/* Main Country Container */}
          <div
            className="relative w-80 h-20 md:w-[350px] md:h-[340px] flex items-center justify-center rounded-xl shadow-xl p-6 bg-cover bg-center"
            style={{
              backgroundImage: `url(${destination.cimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Conditional Overlay on the image */}
            <div
              className={`absolute inset-0 rounded-xl ${
                index % 2 !== 0
                  ? "md:bg-gradient-to-l from-black/90 to-black/5 bg-gradient-to-r"
                  : "bg-gradient-to-r from-black/90 to-black/5"
              }`}
            ></div>

            <button
              className="absolute left-4 bg-white p-3 rounded-full text-black shadow-lg hover:scale-110 transition-transform"
              onClick={() => scrollLeft(index)}
            >
              <FaArrowLeft />
            </button>
            <h2 className="absolute text-2xl md:text-3xl font-bold text-white px-3 py-1 rounded-md">
              {destination.country}
            </h2>
            <button
              className="absolute right-4 bg-white p-3 rounded-full text-black shadow-lg hover:scale-110 transition-transform"
              onClick={() => scrollRight(index)}
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Cards container (fixed width) */}
          <div
            className={`overflow-hidden w-80 md:w-[900px] rounded-lg shadow-lg p-3`}
            // style={{ width: `${CONTAINER_WIDTH}px` }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${scrollPositions[index]}px)`,
              }}
            >
              {destination.packages.map((pkg, pkgIndex) => (
                <div
                  key={pkgIndex}
                  className="w-[320px] h-[320px] bg-gray-200 rounded-xl shadow-md flex flex-col justify-center items-center p-6 mx-3"
                >
                  <h3 className="text-xl font-semibold">{pkg.title}</h3>
                  <p className="text-gray-700 text-lg">{pkg.price}</p>
                  <p className="text-sm text-gray-500">{pkg.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelPackages;
