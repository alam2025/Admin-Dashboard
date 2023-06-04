import React from 'react'
import MobileTopLable from '../../../../components/LivePreview/MobileTopLable'

const LiveCreateMasjid = () => {
  return (
    <div className="w-[220px] animate__animated  animate__fadeIn h-[450px]  mx-auto rounded-md overflow-y-auto overflow-x-hidden">
    <MobileTopLable
      data={{
        title: "Create Masjid",
        subtitle: "Update Your Masjid Information",
      }}
    />
    <div className="my-1 ">
      {/*for Profile image */}
      <div className="w-full ">
        <img
          className="mx-auto w-[60px] h-[60px] rounded-full"
          src="https://i.ibb.co/pv6qKBv/Group-258.png"
          alt=""
        />
      </div>
      {/* Form */}
      <div>
        <form>
          {/* From Item Start */}
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="flex flex-col gap-1 ">
              <span className="text-[#04A999] font-Inter text-[12px] font-normal">
              Full Name Of Masjid
              </span>
              <input
                type="text"
                name="name"
                className="w-[200px] h-[35px] text-[12px] live-profile-input-shadow outline-0 pl-3 focus:border-[#2C80FF] focus:outline-none "
              />
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="text-[#04A999] font-Inter text-[12px] font-normal">
              Country
              </span>
              <input
                type="text"
                name="name"
                className="w-[200px] h-[35px] text-[12px] live-profile-input-shadow outline-0 pl-3 focus:border-[#2C80FF] focus:outline-none "
              />
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="text-[#04A999] font-Inter text-[12px] font-normal">
              State
              </span>
              <input
                type="text"
                name="name"
                className="w-[200px] h-[35px] text-[12px] live-profile-input-shadow outline-0 pl-3 focus:border-[#2C80FF] focus:outline-none "
              />
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="text-[#04A999] font-Inter text-[12px] font-normal">
              City
              </span>
              <input
                type="text"
                name="name"
                className="w-[200px] h-[35px] text-[12px] live-profile-input-shadow outline-0 pl-3 focus:border-[#2C80FF] focus:outline-none "
              />
            </div>
             <div className="flex flex-col gap-1 ">
              <span className="text-[#04A999] font-Inter text-[12px] font-normal">
              Details About Your Masjid
              </span>
              <input
                type="text"
                name="name"
                className="w-[200px] h-[48px] text-[12px] live-profile-input-shadow outline-0 pl-3 focus:border-[#2C80FF] focus:outline-none "
              />
            </div>
          </div>

          
        </form>
      </div>
    </div>
  </div>
  )
}

export default LiveCreateMasjid