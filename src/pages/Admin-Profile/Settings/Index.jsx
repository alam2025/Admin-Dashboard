import React from 'react'
import Settings from './Settings'
import LivePreview from '../../../components/LivePreview/LivePreview'
import LiveSettings from './LivePreview/LiveSettings'
import { Helmet } from 'react-helmet-async'
const Index = () => {
  return (
    <div className="2xl:w-[1442px] 2xl:h-[736px] xl:w-[1180px] xl:h-[560px] rounded-[20px] 2xl:mx-auto 2xl:my-auto bg-[#FFFFFF]  2xl:p-20 xl:p-5 xl:mt-[-270px] xl:ml-[120px] ">
    <Helmet>
        <title>Ya-Sin - Settings </title>
      </Helmet>
    <div className="flex items-center  justify-center 2xl:mt-4 animate__animated  animate__fadeIn">
      <div className=" flex justify-between   2xl:gap-[80px] xl:gap-12  rounded-[12px]">
        <div className="2xl:w-[550px] 2xl:h-[580px] xl:w-[550px] xl:h-[520px] py-20  rounded-lg content-bg">
          <Settings/>
        </div>

        <div  className="2xl:w-[343px]  2xl:h-[582px] xl:h-[520px] grid items-center rounded-[12px] overflow-hidden content-bg relative">
        <LivePreview>
          <LiveSettings/>
        </LivePreview>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Index