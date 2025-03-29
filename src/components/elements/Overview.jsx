import React from "react";
import { Flame, MapPin, Utensils, Ruler, Waves } from "lucide-react";

const Overview = ({tripData}) => {
  return (
    <div className="max-w-lg md:max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow-md rounded-xl">
      <h1 className="text-xl sm:text-2xl font-bold text-orange-500 flex items-center">
        {tripData.title}
      </h1>
      <p className="text-sm sm:text-base text-gray-700 mt-2">
        {tripData.description}
      </p>
      <p className="text-sm sm:text-base text-gray-600 mt-4">
        {tripData.overview}
      </p>

      <div className="mt-4 space-y-3 text-sm sm:text-base text-gray-700">
        <p className="flex items-center gap-2">
          <MapPin className="text-blue-500 w-4 h-4" />
          <strong>Destination:</strong> {tripData.destination.name},{" "}
          {tripData.destination.country}
        </p>
        <p className="flex items-center gap-2">
          <Utensils className="text-green-500 w-4 h-4" />
          <strong>Board Basis:</strong> {tripData.boardBasis}
        </p>
        <p className="flex items-center gap-2">
          <Ruler className="text-purple-500 w-4 h-4" />
          <strong>Distance to Center:</strong> {tripData.distanceToCenter}
        </p>
        <p className="flex items-center gap-2">
          <Waves className="text-teal-500 w-4 h-4" />
          <strong>Distance to Beach:</strong> {tripData.distanceToBeach}
        </p>
        {tripData.isTopDeal && (
          <p className="text-red-500 font-bold mt-2 flex items-center gap-2">
            <Flame className="text-red-500 w-5 h-5" /> Top Deal!
          </p>
        )}
      </div>
    </div>
  );
};

export default Overview;
