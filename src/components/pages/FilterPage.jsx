import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImageGallery, FilterElement, FilterPageSlides } from "../elements";
import { filterimages } from "../contents/filterpage";

const FilterPage = () => {
  const [data, setData] = useState({
    basePrice: 479,
    departureDates: [],
    departureAirports: [],
  });

  useEffect(() => {
    // Replace with your actual API call
    axios.get("/api/get-travel-data").then((res) => {
      // Assume API returns { basePrice, departureDates, departureAirports }
      setData({
        basePrice: Number(res.data.basePrice) || 479,
        departureDates: res.data.departureDates || [],
        departureAirports: res.data.departureAirports || [],
      });
    });
  }, []);

  const handleBookingSubmit = (bookingData) => {
    console.log("Submitted Booking Data:", bookingData);
    // Further processing, e.g., API POST for booking
  };

  return (
    <div>
      <ImageGallery images={filterimages} />
      <div className="flex md:flex-row flex-col items-center justify-center md:items-start gap-8 md:justify-between md:p-24 p-4 mt-4 md:-mt-10">
        <FilterPageSlides />
        <FilterElement
          basePrice={data.basePrice}
          departureDates={
            data.departureDates?.length
              ? data.departureDates
              : ["1 Apr 2025 - £479", "2 Apr 2025 - £499", "3 Apr 2025 - £529"]
          }
          departureAirports={
            data.departureAirports?.length
              ? data.departureAirports
              : ["London Gatwick", "Manchester", "Birmingham"]
          }
          onBookingSubmit={handleBookingSubmit}
        />
      </div>
    </div>
  );
};

export default FilterPage;
