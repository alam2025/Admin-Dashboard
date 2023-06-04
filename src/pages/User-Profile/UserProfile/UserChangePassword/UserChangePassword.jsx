import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
const UserChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="mt-8 animate__animated  animate__fadeIn">
      <form className="py-3 mt-6 flex flex-col gap-y-6">
        <div className="flex gap-x-16">
          <div className="flex flex-col gap-2">
            <span className="text-[#696969] font-Inter text-[16px] font-normal">
              Old Password
            </span>
            <input
              type="text"
              name="password"
              className="w-[288px] h-[40px] pl-3 border border-white  bg-[#F4F4F4] rounded-md outline-none focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#696969] font-Inter text-[16px] font-normal">
              Create a Hint For New Password
            </span>
            <input
              type="email"
              name="email"
              className="w-[288px] h-[40px] pl-3 border border-white  bg-[#F4F4F4] rounded-md outline-none focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700 "
            />
          </div>
        </div>
        <div className="flex gap-x-16 mt-4">
          <div className="relative flex flex-col gap-2 ">
            <span className="text-[#696969] font-Inter text-[16px] font-normal">
              New Password
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="newPassword"
              className="w-[288px] h-[40px]  border border-white bg-[#F4F4F4] outline-0 text-xl rounded-md pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
            />
            <div onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <BsEye className="absolute right-5 top-[44px] cursor-pointer text-[18px]" />
              ) : (
                <BsEyeSlash className="absolute right-5 top-[44px] cursor-pointer text-[18px]" />
              )}
            </div>
          </div>
          <div className="relative flex flex-col gap-2">
            <span className="text-[#696969] font-Inter text-[16px] font-normal">
              Confirm New Password
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="w-[288px] h-[40px]  border Confirm New Password
 border-white bg-[#F4F4F4] outline-0 text-xl rounded-md pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700 "
            />
            <div onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? (
                <BsEye className="absolute right-5 top-[44px] cursor-pointer text-[18px]" />
              ) : (
                <BsEyeSlash className="absolute right-5 top-[44px] cursor-pointer text-[18px]" />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <button className="ripple">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default UserChangePassword;
