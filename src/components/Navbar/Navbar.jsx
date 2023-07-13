import logo from '../../assets/logo.png';
import belIcon from '../../assets/notification.svg';
import { Link, useLocation } from 'react-router-dom';
import NotificationsMenu from '../NotificationsMenu/NotificationsMenu';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {pathname} = useLocation()
  const [notification ,setNotification] = useState(false)
  const userinformation = useSelector((state) => state?.userData?.userinfo  );
  // console.log(userinformation)
  useState(()=>{
    setNotification(false)
},[pathname])
  return (
    <div className="bg-white  w-full">
      <div className="2xl:h-[72px] lg:h-[52px] 2xl:px-[36px] lg:px-[6px] max-w-[1920px] mx-auto">
        <div className="flex justify-between items-center 2xl:h-[80px] lg:h-[52px]">
          <Link className='block' to='/powerhouse'>
            <img className="block w-[230px] 2xl:-ml-10 xl:ml-[-56px]" src={logo} alt=""/>
          </Link>
         
          <div className="flex gap-4 items-center">
            <div className='relative'>
            {/* Notification */}
              <img onClick={()=>setNotification(!notification)} className="cursor-pointer" src={belIcon} alt=""/>
              {notification && <div > <NotificationsMenu actions={{notification , setNotification}} /></div>}
              </div>
            <div className="h-[45px] bg-[#DFE0EB] w-[2px]"></div>
            <div>
              <h1 className="text-[20px] text-[#696969] font-Inter font-medium">{userinformation?.name}</h1>
              <p className="text-[15px] text-[#696969] font-Inter font-normal">{userinformation?.is_creator ? "admin" : "user"}</p>
            </div>
            <div className="border-[2px] border-[#3385F0] p-[2px] rounded-full">
             {
              userinformation?.is_creator === true ? <>
               <Link to='/powerhouse/admin-profile' className='cursor-pointer'><img className="h-[35px] w-[35px] rounded-full" src={userinformation?.image} alt=""/></Link>
              </>
              :
              <>
               <Link to='/powerhouse/user-profile' className='cursor-pointer'><img className="h-[35px] w-[35px] rounded-full" src={userinformation?.image} alt=""/></Link>
              </>
             }
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
