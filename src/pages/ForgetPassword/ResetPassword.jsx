import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../redux/features/api/authApiSlice";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const navigate = useNavigate()
  const { email: defaultemail } = useParams();
  const [email, setEmail] = useState(defaultemail);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
    const [finalResponse , setFinalResponse] = useState()    
  const [actionReset, { isError, isLoading, isSuccess, data }] =
    useResetPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      otp,
      password,
      password_confirmation: passwordConfirmation,
    };

    const response = await actionReset(formData).unwrap();
    if (response?.status) {
        Swal.fire({
            title: "Password Reset Successful",
            text: response?.message,
            icon: "success",
            confirmButtonText: "Login Now",
          }).then(() => {
            navigate('/login')
          });
        
    }
    setFinalResponse(response)

  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmationVisibility = () => {
    setShowConfirmation(!showConfirmation);
  };

  return (
    <div>
      <div className="antialiased min-h-screen bg-slate-100 flex flex-col justify-center items-center">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-3xl font-bold font-Inter">Reset your password</h1>
          <p className="text-slate-500 text-[14px] w-[300px]">
           Please enter the 4 digit of code sent to <span className="text-blue-700">{email}</span>
          </p>

          <form onSubmit={handleSubmit} className="my-4">
            <div className="flex flex-col space-y-5">
              {/* <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Email address</p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  disabled
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0 rounded-lg pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
                  placeholder="Enter email address"
                />
              {finalResponse?.error?.email && (
                <p className="text-[14px] text-red-500 font-Inter font-bold">
                  {finalResponse?.error?.email[0]}
                </p> )}
              </label> */}
              
              <label htmlFor="otp">
                <p className="font-medium text-slate-700 pb-2">OTP</p>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full py-3 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0 rounded-lg pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
                  placeholder="Enter OTP"
                />
             {/* Otp Error */}
             {finalResponse?.error?.otp && (
                <p className="text-[14px] text-red-500 font-Inter font-bold">
                  {finalResponse?.error?.otp[0]}
                </p> )}
             {finalResponse?.message && !finalResponse?.error?.otp  && (
                <p className="text-[14px] text-red-500 font-Inter font-bold">
                  {finalResponse?.message}
                </p> )}
              </label>
               
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Password</p>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-3 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0 rounded-lg pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <AiFillEyeInvisible size={20} />
                    ) : (
                      <AiFillEye size={20} />
                    )}
                  </button>
                </div>
                {/* Password Error */}
             {finalResponse?.error?.password && (
                <p className="text-[14px] text-red-500 font-Inter font-bold">
                  {finalResponse?.error?.password[0]}
                </p> )}
              </label>
              <label htmlFor="passwordConfirmation">
                <p className="font-medium text-slate-700 pb-2">
                  Confirm Password
                </p>
                <div className="relative">
                  <input
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    type={showConfirmation ? "text" : "password"}
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    className="w-full py-3 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0 rounded-lg pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                    onClick={toggleConfirmationVisibility}
                  >
                    {showConfirmation ? (
                      <AiFillEyeInvisible size={20} />
                    ) : (
                      <AiFillEye size={20} />
                    )}
                  </button>
                </div>
                {/* password_confirmation Error */}
             {finalResponse?.error?.password_confirmation && (
                <p className="text-[14px] text-red-500 font-Inter font-bold">
                  {finalResponse?.error?.password_confirmation[0]}
                </p> )}
              </label>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              >
                <span>{isLoading ? "Resetting..." : "Reset Now"}</span>
              </button>
                <p className="text-sm text-blue-700 text-center">Did not get a code? <button className="text-[#04A999]">Resend</button></p>
            </div>

       
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
