import { Link, Outlet, useLocation } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import LivePreview from "../../../components/LivePreview/LivePreview";
import LiveProfile from "./LivePreview/LiveProfile";
import LiveChangePassword from "./LivePreview/LiveChangePassword";
const AdminProfile = () => {
  const { pathname } = useLocation();
  return (
    <div className=" rounded-[20px]  mx-auto 2xl:my-auto bg-[#FFFFFF]  2xl:p-20 xl:p-5 xl:mt-[-270px] ">
     
      <div className="flex items-center justify-center">
        <div className=" flex gap-16  rounded-[12px] ">
          <div className="  2xl:px-14 xl:px-10 2xl:py-10 xl:py-8 rounded-lg content-bg">
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

          <div className="2xl:w-[343px]  2xl:h-[582px] xl:h-[520px] grid items-center rounded-[12px] overflow-hidden content-bg relative">
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
