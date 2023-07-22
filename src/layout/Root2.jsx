import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import HomeWidget from '../components/HomeWidget/HomeWidget';
import Home from '../pages/Home/Home';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';
import ThemeSidebar from '../components/ThemeSidebar/ThemeSidebar';
import { useSelector } from 'react-redux';

const Root2 = () => {
      const [close, setClose] = useState(true);
      const containerOpen = useSelector((state) => state.homeDisplay.containerOpen);
      let { pathname } = useLocation();
      return (

            <div className=" flex justify-between gap-10 md:24 lg:gap-28  mt-16">
                  <Sidebar />

                  <div className=" w-[100%] ">
{/* 
                        <div>
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

      );
};

export default Root2;