import React from "react";
import { Telegram } from "@mui/icons-material";

export const Message = () => {
  return (
    <div className="message-div">
      <div>
        <p className="text-[#616161] text-sm font-medium">
          Send a message to get in touch!
        </p>
      </div>
      <form className="flex flex-col gap-5">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" />
        <button type="submit">
          <Telegram
            style={{ backgroundColor: "transparent", fill: "#0F0F0F" }}
          />{" "}
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};
