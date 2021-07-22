import React from "react";
import { GiShare } from "react-icons/gi";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { StyledFooter } from "./styles";
import { FaTelegram } from "react-icons/fa";

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

function Footer() {
  return (
    <StyledFooter className="d-flex flex-column align-items-center justify-content-center">
      <div>
        <GiShare
          onClick={() => copyToClipboard("https://www.maticstarter.in/")}
        />
        <AiFillLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/company/matic-starter/",
              "_blank"
            )
          }
        />
        <FaTelegram
          onClick={() => window.open("https://t.me/Maticstarter", "_blank")}
        />
        <AiOutlineTwitter
          onClick={() =>
            window.open("https://twitter.com/Maticstarter", "_blank")
          }
        />
      </div>
      <h5 style={{ fontSize: "16px", textAlign: "center" }}>
        ©Company Pvt. Ltd. <br />
        All Rights Reserved (Terms of Use)
      </h5>
    </StyledFooter>
  );
}

export default Footer;
