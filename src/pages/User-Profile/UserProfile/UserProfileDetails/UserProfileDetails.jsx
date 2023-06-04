import { useState } from "react";

const UserProfileDetails = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };
  return (
    <div className=" mt-14 ">

<div>
          <div className="flex gap-10">
            <img
              className="w-[120px] h-[120px]  rounded-lg border border-red-600"
              src={profileImage || "https://i.ibb.co/W6bYSNC/Rectangle-128.png"}
              alt=""
            />

            <div className="flex flex-col gap-2 mt-10">
              <input
                onChange={handleImageUpload}
                type="file"
                id="pictureInput"
                accept="image/*"
                style={{ display: "none" }}
              />

              <label
                htmlFor="pictureInput"
                className="px-4 py-[6px] rounded-md bg-[#3385F0] text-white text-sm font-normal hover:cursor-pointer"
              >
                Change Picture
              </label>

              <button className="px-4 py-[4px] rounded-md bg-white text-sm text-[#FF5353] border-[1px] border-[#A4A6B3] font-normal">
                Delete Picture
              </button>
            </div>

            <div>
              <h1 className="text-base font-normal text-[#696969] ml-24 mt-[-30px] mb-3">
                Recent Profile Photos
              </h1>
              <div className="grid grid-cols-3 gap-4 ml-24">
                <img
                  className="w-[60px] h-[60px] rounded-lg"
                  src="https://i.ibb.co/TPzV3rd/Rectangle-129.png"
                  alt=""
                />{" "}
                <img
                  className="w-[60px] h-[60px] rounded-lg"
                  src="https://i.ibb.co/TPzV3rd/Rectangle-129.png"
                  alt=""
                />{" "}
                <img
                  className="w-[60px] h-[60px] rounded-lg"
                  src="https://i.ibb.co/TPzV3rd/Rectangle-129.png"
                  alt=""
                />{" "}
                <img
                  className="w-[60px] h-[60px] rounded-lg"
                  src="https://i.ibb.co/TPzV3rd/Rectangle-129.png"
                  alt=""
                />{" "}
                <img
                  className="w-[60px] h-[60px] rounded-lg"
                  src="https://i.ibb.co/TPzV3rd/Rectangle-129.png"
                  alt=""
                />{" "}
                <img
                  className="w-[60px] h-[60px] rounded-lg"
                  src="https://i.ibb.co/TPzV3rd/Rectangle-129.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

      <form className="py-3 mt-4 flex flex-col gap-y-6">
       
        <div className="flex gap-x-16 ">
          <div className="flex flex-col gap-2 ">
            <span className="text-[#696969] font-Inter text-[16px] font-normal">
              Full Name
            </span>

            <input
              type="text"
              className="w-[288px] h-[40px] pl-3 border border-white  bg-[#F4F4F4] rounded-md outline-none focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="text-[#696969] font-Inter text-[16px] font-normal">
              Email Address
            </span>
            <input
              type="email"
              name="email"
              className="w-[288px] h-[40px] pl-3 border border-white  bg-[#F4F4F4] rounded-md outline-none focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
            />
          </div>
        </div>
        <div className="flex gap-x-16 ">
          <div className="flex flex-col gap-2 ">
            <span className="text-[#696969] font-Inter text-[16px] font-normal">
              Phone
            </span>
            <input
              type="text"
              name="phone"
              className="w-[288px] h-[40px] pl-3 border border-white  bg-[#F4F4F4] rounded-md outline-none focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="text-[#696969] font-Inter text-[16px] font-normal">
              Address
            </span>
            <input
              type="text"
              name="address"
              className="w-[288px] h-[40px] pl-3 border border-white  bg-[#F4F4F4] rounded-md outline-none focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
            />
          </div>
        </div>

        <div className="flex justify-end mt-2 ">
          <button className="ripple">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileDetails;
