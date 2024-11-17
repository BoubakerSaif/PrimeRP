import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import app from "../../assets/app.png";

const Step3 = ({ setStep, myBetaApp }) => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="text-white flex items-start justify-around h-[400px] w-[700px] max-xl:w-[600px] mt-12 max-sm:w-[300px] max-sm:flex-col max-sm:items-center ">
      {userInfo?.BetaStatus == "noApp" && (
        <>
          <img src={app} className="w-36   " />
          <div className="flex flex-col items-center  h-32 w-96 justify-around gap-3 max-sm:w-[300px]  max-sm:text-center ">
            <h1 className="font-bold text-2xl max-sm:text-base">
              Welcome to our Closed Beta Application, hit the start button if
              you're ready
            </h1>

            <div className="flex gap-8 font-semibold max-sm:mt-3">
              <button
                onClick={() => {
                  setStep("step4");
                }}
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-[#1d1d1d] hover:text-white max-sm:text-sm"
              >
                Start the App
              </button>
              <Link
                to={"/"}
                className=" px-6 py-2 rounded-lg border-[1px] border-[#3d3d3d] hover:bg-[#1d1d1d] max-sm:text-sm "
              >
                Do it later
              </Link>
            </div>
          </div>
        </>
      )}
      {/* {userInfo?.whiteListStatus == "Pending" && (
        <div className="text-white font-bold text-lg mt-14  ">
          Your Whitelist App is under treatment process.
        </div>
      )} */}
      {myBetaApp && myBetaApp[0] && myBetaApp[0].status == "Pending" && (
        <div className=" max-sm: flex max-sm:flex-col max-sm:items-center  ">
          <img
            src={
              "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729259777/white_epcawp.png"
            }
            className="w-36   "
          />
          <div className="text-white font-bold text-lg mt-14 max-sm:text-base max-sm:text-center  ">
            Your ClosedBeta Application is under treatment process.
          </div>
        </div>
      )}
      {myBetaApp && myBetaApp[0] && myBetaApp[0].status == "Accepted" && (
        <div className=" max-sm: flex max-sm:flex-col max-sm:items-center  ">
          <img
            src={
              "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729259777/white_epcawp.png"
            }
            className="w-36   "
          />
          <div className="text-white font-bold text-lg mt-14  max-sm:text-base max-sm:text-center  ">
            Your ClosedBeta Application is Accepted.
          </div>
        </div>
      )}
      {myBetaApp && myBetaApp[0] && myBetaApp[0].status == "Rejected" && (
        <div className=" max-sm: flex max-sm:flex-col max-sm:items-center  ">
          <img
            src={
              "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729259777/white_epcawp.png"
            }
            className="w-36   "
          />
          <div className="text-white font-bold text-lg mt-14 max-sm:text-base max-sm:text-center   ">
            Your ClosedBeta Application is Rejected.
          </div>
        </div>
      )}
    </div>
  );
};

export default Step3;
