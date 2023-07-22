import { Link, Outlet, useLocation } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import UserLivePreview from "../../../components/UserLivePreview/UserLivePreview";
import UserLiveProfileDetails from "./UserLivePreview/UserLiveProfileDetails";
import UserLiveChangePassword from "./UserLivePreview/UserLiveChangePassword";

const UserProfile = () => {
  const { pathname } = useLocation();
  return (
    <div className=" rounded-[20px] w-[100%] mx-auto my-auto bg-[#FFFFFF]  p-20">
      <div className="">
        <div className="flex flex-col-reverse lg:flex-row justify-start ">
          <div className="w-[100%] lg:w-[60%]  px-14 py-10 rounded-lg content-bg">
            <Tabs >
              <TabList display="flex" justifyContent="space-between">
                <Tab color="#3385F0" paddingX="0">
                  <Link className="text-[24px] " to="">
                    Profile Details
                  </Link>
                </Tab>

                <Tab color="#3385F0" paddingX="0">
                  <Link className="text-[24px] " to="user-change-password">
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

          <div className="w-[100%] lg:w-[40%]   grid items-center rounded-[12px] overflow-hidden content-bg relative">
            <UserLivePreview>
              {
                pathname === "/powerhouse/user-profile" ? <UserLiveProfileDetails/> : <UserLiveChangePassword/>
              }
               
               
            </UserLivePreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;