import React from "react";
import { format } from "date-fns";
import { Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import CalendarView from "./CalendarView";

const PriceCalendar = ({
  prices,
  onTripSelect,
  departureDates,
  departureAirports,
  selectedAirport,
  priceMap,
  setLedprice,
  priceswitch
}) => {
  const getFilteredPrices = () => {
    const uniqueCountries = [...new Set(prices.map((p) => p.country))];
    return uniqueCountries.length === 1
      ? prices
      : prices.filter((p) => p.country === "UK");
  };

  const filteredPrices = getFilteredPrices();
  console.log("this is filter data of card", filteredPrices);

  return (
    <div className="space-y-8 md:px-0">
      <div className="text-center mb-4">
        <h2 className="text-xl md:text-4xl font-extrabold text-gray-900">
          Choose Your Perfect Trip
        </h2>
        <p className="mt-2 text-gray-600">
          Select a departure date and airport to see your best price.
        </p>
        <div className="flex">
        {priceswitch ? (
    <p className="text-red-600 font-semibold">
      Please contact the Viva Vista team to get the date and price of the current deal.
    </p>
  ) : (
    <CalendarView
      departureDates={departureDates}
      departureAirports={departureAirports}
      priceMap={priceMap}
      selectedAirport={selectedAirport}
    />
  )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredPrices.map((trip, idx) => (
          <Card
            key={idx}
            className="group transform transition-transform hover:scale-[1.02] shadow-lg hover:shadow-2xl border border-gray-200 rounded-2xl overflow-hidden"
          >
            <CardHeader
              floated={false}
              shadow={false}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-6"
            >
              {/* <h3 className="text-2xl font-semibold">
                {trip.country} — {trip.airport}
              </h3> */}
              <p className="mt-1 text-3xl font-bold tracking-tight">
                £{trip.price}
              </p>
            </CardHeader>

            <CardBody className="p-6 space-y-4 bg-white">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Departure:</span>
                <span className="text-gray-900">
                  {trip.startdate
                    ? format(new Date(trip.startdate), "dd MMM yyyy")
                    : "TBA"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Airport:</span>
                <span className="text-gray-900">{trip.airport[0].code}</span>
              </div>
            </CardBody>

            <div className="p-6 bg-gray-50">
              <Button
                onClick={() => onTripSelect(trip)}
                className="w-full py-3 font-semibold normal-case tracking-wide transition-colors duration-500 ease-in-out bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700"
              >
                Select This Trip
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PriceCalendar;
