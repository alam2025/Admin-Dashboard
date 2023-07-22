import { CiSearch } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { toggleContainerOpen, toggleIsOpen } from "../../redux/features/HomeSlices/homeDisplaySlice";
import ItemCard from "../../components/Home/ItemCard";
import adminImage from "../../assets/admin.svg";
import blogsImage from "../../assets/blogs.svg";
import communitiesImage from "../../assets/communities.svg";
import emailImage from "../../assets/email.svg";
import islamicVideoImage from "../../assets/islamicVideo.svg";
import managePostImage from "../../assets/managepost.svg";
import mosqueImage from "../../assets/mosque.svg";
import prayerTimeImage from "../../assets/prayertime.svg";
import ramadanImage from "../../assets/ramadan.svg";
import subscribeImage from "../../assets/subscribe.svg";
import supportImage from "../../assets/support.svg";
import userImage from "../../assets/user.svg";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

const datas = [
  {
    id: 1,
    title: "Admin",
    image: adminImage,
    isFavourite: true,
  },
  {
    id: 2,
    title: "Blogs",
    image: blogsImage,
    isFavourite: false,
  },
  {
    id: 3,
    title: "Communities",
    image: communitiesImage,
    isFavourite: false,
  },
  {
    id: 4,
    title: "Email",
    image: emailImage,
    isFavourite: false,
  },
  {
    id: 5,
    title: "Islamic Video",
    image: islamicVideoImage,
    isFavourite: false,
  },
  {
    id: 6,
    title: "Manage Post",
    image: managePostImage,
    isFavourite: false,
  },
  {
    id: 7,
    title: "Mosque",
    image: mosqueImage,
    isFavourite: false,
  },
  {
    id: 8,
    title: "Prayer Time",
    image: prayerTimeImage,
    isFavourite: false,
  },
  {
    id: 9,
    title: "Ramadan",
    image: ramadanImage,
    isFavourite: false,
  },
  {
    id: 10,
    title: "Subscribe",
    image: subscribeImage,
    isFavourite: false,
  },
  {
    id: 11,
    title: "Support",
    image: supportImage,
    isFavourite: false,
  },
  {
    id: 12,
    title: "User",
    image: userImage,
    isFavourite: false,
  },
  {
    id: 13,
    title: "Subscribe",
    image: subscribeImage,
    isFavourite: false,
  },
  {
    id: 14,
    title: "Support",
    image: supportImage,
    isFavourite: false,
  },
  {
    id: 15,
    title: "User",
    image: userImage,
    isFavourite: false,
  },
  {
    id: 16,
    title: "Subscribe",
    image: subscribeImage,
    isFavourite: false,
  },
  {
    id: 17,
    title: "Support",
    image: supportImage,
    isFavourite: false,
  },
  {
    id: 18,
    title: "User",
    image: userImage,
    isFavourite: false,
  },
];

const Home = () => {
  const containerOpen = useSelector((state) => state?.homeDisplay?.containerOpen);
  const isHomeDisplayOpen = useSelector((state) => state?.homeDisplay?.isOpen);
  const activeBg = useSelector((state) => state?.bgColor?.activeBg);
  const dispatch = useDispatch();
  const navigate= useLocation()

  const handleClick = () => {
    dispatch(toggleIsOpen(!isHomeDisplayOpen));
    dispatch(toggleContainerOpen(!containerOpen));
    
  };

  return (
    <div style={{backgroundColor : activeBg}} className={`w-[100%] mx-auto ${containerOpen ? '' : 'opacity-0'} transition-all ease-linear duration-700 rounded-[20px]    px-4  custom-shadow `}>
      <Helmet>
        <title>Ya-Sin - Home </title>
      </Helmet>
      {/* Component Header */}
      <div className="2xl:mb-12 xl:mb-6 flex items-center relative">
        <Link to='/powerhouse'>
        <TiDelete
          onClick={handleClick}
          className="text-4xl absolute right-12 text-red-500 cursor-pointer"
        />
        </Link>

        <div className="relative  mx-auto pt-8">
          <input
            type="text"
            name=""
            id=""
            className="border-[0.5px] border-[#A4A6B3] md:w-[400px] rounded-full  py-[8px]  pl-5 pr-10 outline-0"
            placeholder="Type to Search"
            
          />
          <button>
            <CiSearch className="absolute top-[40px] right-3 text-[30px]"></CiSearch>
          </button>
        </div>
      </div>

      {/* Component Body */}
      <div className={`grid justify-items-center rounded-md grid-cols-4 overflow-hidden 2xl:max-h-[595px] xl:max-h-[360px]  py-2 2xl:gap-y-[72px] xl:gap-y-[55px] xl:px-12 2xl:px-0 gap-x-0 ${containerOpen && 'overflow-y-auto'}`}>
        {datas?.map((val) => (
          <ItemCard key={val.id} val={val} />
        ))}
      </div>
    </div>
  );
};

export default Home;