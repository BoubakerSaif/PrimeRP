import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

const LoginFirst = () => {
  const DiscordLink = `${import.meta.env.VITE_BACK_URL}/auth`;
  return (
    <div>
      <div className="text-white flex items-start justify-around h-[400px] w-[700px] max-xl:w-[600px] mt-12 max-sm:w-[300px] ">
        <div className="flex flex-col items-center  h-32 w-96 justify-around gap-9  max-sm:w-[300px]">
          <h1 className="font-bold text-2xl max-sm:text-base">
            You need to Login With Discord
          </h1>
          <div className="flex gap-8 font-semibold">
            <Link
              to={DiscordLink}
              className="bg-indigo-600 px-2 py-2 max-sm:px-1 rounded-lg hover:bg-[#1d1d1d] flex items-center gap-2 max-sm:text-sm"
            >
              <FaDiscord className="text-xl" />
              Login With Discord
            </Link>
            <Link
              to={"/"}
              className=" px-6 py-2 rounded-lg border-[1px] max-sm:px-1 border-[#3d3d3d] hover:bg-[#1d1d1d] max-sm:text-sm "
            >
              Do it later
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFirst;
