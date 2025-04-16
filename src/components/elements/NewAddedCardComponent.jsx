import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaCircle } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CalendarDays, MapPin, Tag } from "lucide-react";

const NewAddedCardComponent = ({
  id,
  images,
  name,
  location,
  packageDays,
  basis,
  price,
  rating,
  reviews,
  currentImage,
  nextImage,
  prevImage,
  tag,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/deals/${id}`);
  };

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      className="transition-shadow hover:shadow-2xl"
    >
      <Card className="min-h-[30rem] w-[22rem] overflow-hidden border border-gray-200 rounded-2xl">
        {/* Image Section */}
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="relative"
        >
          <div className="relative h-[16rem] w-full overflow-hidden rounded-t-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Tour Destination"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Badge */}
            {tag && (
              <div className="absolute top-3 left-3 bg-white text-deep-orange-500 text-xs font-semibold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Tag size={14} /> {tag}
              </div>
            )}

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-0 bottom-0 -mb-5 -ml-1 -translate-y-1/2 bg-black/70 hover:bg-black p-2 rounded-xl shadow-md transition"
            >
              <MdOutlineArrowBackIos className="text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 bottom-0 -mb-5 -mr-1 -translate-y-1/2 bg-black/70 hover:bg-black p-2 rounded-xl shadow-md transition"
            >
              <MdOutlineArrowForwardIos className="text-white" />
            </button>
          </div>
        </CardHeader>

        {/* Card Content */}
        <CardBody className="p-5 flex flex-col flex-grow space-y-4">
          {/* Price + Rating */}
          <div className="flex items-center justify-between">
            {/* Rating & Reviews */}
            <div className="flex flex-col items-start gap-1">
              {/* Stars Row */}
              <div className="flex items-center gap-1 text-amber-500">
                {rating
                  ? Array.from({ length: 5 }, (_, i) => {
                      if (i + 1 <= Math.floor(rating)) {
                        return (
                          <FaStar key={i} className="text-sm text-amber-500" />
                        );
                      } else if (i < rating) {
                        return (
                          <FaStarHalfAlt
                            key={i}
                            className="text-sm text-amber-500"
                          />
                        );
                      } else {
                        return (
                          <FaRegStar
                            key={i}
                            className="text-sm text-gray-300"
                          />
                        );
                      }
                    })
                  : // if no rating, we’ll still show placeholder stars but in gray
                    Array.from({ length: 5 }, (_, i) => (
                      <FaRegStar key={i} className="text-sm text-gray-300" />
                    ))}
              </div>

              {/* Review Count */}
              {rating ? (
                <span className="text-gray-800 text-sm font-medium">
                  {rating.toFixed(1)} ({reviews} Reviews)
                </span>
              ) : (
                <span className="text-gray-500 text-sm italic">
                  No reviews yet
                </span>
              )}
            </div>

            <Typography className="text-lg font-bold text-deep-orange-600">
              £{price}
              <span className="text-sm font-normal text-gray-500 ml-1">
                /Per Person
              </span>
            </Typography>
          </div>

          {/* Name */}
          <Typography
            variant="h6"
            className="text-xl font-semibold text-gray-900 truncate w-[20rem]"
          >
            {name}
          </Typography>

          {/* Basis */}
          <Typography
            variant="small"
            className="text-gray-600 font-medium text-sm flex justify-start items-center gap-2"
          >
            <FaCircle size={7} /> {basis}
          </Typography>

          <hr className="border-gray-200" />

          {/* Duration & Location */}
          <div className="flex items-center justify-between text-gray-600">
            <div className="flex items-center gap-2 text-sm">
              <CalendarDays size={18} />
              <span>{packageDays} Nights</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-deep-orange-500 font-medium">
              <MapPin size={18} />
              <span>{location}</span>
            </div>
          </div>
        </CardBody>

        {/* Footer */}
        <CardFooter className="p-5 pt-0">
          <Button
            onClick={handleViewDetails}
            className="w-full bg-deep-orange-500 hover:bg-deep-orange-600 text-white font-semibold text-base rounded-md py-2 transition duration-300 normal-case"
          >
            Discover More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default NewAddedCardComponent;
