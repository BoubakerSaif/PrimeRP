import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { clearCredentials } from "../../Redux/authSlice";

const JoinDiscord = () => {
  const dispatch = useDispatch();
  const DiscordInvite = "https://discord.com/invite/UJEgUBMBT8";
  return (
    <div className="text-white flex items-start justify-around h-[400px] w-[700px] max-xl:w-[600px] mt-12 max-sm:w-[300px] ">
      <div className="flex flex-col items-center  h-32 w-96 justify-around gap-9 max-sm:w-[300px] ">
        <h1 className="font-bold text-2xl max-sm:text-base">
          You need to be a member of our Discord Server to be able to apply for
          the Closed Beta App
        </h1>
        <div className="flex gap-8 font-semibold">
          <Link
            onClick={() => {
              dispatch(clearCredentials());
            }}
            target="_blank"
            to={DiscordInvite}
            className="bg-indigo-600 px-[3px] py-1 max-sm:px-1 rounded-lg hover:bg-[#1d1d1d] flex items-center gap-2 max-sm:text-sm"
          >
            <FaDiscord className="text-xl" />
            Join Our Discord Server
          </Link>
          <Link
            to={"/"}
            className=" px-6 py-2 rounded-lg max-sm:px-1 border-[1px] border-[#3d3d3d] hover:bg-[#1d1d1d] max-sm:text-sm "
          >
            Do it later
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinDiscord;
