import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

const MobileTopLable = ({data}) => {
    let {title ,subtitle} = data
  return (
    <div className='w-[220px]  rounded-t-[8px] h-[62px] p-1 pt-6 text-white  bg-[#04A999] flex items-center gap-4 relative '>
            <div className='absolute'>
                <BsChevronLeft/>
            </div>
            <div className='w-full text-center'>
                <h1 className='text-[13px] font-Inter'>{title}</h1>
                <h2 className='font-normal text-[10px] font-Inter'>{subtitle}</h2>

            </div>
    </div>
  )
}

export default MobileTopLable