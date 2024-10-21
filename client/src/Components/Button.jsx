import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";

const Button = ({ stopIt, playIt }) => {
  return (
    <div className="absolute top-[3.5%] left-[5%] flex z-50  rounded-md max-2xl:left-3 max-2xl:top-[4%]   ">
      <CiPlay1
        className="text-white text-lg cursor-pointer"
        onClick={() => {
          playIt();
        }}
      />
      <CiPause1
        className="text-white text-lg cursor-pointer"
        onClick={() => {
          stopIt();
        }}
      />
    </div>
  );
};

export default Button;
