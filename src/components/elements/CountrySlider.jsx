// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "@material-tailwind/react";
// import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const TravelPackages = ({ destinations }) => {
//   console.log(destinations);
//   const navigate = useNavigate();
//   const handleViewDeals = (id) => {
//     navigate(`/deals/${id}`); // ✅ Navigate to deal details page
//   };
//   const [scrollPositions, setScrollPositions] = useState(
//     destinations.map(() => 0)
//   );
//   const [visibleCards, setVisibleCards] = useState(1);
//   const [cardWidth, setCardWidth] = useState(320);
//   const containerRefs = useRef([]);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);

//   const updateVisibleCards = () => {
//     const screenWidth = window.innerWidth;
//     if (screenWidth >= 1200) {
//       setVisibleCards(1);
//     } else if (screenWidth >= 900) {
//       setVisibleCards(1);
//     } else {
//       setVisibleCards(1);
//     }
//   };

//   useEffect(() => {
//     updateVisibleCards();
//     window.addEventListener("resize", updateVisibleCards);
//     return () => window.removeEventListener("resize", updateVisibleCards);
//   }, []);

//   const scrollLeftHandler = (index) => {
//     setScrollPositions((prev) =>
//       prev.map((pos, i) =>
//         i === index ? Math.max(pos - cardWidth * visibleCards, 0) : pos
//       )
//     );
//   };

//   const scrollRightHandler = (index) => {
//     const maxScroll =
//       (destinations[index].packages.length - visibleCards) * cardWidth;

//     setScrollPositions((prev) =>
//       prev.map((pos, i) =>
//         i === index ? Math.min(pos + cardWidth * visibleCards, maxScroll) : pos
//       )
//     );
//   };

//   const handleMouseDown = (index, e) => {
//     isDragging.current = true;
//     startX.current = e.pageX || e.touches[0].pageX;
//     scrollLeft.current = scrollPositions[index];
//   };

//   const handleMouseMove = (index, e) => {
//     if (!isDragging.current) return;
//     const x = e.pageX || e.touches[0].pageX;
//     const walk = startX.current - x;
//     setScrollPositions((prev) =>
//       prev.map((pos, i) =>
//         i === index ? Math.max(scrollLeft.current + walk, 0) : pos
//       )
//     );
//   };

//   const handleMouseUp = (index) => {
//     isDragging.current = false;
//     setScrollPositions((prev) =>
//       prev.map((pos, i) => {
//         if (i === index) {
//           const nearestCard = Math.round(pos / cardWidth) * cardWidth;
//           return Math.min(
//             Math.max(nearestCard, 0),
//             (destinations[i].packages.length - visibleCards) * cardWidth
//           );
//         }
//         return pos;
//       })
//     );
//   };

