import React from "react";
import { ContactInfo } from "./contact-info";
import { Message } from "./message";

export const Contact = () => {
  return (
    <div className="contact-page">
      <ContactInfo />
      <Message />
    </div>
  );
};
