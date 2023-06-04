import React from 'react'
import { BsCheckLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const SampleNofication = ({actions}) => {
  let { setNotification } = actions;

  return (
    
 
    <div className="flex justify-between mx-auto mt-2  message-dev-chiled-shadow px-4 py-8 w-[350px] custom-z h-[140px] absolute -top-2 right-12 animate__animated animate__fadeIn animate__slowUp">
      <div>
        <div className="flex gap-4">
          <span className="bg-[#22BB55] h-7 w-7 rounded-full flex justify-center items-center">
            <BsCheckLg className="text-xl text-white" />
          </span>
          <span className="text-[#2C80FF] font-Inter font-bold text-[16px]">
          All Changes saved 
          </span>
        </div>
        <p className="text-[#666666] font-inter text-[13px] font-normal mt-3 ml-[43px] w-[350px]">
        All changes are saved successfully!  
        </p>

        <IoMdClose  onClick={() => setNotification(false)} className="absolute right-8 top-8 text-[28px] text-[#666666] cursor-pointer hover:text-red-400 duration-100 hover:scale-110" />
      </div>

     
       
    
    </div>
 
  )
}

export default SampleNofication