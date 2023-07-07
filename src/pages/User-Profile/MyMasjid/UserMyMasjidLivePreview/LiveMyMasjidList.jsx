import React from 'react'
import MobileTopLable from '../../../../components/LivePreview/MobileTopLable'

const LiveMyMasjidList = () => {
  return (
    <div className="w-[220px] h-[450px]  mx-auto rounded-md overflow-y-auto overflow-x-hidden animate__animated  animate__fadeIn">
    <MobileTopLable
      data={{
        title: "My Masjid List",
        subtitle: "Update My Masjid list Information",
      }}
    />


      <div>
        <h1 className='text-xl font-Inter font-bold text-center mt-32'>No live preview found</h1>
      </div>
   
  </div>
  )
}

export default LiveMyMasjidList