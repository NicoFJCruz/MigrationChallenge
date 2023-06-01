import React from "react";
import france from "../assets/france.png";
const Header = () => {
  return (
    <div class="w-full h-[90px] bg-[#fff] h-[40px] shadow-[0_2px_15px_rgba(0,0,0,0.1)] p-[25px]  top-[40px] flex justify-between">
      <h1 class="text-[32px] m-0 p-0 font-[600] tracking-[0.8px] font-['Poppins'] pl-[40px]">
        <a href="/">
          PROGRESS KITESURF<span>.</span>
        </a>
      </h1>

      <div class="flex w-[45%] justify-between items-center pr-[30px] text-[15px] font-[600]">
        <p class="active">
          <a href="/"> Home </a>
        </p>
        <p>
          <a href="/school/kite"> Kite School </a>
        </p>
        <p>
          <a href="/school/wing"> Wing School </a>
        </p>
        <p>
          <a href="/price"> Pricing </a>
        </p>
        <p>
          <a href="/contact"> Contact </a>
        </p>
        <p>
          <a href="/">
            <img src={france} class="img-fluid" alt="" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
