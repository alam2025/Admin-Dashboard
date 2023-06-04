import { Link, Outlet, useLocation } from "react-router-dom";
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
      className={`min-h-screen max-h-screen  overflow-x-hidden overflow-y-hidden relative   bg-cover bg-center bg-no-repeat `}
    >
      <Navbar />

      <div className="max-w-[1920px] mx-auto">
        {/* Navbar */}
        {/* Main Content */}
        <div className=" h-[850px] max-w-full relative    object-center">
          <div className=" flex   items-center h-[100%] w-[100%] px-14">
            <Sidebar />
            <div className=" h-[100%] w-[100%] flex  gap-4 ">
              {/* back home page button */}
              {/* {pathname === "/" ? null : (
                <Link
                  to="/"
                  className="relative w-[150px] h-[50px] rounded-[40px]  bg-white left-[-80px] top-4"
                >
                  <button className="w-[150px] h-[50px] rounded-[40px]  text-xl text-[#696969] font-medium font-Inter pl-8 pt-[5px]">
                    Back
                  </button>
                  <span className="absolute top-2 left-3 w-[36px] h-[36px] bg-[#232383]  rounded-full ring-1 flex justify-center items-center">
                    <MdKeyboardDoubleArrowLeft className="text-[25px] text-white" />
                  </span>
                </Link>
              )} */}

              {close && (
                <div
                  onClick={() => setClose(false)}
                  className="absolute bg-[#4340C2] rounded-l-full cursor-pointer flex justify-center items-center h-10 w-16  rounded-lg right-0 top-[16px] animate__animated animate__fadeIn animate__slow animate__slow "
                >
                  <AiOutlineSetting className="text-2xl text-white rotating " />
                </div>
              )}
              {
                !containerOpen && <HomeWidget/>
              }
              
              
              <div
                className={`w-[100%] grid transition-all ease-linear duration-700  z-10`}
              >
                {pathname === "/" && <Home />}

                <div className="h-[850px] flex   items-center !ml-[-74px]">
                  {pathname !== "/" && <Outlet />}
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
