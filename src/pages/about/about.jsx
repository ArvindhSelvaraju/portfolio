import React from "react";
import C_Logo from '../../images/C_Logo.png';
import Cpp_Logo from '../../images/C++_Logo.png';
import Java_Logo from '../../images/Java_Logo.png';
import React_Logo from '../../images/React_Logo.png';
import SpringBoot_Logo from '../../images/SpringBoot_Logo.png';

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
      <div className="flex flex-col gap-8 mb-20">
        <h1 className="font-medium text-2xl">My Skills</h1>
        <div className="flex flex-wrap gap-12">
          <img src={C_Logo} alt="c-logo" className="h-28 w-28" />
          <img src={Cpp_Logo} alt="cpp-logo" className="h-28 w-28" />
          <img src={Java_Logo} alt="java-logo" className="h-28 w-28" />
          <img src={React_Logo} alt="react-logo" className="h-28 w-28" />
          <img src={SpringBoot_Logo} alt="spring-logo" className="h-28 w-28" />
        </div>
      </div>
    </div>
  );
};
