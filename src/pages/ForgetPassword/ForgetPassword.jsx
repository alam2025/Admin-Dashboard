import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForgetPasswordMutation } from "../../redux/features/api/authApiSlice";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [mutate, { isError, isLoading, isSuccess, data }] =
    useForgetPasswordMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ email });
  };

 if (data?.status) {
  Swal.fire({
    title: "Email Sent",
    text: data?.message,
    icon: "success",
    confirmButtonText: "Continue",
  }).then(() => {
    navigate(`/reset-password/${email}`)
  });

 }

  return (
    <div>
      <div className="antialiased min-h-screen bg-slate-100 flex flex-col justify-center items-center ">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-3xl font-bold font-Inter">
            Recover your password
          </h1>
          <p className="text-slate-500">
            Fill up the form to reset the password
          </p>

          <form onSubmit={handleSubmit} className="py-10">
            <div className="flex flex-col space-y-5">
              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Email address</p>
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0 rounded-lg pl-3 focus:border-[#2C80FF] focus:ring-[#2C80FF] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-300 transition-all duration-700"
                  placeholder="Enter email address"
                />
                 {/* Email Error */}
              {data?.error?.email && (
                <p className="text-[14px] text-red-500 font-Inter font-bold">
                  {data?.error?.email[0]}
                </p>
              )}
              </label>
              {data?.status ? (
                <Link
                  to={`/reset-password/${email}`}
                  className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                >
                  <span>Continue</span>
                </Link>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                >
                  <span>{isLoading ? "Sending..." : "Send Link"}</span>
                </button>
              )}

              <p className="text-center font-Inter">
                Remember your password?{" "}
                <a
                  href="#"
                  className="text-indigo-600 font-medium inline-flex space-x-1 items-center font-Inter"
                >
                  <Link to="/login">Login Now</Link>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
