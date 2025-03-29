import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Itinerary = ({itinerary}) => {
  return (
    <div>
      <motion.div variants={staggerContainer} className="max-w-3xl px-4 py-10">
        <motion.div className="space-y-8 border-l-2 border-[#FF6B6B] pl-8">
          {itinerary.map((event, index) => (
            <motion.div key={index} className="relative" variants={item}>
              <div className="absolute -left-12 top-0 p-1.5 rounded-xl bg-white shadow-md">
                {event.icon}
              </div>
              <h3 className="text-xl font-semibold text-deep-orange-500">
                Day {event.day}: {event.title}
              </h3>
              <p className="text-black mt-2">{event.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Itinerary;
