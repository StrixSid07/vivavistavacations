import React, { useState } from "react";
import { format } from "date-fns";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";

const PriceCalendar = ({ prices }) => {
  const getFilteredPrices = () => {
    const uniqueCountries = [...new Set(prices.map((p) => p.country))];

    // If only one country exists, return all its prices, else return only UK
    return uniqueCountries.length === 1
      ? prices
      : prices.filter((p) => p.country === "UK");
  };

  const [selectedDate, setSelectedDate] = useState(prices[0]?.date || "");
  const filteredPrices = getFilteredPrices();

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Select Your Trip</h2>
      </div>

      {filteredPrices.map((trip, index) => (
        <Card
          key={index}
          className="shadow-md border border-gray-200 rounded-xl"
        >
          <CardHeader
            floated={false}
            shadow={false}
            className="text-center p-4 bg-gray-50 rounded-t-xl"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              {trip.country} - {trip.airport}
            </h3>
            <p className="text-deep-orange-500 font-bold text-lg">£{trip.price}</p>
          </CardHeader>

          <CardBody className="p-4">
            <p className="text-gray-700">
              <strong>Departure Date:</strong>{" "}
              {format(new Date(trip.date), "dd MMM yyyy")}
            </p>
            <p className="text-gray-700">
              <strong>Airport:</strong> {trip.airport}
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default PriceCalendar;
