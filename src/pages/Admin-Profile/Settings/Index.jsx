import React from 'react'
import Settings from './Settings'
import LivePreview from '../../../components/LivePreview/LivePreview'
import LiveSettings from './LivePreview/LiveSettings'
import { Helmet } from 'react-helmet-async'
const Index = () => {
  return (
    <div className="w-[1442px]  h-[738px] rounded-[20px] mx-auto my-auto bg-[#FFFFFF]  p-20 ">
    <Helmet>
        <title>Ya-Sin - Settings </title>
      </Helmet>
    <div className="flex items-center  justify-center mt-8 animate__animated  animate__fadeIn">
      <div className=" flex justify-between   gap-10  rounded-[12px]">
        <div className="w-[550px] h-[555px] py-20  rounded-lg content-bg">
          <Settings/>
        </div>

        <div  className="w-[343px] h-auto py-2 grid items-center rounded-[12px] overflow-hidden content-bg relative">
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