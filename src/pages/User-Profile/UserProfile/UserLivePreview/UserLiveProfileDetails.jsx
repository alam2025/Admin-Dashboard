import React from "react";
import MobileTopLable from "../../../../components/LivePreview/MobileTopLable";

const UserLiveProfileDetails = () => {
  return (
    <div className=" h-[400px]   mx-auto rounded-md overflow-y-auto overflow-x-hidden animate__animated  animate__fadeIn">
      <MobileTopLable
        data={{
          title: "Update Profile",
          subtitle: "Update Your Personal Information",
        }}
      />
      <div className="my-2 ">
        {/*for Profile image */}
        <div className="w-full ">
          <img
            className="mx-auto w-[80px] h-[80px] rounded-full"
            src="https://i.ibb.co/pv6qKBv/Group-258.png"
            alt=""
          />
        </div>
        {/* Form */}
        <div>
          <form>
            {/* From Item Start */}
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="flex flex-col  gap-1 ">
                <span className="text-[#04A999] font-Inter text-[12px] font-normal">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  className="  text-[12px] live-profile-input-shadow outline-0 pl-3 focus:border-[#2C80FF] focus:outline-none "
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <span className="text-[#04A999] font-Inter text-[12px] font-normal">
                  Email Address
                </span>
                <input
                  type="text"
                  name="name"
                  className="  text-[12px] live-profile-input-shadow outline-0 pl-3 focus:border-[#2C80FF] focus:outline-none "
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <span className="text-[#04A999] font-Inter text-[12px] font-normal">
                  Phone Number
                </span>
                <input
                  type="text"
                  name="name"
                  className="  text-[12px] live-profile-input-shadow outline-0 pl-3 focus:border-[#2C80FF] focus:outline-none "
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <span className="text-[#04A999] font-Inter text-[12px] font-normal">
                  Address
                </span>
                <input
                  type="text"
                  name="name"
                  className=" text-[12px] live-profile-input-shadow outline-0 pl-3 focus:border-[#2C80FF] focus:outline-none "
                />
              </div>
            </div>

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLiveProfileDetails;
