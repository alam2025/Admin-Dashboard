import { Switch } from "@chakra-ui/react";
import belicon from "../../../assets/notification.svg";
import tomezoon from "../../../assets/timezoon.svg";
import country from "../../../assets/country.svg";
import timeformet from "../../../assets/timeformet.svg";
import {Menu,MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import { useState } from "react";
import './UserSettings.css'
const UserSettings = () => {

 

const [isChecked, setIsChecked] = useState(false);

const handleChange = () => {
  setIsChecked(!isChecked);
};
  return (
    <div className=" rounded-lg px-10 animate__animated  animate__fadeIn">
      <h1 className="text-[#3385F0] font-Inter font-normal text-[26px] border-b-[2px] border-b-[#CDCDCD] pb-[6px]">
        Settings
      </h1>

      <div className="flex flex-col gap-8 mt-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src={belicon} alt="" />
            <h1 className="text-[#696969] font-Inter font-normal text-[20px]">
              Push Notifications
            </h1>
          </div>

          <div>
            <Switch id="" size="lg" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src={tomezoon} alt="" />
            <h1 className="text-[#696969] font-Inter font-normal text-[20px]">
              Time Zone
            </h1>
          </div>

          <div>
            <Menu>
              <MenuButton className="!text-[#414141] !font-Inter !font-normal !text-[16px]">
                Asia/Dhaka
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src={country} alt="" />
            <h1 className="text-[#696969] font-Inter font-normal text-[20px]">
              Country
            </h1>

            <Menu>
              <MenuButton className="!text-[#414141] !font-Inter !font-normal !text-[16px]">
                Asia/Dhaka
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </div>

          <div>
          <Menu>
              <MenuButton className="!text-[#414141] !font-Inter !font-normal !text-[16px]">
              Bangladesh
              </MenuButton>
              <MenuList>
                <MenuItem>India</MenuItem>
                <MenuItem>Pakistan</MenuItem>
                <MenuItem>Canada</MenuItem>
                <MenuItem>Usa</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src={timeformet} alt="" />
            <h1 className="text-[#696969] font-Inter font-normal text-[20px]">
              Time Format
            </h1>
          </div>

          <div>
          <label className="toggle">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="slider"></span>
      <span className="labels" data-on="24hour" data-off="12hour"></span>
    </label>
          </div>
        </div>

       
      </div>
      
    </div>
  );
};

export default UserSettings;
