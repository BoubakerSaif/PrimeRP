import React from "react";
import { Link } from "react-router-dom";
import gta5 from "../../assets/gta5.png";
const Step1 = ({ setStep }) => {
  return (
    <div className="text-white flex items-start justify-around h-[400px]  w-[700px] max-xl:w-[600px] max-sm:w-[300px] mt-12 max-sm:flex-col max-sm:items-center  ">
      <img src={gta5} className="w-60 " />
      <div className="flex flex-col items-center  h-32 w-96 max-sm:w-[300px] justify-around ">
        <h1 className="font-bold text-2xl max-sm:text-base">
          Have you bought GTA V?
        </h1>
        <div className="flex gap-8 max-sm:gap-2 font-semibold">
          <button
            onClick={() => {
              setStep("step2");
            }}
            className="bg-white text-black px-4 py-2 rounded-lg hover:bg-[#1d1d1d] hover:text-white max-sm:text-xs "
          >
            Yeah, I bought it
          </button>
          <Link
            target="_blank"
            to={"https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"}
            className=" px-6 py-2 rounded-lg border-[1px] border-[#3d3d3d] hover:bg-[#1d1d1d] max-sm:text-xs  "
          >
            No,Buy it
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step1;
