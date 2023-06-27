import { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/features/api/authApiSlice";
import Swal from "sweetalert2";
import icon from "../../assets/logo.png";
import login1 from "../../assets/login/login-1.png";
import login2 from "../../assets/login/login-2.png";
import login3 from "../../assets/login/login-3.png";
import login4 from "../../assets/login/login-4.png";
import login5 from "../../assets/login/login-5.png";
import { useRef } from "react";
import Loader from "../../components/Loader/Loader";

const SignUp = () => {
  const [actionRegister, { isError, isLoading, isSuccess, data }] =
    useRegisterUserMutation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const fileInputRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const images = [login1, login2, login3, login4, login5];
    const index = localStorage.getItem("backgroundImageIndex");
    const nextIndex = index ? (parseInt(index, 10) + 1) % images.length : 0;
    setBackgroundImage(images[nextIndex]);
    localStorage.setItem("backgroundImageIndex", nextIndex.toString());
  }, []);

  useEffect(() => {
    if (data?.data?.status) {
      // Display error message using Swal
      Swal.fire({
        title: "Please Verify your account",
        text: ` ${data?.data?.message}`,
        icon: "success",
        confirmButtonText: "Close",
      });
    }
  }, [data]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const file = fileInputRef.current.files[0];

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", form.elements.name.value);
    formData.append("email", form.elements.email.value);
    formData.append("password", form.elements.password.value);

    //confirm password error
    const confirmPassword = form.elements.confirmPassword.value;

    if (formData.get("password") !== confirmPassword) {
      setPasswordError("Password and confirm password do not match");
      return;
    }

    setPasswordError(""); // Reset the password error if it was previously shown

    // Get the value of the selected user type (true for admin, false for user)
    const userType = form.elements.userType.value === "admin";
    formData.append("is_creator", userType);

    // Call your registration API with the formData object
    actionRegister(formData);
  };

  const style = {
    background: ` url(${backgroundImage})`,
  };

  return (
    <div
      style={style}
      className="w-full min-h-screen relative !bg-no-repeat !bg-cover"
    >
      <Helmet>
        <title>Ya-Sin - SignUp</title>
      </Helmet>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="bg-white w-[430px] pb-8 border-[1px] border-[#DFE0EB] rounded-[8px] flex flex-col items-center">
          <div className="">
            <img
              className="z-50 w-[340px] mt-[-60px] mx-auto mb-1"
              src={icon}
              alt=""
            />

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[5px] mt-[-80px]"
            >
              <div className="relative">
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="absolute opacity-0 w-[70px] h-[70px] rounded-full cursor-pointer"
                />
                <img
                  className="w-[70px] h-[70px] ml-4 rounded-full cursor-pointer"
                  src={
                    selectedImage || "https://i.ibb.co/QpNqSV1/Group-163.png"
                  }
                  alt=""
                />
                 {/* Image Error */}
              {data?.data?.error?.image && (
                <p className="text-[14px] text-red-500 ml-4 font-Inter font-bold">
                  {data?.data?.error?.image[0]}
                </p>
              )}
              </div>
             

              <div className="flex flex-col gap-1 mx-auto">
                <span className="text-[#696969] font-Inter text-[16px] font-normal">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-[316px] h-12 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0 rounded-lg pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
                />
                {/* Name Error */}
              {data?.data?.error?.name && (
                <p className="text-[14px] text-red-500 font-Inter font-bold">
                  {data?.data?.error?.name[0]}
                </p>
              )}

              </div>
              
              <div className="flex flex-col gap-1 mx-auto">
                <span className="text-[#696969] font-Inter text-[16px] font-normal">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-[316px] h-12 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0 rounded-lg pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
                />
                 {/* Email Error */}
              {data?.data?.error?.email && (
                <p className="text-[14px] text-red-500 font-Inter font-bold">
                  {data?.data?.error?.email[0]}
                </p>
              )}
              </div>
             

              <div className="relative flex flex-col gap-1 mx-auto">
                <span className="text-[#696969] font-Inter text-[16px] font-normal">
                  Password
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-[316px] h-12 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0 rounded-lg pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
                />
                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <BsEye className="absolute right-4 4 top-[43px] cursor-pointer text-[16px]" />
                  ) : (
                    <BsEyeSlash className="absolute right-4 4 top-[43px] cursor-pointer text-[16px]" />
                  )}
                </div>
                 {/* Password Error */}
              {data?.data?.error?.password && (
                <p className="text-[14px] text-red-500 font-Inter font-bold">
                  {data?.data?.error?.password[0]}
                </p>
              )}
              </div>
             
              <div className="relative flex flex-col gap-1 mx-auto">
                <span className="text-[#696969] font-Inter text-[16px] font-normal">
                  Confirm Password
                </span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-[316px] h-12 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0 rounded-lg pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
                />
                <div
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <BsEye className="absolute right-4 4 top-[43px] cursor-pointer text-[16px]" />
                  ) : (
                    <BsEyeSlash className="absolute right-4 4 top-[43px] cursor-pointer text-[16px]" />
                  )}
                </div>
                 {/* Password Mismatch Error */}
              {passwordError && (
                <p className="text-[14px] text-red-500 font-Inter font-bold">
                  {passwordError}
                </p>
              )}
              </div>

             

              <div className="flex flex-col gap-1 ml-4">
                <div className="flex items-center gap-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="userType"
                      value="user"
                      defaultChecked
                      className="mr-1 font-Inter font-bold text-[#696969] text-[14px] cursor-pointer"
                    />
                    User
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="userType"
                      value="admin"
                      className="mr-1 font-Inter font-bold text-[#696969] text-[14px] cursor-pointer"
                    />
                    Admin
                  </label>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                {
                  isLoading ?

                  ( <Loader/>):
                 
                  (
                    <button
                    type="submit"
                    className="ripple !w-[150px] !h-[44px] !rounded-[8px]"
                  >
                    Sign up
                  </button>
                  )
                }
              </div>

              <div className="flex justify-center mt-1 font-Inter font-bold text-[16px] text-[#696969]">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 ml-1">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
