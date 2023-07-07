import { Link, Outlet, useLocation } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import LivePreview from "../../../components/LivePreview/LivePreview";
import LiveProfile from "./LivePreview/LiveProfile";
import LiveChangePassword from "./LivePreview/LiveChangePassword";
const AdminProfile = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-[1442px] h-[736px] rounded-[20px] mx-auto my-auto bg-[#FFFFFF]  p-20">
     
      <div className="flex items-center justify-center">
        <div className=" flex gap-16  rounded-[12px] ">
          <div className=" w-[756px]  h-[582px] px-14 py-10 rounded-lg content-bg">
            <Tabs>
              <TabList display="flex" justifyContent="space-between">
                <Tab color="#3385F0" paddingX="0">
                  <Link className="text-[24px] " to="">
                    Profile Details
                  </Link>
                </Tab>

                <Tab color="#3385F0" paddingX="0">
                  <Link className="text-[24px] " to="change-password">
                    Change Password
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
            <LivePreview>
              {pathname === "/powerhouse/admin-profile" ? (
                <LiveProfile />
              ) : (
                <LiveChangePassword />
              )}
            </LivePreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
