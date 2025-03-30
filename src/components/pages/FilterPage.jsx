import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ImageGallery, FilterElement, FilterPageSlides } from "../elements";
import { FaPlaneArrival, FaSpa, FaPlaneDeparture } from "react-icons/fa";
import { Base_Url } from "../../utils/Api";

const FilterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tripData, setTripData] = useState(null);
  const [itinerary, setItinerary] = useState([]);
  const [prices, setPrices] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
    basePrice: 479,
    departureDates: [],
    departureAirports: [],
  });

  useEffect(() => {
    if (!id) return;
    axios
      .get(`${Base_Url}/deals/${id}`)
      .then((res) => {
        const data = res.data;

        // Map trip details
        setTripData({
          title: data.title,
          description: data.description,
          destination: data.destination,
          overview: data.description,
          boardBasis: data.boardBasis,
          distanceToCenter: `${data.distanceToCenter} km`,
          distanceToBeach: `${data.distanceToBeach} m`,
          isTopDeal: data.isTopDeal,
        });

        // Set images
        setImages(data.images || []);

        // Transform prices data
        setPrices(
          data.prices.map((price) => ({
            country: price.country,
            airport: price.airport,
            date: price.date,
            price: price.price,
            flightDetails: price.flightDetails, // Keeping flight details if needed
          }))
        );

        const itineraryData = [
          {
            day: 1,
            title: "Arrival & Hotel Check-in",
            description: `Arrive at ${data.destination.name} and check into your hotel.`,
            icon: <FaPlaneArrival className="text-[#FF6B6B] text-xl" />,
          },
          ...Array.from({ length: 3 }, (_, i) => ({
            day: i + 2,
            title: "Luxury Spa & Relaxation",
            description: "Enjoy a spa session with beautiful city views.",
            icon: <FaSpa className="text-[#FF6B6B] text-xl" />,
          })),
          {
            day: 5,
            title: "Departure",
            description: "Check out and head back home.",
            icon: <FaPlaneDeparture className="text-[#FF6B6B] text-xl" />,
          },
        ];

        setItinerary(itineraryData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        alert("This deal is no longer available."); // Show an alert
        navigate("/"); // Redirect to home page
      });
  }, [id, navigate]);

  const handleBookingSubmit = (bookingData) => {
    console.log("Submitted Booking Data:", bookingData);
    // Further processing, e.g., API POST for booking
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div>
      <div className="">
        <div className="relative">
          <h1 className="absolute bottom-0 z-30 left-4 text-lg text-white bg-black/40 w-1/2">
            {tripData.title}
          </h1>
          {/* <ImageGallery images={images} /> */}
          <ImageGallery
            images={images.map(
              (img) => `https://vivavista-backend.onrender.com/uploads/${img}`
            )}
          />
        </div>
      </div>
      {/* <ImageGallery
        images={images.map((img) => `http://localhost:5001/uploads/${img}`)}
      /> */}
      <div className="flex md:flex-row flex-col items-center justify-center md:items-start gap-8 md:justify-between md:p-24 p-4 mt-4 md:-mt-10">
        <FilterPageSlides
          tripData={tripData}
          itinerary={itinerary}
          prices={prices}
        />
        {/* Filter Element */}
        <FilterElement
          basePrice={prices.length ? prices[0].price : 479}
          departureDates={prices.map((p) =>
            new Date(p.date).toLocaleDateString("en-GB")
          )}
          departureAirports={prices.map((p) => p.airport)}
          onBookingSubmit={handleBookingSubmit}
        />
      </div>
    </div>
  );
};

export default FilterPage;
