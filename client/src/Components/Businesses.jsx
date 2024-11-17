import React from "react";
import { motion } from "framer-motion";
import tabac from "../../src/assets/tabac.png";
import Engineer from "../../src/assets/Engineer.png";
import Real_Estate from "../../src/assets/Real_Estate.png";
import burger from "../../src/assets/burger.png";
import Noodles from "../../src/assets/Noodles.png";
import Shisha_Bar from "../../src/assets/Shisha_Bar.png";
import meca from "../../src/assets/meca.png";

const Businesses = () => {
  return (
    <div className=" w-full h-screen max-sm:h-auto flex flex-col items-center justify-evenly  bg-[#010101] text-white text-center font-bold max-md:h-auto">
      <motion.div
        className="font-Poppins font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      >
        <p className="font-bold text-4xl max-lg:text-2xl max-sm:mt-20">
          BUSINESSES
        </p>
        <p className="text-2xl mt-1 max-lg:text-xl max-sm:text-sm max-sm:px-4 max-sm:mt-6">
          Dive into dozens of active and new businesses, strive in a high
          competitive atmoshpere
        </p>
      </motion.div>
      <motion.div
        className="flex w-[1350px] justify-center gap-24 max-sm:gap-6  flex-wrap text-lg max-2xl:w-auto   "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
      >
        <div className="group hover:cursor-pointer flex flex-col items-center ">
          <img src={tabac} className="w-64 max-sm:w-32 max-2xl:w-40" />

          <p> Tobacco</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center ">
          <img src={Engineer} className="w-64 max-sm:w-32 max-2xl:w-40" />

          <p>Engineer</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center ">
          <img src={Real_Estate} className="w-64 max-sm:w-32 max-2xl:w-40" />

          <p>Real Estate</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center ">
          <img src={burger} className="w-64 max-sm:w-32 max-2xl:w-40" />

          <p>Burger</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center ">
          <img src={Noodles} className="w-64 max-sm:w-32 max-2xl:w-40" />

          <p>Noodles</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center ">
          <img src={Shisha_Bar} className="w-64 max-sm:w-32 max-2xl:w-40" />

          <p>Shisha Bar</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center relative ">
          <img src={meca} className="w-64 max-sm:w-32 max-2xl:w-40" />

          <p className="absolute top-[70%] ">Mechanic</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Businesses;
