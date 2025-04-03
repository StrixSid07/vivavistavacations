import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  Typography,
  CardBody,
  CardHeader,
  CardFooter,
} from "@material-tailwind/react";
import { FaPlaneDeparture, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Base_Url } from "../../utils/Api";

const TopDeals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState({});
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = window.innerWidth < 768 ? 4 : 6; // 4 for mobile, 6 for desktop

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get(`${Base_Url}/trending/topdeals`);
        setDeals(response.data);
        setImageIndex(
          response.data.reduce((acc, deal) => ({ ...acc, [deal._id]: 0 }), {})
        );
      } catch (error) {
        console.error("Error fetching deals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  const handlePrevImage = (dealId, images) => {
    setImageIndex((prev) => ({
      ...prev,
      [dealId]: prev[dealId] === 0 ? images.length - 1 : prev[dealId] - 1,
    }));
  };

  const handleNextImage = (dealId, images) => {
    setImageIndex((prev) => ({
      ...prev,
      [dealId]: prev[dealId] === images.length - 1 ? 0 : prev[dealId] + 1,
    }));
  };

  // Calculate total pages
  const totalPages = Math.ceil(deals.length / itemsPerPage);
  // Slice deals for the current page
  const currentDeals = deals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen p-6 bg-gradient-to-t from-blue-900 via-blue-700 to-green-500 animate-gradient-x">
      <h1 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">
        Top Deals
      </h1>
      {loading ? (
        <p className="text-center text-gray-300">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentDeals.map((deal, index) => (
              <motion.div
                key={deal._id}
                className="group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="shadow-lg rounded-lg overflow-hidden">
                  <CardHeader
                    color="blue-gray"
                    floated={false}
                    className="relative h-48 overflow-hidden"
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={deal.images[imageIndex[deal._id]]}
                        alt={deal.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in group-hover:scale-105"
                      />
                      {deal.images.length > 1 && (
                        <>
                          <button
                            onClick={() =>
                              handlePrevImage(deal._id, deal.images)
                            }
                            className="absolute left-0 bottom-0 -mb-5 -ml-1 transform -translate-y-1/2 bg-black text-white p-2 rounded-lg hover:bg-opacity-75"
                          >
                            <IoIosArrowBack />
                          </button>
                          <button
                            onClick={() =>
                              handleNextImage(deal._id, deal.images)
                            }
                            className="absolute right-0 bottom-0 -mb-5 -mr-1 transform -translate-y-1/2 bg-black text-white p-2 rounded-lg hover:bg-opacity-75"
                          >
                            <IoIosArrowForward />
                          </button>
                        </>
                      )}
                    </div>
                  </CardHeader>
                  <CardBody>
                    <h2 className="text-xl font-semibold text-[#0073b4] flex items-center gap-2">
                      <FaPlaneDeparture /> {deal.title}
                    </h2>
                    <p className="text-gray-700 mt-2">{deal.description}</p>
                    <p className="text-deep-orange-600 font-bold mt-2">
                      Starting from: ${deal.prices[0]?.price || "N/A"}
                    </p>
                    <p className="text-gray-500 mt-1">
                      Airport: {deal.prices[0]?.airport || "N/A"}
                    </p>
                  </CardBody>
                  <CardFooter className="flex justify-between items-center p-4 border-t">
                    <p className="text-green-600 font-bold flex items-center gap-1">
                      <FaStar className="text-yellow-500" />{" "}
                      {deal["Rating "] || "No Ratings"}
                    </p>
                    <button
                      onClick={() => navigate(`/deals/${deal._id}`)}
                      className="bg-deep-orange-600 text-white px-4 py-2 rounded-lg hover:bg-deep-orange-700 transition"
                    >
                      Book Now
                    </button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6">
            <Button
              onClick={() => {
                setCurrentPage((prev) => Math.max(prev - 1, 1));
                // window.scrollTo(0, 0); // Scroll to top
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 10);
              }}
              disabled={currentPage === 1}
              color="green"
              className="mx-1"
            >
              Prev
            </Button>
            <Typography className="flex items-center mx-2">
              Page {currentPage} of {totalPages}
            </Typography>
            <Button
              onClick={() => {
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                // window.scrollTo(0, 0); // Scroll to top
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 10);
              }}
              disabled={currentPage === totalPages}
              color="green"
              className="mx-1"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default TopDeals;
