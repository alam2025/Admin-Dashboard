import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import ThemeSidebar from "../components/ThemeSidebar/ThemeSidebar";
import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import HomeWidget from "../components/HomeWidget/HomeWidget";

const Root = () => {
  const [close, setClose] = useState(true);
  const containerOpen = useSelector((state) => state.homeDisplay.containerOpen);
  const activeBgImage = useSelector((state) => state.bgImage.activeBgImage);
  let { pathname } = useLocation();
  return (
    <div
      style={{ backgroundImage: `url(${activeBgImage})` }}
      className={`min-h-screen max-h-screen overflow-x-hidden relative   bg-cover bg-center bg-no-repeat  `}
    >
      <Navbar />

      <div className="max-w-[1920px] mx-auto mt-12 ">
        {/* Navbar */}
        {/* Main Content */}
        <div className="  max-w-full     object-center">
          <div className=" flex    h-[100%] w-[100%] 2xl:px-14 xl:px-3 ">
            <Sidebar />
            <div className=" ">
             

              {close && (
                <div
                  onClick={() => setClose(false)}
                  className="absolute bg-[#4340C2] rounded-l-full cursor-pointer flex justify-center items-center h-10 w-16  rounded-lg right-0 z-50 animate__animated animate__fadeIn animate__slow animate__slow "
                >
                  <AiOutlineSetting className="text-2xl text-white rotating " />
                </div>
              )}
             <div>
             {
                !containerOpen && <HomeWidget/>
              }
             </div>
              
              
              <div
                className={`w-[100%] grid transition-all ease-linear duration-700  z-10`}
              >
                {pathname === "/powerhouse" && <Home />}

                <div className="flex   items-center !ml-[-74px]">
                  {pathname !== "/powerhouse" && <Outlet />}
                </div>
              </div>
            </div>

            <ThemeSidebar utils={{ setClose, close }} />
          </div>
        </div>
        <div></div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Root;