import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { HiOutlineCamera } from "react-icons/hi";

const UserProfileDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  }

  return (
    <div className=" mt-14 ">
      <div>
      <div>
      <label htmlFor="file-input" className="relative w-[100px] h-[100px] border-2 border-[#04A999] rounded-full flex justify-center items-center mx-auto cursor-pointer">
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className="w-full h-full rounded-full" />
        ) : (
          <BiPlus className="text-2xl text-[#04A999]" />
        )}
        <div className="border border-[#04A999] w-[28px] h-[28px] rounded-full absolute right-[-8px] bottom-[5px] flex justify-center items-center">
          <HiOutlineCamera className="text-xl text-[#04A999]" />
        </div>
        <input id="file-input" type="file" className="hidden" onChange={handleFileSelect} />
      </label>
      <h1 className="text-center text-[#696969] font-Inter text-[16px] font-norma">Let’s upload a picture</h1>
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
