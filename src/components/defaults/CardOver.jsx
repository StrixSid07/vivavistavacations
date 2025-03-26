import React from "react";

const CardOver = () => {
  return (
    <div className="bg-[#304F47] max-w-4xl flex flex-col justify-center items-center rounded-t-lg space-y-6 md:space-y-10 px-6 md:px-40 py-8 md:py-12">
      <h1 className="text-xl md:text-5xl max-w-sm md:max-w-xl text-center text-white">
        Subscribe To Our Newsletter For Latest Update
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-md md:max-w-none">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full md:w-96 text-lg md:text-xl rounded-t-md md:rounded-tl-md md:rounded-bl-md md:rounded-t-none bg-white text-black font-medium p-3"
        />
        <button className="w-full md:w-auto text-white text-lg md:text-xl bg-orange-700 hover:bg-black transition-colors duration-700 ease-in-out font-bold rounded-b-md md:rounded-r-md md:rounded-b-none px-6 py-3">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default CardOver;
