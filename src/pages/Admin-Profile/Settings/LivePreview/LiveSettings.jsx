
import MobileTopLable from "../../../../components/LivePreview/MobileTopLable";
import man from "../../../../assets/notifacationman.png";
import { Switch } from "@chakra-ui/react";

const LiveSettings = () => {
  return (
    <div className="w-[220px] h-[450px] bg-white mx-auto rounded-md animate__animated  animate__fadeIn">
      <MobileTopLable
        data={{ title: "Settings", subtitle: "Manage Your Settings" }}
      />
      <div className="">
        <img className="" src={man} alt="" />

        <div className="mt-1 live-notifacation p-3 pb-6">
          <h1 className="text-[#04A999] font-Inter font-medium text-[14px]">
            Settings
          </h1>

          <div className="flex justify-center items-center flex-col gap-2 mt-2">
            <div className="flex justify-between items-center px-3 w-[200px] h-[35px] live-notifacation-input">
              <span className="text-[#04A999] font-Inter text-[10px] mt-[2px]">
                GPS Location
              </span>
              <span>
                {" "}
                <Switch size="md" className="!mt-[-6px]" />
              </span>
            </div>
            <div className="flex justify-between items-center px-3 w-[200px] h-[35px] live-notifacation-input">
              <span className="text-[#04A999] font-Inter text-[10px] mt-[2px]">
                Push Notification{" "}
              </span>
              <span>
                {" "}
                <Switch size="md"  className="!mt-[-6px]" />
              </span>
            </div>
            <div className="flex justify-between items-center px-3 w-[200px] h-[35px] live-notifacation-input">
              <span className="text-[#04A999] font-Inter text-[10px] mt-[2px]">
                Vibration Alert
              </span>
              <span>
                {" "}
                <Switch size="md"  className="!mt-[-6px]" />
              </span>
            </div>
            <div className="flex justify-between items-center px-3 w-[200px] h-[35px] live-notifacation-input">
              <span className="text-[#04A999] font-Inter text-[10px] mt-[2px]">
                Daily Prayer Alert
              </span>
              <span>
                {" "}
                <Switch size="md"  className="!mt-[-6px]" />
              </span>
            </div>
            {/* <div className='flex justify-between items-center px-3 w-[200px] h-[35px] live-notifacation-input'>
           <span className='text-[#04A999] font-Inter text-[10px] mt-[2px]'>My Masjid Notifications</span>
           <span>  <Switch size='sm' className='!mt-[-6px]'/></span>
             </div>
            <div className="flex justify-between items-center px-3 w-[200px] h-[35px] live-notifacation-input">
              <span className="text-[#04A999] font-Inter text-[10px] mt-[2px]">
                Masjid Update Notifications
              </span>
              <span>
                {" "}
                <Switch size="md"  className="!mt-[-6px]" />
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSettings;
