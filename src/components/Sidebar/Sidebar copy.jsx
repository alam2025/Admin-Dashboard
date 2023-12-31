import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ModalOverlay, Tooltip, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleContainerOpen, toggleIsOpen } from "../../redux/features/HomeSlices/homeDisplaySlice";
import LogoutModal from "../LogoutCofirmation/LogoutModal";
import belIcon from '../../assets/notification.svg';
import menu from "../../assets/menu.svg";
import managePost from "../../assets/managepost.svg";
import email from "../../assets/Email.svg";
import user from "../../assets/user.svg";
import plus from "../../assets/plus.svg";
import logout from "../../assets/logout.svg";
import mosque from "../../assets/mosque.svg";
import favourite from "../../assets/favourite.svg";
import settings from "../../assets/settings.svg";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const isHomeDisplayOpen = useSelector((state) => state.homeDisplay.isOpen);
  const containerOpen = useSelector((state) => state.homeDisplay.containerOpen);
  
  const handleClick = () => {
    dispatch(toggleIsOpen(!isHomeDisplayOpen));
    dispatch(toggleContainerOpen(!containerOpen));
  };
  
  const userinformation = useSelector((state) => state?.userData?.userinfo  );


  const OverlayOne = () => (
    <ModalOverlay bg="" backdropFilter="" />
    );
    
    const [overlay, setOverlay] = useState(<OverlayOne />);
  return (
    <div className=" absolute top-[6%]">
      <div className="   bg-[#ffffff] border rounded-full">
        <div className="flex flex-col">
          <div className="flex flex-col gap-7 items-center mt-6">
            {pathname === "/powerhouse" && (
              <>
                <Tooltip className="!bg-[#2C80FF] " label="Menu" placement="right">
                  <img
                    onClick={handleClick}
                    className="2xl:w-36 xl:w-[36px] cursor-pointer duration-500 rounded "
                    src={menu}
                    alt=""
                  />
                </Tooltip>

                <Tooltip className="!bg-[#2C80FF]" label="Manage Post" placement="right">
                  <Link to="/powerhouse">
                    <img className="2xl:w-36 xl:w-[36px] " src={managePost} alt="" />
                  </Link>
                </Tooltip>
                <Tooltip className="!bg-[#2C80FF] " label="Emails" placement="right">
                  <Link to="/powerhouse">
                    <img className="2xl:w-36 xl:w-[36px] " src={email} alt="" />
                  </Link>
                </Tooltip>
              </>
            )}


             

{
  userinformation?.is_creator === true ? (
    <>
      <Tooltip className="!bg-[#2C80FF]" label="Profile" placement="right">
        <Link className="transition-all ease-linear duration-1000" to="/powerhouse/admin-profile">
          <img className="2xl:w-36 xl:w-[36px]" src={user} alt="" />
        </Link>
      </Tooltip>

      {pathname !== "/powerhouse" && (
        <>
          <Tooltip className="!bg-[#2C80FF]" label="Masjid" placement="right">
            <Link to="/powerhouse/create-masjid">
              <img className="2xl:w-36 xl:w-[36px]" src={mosque} alt="" />
            </Link>
          </Tooltip>
          <Tooltip className="!bg-[#2C80FF]" label="Favorites" placement="right">
            <Link to="/powerhouse/create-favorites">
              <img className="2xl:w-36 xl:w-[36px]" src={favourite} alt="" />
            </Link>
          </Tooltip>
          <Tooltip className="!bg-[#2C80FF]" label="Settings" placement="right">
            <Link to="/powerhouse/admin-settings">
              <img className="2xl:w-36 xl:w-[36px]" src={settings} alt="" />
            </Link>
          </Tooltip>
        </>
      )}
    </>
  ) : (
    <>
      <Tooltip className="!bg-[#2C80FF]" label="Profile" placement="right">
        <Link className="transition-all ease-linear duration-1000" to="/powerhouse/user-profile">
          <img className="2xl:w-36 xl:w-[36px]" src={user} alt="" />
        </Link>
      </Tooltip>

      {pathname !== "/powerhouse" && (
        <>
          <Tooltip className="!bg-[#2C80FF]" label="Masjid" placement="right">
            <Link to="/powerhouse/user-my-masjid">
              <img className="2xl:w-36 xl:w-[36px]" src={mosque} alt="" />
            </Link>
          </Tooltip>
          <Tooltip className="!bg-[#2C80FF]" label="Favorites" placement="right">
            <Link to="/powerhouse/user-create-favorites">
              <img className="2xl:w-36 xl:w-[36px]" src={favourite} alt="" />
            </Link>
          </Tooltip> 
          <Tooltip className="!bg-[#2C80FF]" label="Favorites" placement="right">
            <Link to="/powerhouse/user-notifications">
              <img className="2xl:w-36 xl:w-[36px]" src={belIcon} alt="" />
            </Link>
          </Tooltip>
          <Tooltip className="!bg-[#2C80FF]" label="Settings" placement="right">
            <Link to="/powerhouse/user-settings">
              <img className="2xl:w-36 xl:w-[30px]" src={settings} alt="" />
            </Link>
          </Tooltip>
        </>
      )}
    </>
  )
}



            {pathname === "/powerhouse" && (
              <div className="relative">
                <Tooltip className="!bg-[#2C80FF]" label="Add" placement="right">
                  <img
                   
                    className="2xl:w-36 xl:w-[36px] cursor-pointer"
                    src={plus}
                    alt=""
                  />
                </Tooltip>
                {/* More Menu Modal */}
               
              </div>
            )}
             <Tooltip className="!bg-[#2C80FF]" label="Logout" placement="right">
            <div className=" w-11 flex justify-center  cursor-pointer">
              <img
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
                className="flex items-center justify-center 2xl:w-30 xl:w-[30px] xl:ml-1 2xl:ml-0"
                src={logout}
                alt=""
              />
            </div>
          </Tooltip>
          </div>
         
        </div>
        <LogoutModal action={{ onClose, isOpen, overlay: overlay }} />
      </div>
    </div>
  );
};

export default Sidebar;