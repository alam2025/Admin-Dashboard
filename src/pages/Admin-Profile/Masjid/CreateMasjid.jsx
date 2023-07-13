import { useState } from "react";
import { Helmet } from "react-helmet-async";

const CreateMasjid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="">
      <Helmet>
        <title>Ya-Sin - Create Masjid </title>
      </Helmet>
      <form className="mt-8 flex flex-col 2xl:gap-y-6 xl:gap-y-4">
        <div>
          <div className="flex justify-between items-center gap-x-16 ">
            <div className="relative">
              <input
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
                className="absolute opacity-0 w-full h-full cursor-pointer"
              />
              <img
                className="w-[135px] h-[135px] rounded-full cursor-pointer"
                src={selectedImage || "https://i.ibb.co/QpNqSV1/Group-163.png"}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#696969] font-Inter text-[16px] font-normal rounded-[8px]">
                Details About Your Masjid
              </span>
              <input
                type="text"
                name="name"
                className="w-[443px] h-[90px] pl-3 border border-white  bg-[#F4F4F4] rounded-md outline-none focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700 "
              />
            </div>
          </div>
        </div>

        <div className="flex gap-x-16">
          <div className="flex flex-col gap-2">
            <span className="text-[#696969] font-Inter text-[16px] font-normal">
              Full Name Of Masjid
            </span>
            <input
              type="text"
              name="phone"
              className="w-[288px] h-[40px] pl-3 border border-white  bg-[#F4F4F4] rounded-md outline-none focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#696969] font-Inter text-[16px] font-normal">
              Country
            </span>
            <input
              type="text"
              name="address"
              className="w-[288px] h-[40px] pl-3 border border-white  bg-[#F4F4F4] rounded-md outline-none focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700 "
            />
          </div>
        </div>

        <div className="flex gap-x-16">
          <div className="flex flex-col gap-2">
            <span className="text-[#696969] font-Inter text-[16px] font-normal">
              State
            </span>
            <input
              type="text"
              name="phone"
              className="w-[288px] h-[40px] pl-3 border border-white  bg-[#F4F4F4] rounded-md outline-none focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#696969] font-Inter text-[16px] font-normal">
              City
            </span>
            <input
              type="text"
              name="address"
              className="w-[288px] h-[40px] pl-3 border border-white  bg-[#F4F4F4] rounded-md outline-none focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700 "
            />
          </div>
        </div>

        <div className="flex justify-end 2xl:mt-5 xl:mt-3">
          <button className="ripple">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default CreateMasjid;