//   return (
//     <div className="container mx-auto space-y-16 px-0 md:px-10 py-10 select-none">
//       {destinations.map((destination, index) => (
//         <div
//           key={index}
//           className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
//             index % 2 !== 0 ? "md:flex-row-reverse" : ""
//           }`}
//         >
//           <div
//             className="relative w-full h-24 md:w-1/3 aspect-square md:h-[340px] rounded-xl shadow-xl bg-cover bg-center"
//             style={{ backgroundImage: `url(${destination.image})` }}
//           >
//             <button
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-white rounded-full hover:scale-110 transition-transform"
//               onClick={() => scrollLeftHandler(index)}
//             >
//               <IoIosArrowDropleft className="w-6 h-6 md:w-12 md:h-12" />
//             </button>
//             <h2 className="absolute inset-0 flex items-center justify-center text-lg md:text-3xl font-bold text-white text-center pointer-events-none">
//               {destination.name}
//             </h2>
//             <button
//               className="absolute right-4 top-1/2 -translate-y-1/2 text-white rounded-full hover:scale-110 transition-transform"
//               onClick={() => scrollRightHandler(index)}
//             >
//               <IoIosArrowDropright className="w-6 h-6 md:w-12 md:h-12" />
//             </button>
//           </div>
//           {/* <div
//             className="overflow-hidden w-full md:w-5/6 rounded-lg shadow-sm p-3 cursor-grab active:cursor-grabbing"
//             ref={(el) => (containerRefs.current[index] = el)}
//             onMouseDown={(e) => handleMouseDown(index, e)}
//             onMouseMove={(e) => handleMouseMove(index, e)}
//             onMouseUp={() => handleMouseUp(index)}
//             onMouseLeave={() => handleMouseUp(index)}
//             onTouchStart={(e) => handleMouseDown(index, e)}
//             onTouchMove={(e) => handleMouseMove(index, e)}
//             onTouchEnd={() => handleMouseUp(index)}
//           >
//             <div
//               className="flex gap-4 transition-transform ease-in-out"
//               style={{
//                 transform: `translateX(-${scrollPositions[index]}px)`,
//                 width: `${
//                   cardWidth * (destinations[index].packages.length + 1)
//                 }px`,
//                 transition: isDragging.current
//                   ? "none"
//                   : "transform 0.5s ease-out",
//               }}
//             >
//               {destination.packages.map((pkg, pkgIndex) => (
//                 <div
//                   key={pkgIndex}
//                   className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform group"
//                   style={{ width: `${cardWidth}px` }}
//                 >
//                   <img
//                     src={pkg.limage}
//                     className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     alt={pkg.location}
//                   />
//                   <div className="p-4 flex flex-col gap-2">
//                     <p className="text-gray-900 text-lg font-semibold">
//                       {pkg.price}
//                     </p>
//                     <p className="text-sm text-deep-orange-500 flex items-center gap-2">
//                       <FaLocationDot size={16} />
//                       {pkg.location}
//                     </p>
//                     <p className="text-md font-light text-gray-700 flex items-center gap-1">
//                       <FaStar size={18} className="text-amber-600" />
//                       {pkg.rating} Rating
//                     </p>
//                     <Button
//                       onClick={() => handleViewDeals(pkg.id)}
//                       className="w-full mt-2 bg-deep-orange-500 hover:bg-deep-orange-700 transition-all duration-500 ease-in-out text-white font-medium text-lg rounded-md"
//                     >
//                       View Deal
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//               <div style={{ width: `${cardWidth}px`, opacity: 0 }}></div>
//             </div>
//           </div> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TravelPackages;

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@material-tailwind/react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TravelPackages = ({ destinations }) => {
  const navigate = useNavigate();
  const handleViewDeals = (id) => {
    navigate(`/deals/${id}`); // ✅ Navigate to deal details page
  };

  const [scrollPositions, setScrollPositions] = useState(
    destinations.map(() => 0)
  );
  const [visibleCards, setVisibleCards] = useState(1);
  const [cardWidth, setCardWidth] = useState(320);
  const containerRefs = useRef([]);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const updateVisibleCards = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setVisibleCards(1);
    } else if (screenWidth >= 900) {
      setVisibleCards(1);
    } else {
      setVisibleCards(1);
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const scrollLeftHandler = (index) => {
    setScrollPositions((prev) =>
      prev.map((pos, i) =>
        i === index ? Math.max(pos - cardWidth * visibleCards, 0) : pos
      )
    );
  };

  const scrollRightHandler = (index) => {
    const maxScroll =
      (destinations[index].deals.length - visibleCards) * cardWidth;

    setScrollPositions((prev) =>
      prev.map((pos, i) =>
        i === index ? Math.min(pos + cardWidth * visibleCards, maxScroll) : pos
      )
    );
  };

  const handleMouseDown = (index, e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
    scrollLeft.current = scrollPositions[index];
  };

  const handleMouseMove = (index, e) => {
    if (!isDragging.current) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = startX.current - x;
    setScrollPositions((prev) =>
      prev.map((pos, i) =>
        i === index ? Math.max(scrollLeft.current + walk, 0) : pos
      )
    );
  };

  const handleMouseUp = (index) => {
    isDragging.current = false;
    setScrollPositions((prev) =>
      prev.map((pos, i) => {
        if (i === index) {
          const nearestCard = Math.round(pos / cardWidth) * cardWidth;
          return Math.min(
            Math.max(nearestCard, 0),
            (destinations[i].deals.length - visibleCards) * cardWidth
          );
        }
        return pos;
      })
    );
  };

  return (
    <div className="container mx-auto space-y-16 px-0 md:px-10 py-10 select-none">
      {destinations &&
        destinations.length > 0 &&
        destinations.map((destination, idx) => {
          // Use an if-statement to check if there are any deals; if not, return null
          if (!destination.deals || destination.deals.length === 0) return null;
          // Set a flex class based on whether the destination should be reversed
          const flexClass =
            "flex flex-col md:flex-row items-center justify-between gap-10" +
            (idx % 2 !== 0 ? " md:flex-row-reverse" : "");
          return (
            <div key={destination._id || idx} className={flexClass}>
              <div
                className="relative w-full h-24 md:w-1/3 aspect-square md:h-[340px] rounded-xl shadow-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white rounded-full hover:scale-110 transition-transform"
                  onClick={() => scrollLeftHandler(idx)}
                >
                  <IoIosArrowDropleft className="w-6 h-6 md:w-12 md:h-12" />
                </button>
                <h2 className="absolute inset-0 flex items-center justify-center text-lg md:text-3xl font-bold text-white text-center pointer-events-none">
                  {destination.name}
                </h2>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white rounded-full hover:scale-110 transition-transform"
                  onClick={() => scrollRightHandler(idx)}
                >
                  <IoIosArrowDropright className="w-6 h-6 md:w-12 md:h-12" />
                </button>
              </div>
              <div
                className="overflow-hidden w-full md:w-5/6 rounded-lg shadow-sm p-3 cursor-grab active:cursor-grabbing"
                ref={(el) => (containerRefs.current[idx] = el)}
                onMouseDown={(e) => handleMouseDown(idx, e)}
                onMouseMove={(e) => handleMouseMove(idx, e)}
                onMouseUp={() => handleMouseUp(idx)}
                onMouseLeave={() => handleMouseUp(idx)}
                onTouchStart={(e) => handleMouseDown(idx, e)}
                onTouchMove={(e) => handleMouseMove(idx, e)}
                onTouchEnd={() => handleMouseUp(idx)}
              >
                <div
                  className="flex gap-4 transition-transform ease-in-out"
                  style={{
                    transform: `translateX(-${scrollPositions[idx]}px)`,
                    width: `${cardWidth * (destination.deals.length + 1)}px`,
                    transition: isDragging.current
                      ? "none"
                      : "transform 0.5s ease-out",
                  }}
                >
                  {destination.deals.map((deal) => (
                    // <div
                    //   key={deal._id}
                    //   className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform group"
                    //   style={{ width: `${cardWidth}px` }}
                    // >
                    //   <img
                    //     src={deal.images[0]}
                    //     className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    //     alt={destination.name}
                    //   />
                    //   <div className="p-4 flex flex-col gap-2">
                    //     <p className="text-gray-900 text-lg font-semibold">
                    //       {deal.title}
                    //     </p>
                    //     <p className="text-sm text-deep-orange-500 flex items-center gap-2">
                    //       <FaLocationDot size={16} />
                    //       {destination.name}
                    //     </p>

                    //     <p className="text-md font-light text-gray-700 flex items-center gap-1">
                    //       <FaStar size={18} className="text-amber-600" />
                    //       {deal["Rating "] || "No"} Rating
                    //     </p>

                    //     <Button
                    //       onClick={() => handleViewDeals(deal._id)}
                    //       className="w-full mt-2 bg-deep-orange-500 hover:bg-deep-orange-700 transition-all duration-500 ease-in-out text-white font-medium text-lg rounded-md"
                    //     >
                    //       View Deal
                    //     </Button>
                    //   </div>
                    // </div>
                    <div
                      key={deal._id}
                      className="bg-gradient-to-t from-[#0073b4] to-white rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform group"
                      style={{ width: `${cardWidth}px`, minHeight: "400px" }} // Ensures uniform card height
                    >
                      <img
                        src={deal.images[0]}
                        className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        alt={destination.name}
                      />
                      <div className="p-4 flex flex-col gap-2 flex-grow">
                        <p className="text-white text-lg font-semibold line-clamp-2 h-12">
                          {deal.title}
                        </p>
                        <p className="text-lg text-deep-orange-700 flex items-center gap-2">
                          <FaLocationDot size={16} />
                          {destination.name}
                        </p>
                        <p className="text-md font-light text-white flex items-center gap-1">
                          <FaStar size={18} className="text-amber-600" />
                          {deal["Rating "] || "No"} Rating
                        </p>
                        <div className="flex-grow"></div>{" "}
                        {/* Push button to the bottom */}
                        <Button
                          onClick={() => handleViewDeals(deal._id)}
                          className="w-full mt-2 bg-deep-orange-500 hover:bg-deep-orange-700 transition-all duration-500 ease-in-out text-white font-medium text-lg rounded-md normal-case"
                        >
                          Discover More
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div style={{ width: `${cardWidth}px`, opacity: 0 }}></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TravelPackages;
