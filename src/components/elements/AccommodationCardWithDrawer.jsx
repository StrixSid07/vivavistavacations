import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Hotel } from "lucide-react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const AccommodationCard = ({ hotel }) => {
  const rating = hotel.tripAdvisorRating;
  const reviews = hotel.tripAdvisorReviews;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

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

  return (
    <div className="bg-white rounded-xl p-4 shadow-md flex flex-col w-80 mr-4 shrink-0">
      {/* Hotel Header */}
      <div className="flex items-center gap-2 mb-2">
        <Hotel className="w-6 h-6 text-blue-500" />
        <h2 className="text-lg font-semibold text-gray-800">
          {hotel.name || "Hotel Name"}
        </h2>
      </div>
      {/* Short description */}
      <p className="text-sm text-gray-600 mb-3">
        {hotel.about
          ? hotel.about.substring(0, 150) + "..."
          : "No description available."}
      </p>
      {/* Rating Section */}
      <div className="flex items-center gap-1 mb-4">
        {rating ? (
          <>
            {renderStars()}
            <span className="text-gray-800 text-base ml-1">
              {rating.toFixed(1)} ({reviews} Reviews)
            </span>
          </>
        ) : (
          <span className="text-base text-gray-500 italic">No reviews yet</span>
        )}
      </div>
      {/* View More Button */}
      <Button size="sm" onClick={openDrawer}>
        View More
      </Button>

      {/* Drawer for Hotel Details */}
      <Drawer
        placement="right"
        open={drawerOpen}
        onClose={closeDrawer}
        className="p-4 pt-28 pb-4 z-[9999]"
        size={600}
        dismiss={{ outsidePress: true, escapeKey: false }}
        overlay={true}
      >
        {/* Scrollable content container */}
        <div className="overflow-y-auto h-full pr-2">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {hotel.name}
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <Typography color="gray" className="mb-4 pr-4 font-normal">
            {hotel.about || "No description available."}
          </Typography>

          {/* Facilities */}
          <div className="mb-4">
            <Typography variant="h6" color="gray">
              Facilities:
            </Typography>
            {hotel.facilities && hotel.facilities.length > 0 ? (
              <ul className="list-disc pl-5 text-gray-700">
                {hotel.facilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <Typography color="gray">No facilities available.</Typography>
            )}
          </div>

          {/* Location */}
          <div className="mb-4">
            <Typography variant="h6" color="gray">
              Location:
            </Typography>
            <Typography color="gray">
              {hotel.location || "Location not provided."}
            </Typography>
          </div>

          {/* External Booking Link */}
          {hotel.externalBookingLink && (
            <div className="mb-4">
              <Typography variant="h6" color="gray">
                Booking:
              </Typography>
              <a
                href={hotel.externalBookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Book Now
              </a>
            </div>
          )}

          {/* Hotel Images */}
          {hotel.images && hotel.images.length > 0 && (
            <div className="mb-4">
              <Typography variant="h6" color="gray">
                Hotel Images:
              </Typography>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {hotel.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Hotel Image ${idx + 1}`}
                    className="rounded-lg w-full object-cover max-h-40"
                  />
                ))}
              </div>
            </div>
          )}

          {/* TripAdvisor Photos */}
          {hotel.tripAdvisorPhotos && hotel.tripAdvisorPhotos.length > 0 && (
            <div className="mb-4">
              <Typography variant="h6" color="gray">
                TripAdvisor Photos:
              </Typography>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {hotel.tripAdvisorPhotos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`TripAdvisor Photo ${index + 1}`}
                    className="rounded-lg w-full object-cover max-h-40"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Room Types */}
          {hotel.rooms && hotel.rooms.length > 0 && (
            <div className="mb-4">
              <Typography variant="h6" color="gray">
                Room Options:
              </Typography>
              <ul className="pl-5 text-gray-700 list-disc">
                {hotel.rooms.map((room, idx) => (
                  <li key={idx}>
                    {room.numberofrooms} rooms for {room.guestCapacity} guest(s)
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Latest Reviews */}
          {hotel.tripAdvisorLatestReviews &&
            hotel.tripAdvisorLatestReviews.length > 0 && (
              <div className="mb-4">
                <Typography variant="h6" color="gray">
                  Latest Reviews:
                </Typography>
                <ul className="pl-4 mt-2 space-y-2">
                  {hotel.tripAdvisorLatestReviews.map((rev, i) => (
                    <li
                      key={i}
                      className="border-l-4 pl-3 border-blue-500 text-sm text-gray-700"
                    >
                      <p>"{rev.review}"</p>
                      <p className="text-yellow-600">Rating: {rev.rating}/5</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* TripAdvisor Link */}
          {hotel.tripAdvisorLink && (
            <div className="mb-4">
              <Typography variant="h6" color="gray">
                TripAdvisor:
              </Typography>
              <a
                href={hotel.tripAdvisorLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on TripAdvisor
              </a>
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default AccommodationCard;
