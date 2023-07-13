import React from "react";
import Navigator from "../../assets/Navigator.svg";
import {GiNetworkBars} from "react-icons/gi"
import {BsBatteryHalf} from "react-icons/bs"
const LivePreview = ({ children }) => {
  return (
    <div className="relative mt-2">
      <img
        className="w-[341px] relative z-50"
        src="https://i.ibb.co/7jhvfGw/5cb0633d80f2cf201a4c3253-1.png"
        alt=""
      />
   <div className="bg-white h-[25px] w-[220px] left-0 right-0 absolute top-2 z-10 mx-auto">
    <div className="px-4 py-2 text-xs w-full   flex justify-between ">
      <div>
        9:10
      </div>
      <div className="flex gap-1">
        <GiNetworkBars/>
        <BsBatteryHalf className="text-[14px]"/>
      </div>

    </div>

   </div>

      <div className=" w-[232px] h-[480px] animate__animated animate__fadeIn animate__slow absolute top-3 left-14 z-0 rounded-t-lg rounded-b-lg">
        <div className="z-10 relative">
          <img
            className="block w-[219px] absolute top-[447px] left-0 right-0 mx-auto z-20 rounded-b-3xl cursor-pointer"
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

export default LivePreview;
