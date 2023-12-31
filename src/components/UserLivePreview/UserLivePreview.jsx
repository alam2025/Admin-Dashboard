import React from "react";
import Navigator from "../../assets/Navigator.svg";
import { GiNetworkBars } from "react-icons/gi"
import { BsBatteryHalf } from "react-icons/bs"
const UserLivePreview = ({ children }) => {
  return (
    <div className="relative ">
      <img
        className="w-[100%] relative z-50"
        src="https://i.ibb.co/7jhvfGw/5cb0633d80f2cf201a4c3253-1.png"
        alt=""
      />
      <div className="bg-white h-[25px] w-[65%] left-0 right-0 absolute top-2 z-10 mx-auto">
        <div className="px-4 py-2 text-xs w-full   flex justify-between ">
          <div>
            9:10
          </div>
          <div className="flex gap-1">
            <GiNetworkBars />
            <BsBatteryHalf className="text-[14px]" />
          </div>

        </div>

      </div>

      <div className=" w-[60%] h-[100%] animate__animated animate__fadeIn animate__slow absolute top-3 left-[20%] z-0 rounded-t-lg rounded-b-lg">
        <div className="z-10 relative">
          <img
            className="block w-[100%]  absolute bottom-0 left-0 right-0 mx-auto z-20 rounded-b-3xl cursor-pointer"
            src={Navigator}
            alt=""
          />
          <div className="">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLivePreview;
