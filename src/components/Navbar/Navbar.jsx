import logo from '../../assets/logo.png';
import adminImage from '../../assets/m header.png';
import belIcon from '../../assets/notification.svg';
import { Link, useLocation } from 'react-router-dom';
import NotificationsMenu from '../NotificationsMenu/NotificationsMenu';
import { useState } from 'react';

const Navbar = () => {
  const {pathname} = useLocation()
  const [notification ,setNotification] = useState(false)
  useState(()=>{
    setNotification(false)
},[pathname])
  return (
    <div className="bg-white w-full">
      <div className="h-[72px] px-[36px]  max-w-[1920px] mx-auto">
        <div className="flex justify-between items-center h-[80px]">
          <Link className='block' to='/'>
            <img className="block w-[230px] -ml-10" src={logo} alt=""/>
          </Link>
         {/* {
          pathname !== "/" &&
           <div className="relative">
           <input type="text" name="" id="" className="border-[0.5px] border-[#A4A6B3] rounded-full w-[430px] py-[4px] pl-5 outline-0" placeholder="Type to Search"/>
           <button>
             <CiSearch className="absolute top-[7px] right-3 text-[20px]"></CiSearch>
           </button>
         </div>
         } */}
          <div className="flex gap-4 items-center">
            <div className='relative'>
            {/* Notification */}
              <img onClick={()=>setNotification(!notification)} className="cursor-pointer" src={belIcon} alt=""/>
              {notification && <div > <NotificationsMenu actions={{notification , setNotification}} /></div>}
              </div>
            <div className="h-[45px] bg-[#DFE0EB] w-[2px]"></div>
            <div>
              <h1 className="text-[20px] text-[#696969] font-Inter font-medium">Sajjad Hossain</h1>
              <p className="text-[15px] text-[#696969] font-Inter font-normal">admin</p>
            </div>
            <div className="border-[2px] border-[#3385F0] p-[2px] rounded-full">
              <Link to='/admin-profile' className='cursor-pointer'><img className="h-[35px] w-[35px] rounded-full" src={adminImage} alt=""/></Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
