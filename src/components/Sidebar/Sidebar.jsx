import React, { useState } from "react";
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
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
    );
    
    const [overlay, setOverlay] = useState(<OverlayOne />);
  return (
    <div>
      <div className="w-[80px] max-h-[770px] z-50 transition-all ease-linear duration-1000 relative p-4 min-h-max bg-[#ffffff] border rounded-full">
        <div className="flex flex-col">
          <div className="flex flex-col gap-7 items-center mt-6">
            {pathname === "/powerhouse" && (
              <>
                <Tooltip className="!bg-[#2C80FF]" label="Menu" placement="right">
                  <img
                    onClick={handleClick}
                    className="w-36 cursor-pointer"
                    src={menu}
                    alt=""
                  />
                </Tooltip>

                <Tooltip className="!bg-[#2C80FF]" label="Manage Post" placement="right">
                  <Link to="/powerhouse">
                    <img className="w-36" src={managePost} alt="" />
                  </Link>
                </Tooltip>
                <Tooltip className="!bg-[#2C80FF]" label="Emails" placement="right">
                  <Link to="/powerhouse">
                    <img className="w-36" src={email} alt="" />
                  </Link>
                </Tooltip>
              </>
            )}


             

{
  userinformation?.is_creator === true ? (
    <>
      <Tooltip className="!bg-[#2C80FF]" label="Profile" placement="right">
        <Link className="transition-all ease-linear duration-1000" to="/powerhouse/admin-profile">
          <img className="w-36" src={user} alt="" />
        </Link>
      </Tooltip>

      {pathname !== "/powerhouse" && (
        <>
          <Tooltip className="!bg-[#2C80FF]" label="Masjid" placement="right">
            <Link to="/powerhouse/create-masjid">
              <img className="w-36" src={mosque} alt="" />
            </Link>
          </Tooltip>
          <Tooltip className="!bg-[#2C80FF]" label="Favorites" placement="right">
            <Link to="/powerhouse/create-favorites">
              <img className="w-36" src={favourite} alt="" />
            </Link>
          </Tooltip>
          <Tooltip className="!bg-[#2C80FF]" label="Settings" placement="right">
            <Link to="/powerhouse/admin-settings">
              <img className="w-36" src={settings} alt="" />
            </Link>
          </Tooltip>
        </>
      )}
    </>
  ) : (
    <>
      <Tooltip className="!bg-[#2C80FF]" label="Profile" placement="right">
        <Link className="transition-all ease-linear duration-1000" to="/powerhouse/user-profile">
          <img className="w-36" src={user} alt="" />
        </Link>
      </Tooltip>

      {pathname !== "/powerhouse" && (
        <>
          <Tooltip className="!bg-[#2C80FF]" label="Masjid" placement="right">
            <Link to="/powerhouse/user-my-masjid">
              <img className="w-36" src={mosque} alt="" />
            </Link>
          </Tooltip>
          <Tooltip className="!bg-[#2C80FF]" label="Favorites" placement="right">
            <Link to="/powerhouse/user-create-favorites">
              <img className="w-36" src={favourite} alt="" />
            </Link>
          </Tooltip> 
          <Tooltip className="!bg-[#2C80FF]" label="Favorites" placement="right">
            <Link to="/powerhouse/user-notifications">
              <img className="w-32" src={belIcon} alt="" />
            </Link>
          </Tooltip>
          <Tooltip className="!bg-[#2C80FF]" label="Settings" placement="right">
            <Link to="/powerhouse/user-settings">
              <img className="w-32" src={settings} alt="" />
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
                   
                    className="w-36 cursor-pointer"
                    src={plus}
                    alt=""
                  />
                </Tooltip>
                {/* More Menu Modal */}
               
              </div>
            )}
          </div>
          <Tooltip className="!bg-[#2C80FF]" label="Logout" placement="right">
            <div className=" w-11 mt-20  cursor-pointer">
              <img
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
                className="w-36"
                src={logout}
                alt=""
              />
            </div>
          </Tooltip>
        </div>
        <LogoutModal action={{ onClose, isOpen, overlay: overlay }} />
      </div>
    </div>
  );
};

export default Sidebar;
