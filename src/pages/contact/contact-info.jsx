import React from "react";
import { Email, GitHub, LinkedIn, Place, Phone } from "@mui/icons-material";

export const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div>
        <h1 className="underline underline-offset-[1rem] text-2xl font-medium">
          Contact Me
        </h1>
      </div>
      <div className="flex items-center gap-6 text-lb font-thin">
        <Place className="text-2xl" />
        <p className="text-[#CCCCCC] text-sm">Coimbatore, TN</p>
      </div>
      <div className="flex items-center gap-6 text-lb font-thin">
        <Phone className="text-2xl" />
        <p className="text-[#CCCCCC] text-sm">+91 9442313580</p>
      </div>
      <div className="flex items-center gap-6 text-lb font-thin">
        <Email className="text-2xl" />
        <p className="text-[#CCCCCC] text-sm">arvindhnkl2004@gmail.com</p>
      </div>
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
