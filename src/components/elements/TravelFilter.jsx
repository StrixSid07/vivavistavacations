import React, { useState } from 'react';
import { FaSearch, FaChevronLeft, FaChevronRight, FaBars, FaTimes } from 'react-icons/fa';

const TravelFilter = () => {
  const [filters, setFilters] = useState({
    price: 1800,
    boardBasis: [],
    hotelType: [],
    rating: ''
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  
  const dummyData = [
    { id: 1, location: 'Venice, Italy', title: '2 Nights Romantic Venice Retreat with Flights', price: 129, board: 'Bed & Breakfast', hotelType: 'Romantic Hotel', rating: 4, images: ['https://placehold.co/300x200'] },
    { id: 2, location: 'Paris, France', title: 'Romantic Paris Getaway with Deluxe Stay & Flights', price: 129, board: 'Bed & Breakfast', hotelType: 'City Hotel', rating: 4, images: ['https://placehold.co/200x200'] },
    { id: 3, location: 'Berlin, Germany', title: '3 Nights 4-Star Berlin City Break with Flights', price: 179, board: 'Bed & Breakfast', hotelType: 'City Hotel', rating: 4, images: ['https://placehold.co/300x200'] },
    { id: 4, location: 'Sorrento, Italy', title: '3 Nights Deluxe Sorrento Escape with Flights', price: 219, board: 'Bed & Breakfast', hotelType: 'Beach Hotel', rating: 5, images: ['https://placehold.co/300x200'] },
    { id: 5, location: 'Porto, Portugal', title: 'Deluxe Porto Break with Flights & Douro Valley Tour', price: 229, board: 'Bed & Breakfast', hotelType: 'Luxury Hotel', rating: 5, images: ['https://placehold.co/200x200'] },
    { id: 6, location: 'London, UK', title: '3 Nights London Stay with Flights', price: 199, board: 'Room Only', hotelType: 'City Hotel', rating: 4, images: ['https://placehold.co/300x200'] },
    { id: 7, location: 'Barcelona, Spain', title: '4 Nights Barcelona Escape with Flights', price: 249, board: 'All Inclusive', hotelType: 'Beach Hotel', rating: 5, images: ['https://placehold.co/300x200'] },
    { id: 8, location: 'Amsterdam, Netherlands', title: '3 Nights Amsterdam Retreat with Flights', price: 189, board: 'Bed & Breakfast', hotelType: 'City Hotel', rating: 4, images: ['https://placehold.co/300x200'] },
    { id: 9, location: 'Rome, Italy', title: '3 Nights Rome Break with Flights', price: 210, board: 'Room Only', hotelType: 'Luxury Hotel', rating: 5, images: ['https://placehold.co/300x200'] }
  ];


  const filteredDeals = dummyData.filter(deal =>
    deal.price <= filters.price &&
    (filters.boardBasis.length === 0 || filters.boardBasis.includes(deal.board)) &&
    (filters.hotelType.length === 0 || filters.hotelType.includes(deal.hotelType)) &&
    (filters.rating === '' || deal.rating === parseInt(filters.rating))
  );

  const handleFilterChange = (key, value) => {
    if (key === 'boardBasis' || key === 'hotelType') {
      const currentFilters = filters[key];
      setFilters({
        ...filters,
        [key]: currentFilters.includes(value)
          ? currentFilters.filter(item => item !== value)
          : [...currentFilters, value]
      });
      setCurrentPage(1); // Reset to first page on filter change
    } else {
      setFilters({ ...filters, [key]: value });
      setCurrentPage(1);
    }
  };
  const totalPages = Math.ceil(filteredDeals.length / itemsPerPage);
  const currentDeals = filteredDeals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const [imageIndex, setImageIndex] = useState({});

  const handleNextImage = (id, images) => {
    setImageIndex((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % images.length || 0
    }));
  };

  const handlePrevImage = (id, images) => {
    setImageIndex((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + images.length) % images.length || 0
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Sidebar Toggle Button (Mobile) */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden bg-blue-500 text-white p-2 rounded-full fixed top-4 left-4 z-50"
        >
          {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Main Content Wrapper */}
        <div className="flex flex-col md:flex-row">

          {/* Filter Sidebar */}
          <div className={`w-full md:w-1/4 bg-gray-50 p-6 border-r transform md:translate-x-0 transition-transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}>
            <h2 className="text-xl font-bold mb-4">Filter Your Search</h2>

            <div className="mb-4">
              <label className="block text-gray-700">Price: £{filters.price}</label>
              <input
                type="range"
                min="129"
                max="1800"
                value={filters.price}
                onChange={e => handleFilterChange('price', parseInt(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Board Basis</h3>
              <div className="flex flex-col gap-2">
                {['All Inclusive', 'Bed & Breakfast', 'Room Only'].map(board => (
                  <label key={board} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.boardBasis.includes(board)}
                      onChange={() => handleFilterChange('boardBasis', board)}
                      className="mr-2"
                    /> 
                    {board}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Hotel Type</h3>
              <div className="flex flex-col gap-2">
                {['Beach Hotel', 'City Hotel', 'Luxury Hotel', 'Romantic Hotel'].map(type => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.hotelType.includes(type)}
                      onChange={() => handleFilterChange('hotelType', type)}
                      className="mr-2"
                    /> 
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Rating</h3>
              <select
                value={filters.rating}
                onChange={e => handleFilterChange('rating', e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Any Rating</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>

            <button 
              className="w-full bg-blue-500 text-white p-2 rounded"
              onClick={() => setFilters({ price: 1800, boardBasis: [], hotelType: [], rating: '' })}
            >
              Reset Filters
            </button>
          </div>

          {/* Deals Section */}
          <div className="w-full md:w-3/4 p-6 md:ml-6"> {/* Added margin-left to create space */}
            
            {/* Sort By and Showing Results */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Showing {filteredDeals.length} Results</h2>
              <div>
                <label className="mr-2 font-bold">Sort By:</label>
                <select className="p-2 border rounded">
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                  <option value="location">Location</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentDeals.map((item) => (
                <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden relative">
                  <div className="relative">
                    <img 
                      src={item.images[imageIndex[item.id] || 0]} 
                      alt={item.title} 
                      className="w-full h-48 object-cover" 
                    />
                    <button
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded"
                      onClick={() => handlePrevImage(item.id, item.images)}
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded"
                      onClick={() => handleNextImage(item.id, item.images)}
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-gray-600">{item.location}</p>
                    <p className="text-gray-700">{item.rating} Star Hotel</p>
                    <p className="text-blue-600 font-bold">£{item.price} per person</p>
                  </div>
                </div>
              ))}
            </div>


            {/* Pagination */}
             {/* Pagination */}
             <div className="flex justify-center mt-6">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span>{currentPage} of {totalPages}</span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelFilter;
