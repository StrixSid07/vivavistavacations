import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1554072675-66db59dba46f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Germany",
    description:
      "Berlin, Germany: Experience the beauty of Germany with amazing Beach Hotel, Luxury Resort experiences, breathtaking views, and unforgettable memories.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Spain",
    description:
      "Explore the sunny beaches, lively cities, and rich culture of Spain.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1499590206382-9f85678c0e3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Italy",
    description:
      "Visit the ancient ruins, scenic landscapes, and charming villages of Italy.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "France",
    description:
      "Discover the romantic streets of Paris and the scenic countryside of France.",
  },
];

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
    setFocused(false);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    setFocused(false);
  };

  const handleFocus = () => {
    setFocused(!focused);
  };

  const getSlidePosition = (index) => {
    if (index === currentIndex) return "z-10 scale-110";
    if (index === (currentIndex - 1 + slides.length) % slides.length)
      return "z-0 -translate-x-[35%] opacity-70";
    if (index === (currentIndex + 1) % slides.length)
      return "z-0 translate-x-[35%] opacity-70";
    return "hidden";
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden bg-gray-100 px-4 md:px-10">
      <div className="relative w-full h-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute transition-transform duration-700 ease-in-out ${getSlidePosition(
              index
            )} transform`}
          >
            <div
              className={`relative w-full max-w-4xl md:max-w-3xl sm:max-w-sm h-auto rounded-xl overflow-hidden shadow-xl 
              transition-transform duration-500 
              ${
                index === currentIndex && focused
                  ? "ring-4 ring-orange-500 scale-105"
                  : ""
              }`}
              onClick={handleFocus}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-[800px] h-[500px] object-cover cursor-pointer"
              />
              <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-black/90 to-white/5  p-4 md:p-8 flex flex-col justify-center text-white">
                <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold">
                  {slide.title}
                </h2>
                <p className="mt-4 text-lg w-full md:text-base sm:text-sm">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 bg-white text-gray-800 p-3 md:p-4 rounded-full shadow-xl hover:bg-gray-200 transition"
      >
        <FaArrowLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2 bg-white text-gray-800 p-3 md:p-4 rounded-full shadow-xl hover:bg-gray-200 transition"
      >
        <FaArrowRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "bg-orange-500 scale-125" : "bg-gray-500"
            } 
              transition-transform cursor-pointer w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
