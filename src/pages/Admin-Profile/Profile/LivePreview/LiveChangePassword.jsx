import MobileTopLable from "../../../../components/LivePreview/MobileTopLable";
import image from "../../../../assets/chnagepassword.png";
const LiveChangePassword = () => {
 
  return (
    <div className="w-[220px] h-[430px]  mx-auto rounded-md animate__animated  animate__fadeIn">
      <MobileTopLable
        data={{ title: "Update Profile", subtitle: "Change Your Password" }}
      />
      <div className="my-3 ">
        {/*for Profile image */}
        <div className="w-full ">
          <img className="mx-auto w-[150px]" src={image} alt="" />
        </div>
        {/* Form */}
          <form>
           <div className="flex flex-col items-center gap-2 live-notifacation mt-2 p-3 py-6 pb-6">

           <div className=" flex flex-col gap-1">
              <span className="text-[#04A999] font-Inter text-[12px] font-normal">
              Old Password
              </span>
              <input
                type= "text"
                name="newPassword"
                className="w-[200px] h-[35px]  live-profile-input-shadow outline-0 text-[10px] pl-3 focus:border-[#04A999] focus:outline-none "
              />
            
            </div>


            <div className=" flex flex-col gap-1 ">
              <span className="text-[#04A999] font-Inter text-[12px] font-normal">
              New Password
              </span>
              <input
                type= "text" 
                name="newPassword"
                className="w-[200px] h-[35px]  live-profile-input-shadow outline-0 text-[10px] pl-3 focus:border-[#04A999] focus:outline-none "
              />
             
            </div>


            <div className=" flex flex-col gap-1 ">
              <span className="text-[#04A999] font-Inter text-[12px] font-normal">
              Confirm New Password
              </span>
              <input
                type= "password"
                name="newPassword"
                className="w-[200px] h-[35px]  live-profile-input-shadow outline-0 text-[10px] pl-3 focus:border-[#04A999] focus:outline-none  "
              />
            
            </div>



           </div>
          </form>
     
      </div>
    </div>
  );
};

export default LiveChangePassword;
