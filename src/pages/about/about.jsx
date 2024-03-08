import React from "react";
import { Download } from "@mui/icons-material";

export const About = () => {
  return (
    <div className="about-page">
      <div className="flex flex-col gap-8">
        <h1 className="underline underline-offset-[1rem] text-2xl font-medium">
          About Me
        </h1>
        <div className="flex flex-wrap">
          <p className="font-thin text-sm text-[#CCCCCC]">
            Some text about me. Some text about me. I am lorem ipsum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="font-normal text-2xl">My Skills</h1>
        {/* <div className="mx-20 flex flex-col gap-5">
          <div className="skills">
            <p>C/C++</p>
            <div className="bar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className="skills">
            <p>Java</p>
            <div className="bar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className="skills">
            <p>React JS</p>
            <div className="bar">
              <span style={{ width: "75%" }}></span>
            </div>
          </div>
          <div className="skills">
            <p>MySQL</p>
            <div className="bar">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>
          <div className="skills">
            <p>SpringBoot</p>
            <div className="bar">
              <span style={{ width: "65%" }}></span>
            </div>
          </div>
          <div className="flex flex-row gap-20 mt-8 mx-6">
            <div className="flex flex-col gap-2 font-thin text-sm text-[#CCCCCC] my-3">
              <p>
                <b>Front-end:</b>
              </p>
              <ul className="list-disc">
                <li>
                  <p>Tailwind CSS</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 font-thin text-sm text-[#CCCCCC] my-3">
              <p>
                <b>Back-end:</b>
              </p>
              <ul className="list-disc">
                <li>
                  <p>Firebase</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-20 mb-10">
          <button className="resume-download">
            <Download className="bg-transparent" style={{ fill: "#0F0F0F" }} />
            Download Resume
          </button>
        </div> */}
      </div>
    </div>
  );
};
