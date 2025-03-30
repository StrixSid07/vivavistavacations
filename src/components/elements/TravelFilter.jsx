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
import { useNavigate } from "react-router-dom";

const travelDeals = [
  {
    id: "67e82ded76f06faa1a6fde35",
    location: "Venice, Italy",
    title: "2 Nights Romantic Venice Retreat with Flights",
    price: 129,
    board: "Bed & Breakfast",
    hotelType: "Romantic Hotel",
    rating: 4,
    images: [
      "https://images.unsplash.com/photo-1476802379768-84b0af3e39ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "67e82ded76f06faa1a6fde35",
    location: "Paris, France",
    title: "Romantic Paris Getaway with Deluxe Stay & Flights",
    price: 129,
    board: "Bed & Breakfast",
    hotelType: "City Hotel",
    rating: 4,
    images: [
      "https://plus.unsplash.com/premium_photo-1666283181610-b95ee7e55465?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "67e82ded76f06faa1a6fde35",
    location: "Berlin, Germany",
    title: "3 Nights 4-Star Berlin City Break with Flights",
    price: 179,
    board: "Bed & Breakfast",
    hotelType: "City Hotel",
    rating: 4,
    images: [
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "67e82ded76f06faa1a6fde35",
    location: "Sorrento, Italy",
    title: "3 Nights Deluxe Sorrento Escape with Flights",
    price: 219,
    board: "Bed & Breakfast",
    hotelType: "Beach Hotel",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1689024613649-48021cef3908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "67e82ded76f06faa1a6fde35",
    location: "Porto, Portugal",
    title: "Deluxe Porto Break with Flights & Douro Valley Tour",
    price: 229,
    board: "Bed & Breakfast",
    hotelType: "Luxury Hotel",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1555881400-69a2384edcd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "67e82ded76f06faa1a6fde35",
    location: "London, UK",
    title: "3 Nights London Stay with Flights",
    price: 199,
    board: "Room Only",
    hotelType: "City Hotel",
    rating: 4,
    images: [
      "https://images.unsplash.com/photo-1562065748-4f77ced5f764?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "67e82ded76f06faa1a6fde35",
    location: "Barcelona, Spain",
    title: "4 Nights Barcelona Escape with Flights",
    price: 249,
    board: "All Inclusive",
    hotelType: "Beach Hotel",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1486591913781-4bee9ed65bfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "67e82ded76f06faa1a6fde35",
    location: "Amsterdam, Netherlands",
    title: "3 Nights Amsterdam Retreat with Flights",
    price: 189,
    board: "Bed & Breakfast",
    hotelType: "City Hotel",
    rating: 4,
    images: [
      "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "67e82ded76f06faa1a6fde35",
    location: "Rome, Italy",
    title: "3 Nights Rome Break with Flights",
    price: 210,
    board: "Room Only",
    hotelType: "Luxury Hotel",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
  const navigate = useNavigate();
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
      // Just set the value directly without converting
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
          className="md:hidden absolute top-2 left-2 bg-green-500 text-white p-2 rounded-full z-30"
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
            } fixed top-0 right-0 z-30 w-3/4 h-full bg-gray-50 p-4 md:p-6 border-l transition-transform duration-300 md:relative md:translate-x-0 md:w-1/4`}
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
                color="green"
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
              <Typography
                variant="paragraph"
                className="text-green-500 font-semibold mb-2"
              >
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
                className="w-full accent-green-500"
                // style={{ accentColor: "#FF5722", backgroundColor: "#D3D3D3" }}
              />
            </div>

            {/* Board Basis Filter */}
            <Typography variant="h6" className="text-black mb-2">
              Board Basis
            </Typography>
            {boardOptions.map((board) => (
              <Checkbox
                color="green"
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
                color="green"
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
            <select
              value={filters.rating}
              onChange={(e) => handleFilterChange("rating", e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Any Rating</option>
              {ratingOptions.map((rating) => (
                <option key={rating} value={rating}>
                  {rating} Stars
                </option>
              ))}
            </select>

            <Button
              color="green"
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

          {/* Travel Deals Section */}
          <div className="w-full md:w-3/4 p-4 md:p-6">
            <Typography variant="h4" className="text-black mb-6">
              Showing {filteredDeals.length} Results
            </Typography>
            <div className="max-h-[700px] overflow-y-auto">
              <div className="grid grid-cols-1 gap-6">
                {currentDeals.map((item) => (
                  <Card
                    key={item.id}
                    className="shadow-md rounded-lg w-full md:w-[48rem] md:h-[16rem] flex flex-col md:flex-row overflow-hidden"
                  >
                    {/* Image Section */}
                    <div className="w-full md:w-2/5 h-48 md:h-full shrink-0 rounded-b-none md:rounded-r-none">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text Section */}
                    <CardBody className="p-4 bg-gradient-to-b from-[#00AEEF]/90 to-white  flex flex-col justify-center w-full md:w-96">
                      <Typography variant="h6" className="text-[#333333]">
                        {item.title}
                      </Typography>
                      <Typography className="text-black">
                        {item.location} - {item.rating} Star Hotel
                      </Typography>
                    </CardBody>

                    {/* Price & Button Section */}
                    <div className="w-full md:w-1/5 flex flex-col bg-gray-100 justify-center items-center gap-2 p-3 md:p-4">
                      <Typography className="text-center font-semibold text-green-500">
                        £{item.price} per person
                      </Typography>
                      <Button
                        color="green"
                        size="sm"
                        onClick={() => navigate(`/deals/${item.id}`)}
                      >
                        View Deal
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <Button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                color="green"
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
                color="green"
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
