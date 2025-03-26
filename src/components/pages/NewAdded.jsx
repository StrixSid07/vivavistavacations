//src\components\pages\NewAdded.jsx

import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import { NewAddedCardComponent } from "../elements";

const NewAdded = () => {
  const data = [
    {
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop",
        "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1934&auto=format&fit=crop",
      ],
      name: "Maldives Island Escape",
      price: "1,500",
      location: "Maldives",
      packageDays: "5 Days / 4 Nights",
      rating: "4.8",
      tag: "Best Seller",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1597870386906-c1e07a6b372d?q=80&w=1934&auto=format&fit=crop",
      ],
      name: "Swiss Alps Adventure",
      price: "2,200",
      location: "Switzerland",
      packageDays: "7 Days / 6 Nights",
      rating: "4.9",
      tag: "Luxury Package",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1704149394002-e719fd0ff19e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593821385740-4b5fba2cd0c1?q=80&w=1974&auto=format&fit=crop",
      ],
      name: "Bali Beach Retreat",
      price: "1,200",
      location: "Bali, Indonesia",
      packageDays: "6 Days / 5 Nights",
      rating: "4.7",
      tag: "Popular Choice",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1549045337-a9e207d164e4?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1567446536435-85c8c2898a54?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543340901-d01a17e20c93?q=80&w=2070&auto=format&fit=crop",
      ],
      name: "Tokyo City Lights",
      price: "2,000",
      location: "Tokyo, Japan",
      packageDays: "5 Days / 4 Nights",
      rating: "4.6",
      tag: "Cultural Experience",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1514898657509-786fabc5e37e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
      ],
      name: "Santorini Sunset Escape",
      price: "1,800",
      location: "Santorini, Greece",
      packageDays: "5 Days / 4 Nights",
      rating: "4.9",
      tag: "Romantic Getaway",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1586671280535-3e2212d2eb91?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1565701420931-0254cf229aae?q=80&w=2070&auto=format&fit=crop",
      ],
      name: "African Safari Adventure",
      price: "3,500",
      location: "Kenya",
      packageDays: "8 Days / 7 Nights",
      rating: "4.9",
      tag: "Wildlife Tour",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1565127815099-506250229f28?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571433708994-2b47fcbf97c3?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584990024477-d615baaae490?q=80&w=2070&auto=format&fit=crop",
      ],
      name: "Paris Dream Vacation",
      price: "2,700",
      location: "Paris, France",
      packageDays: "6 Days / 5 Nights",
      rating: "4.8",
      tag: "Iconic Destinations",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1603308578012-d5f2a0790f4a?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541410616134-29d246190397?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1601205153463-c92d40a34fdf?q=80&w=2070&auto=format&fit=crop",
      ],
      name: "Dubai Luxury Stay",
      price: "4,000",
      location: "Dubai, UAE",
      packageDays: "7 Days / 6 Nights",
      rating: "5.0",
      tag: "Exclusive Deal",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1561839554-fb0a97afed9b?q=80&w=2070&auto=format&fit=crop",
      ],
      name: "New York City Lights",
      price: "2,300",
      location: "New York, USA",
      packageDays: "4 Days / 3 Nights",
      rating: "4.7",
      tag: "City Explorer",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1535359056830-d4badde79743?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1588495949018-243d9b1c76a6?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516747773441-f863f2358e8e?q=80&w=2070&auto=format&fit=crop",
      ],
      name: "Sydney Beach Escape",
      price: "2,100",
      location: "Sydney, Australia",
      packageDays: "5 Days / 4 Nights",
      rating: "4.8",
      tag: "Beach Lover's Paradise",
    },
  ];

  // Determine the chunk size based on the screen width
  const getChunkSize = () => {
    if (window.innerWidth >= 1024) return 3; // Large screens: 3 cards
    if (window.innerWidth >= 768) return 2; // Tablet screens: 2 cards
    return 1; // Mobile screens: 1 card
  };

  const [chunkSize, setChunkSize] = useState(getChunkSize());

  useEffect(() => {
    // Update chunk size on window resize
    const handleResize = () => {
      setChunkSize(getChunkSize());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to chunk the data into groups based on the chunk size
  const chunkData = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Chunking the data based on the screen size
  const dataChunks = chunkData(data, chunkSize);

  const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(data.length).fill(0)
  );

  const [loadedChunks, setLoadedChunks] = useState([dataChunks[0]]);
  const [chunkIndex, setChunkIndex] = useState(0);

  const nextImage = (index) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = [...prevIndex];
      newIndex[index] = (newIndex[index] + 1) % data[index].images.length;
      return newIndex;
    });
  };

  const prevImage = (index) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = [...prevIndex];
      newIndex[index] =
        (newIndex[index] - 1 + data[index].images.length) %
        data[index].images.length;
      return newIndex;
    });
  };

  // Lazy load the next chunk
  useEffect(() => {
    if (chunkIndex < dataChunks.length - 1) {
      const handleLoadNextChunk = () => {
        setChunkIndex((prevChunkIndex) => {
          const newChunkIndex = prevChunkIndex + 1;
          setLoadedChunks((prevChunks) => [
            ...prevChunks,
            dataChunks[newChunkIndex],
          ]);
          return newChunkIndex;
        });
      };

      // Load next chunk after current chunk is fully viewed
      if (chunkIndex >= loadedChunks.length - 1) {
        handleLoadNextChunk();
      }
    }
  }, [chunkIndex, dataChunks, loadedChunks]);

  return (
    <Carousel
      className="bg-gradient-to-t from-green-500 to-white py-8"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-2 left-2/4 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      loop={true}
      autoplay={true}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      swipeable
      emulateTouch
      transitionTime={2000}
    >
      {loadedChunks.map((chunk, chunkIndex) => (
        <div
          className={`flex justify-center w-full ${
            chunkSize === 1 ? "flex-col" : "flex-row"
          }`}
          key={chunkIndex}
        >
          {chunk.map((property, index) => (
            <div
              className={`w-full ${
                chunkSize === 1
                  ? "mb-4 px-16" 
                  : chunkSize === 2
                  ? "w-1/2 px-16" 
                  : "w-1/3 px-16" 
              }`}
              key={index}
            >
              <NewAddedCardComponent
                images={property.images}
                name={property.name}
                price={property.price}
                location={property.location} 
                packageDays={property.packageDays}
                rating={property.rating}
                currentImage={currentImageIndex[index]}
                nextImage={() => nextImage(index)}
                prevImage={() => prevImage(index)}
                tag={property.tag}
              />
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default NewAdded;
