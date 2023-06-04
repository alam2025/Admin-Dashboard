import { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import icon from '../../assets/logo.png'
import login1 from '../../assets/login/login-1.png'
import login2 from '../../assets/login/login-2.png'
import login3 from '../../assets/login/login-3.png'
import login4 from '../../assets/login/login-4.png'
import login5 from '../../assets/login/login-5.png'
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword]= useState(false)
  const [backgroundImage , setBackgroundImage]= useState('')

  useEffect(() => {
    const images= [
      login1,
      login2,
      login3,
      login4,
      login5
     
  
     ]
    const index = localStorage.getItem('backgroundImageIndex');
    const nextIndex = index ? (parseInt(index, 10) + 1) % images.length : 0;
    setBackgroundImage(images[nextIndex]);
    localStorage.setItem('backgroundImageIndex', nextIndex.toString());

    const intervalId = setInterval(() => {
      setBackgroundImage(prevImage => {
        const nextIndex = (images.indexOf(prevImage) + 1) % images.length;
        localStorage.setItem('backgroundImageIndex', nextIndex.toString());
        return images[nextIndex];
      });
    }, 100000);

    return () => clearInterval(intervalId);
  }, []);

  const style = {
    background: `url(${backgroundImage})`,
  };

  return (
   <div style={style} className=" w-full min-h-screen relative !bg-no-repeat !bg-cover">
    <Helmet>
        <title>Ya-Sin - Login </title>
      </Helmet>
     <div  className=" w-full min-h-screen ">
      <div className="bg-white  w-[400px] h-[500px] border-[1px] border-[#DFE0EB] rounded-[8px]  absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center">
          
        <div className="relative pt-14">
   <div className="flex flex-col justify-center items-center ">
           <img className="block w-[230px]  absolute -top-[60px]" src={icon} alt=""/>
            {/* <img className="w-[48px] h-[48px] bg-black rounded-full" src={icon} alt="" /> */}
            <h1 className="text-[#3385F0] font-Inter font-bold text-[36px] mt-2 mb-8">Login</h1>
           </div>

        <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-1  mx-auto">
          <span className="text-[#696969] font-Inter text-[12px] font-normal uppercase">
            email
          </span>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-[316px] h-12 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0  rounded-lg pl-3 focus:border-[#2C80FF] focus:outline-none text-sm"
          />
        </div>
      
        <div className="relative flex flex-col gap-1 mx-auto">
        <span className="text-[#696969] font-Inter text-[12px] font-normal uppercase">
          password
          </span>
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              placeholder="Password"
              className="w-[316px] h-12 border-[1px] border-[#F0F1F7] bg-[#FCFDFE] outline-0  rounded-lg pl-3 focus:border-[#2C80FF] focus:outline-none text-sm"
            />
            <div onClick={()=>setShowPassword(!showPassword)}>
             {
              showPassword ? (
                <BsEye className='absolute right-4 4 top-[38px] cursor-pointer text-[16px]'/>
              ):
              (
                <BsEyeSlash className='absolute right-4 4 top-[38px] cursor-pointer text-[16px]'/>
              )
             }
            </div>
          </div>

           <div className="flex justify-end mt-[-12px]">
           <div className="flex  justify-between items-center w-[120px]">
             <h1 className="text-[#696969] font-Inter font-medium text-[14px]">Reset</h1>
              <h1 className="w-[0.5px] h-[26px] bg-[#A4A6B3]"></h1>
              <h1 className="text-[#3385F0] font-Inter font-medium text-[14px]">Sign Up</h1>
            </div>
           </div>


           <div className="flex justify-center mt-2">
           <button className="ripple !w-[150px] !h-[44px]">Log In</button>
           </div>

        </form>

        </div>
        
      </div> 

   

    </div>

   </div>
  );
};

export default Login;
