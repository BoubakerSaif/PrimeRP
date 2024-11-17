import React from "react";
import { motion } from "framer-motion";
import star from "../../src/assets/star.png";

const MainHero_6 = () => {
  return (
    <div className=" bg-[#010101] text-center relative h-[650px]  font-Poppins  max-sm:h-[300px]    ">
      <motion.div
        className="flex items-center  absolute top-[-135%] left-[5%] max-sm:left-[0%]  "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img src={star} className="w-[600px] max-lg:w-96 max-sm:w-44   " />
        <div>
          <p className=" text-slate-400 text-3xl  text-opacity-80  font-bold flex-col max-sm:text-xl   ">
            BECOME
          </p>
          <p className=" text-white font-bold flex-col text-5xl max-lg:text-4xl max-sm:text-2xl  ">
            STAR
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MainHero_6;
