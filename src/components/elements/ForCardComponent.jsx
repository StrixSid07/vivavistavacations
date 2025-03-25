import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import {
  FaShareAlt,
  FaRegStar,
  FaBed,
  FaBath,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const ForCardComponent = ({
  images,
  name,
  address,
  area,
  bedrooms,
  bathrooms,
  daysAgo,
  currentImage,
  nextImage,
  prevImage,
  onClick, // Add onClick as a prop
}) => {
  return (
    <Card className="max-w-[24rem] w-full overflow-hidden h-[30rem]" onClick={onClick}>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="relative"
      >
        <div className="relative h-[18rem] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="Property"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <MdOutlineArrowBackIos className="text-black" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <MdOutlineArrowForwardIos className="text-black" />
          </button>
        </div>
      </CardHeader>
      <CardBody className="flex-grow">
        <Typography variant="h5" color="blue-gray">
          {name}
        </Typography>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <FaMapMarkerAlt className="mr-1" /> {address}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <FaBed className="mr-1 text-blue-600" />
            <Typography variant="small" color="gray">
              {bedrooms} Beds
            </Typography>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1 text-blue-600" />
            <Typography variant="small" color="gray">
              {bathrooms} Baths
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography variant="small" color="gray">
              {area} sqft
            </Typography>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FaShareAlt className="text-gray-600 cursor-pointer" />
          <FaRegStar className="text-gray-600 cursor-pointer" />
        </div>
        <Typography className="font-normal text-sm text-gray-500">
          Listed {daysAgo} day(s) ago
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default ForCardComponent;
