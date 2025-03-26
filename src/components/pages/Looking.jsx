import React from "react";
import { FaMoneyBillWave, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { PiCalendarStarFill } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const lookingOptions = [
  {
    icon: FaMoneyBillWave,
    title: "Low Deposits Spread The Cost",
  },
  {
    icon: FaShieldAlt,
    title: "100% Trusted Travel Agency",
  },
  {
    icon: PiCalendarStarFill,
    title: "10+ Years of Travel Experience",
  },
  {
    icon: MdOutlineVerified,
    title: "Lowest Price Guaranteed",
  },
  {
    icon: FaHeadset,
    title: "24x7 Support Provided",
  },
];

const Looking = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="relative h-auto bg-gradient-to-t from-teal-900 to-teal-300 rounded-t-2xl -mt-3 pb-4 md:pb-12 lg:pb-16 border-t-2 border-white z-10">
      <div className="absolute top-0 left-0 w-full">
        <div className="flex justify-center items-center -mt-8 -mb-4">
          <div className="p-4 flex-wrap flex justify-center items-center border-t-2 border-white text-center bg-black text-white font-bold text-2xl md:text-3xl rounded-xl shadow-[0_4px_10px_rgba(255,255,255,0.5)]">
            Why You Are Travel With Viva Vista
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        className="flex flex-wrap justify-around items-center mt-12 md:mt-28 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {lookingOptions.map((option, index) => (
          <motion.div
            key={index}
            className="text-center p-4 group mb-8 md:mb-0 w-full md:w-1/2 lg:w-1/5 mt-4 md:mt-0"
            variants={itemVariants}
          >
            <div className="flex justify-center items-center mb-4">
              <div className="rounded-xl shadow-lg bg-white transition-colors duration-700 ease-out p-4 md:p-6">
                <option.icon className="text-green-900 text-3xl md:text-4xl" />
              </div>
            </div>
            <h3 className="text-lg md:text-xl text-white font-bold">
              {option.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Looking;
