import React from "react";
import whatsAppicon from "../assets/whatsAppicon.png";
import emailicon from "../assets/emailicon.png";
import phoneicon from "../assets/phoneicon.png";
import facebookicon from "../assets/facebookicon.png";
import instagramicon from "../assets/instagramicon.png";
const Navbar = () => {
  return (
    <>
      <div className="w-full bg-[#106eea] h-[40px] text-[14px] transition duration-500 text-[#fff] flex justify-between px-16">
        <div className="w-[45%] flex justify-between">
          <div className="flex items-center h-full">
            <img
              src={whatsAppicon}
              alt="WhatsApp"
              className="w-[14px] h-[14px] mr-2"
            />
            <p> +1 809 849 8439 </p>
          </div>
          <div className="flex items-center h-full">
            <img
              src={emailicon}
              alt="Email"
              className="w-[14px] h-[14px] mr-2"
            />
            <p> progresskitesurf@gmail.com </p>
          </div>
          <div className="flex items-center h-full">
            <img
              src={phoneicon}
              alt="Phone"
              className="w-[14px] h-[14px] mr-2"
            />
            <p> +1 809 849 8439 </p>
          </div>
        </div>

        <div className="flex items-center h-full">
          <a href="https://www.facebook.com/progress.kitesurf" target="_blank">
            <img src={facebookicon} alt="" className="w-[15px] h-[15px] mr-4" />
          </a>
          <a href="https://www.instagram.com/progresskitesurf/" target="_blank">
            
            <img src={instagramicon} alt="" className="w-[14px] h-[14px]" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
