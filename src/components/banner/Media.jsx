/** @format */

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const Media = () => {
  const facebookOpen = () => {
    window.open("https://www.linkedin.com/in/anup-nadgiri", "_blank");
  };
  const twitterOpen = () => {
    window.open("https://www.linkedin.com/in/anup-nadgiri", "_blank");
  };
  const linkedinOpen = () => {
    window.open("https://www.linkedin.com/in/anup-nadgiri", "_blank");
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" onClick={facebookOpen}>
            <FaFacebookF />
          </span>
          <span className="bannerIcon" onClick={twitterOpen}>
            <FaTwitter />
          </span>
          <span className="bannerIcon" onClick={linkedinOpen}>
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
