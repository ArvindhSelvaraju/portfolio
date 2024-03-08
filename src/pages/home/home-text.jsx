import React from "react";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

export const HomeText = () => {
  return (
    <div className="flex flex-wrap items-start gap-3 sm:w-[57%]">
      <h1 className="text-[64px]">Hi.</h1>
      <p className="home-text">
        My name is Arvindh. I'm a passionate web developer and I craft seamless
        front-end interfaces while continually honing my skills in the dynamic
        world of back-end development.
        <br></br>
        <br></br>
        I'm passionate about blending creativity with functionality.
      </p>
      <div className="flex gap-2 text-xl mt-4">
        <a
          href="https://github.com/ArvindhSelvaraju"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub className="contact-icons" />
        </a>
        <a
          href="mailto:arvindhnkl2004@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Email className="contact-icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/arvindh-s-045373244/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className="contact-icons" />
        </a>
      </div>
    </div>
  );
};
