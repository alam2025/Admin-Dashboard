import { Link, Outlet, useLocation } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import LivePreview from "../../../components/LivePreview/LivePreview";
import LiveCreateFavourite from "./LivePreview/LiveCreateFavourite";
import LiveMyFavourite from "./LivePreview/LiveMyFavourite";
const Favorite = () => {
  const { pathname } = useLocation();
  return (
    <div className="2xl:w-[1442px] 2xl:h-[736px] xl:w-[1180px] xl:h-[560px] rounded-[20px] 2xl:mx-auto 2xl:my-auto bg-[#FFFFFF]  2xl:p-20 xl:p-5 xl:mt-[-270px] xl:ml-[120px] ">
      <div className="flex   h-[100%]  ">
        <div className=" flex  rounded-[12px]  mx-auto">
          <div className=" 2xl:w-[756px]   2xl:h-[582px] xl:w-[756px] xl:h-[520px] 2xl:overflow-hidden xl:overflow-hidden 2xl:py-10 xl:py-6 rounded-lg content-bg mr-[77px] animate__animated  animate__fadeIn">
            <Tabs className="!px-14">
              <TabList display="flex" justifyContent="space-between">
                <Tab color="#3385F0" paddingX="0">
                  <Link className="text-[24px]" to="">
                    Create Favorites
                  </Link>
                </Tab>

                <Tab color="#3385F0" paddingX="0">
                  <Link className="text-[24px] " to="my-favorite-List">
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

          <div className="2xl:w-[343px] 2xl:h-[582px] xl:w-[343px] xl:h-[530px] xl:ml-[-30px] 2xl:ml-0 grid items-center rounded-[12px] overflow-hidden content-bg relative animate__animated  animate__fadeIn">
            <LivePreview>
              {pathname === "/powerhouse/create-favorites" ? (
                <LiveCreateFavourite />
              ) : (
                < LiveMyFavourite/>
              )}
            </LivePreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
