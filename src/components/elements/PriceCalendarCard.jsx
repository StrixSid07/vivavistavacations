import React from "react";
import { format } from "date-fns";
import { Card, CardBody, CardHeader, Button } from "@material-tailwind/react";

const PriceCalendar = ({ prices, onTripSelect }) => {
  const getFilteredPrices = () => {
    const uniqueCountries = [...new Set(prices.map((p) => p.country))];
    return uniqueCountries.length === 1
      ? prices
      : prices.filter((p) => p.country === "UK");
  };

  const filteredPrices = getFilteredPrices();

  return (
    <div className="space-y-6">
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
            <p className="text-deep-orange-500 font-bold text-lg">
              £{trip.price}
            </p>
          </CardHeader>

          <CardBody className="p-4 space-y-3">
            <p className="text-gray-700">
              <strong>Departure Date:</strong>{" "}
              {trip.startdate
                ? format(new Date(trip.startdate), "dd MMM yyyy")
                : "Date not available"}
            </p>
            <p className="text-gray-700">
              <strong>Airport:</strong> {trip.airport}
            </p>

            <Button
              onClick={() => onTripSelect(trip)}
              className="w-full bg-[#F56600] hover:bg-[#e05c00] text-white"
            >
              Select This Trip
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default PriceCalendar;
