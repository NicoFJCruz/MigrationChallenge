import React from "react";

const WingSchool = () => {
  return (
    <div>
      <div class="relative pt-[132px]">
        <h1>
          Learn WingFoiling with <span>Progress </span>
        </h1>
        <h2>
          Wingsurfing School located in Cabarete on the north coast of the
          Dominican Republic.
        </h2>
        <p class="font-italic">
          The challenge to learning wingfoiling or wingsurfing is that it
          requires the overlap of important conditions such as appropriate
          weather, the right level of personalized instruction, a safe location
          and good equipment. We have put together our organization with these
          challenges in mind so that your experience will be as enjoyable as
          possible.{" "}
        </p>

        <div class="d-flex">
          <a
            href="https://www.youtube.com/watch?v=xjAhwCoV35s"
            class="venobox btn-watch-video"
            data-vbtype="video"
            data-autoplay="true"
          >
            {" "}
            How to Wing Surf Video <i class="icofont-play-alt-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WingSchool;
