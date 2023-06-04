import { BsCheckLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import notificationUser from "../../../assets/notification-user.svg";
import mosque from "../../../assets/mosque.svg";


const UserNotifications = () => {
  return (
    <div className="w-[650px] rounded-md mx-auto ">
    <div className="w-[600px] h-[550px] bg-white  custom-shadow rounded-lg">
      <div className="w-[580px] px-8 py-8">
        <h1 className="text-[#3385F0] font-Inter font-normal text-[26px] border-b-[2px] border-b-[#A4A6B3] pb-1">
          Notifications
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between mx-auto mt-2  notifaction-shadow p-3 w-[560px]">
         <div>
         <div className="flex gap-4">
            <span className="bg-[#22BB55] h-7 w-7 rounded-full flex justify-center items-center">
              <BsCheckLg className="text-xl text-white" />
            </span>
            <span className="text-[#22BB55] font-Inter font-bold text-[23px]">
              Profile Updated Successfully
            </span>
          </div>
          <p className="text-[#666666] font-Cuprum text-[18px] font-medium mt-2">
            The changes you have made in your profile is updated successfully!
          </p>
         </div>

          <div>
            <IoMdClose className="text-[28px] text-[#666666] cursor-pointer hover:text-red-400 duration-100 hover:scale-110" />
          </div>
        </div>

        <div className="flex justify-between mx-auto mt-2  notifaction-shadow p-3 w-[560px]">
         <div>
         <div className="flex gap-4">
            <img
              className="w-[28px] h-[28px] rounded-full"
              src={notificationUser}
              alt=""
            />
            <span className="text-[#22BB55] font-Inter font-bold text-[23px]">
              Profile Updated Successfully
            </span>
          </div>
          <p className="text-[#666666] font-Cuprum text-[18px] font-medium mt-2">
            The changes you have made in your profile is updated successfully!
          </p>
         </div>

          <div>
            <IoMdClose className="text-[28px] text-[#666666] cursor-pointer hover:text-red-400 duration-100 hover:scale-110" />
          </div>
        </div>

        <div className="flex justify-between mx-auto mt-2  notifaction-shadow p-3 w-[560px]">
         <div>
         <div className="flex gap-4">
            <img
              className="w-[28px] h-[28px] rounded-full"
              src={mosque}
              alt=""
            />
            <span className="text-[#22BB55] font-Inter font-bold text-[23px]">
              Profile Updated Successfully
            </span>
          </div>
          <p className="text-[#666666] font-Cuprum text-[18px] font-medium mt-2">
            The changes you have made in your profile is updated successfully!
          </p>

         </div>
          <div>
            <IoMdClose className="text-[28px] text-[#666666] cursor-pointer hover:text-red-400 duration-100 hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserNotifications