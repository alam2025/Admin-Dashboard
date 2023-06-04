import MobileTopLable from "../../../../components/LivePreview/MobileTopLable";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import images from "../../../../assets/faimages.png";
const UserLiveMyFavourite = () => {
  return (
    <div className="w-[220px] h-[450px] bg-blue-50 mx-auto rounded-md animate__animated  animate__fadeIn">
      <MobileTopLable
        data={{ title: "My Favorite", subtitle: "Edit Your Favorite" }}
      />

      <div className="mt-3 font-Inter">
        <div className="flex justify-center relative">
          <input
            className=" bg-white w-[205px] h-[30px] text-[12px] text-[#04A999] outline-0 pl-10 rounded-[20px] border-[1px] border-[#04A999]"
            type="text"
            name=""
            id=""
            placeholder="Anderkilla Jame Masjid"
          />
          <FiSearch className="text-[#04A999] absolute top-[7px] left-5 text-[18px]" />
        </div>
        <p className="text-[#767676] text-[9px] pl-2 mt-2">
          The search result for “Anderkilla Jame Masjid”
        </p>

        <div className="flex flex-col gap-2  p-2">
          <div className="flex justify-between ">
            <div className="flex items-center gap-2">
              <img className="w-[25px] h-[25px] rounded" src={images} alt="" />
              <span>
                <p className="text-[10px] text-[#04A999] font-medium">
                  Anderkilla Sahi Jame Masjid
                </p>
                <p className="text-[8px] text-[#767676] font-normal">
                  Chittagong, Bangladesh
                </p>
              </span>
            </div>
            <div>
              <AiOutlineHeart className="text-[#04A999] text-xl cursor-pointer" />
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="flex items-center gap-2">
              <img className="w-[25px] h-[25px] rounded" src={images} alt="" />
              <span>
                <p className="text-[10px] text-[#04A999] font-medium">
                Anderkilla Masjid E Dinn
                </p>
                <p className="text-[8px] text-[#767676] font-normal">
                Dhaka, Bangladesh
                </p>
              </span>
            </div>
            <div>
              <AiOutlineHeart className="text-[#04A999] text-xl cursor-pointer" />
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="flex items-center gap-2">
              <img className="w-[25px] h-[25px] rounded" src={images} alt="" />
              <span>
                <p className="text-[10px] text-[#04A999] font-medium">
                Anderkilla Jame Masjid
                </p>
                <p className="text-[8px] text-[#767676] font-normal">
                Barishal, Bangladesh
                </p>
              </span>
            </div>
            <div>
              <AiOutlineHeart className="text-[#04A999] text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

{/* popular masjid list */}
         <div className="p-2">
           <h1 className="text-[14px] text-[#767676] font-normal">See Popular Masjid</h1>


           <div className="flex flex-col gap-2 mt-1 overscroll-y-auto custom-z ">
          <div className="flex justify-between ">
            <div className="flex items-center gap-2">
              <img className="w-[25px] h-[25px] rounded" src={images} alt="" />
              <span>
                <p className="text-[10px] text-[#04A999] font-medium">
                  Anderkilla Sahi Jame Masjid
                </p>
                <p className="text-[8px] text-[#767676] font-normal">
                  Chittagong, Bangladesh
                </p>
              </span>
            </div>
            <div>
              <AiOutlineHeart className="text-[#04A999] text-xl cursor-pointer" />
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="flex items-center gap-2">
              <img className="w-[25px] h-[25px] rounded" src={images} alt="" />
              <span>
                <p className="text-[10px] text-[#04A999] font-medium">
                Anderkilla Masjid E Dinn
                </p>
                <p className="text-[8px] text-[#767676] font-normal">
                Dhaka, Bangladesh
                </p>
              </span>
            </div>
            <div>
              <AiOutlineHeart className="text-[#04A999] text-xl cursor-pointer" />
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="flex items-center gap-2">
              <img className="w-[25px] h-[25px] rounded" src={images} alt="" />
              <span>
                <p className="text-[10px] text-[#04A999] font-medium">
                Anderkilla Jame Masjid
                </p>
                <p className="text-[8px] text-[#767676] font-normal">
                Barishal, Bangladesh
                </p>
              </span>
            </div>
            <div>
              <AiOutlineHeart className="text-[#04A999] text-xl cursor-pointer" />
            </div>
          </div>
        <div className="flex justify-between ">
            <div className="flex items-center gap-2">
              <img className="w-[25px] h-[25px] rounded" src={images} alt="" />
              <span>
                <p className="text-[10px] text-[#04A999] font-medium">
                Anderkilla Jame Masjid
                </p>
                <p className="text-[8px] text-[#767676] font-normal">
                Barishal, Bangladesh
                </p>
              </span>
            </div>
            <div>
              <AiOutlineHeart className="text-[#04A999] text-xl cursor-pointer" />
            </div>
          </div>
        <div className="flex justify-between ">
            <div className="flex items-center gap-2">
              <img className="w-[25px] h-[25px] rounded" src={images} alt="" />
              <span>
                <p className="text-[10px] text-[#04A999] font-medium">
                Anderkilla Jame Masjid
                </p>
                <p className="text-[8px] text-[#767676] font-normal">
                Barishal, Bangladesh
                </p>
              </span>
            </div>
            <div>
              <AiOutlineHeart className="text-[#04A999] text-xl cursor-pointer" />
            </div>
          </div>
     
       
       
       
       
        </div>


         </div>


    </div>
  );
};

export default UserLiveMyFavourite;
