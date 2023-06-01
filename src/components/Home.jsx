import React from "react";
import hero from "../assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="text-[24px] bg-[url('src/assets/hero-bg.jpg')] bg-cover bg-relative h-[75vh] w-full w-screen h-screen px-[6%] ">
      <div class="relative pt-[132px]">
        <h1 className="text-[48px] font-[700] text-[#222222] leading-[56px]">
          Learn kiteboarding and WingFoiling with{" "}
          <span className="text-[#106eea] block">Progress Kitesurf</span>
        </h1>
        <h2 className="text-[#555555] mt-[5px] mr-[30px] text-[24px] font-[400]">
          Kiteboarding and Winging School located in Cabarete on the north coast
          of the Dominican Republic.
        </h2>
        <p className="text-[#555555] mt-[25px] mr-[30px] text-[16px] font-[400]">
          Located on the north coast of the Dominican Republic, Cabarete has
          become a mecca for windsurfing, winging, kiteboarding and Hydrofoiling
          enthusiasts from all around the world thanks to the Eastern Trade
          Winds and its turquoise ocean warm waters i.e. 28°C (72°F) all year
          round.
        </p>
        <br></br>
        <div class="d-flex">
          <a
            href="/school/kite#services"
            class="uppercase font-[500] text-[14px] tracking-[1px] inline-block py-[10px] px-[28px] rounded text-[#fff] bg-[#106eea]"
          >
            Kite Lessons
          </a>
          <a
            href="https://www.youtube.com/watch?v=LHM158Dkbqw&list=PLDphp9p_7A_moF_pUwLLKm0Fnr_qk2Hs_&index=1"
            class=" font-[600] text-[16px] inline-block ml-[25px] rounded text-[#222222] pt-[10px] pr-[25px] pb-[8px] pl-[40px]"
            data-vbtype="video"
            data-autoplay="true"
            target="_blank"
          >
            Watch Kitesurfing Students Testimonials Video
            <i class="icofont-play-alt-2"></i>
          </a>
          <a
            href="/school/wing#services"
            className="uppercase font-[500] text-[14px] tracking-[1px] inline-block py-[10px] px-[28px] rounded text-[#fff] bg-[#106eea]"
          >
            Wing Lessons
          </a>
          <a
            href="https://www.youtube.com/watch?v=xE436_q_TJA"
            className="font-[600] text-[16px] inline-block ml-[25px] rounded text-[#222222] pt-[10px] pr-[25px] pb-[8px] pl-[40px]"
            data-vbtype="video"
            data-autoplay="true"
          >
            WingFoing in Cabarete <i class="icofont-play-alt-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
