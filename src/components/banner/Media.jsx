import React from 'react'
import {  FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import {TbBrandCss3} from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { RiHtml5Fill } from "react-icons/ri";
import { IoLogoJavascript} from "react-icons/io";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
                </h2>
                <div className="flex gap-4">
                  <a href="https://github.com/Shauryaa007"><span className="bannerIcon">
                    <BsGithub/>
                  </span></a>
                  <a href="https://twitter.com/shauryaa007"><span className="bannerIcon">
                    <FaTwitter />
                  </span></a>
                  <a href="https://www.linkedin.com/in/shaurya007/"><span className="bannerIcon">
                    <FaLinkedinIn />
                  </span></a>
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
              <TbBrandCss3/>
            </span>
            <span className="bannerIcon">
              <RiHtml5Fill />
            </span>
            <span className="bannerIcon">
              <IoLogoJavascript/>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media