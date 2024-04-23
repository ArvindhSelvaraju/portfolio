import React from "react";
import C_Logo from "../../images/C_Logo.png";
import Cpp_Logo from "../../images/C++_Logo.png";
import Java_Logo from "../../images/Java_Logo.png";
import React_Logo from "../../images/React_Logo.png";
import SpringBoot_Logo from "../../images/SpringBoot_Logo.png";
import MySQL_Logo from "../../images/MySQL_Logo.svg";

export const About = () => {
  return (
    <div className="about-page">
      <div className="flex flex-col gap-8">
        <h1 className="underline underline-offset-[1rem] text-2xl font-medium">
          About Me
        </h1>
        <div className="flex flex-wrap gap-4">
          <p className=" font-light text-sm text-[#CCCCCC] indent-16 text-justify">
            I'm a web developer effective at developing seamless websites that
            achieve customer objectives. I'm passionate about blending
            creativity with functionality. I'm well-versed in web development
            frameworks such as Reacts JS, Spring Boot and MySQL.
          </p>
          <p className="font-light text-sm text-[#CCCCCC] indent-16 text-justify">
            Proficient in programming languages such as C, C++, Java and as well
            as other resources to accomplish problem-solving requirements. Also,
            an electrical engineer interested in embedded systems and Internet
            of Things(IOT).
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 mb-20">
        <h1 className="font-medium text-2xl">My Skills</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly lg:justify-between gap-12">
          <img
            src={C_Logo}
            alt="c-logo"
            className="h-20 w-20 sm:h-28 sm:w-28"
          />
          <img
            src={Cpp_Logo}
            alt="cpp-logo"
            className="h-20 w-20 sm:h-28 sm:w-28"
          />
          <img
            src={Java_Logo}
            alt="java-logo"
            className="h-20 w-20 sm:h-28 sm:w-28"
          />
          <img
            src={React_Logo}
            alt="react-logo"
            className="h-20 w-20 sm:h-28 sm:w-28"
          />
          <img
            src={SpringBoot_Logo}
            alt="spring-logo"
            className="h-20 w-20 sm:h-28 sm:w-28"
          />
          <img
            src={MySQL_Logo}
            alt="mysql-logo"
            className="h-20 w-20 sm:h-28 sm:w-28"
          />
        </div>
      </div>
    </div>
  );
};
