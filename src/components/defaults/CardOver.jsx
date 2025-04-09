// import React from "react";

// const CardOver = () => {
//   return (
//     <div className="bg-[#0078D4] max-w-4xl flex flex-col justify-center items-center rounded-t-xl space-y-4 md:space-y-6 px-6 md:px-40 py-8 md:py-12">
//       <h1 className="text-xl md:text-3xl max-w-sm md:max-w-xl text-center text-white">
//         Love to Travel? So Do We - Let's Stay in Touch.
//       </h1>
//       <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-md md:max-w-none">
//         <input
//           type="text"
//           placeholder="Enter your email"
//           className="w-full md:w-96 text-lg md:text-xl rounded-t-md md:rounded-tl-md md:rounded-bl-md md:rounded-t-none bg-white text-black font-medium p-3"
//         />
//         <button className="w-full md:w-auto text-white text-lg md:text-xl bg-deep-orange-500 hover:bg-black transition-colors duration-700 ease-in-out font-bold rounded-b-md md:rounded-r-md md:rounded-b-none px-6 py-3">
//           SUBSCRIBE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardOver;

import React from "react";
import { logo, pattern } from "../../assets";

const CardOver = () => {
  return (
    <div className="relative overflow-hidden bg-[#0078D4] max-w-3xl w-full mx-auto rounded-t-xl px-6 md:px-10 py-8 md:py-12">
      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20 z-0 bg-repeat filter invert"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "contain",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/90 hidden md:flex"></div>
      </div>

      {/* Main Content: Flex Container */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section: Text + Input */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-4 w-full md:w-2/3">
          <h1 className="text-xl md:text-3xl w-full text-center md:text-left text-white">
            Love to Travel? So Do We - Let's Stay in Touch.
          </h1>

          <div className="flex flex-col md:flex-row w-full max-w-md">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full text-lg md:text-xl rounded-t-md md:rounded-l-md md:rounded-tr-none bg-white text-black font-medium p-3"
            />
            <button className="w-full md:w-auto text-white text-lg md:text-xl bg-deep-orange-500 hover:bg-black transition-colors duration-700 ease-in-out font-bold rounded-b-md md:rounded-r-md md:rounded-bl-none px-6 py-3">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Right Section: Logo */}
        <div className="flex justify-center md:justify-end w-full md:w-1/3">
          <img
            src={logo}
            alt="Logo"
            className="h-32 w-32 bg-white rounded-md p-1 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CardOver;
