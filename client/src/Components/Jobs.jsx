import React from "react";
import { motion } from "framer-motion";
import Cleaning from "../../src/assets/Cleaning.png";
import Fishing from "../../src/assets/Fishing.png";
import Logistics from "../../src/assets/Logistics.png";
import Electricity from "../../src/assets/Electricity.png";
import Miner from "../../src/assets/Miner.png";

const Jobs = () => {
  return (
    <div className=" w-full h-screen max-sm:h-auto flex flex-col items-center justify-evenly   bg-[#010101] text-white text-center font-bold font-Poppins  ">
      <motion.div
        className="font-Poppins font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      >
        <p className="font-bold text-4xl max-lg:text-2xl max-sm:mt-20 ">JOBS</p>
        <p className="text-2xl mt-1 max-lg:text-xl max-sm:text-sm max-sm:mt-8  ">
          Easy job, Easy money
        </p>
      </motion.div>
      <motion.div
        className="flex  justify-center gap-24 max-sm:gap-6 text-lg  w-[1000px] flex-wrap max-2xl:w-auto max-sm:mt-10   "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
      >
        <div className="group hover:cursor-pointer flex flex-col items-center   ">
          <img src={Logistics} className="w-64 max-sm:w-32 max-lg:w-40" />

          <p>Logistics</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center  ">
          <img src={Cleaning} className="w-64 max-sm:w-32 max-lg:w-40" />

          <p>Cleaning</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center  ">
          <img src={Fishing} className="w-64 max-sm:w-32 max-lg:w-40" />

          <p>Fishing </p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center  ">
          <img src={Electricity} className="w-64 max-sm:w-32 max-lg:w-40" />

          <p> Electricity</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center  ">
          <img src={Miner} className="w-64 max-sm:w-32 max-lg:w-40" />

          <p>Miner</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Jobs;
