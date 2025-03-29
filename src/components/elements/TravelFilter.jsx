import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import {
  Button,
  Input,
  Checkbox,
  Select,
  Option,
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

const travelDeals = [
  {
    id: 1,
    location: "Venice, Italy",
    title: "2 Nights Romantic Venice Retreat with Flights",
    price: 129,
    board: "Bed & Breakfast",
    hotelType: "Romantic Hotel",
    rating: 4,
    images: ["https://placehold.co/300x200"],
  },
  {
    id: 2,
    location: "Paris, France",
    title: "Romantic Paris Getaway with Deluxe Stay & Flights",
    price: 129,
    board: "Bed & Breakfast",
    hotelType: "City Hotel",
    rating: 4,
    images: ["https://placehold.co/200x200"],
  },
  {
    id: 3,
    location: "Berlin, Germany",
    title: "3 Nights 4-Star Berlin City Break with Flights",
    price: 179,
    board: "Bed & Breakfast",
    hotelType: "City Hotel",
    rating: 4,
    images: ["https://placehold.co/300x200"],
  },
  {
    id: 4,
    location: "Sorrento, Italy",
    title: "3 Nights Deluxe Sorrento Escape with Flights",
    price: 219,
    board: "Bed & Breakfast",
    hotelType: "Beach Hotel",
    rating: 5,
    images: ["https://placehold.co/300x200"],
  },
  {
    id: 5,
    location: "Porto, Portugal",
    title: "Deluxe Porto Break with Flights & Douro Valley Tour",
    price: 229,
    board: "Bed & Breakfast",
    hotelType: "Luxury Hotel",
    rating: 5,
    images: ["https://placehold.co/200x200"],
  },
  {
    id: 6,
    location: "London, UK",
    title: "3 Nights London Stay with Flights",
    price: 199,
    board: "Room Only",
    hotelType: "City Hotel",
    rating: 4,
    images: ["https://placehold.co/300x200"],
  },
  {
    id: 7,
    location: "Barcelona, Spain",
    title: "4 Nights Barcelona Escape with Flights",
    price: 249,
    board: "All Inclusive",
    hotelType: "Beach Hotel",
    rating: 5,
    images: ["https://placehold.co/300x200"],
  },
  {
    id: 8,
    location: "Amsterdam, Netherlands",
    title: "3 Nights Amsterdam Retreat with Flights",
    price: 189,
    board: "Bed & Breakfast",
    hotelType: "City Hotel",
    rating: 4,
    images: ["https://placehold.co/300x200"],
  },
  {
    id: 9,
    location: "Rome, Italy",
    title: "3 Nights Rome Break with Flights",
    price: 210,
    board: "Room Only",
    hotelType: "Luxury Hotel",
    rating: 5,
    images: ["https://placehold.co/300x200"],
  },
];

const boardOptions = ["All Inclusive", "Bed & Breakfast", "Room Only"];
const hotelTypes = [
  "Beach Hotel",
  "City Hotel",
  "Luxury Hotel",
  "Romantic Hotel",
];
const ratingOptions = ["3", "4", "5"];

const TravelFilter = () => {
  const [filters, setFilters] = useState({
    price: 500,
    boardBasis: [],
    hotelType: [],
    rating: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true); // Open by default
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Filter Logic: includes search filtering on title & location
  const filteredDeals = travelDeals.filter((deal) => {
    const matchesPrice = deal.price <= filters.price;
    const matchesBoard =
      filters.boardBasis.length === 0 ||
      filters.boardBasis.includes(deal.board);
    const matchesHotel =
      filters.hotelType.length === 0 ||
      filters.hotelType.includes(deal.hotelType);
    const matchesRating =
      filters.rating === "" || deal.rating === parseInt(filters.rating);
    const matchesSearch =
      deal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.location.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      matchesPrice &&
      matchesBoard &&
      matchesHotel &&
      matchesRating &&
      matchesSearch
    );
  });

  const totalPages = Math.ceil(filteredDeals.length / itemsPerPage);
  const currentDeals = filteredDeals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Update Filters
  const handleFilterChange = (key, value) => {
    if (key === "boardBasis" || key === "hotelType") {
      const currentFilters = filters[key];
      setFilters({
        ...filters,
        [key]: currentFilters.includes(value)
          ? currentFilters.filter((item) => item !== value)
          : [...currentFilters, value],
      });
    } else {
      setFilters({ ...filters, [key]: value });
    }
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto relative bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Toggle Button positioned at the top-right of the card */}
        <Button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden absolute top-2 left-2 bg-deep-orange-600 text-white p-2 rounded-full z-30"
        >
          {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </Button>

        {/* Overlay to close sidebar on mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-20 bg-black opacity-25 md:hidden"
          />
        )}

        <div className="flex flex-col md:flex-row">
          {/* Sidebar Filters */}
          <div
            className={`${
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 z-40 w-3/4 h-full bg-gray-50 p-4 md:p-6 border-l transition-transform duration-300 md:relative md:translate-x-0 md:w-1/4`}
          >
            <Typography
              variant="h5"
              color="deep-orange"
              className="mb-4 text-black"
            >
              Filter Your Search
            </Typography>

            {/* Search Filter */}
            <div className="mb-4">
              <Input
                label="Search"
                icon={<FaSearch size={16} />}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full"
              />
            </div>

            {/* Price Filter */}
            <div className="mb-4">
              <Typography variant="paragraph" className="text-black mb-2">
                Price: £{filters.price}
              </Typography>
              <input
                type="range"
                min="129"
                max="1000"
                step="1"
                value={filters.price}
                onChange={(e) =>
                  handleFilterChange("price", parseInt(e.target.value, 10))
                }
                className="w-full"
                style={{ accentColor: "#FF5722", backgroundColor: "#D3D3D3" }}
              />
            </div>

            {/* Board Basis Filter */}
            <Typography variant="h6" className="text-black mb-2">
              Board Basis
            </Typography>
            {boardOptions.map((board) => (
              <Checkbox
                key={board}
                label={board}
                checked={filters.boardBasis.includes(board)}
                onChange={() => handleFilterChange("boardBasis", board)}
                className="mb-1"
              />
            ))}

            {/* Hotel Type Filter */}
            <Typography variant="h6" className="text-black mt-4 mb-2">
              Hotel Type
            </Typography>
            {hotelTypes.map((type) => (
              <Checkbox
                key={type}
                label={type}
                checked={filters.hotelType.includes(type)}
                onChange={() => handleFilterChange("hotelType", type)}
                className="mb-1"
              />
            ))}

            {/* Rating Filter */}
            <Typography variant="h6" className="text-black mt-4 mb-2">
              Rating
            </Typography>
            <Select
              label="Select Rating"
              onChange={(val) => handleFilterChange("rating", val)}
              value={filters.rating}
            >
              <Option value="">Any Rating</Option>
              {ratingOptions.map((rating) => (
                <Option key={rating} value={rating}>
                  {rating} Stars
                </Option>
              ))}
            </Select>

            <Button
              color="deep-orange"
              className="mt-4 w-full"
              onClick={() =>
                setFilters({
                  price: 500,
                  boardBasis: [],
                  hotelType: [],
                  rating: "",
                })
              }
            >
              Reset Filters
            </Button>
          </div>

          {/* Travel Deals */}
          <div className="w-full md:w-3/4 p-4 md:p-6">
            <Typography variant="h4" className="text-black mb-6">
              Showing {filteredDeals.length} Results
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentDeals.map((item) => (
                <Card
                  key={item.id}
                  className="shadow-md rounded-lg overflow-hidden"
                >
                  <CardHeader floated={false} className="h-48">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardBody className="p-4">
                    <Typography variant="h6" className="text-deep-orange-500">
                      {item.title}
                    </Typography>
                    <Typography className="text-black">
                      {item.location} - {item.rating} Star Hotel
                    </Typography>
                    <Typography className="text-deep-orange-500 font-bold">
                      £{item.price} per person
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <Button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                color="deep-orange"
                className="mx-1"
              >
                Prev
              </Button>
              <Typography className="flex items-center mx-2">
                {currentPage} of {totalPages}
              </Typography>
              <Button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                color="deep-orange"
                className="mx-1"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelFilter;
