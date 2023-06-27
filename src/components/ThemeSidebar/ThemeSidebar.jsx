import React, { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Wheel, Chrome } from "@uiw/react-color";
import edit from "../../assets/edit.svg";
import modern from "../../assets/frame2.svg";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeBg } from "../../redux/features/ThemeSlices/bgColorSlice";
import { changeBgImage } from "../../redux/features/ThemeSlices/bgImageSlice.js";


const ThemeSidebar = ({ utils }) => {
  const [change, setChange] = useState(false)
  const [showDefault , setDefault] = useState("hidden")
  const { close, setClose } = utils;
  const [hex, setHex] = useState("#FFFFFF");
  const [picker, setPicker] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBg(hex));
  }, [hex]);
  const activeBgImage = useSelector((state) => state.bgImage.activeBgImage);

  const [uploadedImageUrl, setUploadedImageUrl] = useState(activeBgImage);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImageUrl(e.target.result);
    };
    reader.readAsDataURL(file);
    setChange(true)
  };
  
  if (change) {
    dispatch(changeBgImage(uploadedImageUrl));
  }


  const handleClose = () => {
      setClose(true); 
      setDefault("animate__fadeOutRight")
  };

  return (
    <div
      className={`${
        close
          ? `${showDefault}` // Apply the fadeOutRight animation class when closing
          : "animate__fadeInRight" // Apply the fadeInRight animation class when opening
      } animate__animated  content-bg transition-all font-Inter ease-out duration-700 bg-white px-6 ${
        pathname === "/" ? "h-[770px]" : "h-[736px]"
      } absolute right-0 w-[270px] shadow-lg rounded-l-[20px] custom-z `}
    >
      {/* Component Header */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={handleClose} // Call the handleClose function when the close button is clicked
          className="text-[#2f80ed] text-4xl hover:text-red-500 duration-300"
        >
          <RxCross2 />
        </button>
      </div>

      {/* Rest of the component */}
      {/* ... */}
      {/* Component Body */}
      <div className="mt-6 flex flex-col items-center gap-3 ">
        {/* ---------------------------------------------- */}
        <div>
          <h3 className=" text-gray-600 font-Inter my-2 text-xl">
            Select Theme
          </h3>
          {/* File Upload Button */}
          <label
            className="file-upload cursor-pointer flex justify-center gap-4 max-w-max items-center "
            htmlFor="theme"
          >
            <AiOutlineCloudUpload className="inline-block text-xl" />{" "}
            <span>Upload Theme</span>
          </label>
          <input className="hidden" type="file" name="theme" id="theme" />
        </div>
        {/* ---------------------------------------------- */}
        <div>
      <h3 className="text-gray-600 font-Inter my-2">Select Wallpaper</h3>
      {/* Wallpaper File Upload Button */}
      <label
        className="file-upload cursor-pointer flex justify-center gap-4 max-w-max items-center"
        htmlFor="wallpaper"
      >
        <AiOutlineCloudUpload className="inline-block text-xl" />
        <span>Upload Image</span>
      </label>
      <input
  className="hidden"
  type="file"
  name="wallpaper"
  id="wallpaper"
  accept="image/*"
  onChange={handleFileUpload}
/>
     
    </div>
        {/* ---------------------------------------------- */}
        <div>
          <h3 className=" text-gray-600 font-Inter my-2 text-base">
            Select Background Color
          </h3>
          <div>
            <Wheel
              className="!inline-block !w-40 overflow-hidden !h-40 !rounded-full !ml-2"
              color={hex}
              onChange={(color) => {
                setHex(color.hex);
              }}
            />
          </div>
          <div className="flex items-center  gap-6 my-2 ml-6">
            <div
              style={{ backgroundColor: hex }}
              className="w-10 h-10 ring-4 ring-gray-200 rounded-lg"
            ></div>
            <div className="w-24 bg-gray-200 p-2 text-center  rounded-lg border-2">
              {hex}
            </div>
            <div onClick={() => setPicker(true)} className="cursor-pointer">
              <img className="w-6" src={edit} alt="" />
            </div>
            <Chrome
              onMouseLeave={() => setPicker(false)}
              className={`${picker ? "!absolute" : "!hidden"} `}
              color={hex}
              onChange={(color) => {
                setHex(color.hex);
              }}
            />
          </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="hidden 2xl:block">
          <h3 className="  text-gray-600 font-Inter my-2 text-xl">
            Select Menu Style
          </h3>
          {/* Selector */}
          <div className="flex justify-center">
            <div className="object-cover rounded-md overflow-clip cursor-pointer">
              <img className="w-[180px] h-[100px]" src={modern} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSidebar;
