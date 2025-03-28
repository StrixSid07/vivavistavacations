import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const NewAddedCardComponent = ({
  images,
  location,
  packageDays,
  price,
  rating,
  currentImage,
  nextImage,
  prevImage,
}) => {
  return (
    <Card className="max-w-[24rem] w-full overflow-hidden shadow-lg rounded-lg">
      {/* Image Section */}
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="relative"
      >
        <div className="relative h-[16rem] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="Tour Destination"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full object-cover rounded-t-lg"
            />
          </AnimatePresence>

          {/* Image Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/5 p-2 rounded-full shadow-md"
          >
            <MdOutlineArrowBackIos className="text-black/25" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/5 p-2 rounded-full shadow-md"
          >
            <MdOutlineArrowForwardIos className="text-black/25" />
          </button>
        </div>
      </CardHeader>

      {/* Card Content */}
      <CardBody className="p-4 space-y-3">
        {/* Price & Nights */}
        <div className="flex items-center justify-between">
          <Typography variant="h5" className="font-bold text-black">
            {" "}
            £{price}{" "}
            <span className="text-sm font-normal text-gray-500">
              /Per Person
            </span>
          </Typography>
          <div className="flex items-center text-gray-700">
            <BiCalendar className="mr-1 text-xl" />
            <Typography variant="small">{packageDays} Nights</Typography>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-700">
          <HiOutlineLocationMarker
            size={18}
            className="mr-1 text-lg text-red-500"
          />
          <Typography
            variant="large"
            className="font-medium text-xl text-deep-orange-600"
          >
            {location}
          </Typography>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <FaStar className="text-yellow-400" />
          <Typography className="text-gray-700 font-medium">
            {rating} Rating
          </Typography>
        </div>
      </CardBody>

      {/* Footer Section */}
      <CardFooter className="p-4">
        <Button className="w-full bg-deep-orange-600 hover:bg-deep-orange-800 transition-colors duration-500 ease-in-out text-white font-medium text-lg rounded-md">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewAddedCardComponent;
