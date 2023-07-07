import { Link, Outlet, useLocation } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import UserLivePreview from "../../../components/UserLivePreview/UserLivePreview";
import UserLiveCreateFavourite from "./Livepreview/UserLiveCreateFavourite";
import UserLiveMyFavourite from "./Livepreview/UserLiveMyFavourite";

const UserFavorites = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-[1442px] h-[736px] rounded-[20px] mx-auto my-auto bg-[#FFFFFF]  p-20 ">
      <div className="flex   h-[100%]  ">
        <div className=" flex  rounded-[12px]  mx-auto">
          <div className=" w-[756px]   h-[582px] overflow-hidden py-10 rounded-lg content-bg mr-[77px] animate__animated  animate__fadeIn">
            <Tabs className="!px-14">
              <TabList display="flex" justifyContent="space-between">
                <Tab color="#3385F0" paddingX="0">
                  <Link className="text-[24px]" to="">
                    Create Favorites
                  </Link>
                </Tab>

                <Tab color="#3385F0" paddingX="0">
                  <Link className="text-[24px] " to="user-my-favorite-List">
                    My Favorite List
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

          <div className="w-[343px] h-[582px] grid items-center rounded-[12px] overflow-hidden content-bg relative animate__animated  animate__fadeIn">
            <UserLivePreview>
              {pathname === "/powerhouse/user-create-favorites" ? (
                <UserLiveCreateFavourite />
              ) : (
                < UserLiveMyFavourite/>
              )}
            </UserLivePreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFavorites;
