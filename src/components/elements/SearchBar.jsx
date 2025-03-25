import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative bg-[#3C4C46]/95 px-8 md:px-32 py-6 md:py-10 rounded-xl md:max-w-7xl w-[300px] md:w-auto mx-auto -mt-16 shadow-lg">
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-4">
        {/* Departure Airport */}
        <select className="w-full md:w-48 px-3 py-2 md:px-4 md:py-3 bg-white border border-orange-500 text-orange-600 rounded-md">
          <option>Departure Airport</option>
          <option>New York (JFK)</option>
          <option>London (LHR)</option>
          <option>Dubai (DXB)</option>
          <option>Tokyo (NRT)</option>
        </select>

        {/* Destination */}
        <select className="w-full md:w-48 px-3 py-2 md:px-4 md:py-3 bg-white border border-orange-500 text-orange-600 rounded-md">
          <option>Destination</option>
          <option>Paris (CDG)</option>
          <option>Sydney (SYD)</option>
          <option>Singapore (SIN)</option>
          <option>Bangkok (BKK)</option>
        </select>

        {/* Check-in Date */}
        <input
          type="date"
          className="w-full md:w-40 px-3 py-2 md:px-4 md:py-3 bg-white border border-orange-500 text-orange-600 rounded-md"
        />

        {/* Check-Out Date */}
        <input
          type="date"
          className="w-full md:w-40 px-3 py-2 md:px-4 md:py-3 bg-white border border-orange-500 text-orange-600 rounded-md"
        />

        {/* Rooms & Guests */}
        <select className="w-full md:w-48 px-3 py-2 md:px-4 md:py-3 bg-white border border-orange-500 text-orange-600 rounded-md">
          <option>Rooms & Guests</option>
          <option>1 Room, 2 Guests</option>
          <option>2 Rooms, 4 Guests</option>
          <option>3 Rooms, 6 Guests</option>
        </select>

        {/* Search Button */}
        <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 md:px-6 md:py-3 rounded-md">
          <FaSearch size={16} />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
