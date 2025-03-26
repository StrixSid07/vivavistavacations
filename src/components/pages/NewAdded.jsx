//src\components\pages\NewAdded.jsx

import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import { NewAddedCardComponent } from "../elements";

const NewAdded = () => {
  const data = [
    {
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Eagle Apartments",
      price: "$275,000 • $520 / sq ft",
      address: "9364 School St. Lynchburg, NY",
      area: "530 sq ft",
      bedrooms: "2",
      bathrooms: "1",
      daysAgo: "1",
      tag: "For Sale",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1597870386906-c1e07a6b372d?q=80&w=1934&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Eagle Apartments",
      price: "$275,000 • $520 / sq ft",
      address: "9364 School St. Lynchburg, NY",
      area: "530 sq ft",
      bedrooms: "2",
      bathrooms: "1",
      daysAgo: "1",
      tag: "For Sale",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1704149394002-e719fd0ff19e?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1593821385740-4b5fba2cd0c1?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Sunset Villa",
      price: "$350,000 • $610 / sq ft",
      address: "1234 Sunset Blvd, Los Angeles, CA",
      area: "574 sq ft",
      bedrooms: "3",
      bathrooms: "2",
      daysAgo: "3",
      tag: "For Rent",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600585154340-be6161b32f33?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Ocean View Estate",
      price: "$480,000 • $720 / sq ft",
      address: "5678 Ocean Drive, Miami, FL",
      area: "667 sq ft",
      bedrooms: "4",
      bathrooms: "3",
      daysAgo: "7",
      tag: "New Property",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1618227775360-22f9c053aaf3?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600607681343-0c9af94f14d6?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Mountain Retreat",
      price: "$600,000 • $950 / sq ft",
      address: "7890 Mountain Rd, Aspen, CO",
      area: "632 sq ft",
      bedrooms: "3",
      bathrooms: "2",
      daysAgo: "10",
      tag: "For Sale",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Eagle Apartments",
      price: "$275,000 • $520 / sq ft",
      address: "9364 School St. Lynchburg, NY",
      area: "530 sq ft",
      bedrooms: "2",
      bathrooms: "1",
      daysAgo: "1",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1535007135893-61091db8c179?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1593821385740-4b5fba2cd0c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Sunset Villa",
      price: "$350,000 • $610 / sq ft",
      address: "1234 Sunset Blvd, Los Angeles, CA",
      area: "574 sq ft",
      bedrooms: "3",
      bathrooms: "2",
      daysAgo: "3",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600585154340-be6161b32f33?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Ocean View Estate",
      price: "$480,000 • $720 / sq ft",
      address: "5678 Ocean Drive, Miami, FL",
      area: "667 sq ft",
      bedrooms: "4",
      bathrooms: "3",
      daysAgo: "7",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1618227775360-22f9c053aaf3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600607681343-0c9af94f14d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Mountain Retreat",
      price: "$600,000 • $950 / sq ft",
      address: "7890 Mountain Rd, Aspen, CO",
      area: "632 sq ft",
      bedrooms: "3",
      bathrooms: "2",
      daysAgo: "10",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Eagle Apartments",
      price: "$275,000 • $520 / sq ft",
      address: "9364 School St. Lynchburg, NY",
      area: "530 sq ft",
      bedrooms: "2",
      bathrooms: "1",
      daysAgo: "1",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1572120360610-d971b9b7a082?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1593821385740-4b5fba2cd0c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Sunset Villa",
      price: "$350,000 • $610 / sq ft",
      address: "1234 Sunset Blvd, Los Angeles, CA",
      area: "574 sq ft",
      bedrooms: "3",
      bathrooms: "2",
      daysAgo: "3",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600585154340-be6161b32f33?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Ocean View Estate",
      price: "$480,000 • $720 / sq ft",
      address: "5678 Ocean Drive, Miami, FL",
      area: "667 sq ft",
      bedrooms: "4",
      bathrooms: "3",
      daysAgo: "7",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1618227775360-22f9c053aaf3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600607681343-0c9af94f14d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Mountain Retreat",
      price: "$600,000 • $950 / sq ft",
      address: "7890 Mountain Rd, Aspen, CO",
      area: "632 sq ft",
      bedrooms: "3",
      bathrooms: "2",
      daysAgo: "10",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Eagle Apartments",
      price: "$275,000 • $520 / sq ft",
      address: "9364 School St. Lynchburg, NY",
      area: "530 sq ft",
      bedrooms: "2",
      bathrooms: "1",
      daysAgo: "1",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1572120360610-d971b9b7a082?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1593821385740-4b5fba2cd0c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Sunset Villa",
      price: "$350,000 • $610 / sq ft",
      address: "1234 Sunset Blvd, Los Angeles, CA",
      area: "574 sq ft",
      bedrooms: "3",
      bathrooms: "2",
      daysAgo: "3",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600585154340-be6161b32f33?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Ocean View Estate",
      price: "$480,000 • $720 / sq ft",
      address: "5678 Ocean Drive, Miami, FL",
      area: "667 sq ft",
      bedrooms: "4",
      bathrooms: "3",
      daysAgo: "7",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1618227775360-22f9c053aaf3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600607681343-0c9af94f14d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      name: "Mountain Retreat",
      price: "$600,000 • $950 / sq ft",
      address: "7890 Mountain Rd, Aspen, CO",
      area: "632 sq ft",
      bedrooms: "3",
      bathrooms: "2",
      daysAgo: "10",
    },
  ];

  // Determine the chunk size based on the screen width
  const getChunkSize = () => {
    if (window.innerWidth >= 1024) return 4; // Large screens: 3 cards
    if (window.innerWidth >= 768) return 3; // Tablet screens: 2 cards
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
      transitionTime={500}
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
                  ? "mb-4 px-16" // Mobile: Full width and vertical alignment
                  : chunkSize === 2
                  ? "w-1/2 px-16" // Tablet: Half width
                  : "w-1/3 px-16" // Large screen: One-third width
              }`}
              key={index}
            >
              <NewAddedCardComponent
                images={property.images}
                name={property.name}
                price={property.price}
                address={property.address}
                area={property.area}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                daysAgo={property.daysAgo}
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
