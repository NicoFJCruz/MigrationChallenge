import React from "react";

const WingSchool = () => {
  return (
    <div className="bg-[url('assets/wingfoil-bg.jpg')] bg-cover h-[75vh] h-screen px-[6%]">
      <div class="relative pt-[132px]">
        <h1 className="text-[48px] font-[700] text-[#222222] leading-[56px]">
          Learn WingFoiling with{" "}
          <span className="text-[#106eea]"> Progress </span>
        </h1>
        <h2 className="text-[#555555] mt-[5px] mb-[30px] text-[24px] font-[400]">
          Wingsurfing School located in Cabarete on the north coast of the
          Dominican Republic.
        </h2>
        <p className="text-[#555555] mt-[25px] mr-[30px] text-[16px] font-[400] italic">
          The challenge to learning wingfoiling or wingsurfing is that it
          requires the overlap of important conditions such as appropriate
          weather, the right level of personalized instruction, a safe location
          and good equipment. We have put together our organization with these
          challenges in mind so that your experience will be as enjoyable as
          possible.
        </p>

        <div class="d-flex">
          <a
            href="https://www.youtube.com/watch?v=xjAhwCoV35s"
            class="venobox btn-watch-video"
            data-vbtype="video"
            data-autoplay="true"
          >
            How to Wing Surf Video <i class="icofont-play-alt-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WingSchool;
