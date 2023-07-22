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

  const handlePage=()=>{
    console.log('sdhfj');
  }
  return (
    <div
      style={{ backgroundImage: `url(${activeBgImage})` }}
      className={`flex flex-col min-h-screen max-h-screen overflow-x-hidden relative   bg-cover bg-center bg-no-repeat  `}
    >
      <Navbar />

        <div className=" ">
          <div className=" flex justify-between gap-10 md:24 lg:gap-28  mt-16">
            <Sidebar />

            <div className=" w-[100%] mb-16 ">
              
              <Outlet />

              {/* <div>
                {
                  !containerOpen && <HomeWidget />
                }
              </div>



              
               <div
                  className={`w-[100%] grid transition-all ease-linear duration-700  z-10`}
                >
                  {pathname === "/powerhouse" && <Home />}

                  <div className="flex   items-center !ml-[-74px]">
                    {pathname !== "/powerhouse" && <Outlet />}
                  </div>
                </div> */}
              
            </div>

            <div className={`${!close && 'mr-16'}`}>
              {close && (
                <div
                  onClick={() => setClose(false)}
                  className=" bg-[#4340C2] rounded-l-full cursor-pointer flex justify-center items-center h-10 w-16  rounded-lg animate__animated animate__fadeIn animate__slow animate__slow"
                >
                  <Link> <AiOutlineSetting className="text-2xl text-white rotating " /></Link>
                </div>
              )}
            </div>

            <ThemeSidebar utils={{ setClose, close }} />
          </div>
        </div>
       
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Root;