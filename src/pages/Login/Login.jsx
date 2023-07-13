import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import icon from "../../assets/logo.png";
import login1 from "../../assets/login/login-1.png";
import login2 from "../../assets/login/login-2.png";
import login3 from "../../assets/login/login-3.png";
import login4 from "../../assets/login/login-4.png";
import login5 from "../../assets/login/login-5.png";
import { Helmet } from "react-helmet-async";
import { Link,useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/features/api/authApiSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import Swal from 'sweetalert2';
import Loader from "../../components/Loader/Loader";
import { setUserData } from "../../redux/features/UserSlices/UserSlices";



const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [actionlogin, { isError, isLoading, data, isSuccess }] =
    useLoginUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    user_id: "473afeef-6b15-4ad0-99d3-405bb2d1aadd",
  });

  useEffect(() => {
    const images = [login1, login2, login3, login4, login5];
    const index = localStorage.getItem("backgroundImageIndex");
    const nextIndex = index ? (parseInt(index, 10) + 1) % images.length : 0;
    setBackgroundImage(images[nextIndex]);
    localStorage.setItem("backgroundImageIndex", nextIndex.toString());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await actionlogin(formValues);

    if (response.data?.data?.status === false) {
      Swal.fire({
        title: "Error!",
        text: `${response.data?.data?.message}`,
        icon: "error",
        confirmButtonText: "Close",
      });
    }

    if (response.data) {
      dispatch(setUserData(response.data?.data?.user));
    }

    if (response?.data?.data?.token) {
      Cookies.set("token", response?.data?.data?.token);
    }

    if (response?.data?.data?.status) {
      if (response?.data?.data?.user?.is_creator) {
        navigate("/powerhouse");
      } else {
        navigate("/powerhouse/user-profile");
      }
    } else {
      navigate("/login");
    }
  };

  const style = {
    background: `url(${backgroundImage})`,
  };
 

  return (
    <div
      style={style}
      className=" w-full min-h-screen relative !bg-no-repeat !bg-cover"
    >
      <Helmet>
        <title>Ya-Sin - Login </title>
      </Helmet>
      <div className=" w-full min-h-screen ">
        <div className="bg-white  w-[430px] h-[530px] border-[1px] border-[#DFE0EB] rounded-[8px]  absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center">
          <div className="mt-32">
            <img
              className=" z-50 w-[340px] mx-auto mt-[-230px] mb-2"
              src={icon}
              alt=""
            />
            <div className="flex flex-col justify-center items-center mt-[-60px] "></div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1  mx-auto">
                <span className="text-[#696969] font-Inter text-[12px] font-normal uppercase">
                  email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formValues.email}
                  className="w-[316px] h-12 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0 rounded-lg pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
                  onChange={handleInputChange}
                />

                 {/* email Error */}
              {data?.data?.error?.email && (
                <p className="text-[14px] text-red-500 font-Inter font-bold ">
                  {data?.data?.error?.email[0]}
                </p>
              )}
              </div>
             

              <div className="relative flex flex-col gap-1 mx-auto">
                <span className="text-[#696969] font-Inter text-[12px] font-normal uppercase">
                  password
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  className="w-[316px] h-12 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0 rounded-lg pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
                  onChange={handleInputChange}
                />
                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <BsEye className="absolute right-4 4 top-[38px] cursor-pointer text-[16px]" />
                  ) : (
                    <BsEyeSlash className="absolute right-4 4 top-[38px] cursor-pointer text-[16px]" />
                  )}
                </div>

                 {/* password Error */}
              {data?.data?.error?.password && (
                <p className="text-[14px] text-red-500 font-Inter font-bold">
                  {data?.data?.error?.password[0]}
                </p>
              )}
              </div>
             

              <div className="flex justify-end mt-[-12px] w-[320px]">
                <div className="flex  justify-between items-center w-[170px]">
                  <Link to='/powerhouse/forget-password' className="text-[#696969] font-Inter font-medium text-[14px]">
                    Forget Password
                  </Link>
                  <h1 className="w-[0.5px] h-[26px] bg-[#A4A6B3]"></h1>
                  <Link to={'/sign-up'} className="text-[#3385F0] font-Inter font-medium text-[14px]">
                    Sign Up
                  </Link>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                {isLoading ? (
             

              <Loader/>
                ) : (
                  <button type="submit" className="ripple !w-[150px] !h-[44px] !rounded-[8px]">
                    Log In
                  </button>
                )}
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
