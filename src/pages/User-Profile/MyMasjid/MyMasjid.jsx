import { Link, Outlet, useLocation } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import UserLivePreview from "../../../components/UserLivePreview/UserLivePreview";
import LiveMyMasjidDetails from "./UserMyMasjidLivePreview/LiveMyMasjidDetails";
import LiveMyMasjidList from "./UserMyMasjidLivePreview/LiveMyMasjidList";

const MyMasjid = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-[1442px] h-[736px] rounded-[20px] mx-auto my-auto bg-[#FFFFFF]  p-20">
      <div className="flex items-center justify-center">
        <div className=" flex gap-16  rounded-[12px] ">
          <div className=" w-[756px]  h-[582px] px-14 py-10 rounded-lg content-bg">
            <Tabs >
              <TabList display="flex" justifyContent="space-between">
                <Tab color="#3385F0" paddingX="0">
                  <Link className="text-[24px] " to="">
                  My Masjid
                  </Link>
                </Tab>

                <Tab color="#3385F0" paddingX="0">
                  <Link className="text-[24px] " to="my-masjid-list">
                  My Masjid List
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

          <div className="w-[343px]  h-[582px] grid items-center rounded-[12px] overflow-hidden content-bg relative">
            <UserLivePreview>
              {
                pathname === "/user-my-masjid" ? <LiveMyMasjidDetails/> : <LiveMyMasjidList/>
              }
               
               
            </UserLivePreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMasjid;
