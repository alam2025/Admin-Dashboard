import { Link, Outlet, useLocation } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import LivePreview from "../../../components/LivePreview/LivePreview";
import LiveCreateMasjid from "./LivePreview/LiveCreateMasjid";
import LivePrayerTime from "./LivePreview/LivePrayerTime";
const Masjid = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-[1442px] h-[736px] rounded-[20px] mx-auto my-auto bg-[#FFFFFF]  p-20 ">
      <div className="flex items-center justify-center animate__animated  animate__fadeIn">
        <div className="flex justify-center gap-16  rounded-[12px] ">
          <div className=" w-[756px]   h-[582px] px-14 py-10 rounded-lg content-bg">
            <Tabs>
              <TabList display="flex" justifyContent="space-between">
                <Tab color="#3385F0" paddingX="0">
                  <Link className="text-[24px]" to="">
                    Create Masjid
                  </Link>
                </Tab>

                <Tab color="#3385F0" paddingX="0">
                  <Link className="text-[24px] " to="prayer-time">
                    Prayer Time
                  </Link>
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel padding="0px">
                  <Outlet />
                </TabPanel>

                <TabPanel padding="0px">
                  <Outlet />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>

          <div className="w-[343px] h-[582px] grid items-center rounded-[12px] overflow-hidden content-bg relative">
           
          <LivePreview>
              {
                pathname === "/create-masjid" ? <LiveCreateMasjid/> : <LivePrayerTime/>
              }
            </LivePreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masjid;
