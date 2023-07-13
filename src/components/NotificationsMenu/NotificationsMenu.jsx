import React, { useState } from "react";
import { useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const NotificationsMenu = ({ actions }) => {
  let { notification, setNotification } = actions;
  const [active, setActive] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const toggleHeight = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const [closing, setClosing] = useState(false);

  return (
    <div
      className={`ntf-content-bg shadow-xl p-4 absolute right-[-4px] top-[25px] custom-z animate__animated ${
        closing ? "animate__fadeOutUp" : "animate__fadeIn"
      }`}
    >
      <div className="w-16 overflow-hidden  absolute -right-[38px] -top-[8px] inline-block">
        <div className=" h-[10px]  w-[13px] bg-white custom-z rotate-45 transform origin-bottom-left "></div>
      </div>
      <div
        className={`min-w-[320px] max-w-[320px] min-h-[250px]  ${
          expanded ? "2xl:h-[600px] xl:h-[400px] overflow-y-auto" : "2xl:h-[300px] xl:h-[300px] overflow-hidden"
        }  transition-all duration-500 `}
      >
        {/* Component Header Start*/}
        <div className="sticky top-0 z-50 pb-2 bg-white">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold mb-3">Notifications</h2>
            <RxCross2
              onClick={() => {
                setClosing(true);
                setTimeout(() => {
                  setNotification(false);
                }, 500); // Adjust the duration of the animation as needed
              }}
              className="text-xl cursor-pointer mr-3"
            />
          </div>
          {/* Buttons */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setActive("all")}
              className={`bg-[#F1F3F4]  px-4 py-1 rounded-md border duration-300 border-transparent hover:border-blue-500 ${
                active === "all" && "border-blue-500 !bg-[#2C80FF] text-white "
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActive("unread")}
              className={`bg-[#F1F3F4]  px-4 py-1 rounded-md border duration-300 border-transparent hover:border-blue-500 ${
                active === "unread" &&
                "border-blue-500 !bg-[#2C80FF] text-white "
              }`}
            >
              Unread
            </button>
          </div>
          <div className="flex justify-end">
            <Link to={"/"} className="text-[#3385F0] mt-[-30px] mr-3">
              See all
            </Link>
          </div>
        </div>
        {/* Component Header End*/}

        {/* Component Body Start*/}

        {/* Items For All */}
        {active === "all" && (
          <div className="flex flex-col gap-3  overflow-y-auto mt-6">
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#414141] text-[13px] font-normal font-Inter">
                  Two new mosque has been added recently
                </h1>
                <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00]"></span>
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Your profile has been updated
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
          </div>
        )}
        {/* Items For Unread */}
        {active === "unread" && (
          <div className="flex flex-col gap-3 mt-6 ">
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#414141] text-[13px] font-normal font-Inter">
                  Two new mosque has been added recently
                </h1>
                <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00]"></span>
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Your profile has been updated
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/X2Bhfgd/image-190.png"
                  alt=""
                />
                <h1 className="text-[#696969] text-[13px] font-normal font-Inter">
                  Check out new features in settings
                </h1>
                {/* <span className="w-[8px] h-[7px] rounded-full bg-[#7DFF00] mt-2"></span> */}
              </div>
            </div>
          </div>
        )}
        {/* Component Body End*/}

        {!expanded && (
          <div className="flex justify-center bg-white w-full mt-11 py-4 absolute bottom-0 max-w-[320px]  ">
            <button
              onClick={toggleHeight}
              className="flex items-center justify-center"
            >
              <span className="text-[#3385F0] text-[12px] font-Inter font-normal">
                See more
              </span>
              <MdKeyboardArrowDown className="text-[#3385F0]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsMenu;
