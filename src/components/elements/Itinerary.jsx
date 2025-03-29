import React from "react";
import { motion } from "framer-motion";
import {
  FaPlaneArrival,
  FaUmbrellaBeach,
  FaSpa,
  FaShip,
  FaPlaneDeparture,
} from "react-icons/fa";

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

const itinerary = [
  {
    day: 1,
    title: "Arrival & Resort Check-in",
    description:
      "Arrive at the Maldives airport and enjoy a speedboat transfer to the resort. Check-in and relax by the beach.",
    icon: <FaPlaneArrival className="text-[#FF6B6B] text-xl" />,
  },
  {
    day: 2,
    title: "Snorkeling & Water Sports",
    description:
      "Explore the underwater world with a guided snorkeling session. Enjoy kayaking and paddleboarding.",
    icon: <FaUmbrellaBeach className="text-[#FF6B6B] text-xl" />,
  },
  {
    day: 3,
    title: "Island Hopping Tour",
    description:
      "Visit nearby islands, experience local culture, and enjoy a private beach picnic.",
    icon: <FaShip className="text-[#FF6B6B] text-xl" />,
  },
  {
    day: 4,
    title: "Spa & Sunset Cruise",
    description:
      "Relax with a luxury spa treatment followed by a romantic sunset cruise with dolphin watching.",
    icon: <FaSpa className="text-[#FF6B6B] text-xl" />,
  },
  {
    day: 5,
    title: "Departure",
    description: "Enjoy a farewell breakfast before your flight back home.",
    icon: <FaPlaneDeparture className="text-[#FF6B6B] text-xl" />,
  },
];

const Itinerary = () => {
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
