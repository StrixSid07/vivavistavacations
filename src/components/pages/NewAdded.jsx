// import React, { useState, useEffect } from "react";
// import { Carousel } from "@material-tailwind/react";
// import { NewAddedCardComponent } from "../elements";

// const NewAdded = ({ data }) => {
//   const getChunkSize = () => {
//     if (window.innerWidth >= 1024) return 3;
//     if (window.innerWidth >= 768) return 2;
//     return 1;
//   };

//   const [chunkSize, setChunkSize] = useState(getChunkSize());

//   useEffect(() => {
//     const handleResize = () => setChunkSize(getChunkSize());
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const chunkData = (arr, size) => {
//     const chunks = [];
//     for (let i = 0; i < arr.length; i += size) {
//       chunks.push(arr.slice(i, i + size));
//     }
//     return chunks;
//   };

//   const dataChunks = chunkData(data, chunkSize);
//   const [currentImageIndex, setCurrentImageIndex] = useState(
//     Array(data.length).fill(0)
//   );
//   const [loadedChunks, setLoadedChunks] = useState([dataChunks[0]]);
//   const [chunkIndex, setChunkIndex] = useState(0);

//   const nextImage = (index) => {
//     setCurrentImageIndex((prev) => {
//       const newIndex = [...prev];
//       newIndex[index] = (newIndex[index] + 1) % data[index].images.length;
//       return newIndex;
//     });
//   };

//   const prevImage = (index) => {
//     setCurrentImageIndex((prev) => {
//       const newIndex = [...prev];
//       newIndex[index] =
//         (newIndex[index] - 1 + data[index].images.length) %
//         data[index].images.length;
//       return newIndex;
//     });
//   };

//   useEffect(() => {
//     if (chunkIndex < dataChunks.length - 1) {
//       const loadNextChunk = () => {
//         setChunkIndex((prevIndex) => {
//           const newIndex = prevIndex + 1;
//           setLoadedChunks((prev) => [...prev, dataChunks[newIndex]]);
//           return newIndex;
//         });
//       };
//       if (chunkIndex >= loadedChunks.length - 1) {
//         loadNextChunk();
//       }
//     }
//   }, [chunkIndex, dataChunks, loadedChunks]);

//   return (
//     <Carousel
//       className="bg-gradient-to-t from-green-500 to-white py-10"
//       navigation={({ setActiveIndex, activeIndex, length }) => (
//         <div className="absolute bottom-2 left-2/4 flex -translate-x-2/4 gap-2">
//           {new Array(length).fill("").map((_, i) => (
//             <span
//               key={i}
//               className={`block h-1 cursor-pointer rounded-2xl transition-all ${
//                 activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//               }`}
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>
//       )}
//       loop
//       autoplay
//       showIndicators={false}
//       showThumbs={false}
//       showStatus={false}
//       infiniteLoop
//       swipeable
//       emulateTouch
//       transitionTime={2000}
//     >
//       {loadedChunks.map((chunk, chunkIndex) => (
//         <div
//           className={`flex justify-center w-full ${
//             chunkSize === 1 ? "flex-col" : "flex-row"
//           }`}
//           key={chunkIndex}
//         >
//           {chunk.map((property, index) => (
//             <div
//               className={`w-full ${
//                 chunkSize === 1
//                   ? "mb-4 px-16"
//                   : chunkSize === 2
//                   ? "w-1/2 px-16"
//                   : "w-1/3 px-16"
//               }`}
//               key={index}
//             >
//               <NewAddedCardComponent
//                 images={property.images}
//                 name={property.name}
//                 price={property.price}
//                 location={property.location}
//                 packageDays={property.packageDays}
//                 rating={property.rating}
//                 currentImage={currentImageIndex[index]}
//                 nextImage={() => nextImage(index)}
//                 prevImage={() => prevImage(index)}
//                 tag={property.tag}
//               />
//             </div>
//           ))}
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default NewAdded;

// import React, { useState, useEffect } from "react";
// import { Carousel } from "@material-tailwind/react";
// import { NewAddedCardComponent } from "../elements";

// const NewAdded = ({ data }) => {
//   // Determine how many cards to show per slide based on screen size
//   const getChunkSize = () => {
//     if (window.innerWidth >= 1024) return 3;
//     if (window.innerWidth >= 768) return 2;
//     return 1;
//   };

//   const [chunkSize, setChunkSize] = useState(getChunkSize());

//   useEffect(() => {
//     const handleResize = () => setChunkSize(getChunkSize());
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Helper to break data into chunks
//   const chunkData = (arr, size) => {
//     const chunks = [];
//     for (let i = 0; i < arr.length; i += size) {
//       chunks.push(arr.slice(i, i + size));
//     }
//     return chunks;
//   };

//   const dataChunks = chunkData(data, chunkSize);
//   const [currentImageIndex, setCurrentImageIndex] = useState(
//     Array(data.length).fill(0)
//   );

//   const nextImage = (index) => {
//     setCurrentImageIndex((prev) => {
//       const newIndex = [...prev];
//       newIndex[index] = (newIndex[index] + 1) % data[index].images.length;
//       return newIndex;
//     });
//   };

//   const prevImage = (index) => {
//     setCurrentImageIndex((prev) => {
//       const newIndex = [...prev];
//       newIndex[index] =
//         (newIndex[index] - 1 + data[index].images.length) %
//         data[index].images.length;
//       return newIndex;
//     });
//   };

//   return (
//     <Carousel
//       className="bg-gradient-to-t from-green-500 to-white py-10"
//       loop
//       autoplay
//       showIndicators={false}
//       showThumbs={false}
//       showStatus={false}
//       infiniteLoop
//       swipeable={true}
//       emulateTouch={true}
//       transitionTime={2000}
//     >
//       {dataChunks.map((chunk, chunkIndex) => (
//         <div
//           className={`flex justify-center w-full ${
//             chunkSize === 1 ? "flex-col" : "flex-row"
//           }`}
//           key={chunkIndex}
//         >
//           {chunk.map((property, index) => (
//             <div
//               // Use full width for each card within the slide
//               className={`w-full ${
//                 chunkSize === 1 ? "mb-4" : chunkSize === 2 ? "w-1/2" : "w-1/3"
//               }`}
//               key={index}
//             >
//               <NewAddedCardComponent
//                 images={property.images}
//                 name={property.name}
//                 price={property.price}
//                 location={property.location}
//                 packageDays={property.packageDays}
//                 rating={property.rating}
//                 currentImage={currentImageIndex[index]}
//                 nextImage={() => nextImage(index)}
//                 prevImage={() => prevImage(index)}
//                 tag={property.tag}
//               />
//             </div>
//           ))}
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default NewAdded;

import React, { useState, useEffect } from "react";
import { NewAddedCardComponent } from "../elements";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Correct import for Swiper v8+
import "swiper/css";

const NewAdded = ({ data }) => {
  const getChunkSize = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [chunkSize, setChunkSize] = useState(getChunkSize());

  useEffect(() => {
    const handleResize = () => setChunkSize(getChunkSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkData = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const dataChunks = chunkData(data, chunkSize);
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(data.length).fill(0)
  );

  const nextImage = (index) => {
    setCurrentImageIndex((prev) => {
      const newIndex = [...prev];
      newIndex[index] = (newIndex[index] + 1) % data[index].images.length;
      return newIndex;
    });
  };

  const prevImage = (index) => {
    setCurrentImageIndex((prev) => {
      const newIndex = [...prev];
      newIndex[index] =
        (newIndex[index] - 1 + data[index].images.length) %
        data[index].images.length;
      return newIndex;
    });
  };

  return (
    <div className="p-3 bg-gradient-to-t from-[#00AEEF] to-white flex justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]} // ✅ Use `modules` prop for Swiper v8+
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          slidesPerView={1}
          speed={2000}
          spaceBetween={20} // Default for mobile view
          breakpoints={{
            768: {
              // md and above (you can adjust the breakpoint)
              spaceBetween: 40,
            },
          }}
        >
          {dataChunks.map((chunk, chunkIndex) => (
            <SwiperSlide key={chunkIndex}>
              <div
                className={`flex justify-center items-center mx-auto md:gap-10 w-full ${
                  chunkSize === 1 ? "flex-col" : "flex-row"
                }`}
              >
                {chunk.map((property, index) => (
                  <div
                    key={index}
                    // Remove w-full so it doesn't stretch
                    // Add a max-w and mx-auto to center the card
                    className={`mx-auto ${
                      chunkSize === 1
                        ? "max-w-sm mb-4"
                        : chunkSize === 2
                        ? "w-1/2"
                        : "w-1/3"
                    }`}
                  >
                    <NewAddedCardComponent
                      id={property._id}
                      images={property.images}
                      name={property.title}
                      price={property.prices[0].price}
                      location={property.destination?.name}
                      // packageDays={property.packageDays}
                      rating={property["Rating "]}
                      currentImage={currentImageIndex[index]}
                      nextImage={() => nextImage(index)}
                      prevImage={() => prevImage(index)}
                      // tag={property.tag}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewAdded;
