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
    title: "15+ Years of Industrial Experience",
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
    <div className="relative h-auto bg-gradient-to-t from-[#0078D4] to-white rounded-t-2xl -mt-3 pb-4 md:pb-12 lg:pb-16 border-t-2 border-white z-10">
      <div className="absolute top-0 left-0 w-full">
        <div className="flex justify-center items-center -mt-8 -mb-4">
          <div className="p-4 flex-wrap flex justify-center md:w-1/2 w-80 items-center border-t-2 border-white text-center bg-black text-white font-bold text-2xl md:text-3xl rounded-xl shadow-[0_4px_10px_rgba(255,255,255,0.5)]">
            Why Travel With Viva Vista
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        className="flex flex-wrap justify-around items-center mt-20 md:mt-28 overflow-hidden"
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
              {/* <div className="rounded-xl relative shadow-lg bg-white transition-colors duration-700 ease-out p-4 md:p-6">
                <div
                  className={`absolute top-0 right-0 h-5 w-5 bg-green-500  rounded-full transform -translate-y-1/2 translate-x-1/2 transition-transform duration-500 md:group-hover:scale-[2] lg:group-hover:scale-[5] group-hover:scale-[4]`}
                ></div>
                <option.icon className="text-[#00AEEF] z-10 text-3xl md:text-4xl" />
              </div> */}
              <div className="relative group rounded-xl shadow-lg bg-white transition-colors duration-700 ease-out p-4 md:p-6 overflow-hidden group">
                {/* Expanding Background Shape on Hover */}
                <div
                  className="absolute top-0 right-0 h-16 w-16 bg-green-500 rounded-full transform -translate-y-1/2 translate-x-1/2
                             transition-all duration-[2000ms] ease-in-out group-hover:scale-[15] group-hover:rounded-none group-hover:w-3/4 group-hover:h-full z-0"
                ></div>

                {/* Icon (Remains Unchanged) */}
                <option.icon className="relative z-10 text-[#0078D4] text-3xl md:text-4xl transition-all duration-300 ease-in-out group-hover:text-white" />
              </div>
            </div>
            {/* Fixed Height for Title */}
            <h3 className="text-md md:text-xl text-white font-bold text-center leading-tight h-12 flex items-center justify-center">
              {option.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Looking;
