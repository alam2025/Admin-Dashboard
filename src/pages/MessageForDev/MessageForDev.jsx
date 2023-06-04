import { BsCheckLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import danger from "../../assets/Danger-icon.svg";
import info from "../../assets/info-icon.svg";
import warning from "../../assets/warning-icon.svg";
const MessageForDev = () => {
  return (
    <div className=" message-dev w-[100%] h-[85%] rounded-[20px] my-auto bg-[#FFFFFF] px-14 pt-6">
      <div className="message-dev-chiled w-[88%] pb-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 ml-16 mt-6">
          <div className="w-[500px]">
            <h1 className="font-Inter font-semibold text-black text-[24px]">
              Success note
            </h1>
            <div className="flex justify-between mx-auto mt-2  message-dev-chiled-shadow px-4 py-8 w-[500px] h-[160px]">
              <div>
                <div className="flex gap-4">
                  <span className="bg-[#22BB55] h-7 w-7 rounded-full flex justify-center items-center">
                    <BsCheckLg className="text-xl text-white" />
                  </span>
                  <span className="text-[#22BB55] font-Inter font-bold text-[23px]">
                    Profile Updated Successfully
                  </span>
                </div>
                <p className="text-[#666666] font-inter text-[18px] font-normal mt-3 ml-[43px] w-[350px]">
                  Your profile has been successfully updated. Visit the page to
                  see more
                </p>
              </div>

              <div>
                <IoMdClose className="text-[28px] text-[#666666] cursor-pointer hover:text-red-400 duration-100 hover:scale-110" />
              </div>
            </div>
          </div>

          <div className="w-[500px]">
            <h1 className="font-Inter font-semibold text-black text-[24px]">
              Confirmation Message{" "}
            </h1>
            <div className="flex justify-between mx-auto mt-2  message-dev-chiled-shadow px-4 py-8 w-[500px] h-[160px]">
              <div>
                <div className="flex gap-4">
                  <span className="bg-[#22BB55] h-7 w-7 rounded-full flex justify-center items-center">
                    <BsCheckLg className="text-xl text-white" />
                  </span>
                  <span className="text-[#2C80FF] font-Inter font-bold text-[23px]">
                    All Changes saved
                  </span>
                </div>
                <p className="text-[#666666] font-inter text-[18px] font-normal mt-3 ml-[43px] w-[350px]">
                  All changes are saved successfully!
                </p>
              </div>

              <div>
                <IoMdClose className="text-[28px] text-[#666666] cursor-pointer hover:text-red-400 duration-100 hover:scale-110" />
              </div>
            </div>
          </div>

          <div className="w-[500px]">
            <h1 className="font-Inter font-semibold text-black text-[24px]">
              Warning note
            </h1>
            <div className="flex justify-between mx-auto mt-2  message-dev-chiled-shadow px-4 py-8 w-[500px] h-[160px]">
              <div>
                <div className="flex gap-4">
                  <img className="" src={warning} alt="" />
                  <span className="text-[#EE7700] font-Inter font-bold text-[23px]">
                    Your Changes Not Saved
                  </span>
                </div>
                <p className="text-[#666666] font-inter text-[18px] font-normal mt-3 ml-[43px] w-[350px]">
                  For unknown issue the changes that you have made, didn’t save!
                </p>
              </div>

              <div>
                <IoMdClose className="text-[28px] text-[#666666] cursor-pointer hover:text-red-400 duration-100 hover:scale-110" />
              </div>
            </div>
          </div>

          <div className="w-[500px]">
            <h1 className="font-Inter font-semibold text-black text-[24px]">
              Error Note
            </h1>
            <div className="flex justify-between mx-auto mt-2  message-dev-chiled-shadow px-4 py-8 w-[500px] h-[160px]">
              <div>
                <div className="flex gap-4">
                  <img className="" src={danger} alt="" />
                  <span className="text-[#EE4444] font-Inter font-bold text-[23px]">
                    You are not Permitted
                  </span>
                </div>
                <p className="text-[#666666] font-inter text-[18px] font-normal mt-3 ml-[43px] w-[350px]">
                  The action you trying to do, you don’t have access to perform!
                </p>
              </div>

              <div>
                <IoMdClose className="text-[28px] text-[#666666] cursor-pointer hover:text-red-400 duration-100 hover:scale-110" />
              </div>
            </div>
          </div>

          <div className="w-[500px]">
            <h1 className="font-Inter font-semibold text-black text-[24px]">
              Info Note
            </h1>
            <div className="flex justify-between mx-auto mt-2  message-dev-chiled-shadow px-4 py-8 w-[500px] h-[160px]">
              <div>
                <div className="flex gap-4">
                  <img className="" src={info} alt="" />
                  <span className="text-[#33CCEE] font-Inter font-bold text-[23px]">
                    Your Profile Is Safe
                  </span>
                </div>
                <p className="text-[#666666] font-inter text-[18px] font-normal mt-3 ml-[43px] w-[350px]">
                  We have checked the issue and solve it. Now your profile is
                  safe and sound
                </p>
              </div>

              <div>
                <IoMdClose className="text-[28px] text-[#666666] cursor-pointer hover:text-red-400 duration-100 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageForDev;
