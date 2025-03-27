import React, { useState, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const destinations = [
  {
    country: "Spain",
    cimage:
      "https://images.unsplash.com/photo-1559386081-325882507af7?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    packages: [
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.5",
        price: "$240/Per Person",
        location: "Spain",
      },
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.6",
        price: "$300/Per Person",
        location: "Spain",
      },
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.5",
        price: "$220/Per Person",
        location: "Spain",
      },
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "3.8",
        price: "$260/Per Person",
        location: "Spain",
      },
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.9",
        price: "$280/Per Person",
        location: "Spain",
      },
    ],
  },
  {
    country: "Dubai",
    cimage:
      "https://plus.unsplash.com/premium_photo-1697729749013-d5263b662999?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
    packages: [
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "3.9",
        price: "$350/Per Person",
        location: "Dubai",
      },
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.4",
        price: "$400/Per Person",
        location: "Dubai",
      },
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.5",
        price: "$320/Per Person",
        location: "Dubai",
      },
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.7",
        price: "$300/Per Person",
        location: "Dubai",
      },
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.3",
        price: "$330/Per Person",
        location: "Dubai",
      },
    ],
  },
  {
    country: "Switzerland",
    cimage:
      "https://images.unsplash.com/photo-1573137785546-9d19e4f33f87?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
    packages: [
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.1",
        price: "$280/Per Person",
        location: "Switzerland",
      },
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.5",
        price: "$350/Per Person",
        location: "Switzerland",
      },
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.7",
        price: "$270/Per Person",
        location: "Switzerland",
      },
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.0",
        price: "$290/Per Person",
        location: "Switzerland",
      },
      {
        limage:
          "https://demo.egenslab.com/html/tourx/assets/images/destination/d-4.png",
        rating: "4.6",
        price: "$310/Per Person",
        location: "Switzerland",
      },
    ],
  },
];

const TravelPackages = () => {
  const [scrollPositions, setScrollPositions] = useState(
    destinations.map(() => 0)
  );
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(320);
  // Responsive logic to calculate visible cards
  const updateVisibleCards = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
      setVisibleCards(1);
      setCardWidth(320);
    } else if (screenWidth >= 900) {
      setVisibleCards(1);
      setCardWidth(320);
    } else {
      setVisibleCards(1);
      setCardWidth(240);
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const scrollLeft = (index) => {
    setScrollPositions((prev) =>
      prev.map((pos, i) =>
        i === index ? Math.max(pos - cardWidth * visibleCards, 0) : pos
      )
    );
  };

  const scrollRight = (index) => {
    const maxScroll =
      (destinations[index].packages.length - visibleCards) * cardWidth;

    setScrollPositions((prev) =>
      prev.map((pos, i) =>
        i === index ? Math.min(pos + cardWidth * visibleCards, maxScroll) : pos
      )
    );
  };

  return (
    <div className="container mx-auto space-y-16 px-4 md:px-10 py-10">
      {destinations.map((destination, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Country Image */}
          <div
            className="relative w-full h-24  md:w-1/3 aspect-square md:h-[340px] rounded-xl shadow-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${destination.cimage})` }}
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
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white rounded-full hover:scale-110 transition-transform"
              onClick={() => scrollLeft(index)}
            >
              <IoIosArrowDropleft size={48} />
            </button>
            <h2 className="absolute top-1/3 md:mt-10 left-1/2 md:-ml-10 -ml-16 text-2xl md:text-3xl font-bold text-white">
              {destination.country}
            </h2>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white rounded-full hover:scale-110 transition-transform"
              onClick={() => scrollRight(index)}
            >
              <IoIosArrowDropright size={48} />
            </button>
          </div>

          {/* Cards container */}
          <div className="overflow-hidden w-full md:w-5/6 rounded-lg shadow-sm p-3">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${scrollPositions[index]}px)`,
                width: `${cardWidth * destinations[index].packages.length}px`,
              }}
            >
              {destination.packages.map((pkg, pkgIndex) => (
                // <div
                //   key={pkgIndex}
                //   className="w-[250px] md:w-[320px] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform group hover:scale-[1.02]"
                // >
                <div
                  key={pkgIndex}
                  className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform group hover:scale-[1.02]"
                  style={{ width: `${cardWidth}px` }} // ✅ Dynamic card width
                >
                  {/* Image */}
                  <img
                    src={pkg.limage}
                    className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={pkg.location}
                  />

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2">
                    {/* Price */}
                    <p className="text-gray-900 text-lg font-semibold">
                      {pkg.price}
                    </p>

                    {/* Location */}
                    <p className="text-sm text-orange-500 flex items-center gap-2">
                      <FaLocationDot size={16} />
                      {pkg.location}
                    </p>

                    {/* Rating */}
                    <p className="text-md font-light text-gray-700 flex items-center gap-1">
                      <FaStar size={18} className="text-yellow-500" />
                      {pkg.rating} Rating
                    </p>

                    {/* Button */}
                    <button className="w-full mt-2 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition">
                      View Deal
                    </button>
                  </div>
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
