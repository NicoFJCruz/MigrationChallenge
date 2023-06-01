import React from "react";
import riderBgImage from "../assets/rider-bg.jpg";
import Kiteschool from "../assets/Kiteschool-Cabarete.jpg";

const KiteSchool = () => {
  const bgStyle = {
    backgroundImage: `url(${riderBgImage})`,
  };

  return (
    <>
      <div className="bg-[url('assets/rider-bg.jpg')] bg-cover h-[75vh] w-full w-screen h-screen px-[6%]">
        <div className="relative pt-[132px]">
          <h1 className="text-[48px] font-[700] text-[#222222] leading-[56px]">
            Learn Kitesurfing with
            <span className="text-[#106eea]"> Progress </span>
          </h1>
          <h2 className="text-[#555555] mt-[5px] mb-[30px] text-[24px] font-[400]">
            Kiteboarding School located in Cabarete on the north coast of the
            Dominican Republic.
          </h2>
          <p className="text-[#555555] mt-[25px] mr-[30px] text-[16px] font-[400] italic">
            The challenge to learning kiteboarding is that it requires the
            overlap of important conditions such as appropriate weather, the
            right level of personalized instruction, a safe location and good
            equipment. We have put together our organization with these
            challenges in mind so that your experience will be as enjoyable as
            possible.
          </p>

          <div class="d-flex">
            <a
              href="https://www.youtube.com/watch?v=PsmYq4_qtuU"
              className="font-[600] text-[16px] inline-block ml-[25px] rounded text-[#222222] pt-[10px] pr-[25px] pb-[8px] pl-[40px]"
              data-vbtype="video"
              data-autoplay="true"
            >
              Very Important Kitesurfing Basic Knowledge Video
              <i class="icofont-play-alt-2"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#f6f9fe] font-[600] text-[26px] px-[6%] absolute">
        <div class="text-center pb-[30px]">
          <h2 className="text-[13px] tracking-[1px] font-[700] py-[8px] px-[20px] bg-[background: #e7f1fd] text-[#106eea] block uppercase rounded-[50px]">
            PK Kiteboarding
          </h2>
          <h3 className="mt-[15x] text-[32px] font-[700]">
            Find Out More{" "}
            <span className="text-[#106eea]">About PK Kiteboarding</span>
          </h3>
          <p></p>
        </div>

        <div class="flex">
          <div class="">
            <img src={Kiteschool} class="img-fluid" alt="" />
          </div>
          <div className="ml-3 flex flex-col justify-center">
            <h3 className="mt-[15x] text-[32px] font-[700]">
              Kiteboarding School in Premier location.
            </h3>
            <p className="text-[#555555] mt-[5px] mr-[30px] text-[16px] font-[400] italic">
              Progress Kitesurf is located in the best place on the beach just
              at the beginning of the kiteboarding teaching area and still in
              Cabarete Center.
            </p>
            <p className="text-[#555555] mt-[15px] mr-[30px] text-[16px] font-[400] italic">
              Progress Kitesurf provides kiteboarding lessons ranging from
              absolute beginner with no previous experience to advanced level
              riders and expert.
            </p>
          </div>
        </div>
      </div>

      {/* A */}
      <div class="mt-[500px]" data-aos="fade-up">
        <div class="text-center pb-[30px]">
          <h2 className="text-[13px] tracking-[1px] font-[700] py-[8px] px-[20px] bg-[background: #e7f1fd] text-[#106eea] block uppercase rounded-[50px]">
            Kitesurfing Learning Stages
          </h2>
          <h3 className="mt-[15x] text-[32px] font-[700]">
            Our Kite <span className="text-[#106eea]"> Learning Steps</span>
          </h3>
          <p className="text-[#555555] mt-[5px] mr-[30px] text-[16px] font-[400] italic">
            The challenge to learning kiteboarding is that it requires the
            overlap of important conditions such as appropriate weather, the
            right level of personalized instruction, a safe location and good
            kiteboarding equipment. We have put together our organization with
            these challenges in mind so that your experience will be as
            enjoyable as possible.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default KiteSchool;
