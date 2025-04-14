import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ImageGallery2, FilterElement, FilterPageSlides } from "../elements";
import {
  MapPin,
  Tag,
  CalendarCheck,
  Hotel,
  Flame,
  Sparkles,
} from "lucide-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Base_Url } from "../../utils/Api";

const FilterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tripData, setTripData] = useState({});
  const [images, setImages] = useState([]);
  const [prices, setPrices] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [availableCountries, setAvailableCountries] = useState([]);
  const [exclusiveAdditions, setExclusiveAdditions] = useState([]);
  const [termsAndConditions, setTermsAndConditions] = useState([]);
  const [whatsIncluded, setWhatsIncluded] = useState([]);
  const [itinerary, setItinerary] = useState([]);
  const [loading, setLoading] = useState(true);
  const rating = hotels?.[0]?.tripAdvisorRating;
  const reviews = hotels?.[0]?.tripAdvisorReviews;
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedAirport, setSelectedAirport] = useState("");

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i + 1 <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-amber-500 text-sm" />);
      } else if (i < rating) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-amber-500 text-sm" />
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300 text-sm" />);
      }
    }

    return stars;
  };

  const [data, setData] = useState({
    basePrice: 479,
    departureDates: [],
    departureAirports: [],
  });

  // useEffect(() => {
  //   if (!id) return;
  //   axios
  //     .get(`${Base_Url}/deals/${id}`)
  //     .then((res) => {
  //       const data = res.data;

  //       // Map trip details
  //       setTripData({
  //         title: data.title,
  //         description: data.description,
  //         destination: data.destination,
  //         overview: data.description,
  //         boardBasis: data.boardBasis,
  //         distanceToCenter: `${data.distanceToCenter} km`,
  //         distanceToBeach: `${data.distanceToBeach} m`,
  //         isTopDeal: data.isTopDeal,
  //       });

  //       // Set images
  //       setImages(data.images || []);

  //       // Transform prices data
  //       setPrices(
  //         data.prices.map((price) => ({
  //           country: price.country,
  //           airport: price.airport,
  //           startdate: price.startdate,
  //           price: price.price,
  //           flightDetails: price.flightDetails, // Keeping flight details if needed
  //         }))
  //       );

  //       const itineraryData = [
  //         {
  //           day: 1,
  //           title: "Arrival & Hotel Check-in",
  //           description: `Arrive at ${data.destination.name} and check into your hotel.`,
  //           icon: <FaPlaneArrival className="text-[#FF6B6B] text-xl" />,
  //         },
  //         ...Array.from({ length: 3 }, (_, i) => ({
  //           day: i + 2,
  //           title: "Luxury Spa & Relaxation",
  //           description: "Enjoy a spa session with beautiful city views.",
  //           icon: <FaSpa className="text-[#FF6B6B] text-xl" />,
  //         })),
  //         {
  //           day: 5,
  //           title: "Departure",
  //           description: "Check out and head back home.",
  //           icon: <FaPlaneDeparture className="text-[#FF6B6B] text-xl" />,
  //         },
  //       ];

  //       setItinerary(itineraryData);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching data:", err);
  //       alert("This deal is no longer available."); // Show an alert
  //       navigate("/"); // Redirect to home page
  //     });
  // }, [id, navigate]);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`${Base_Url}/deals/${id}`)
      .then((res) => {
        const data = res.data;

        // Map trip details
        setTripData({
          title: data.title,
          tag: data.tag,
          description: data.description,
          destination: data.destination,
          boardBasis: data.boardBasis,
          distanceToCenter: `${data.distanceToCenter} km`,
          distanceToBeach: `${data.distanceToBeach} km`,
          isTopDeal: data.isTopDeal,
          isHotdeal: data.isHotdeal,
          days: data.days,
          rooms: data.rooms,
          guests: data.guests,
        });

        // Set images
        setImages(data.images || []);

        // Transform prices data
        setPrices(
          data.prices.map((price) => ({
            country: price.country,
            airport: price.airport,
            startdate: price.startdate,
            enddate: price.enddate,
            price: price.price,
            flightDetails: price.flightDetails,
          }))
        );

        // Set hotels array if exists
        if (data.hotels && Array.isArray(data.hotels)) {
          setHotels(
            data.hotels.map((hotel) => ({
              name: hotel.name,
              about: hotel.about,
              facilities: hotel.facilities,
              location: hotel.location,
              locationId: hotel.locationId,
              tripAdvisorRating: hotel.tripAdvisorRating,
              tripAdvisorReviews: hotel.tripAdvisorReviews,
              tripAdvisorPhotos: hotel.tripAdvisorPhotos,
              externalBookingLink: hotel.externalBookingLink,
              images: hotel.images,
              rooms: hotel.rooms,
              tripAdvisorLatestReviews: hotel.tripAdvisorLatestReviews,
              tripAdvisorLink: hotel.tripAdvisorLink,
            }))
          );
        }

        // Set available countries if exists
        if (data.availableCountries && Array.isArray(data.availableCountries)) {
          setAvailableCountries(data.availableCountries);
        }

        // Set exclusive additions if exists
        if (data.exclusiveAdditions && Array.isArray(data.exclusiveAdditions)) {
          setExclusiveAdditions(data.exclusiveAdditions);
        }

        // Set terms and conditions if exists
        if (data.termsAndConditions && Array.isArray(data.termsAndConditions)) {
          setTermsAndConditions(data.termsAndConditions);
        }

        // Set what's included if exists
        if (data.whatsIncluded && Array.isArray(data.whatsIncluded)) {
          setWhatsIncluded(data.whatsIncluded);
        }

        // Set itinerary if exists (note: your key is "iternatiy", so if that’s intentional, use that)
        if (data.itinerary && Array.isArray(data.itinerary)) {
          setItinerary(data.itinerary);
        }

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
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="z-50">
      <div className="">
        <div className="relative">
          {/* <h1 className="absolute bottom-0 z-30 left-0 text-lg text-white bg-black/40 w-1/2 p-2">
            <span className="flex justify-start ml-4 items-center gap-4">
              {" "}
              <FaLocationArrow size={24} />
              {tripData.title}
            </span>
          </h1> */}
          {/* <ImageGallery images={images} /> */}
          <ImageGallery2 images={images} />
        </div>
        <div className="bg-gray-100 rounded-xl max-w-5xl p-5 w-full mx-auto mt-6 shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative">
            {/* Top Deal Badge */}
            {tripData.isTopDeal && (
              <div className="absolute top-0 right-0 bg-yellow-500 text-sm font-semibold text-black px-4 py-1 rounded-bl-xl flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Top Deal
              </div>
            )}

            {/* Top Deal Badge */}
            {tripData.isHotdeal && (
              <div className="absolute top-0 right-0 bg-orange-400 text-sm font-semibold text-black px-4 py-1 rounded-bl-xl flex items-center gap-2">
                <Flame className="w-5 h-5" />
                Hot Deal
              </div>
            )}

            {/* Left Section */}
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
                <Hotel className="w-6 h-6 text-blue-500" />
                {tripData.title || "Trip Title"}
              </div>

              <div className="flex items-center gap-2 text-base text-gray-600">
                <CalendarCheck className="w-5 h-5 text-green-600" />
                {tripData.days || 0} Nights
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-base text-gray-600">
                <MapPin className="w-5 h-5 text-red-500" />
                {tripData.destination?.name || "Unknown Location"}
              </div>

              <div className="flex items-center gap-2 text-base text-gray-600">
                <Tag className="w-5 h-5 text-purple-500" />
                {tripData.tag || "General Package"}
              </div>
            </div>

            {/* Rating Section */}
            <div className="flex-1 flex flex-col mt-8 md:items-end gap-1">
              <div className="flex items-center gap-1">
                {rating ? (
                  <>
                    {renderStars()}
                    <span className="text-gray-800 text-base ml-1">
                      {rating.toFixed(1)} ({reviews} Reviews)
                    </span>
                  </>
                ) : (
                  <span className="text-base text-gray-500 italic">
                    No reviews yet
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center md:items-start gap-8 md:justify-between md:p-24 p-4 mt-4 md:-mt-10">
        <FilterPageSlides
          tripData={tripData}
          itinerary={itinerary}
          prices={prices}
          hotels={hotels}
          availableCountries={availableCountries}
          exclusiveAdditions={exclusiveAdditions}
          termsAndConditions={termsAndConditions}
          whatsIncluded={whatsIncluded}
          selectedTrip={selectedTrip}
          setSelectedTrip={setSelectedTrip}
          setSelectedDate={setSelectedDate}
          setSelectedAirport={setSelectedAirport}
        />
        <FilterElement
          basePrice={
            selectedTrip?.price || (prices.length ? prices[0].price : 0)
          }
          departureDates={prices.map((p) =>
            new Date(p.startdate).toLocaleDateString("en-GB")
          )}
          departureAirports={prices.map((p) => p.airport)}
          selectedDate={selectedDate} // Pass selected date
          selectedAirport={selectedAirport} // Pass selected airport
          onBookingSubmit={handleBookingSubmit}
          onDateChange={setSelectedDate} // renamed prop
          onAirportChange={setSelectedAirport}
        />
      </div>
    </div>
  );
};

export default FilterPage;
