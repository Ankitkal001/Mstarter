import React, { useEffect, useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { StyledNavbar, NavLinks } from "./styles";
function Navbar(props) {
  const [highlight, setHighlight] = useState(false);
  const [show, setShow] = useState(false);
  const animateOnScroll = () => {
    if (window.scrollY >= "100") {
      setHighlight(true);
    } else {
      setHighlight(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animateOnScroll);
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  });

  return (
    <StyledNavbar highlight={highlight}>
      <div
        className="infobox"
        onClick={() => window.open("https://t.me/Maticstarter", "_blank")}
      >
        {" "}
        <img src="/icons/arrow.svg" />
        <h3>Join the MaticStarter community by clicking here.</h3>
      </div>
      <div className="content container" style={{ position: "relative" }}>
        <div className="d-flex align-items-center">
          <h2>
            <img src="/icons/logo.svg" width="45px" alt="logo" />
            MaticStarter
          </h2>
        </div>
        <div className="d-flex align-items-center">
          <NavLinks show={show}>
            <a href="#home" onClick={() => setShow(false)}>
              Home
            </a>
            <a href="#features" onClick={() => setShow(false)}>
              Features
            </a>
            <a href="#allocations" onClick={() => setShow(false)}>
              Allocations
            </a>
            <a href="#tokenomics" onClick={() => setShow(false)}>
              Tokenomics
            </a>
            <a href="#team" onClick={() => setShow(false)}>
              Team
            </a>
            <a href="#roadMap" onClick={() => setShow(false)}>
              RoadMap
            </a>
          </NavLinks>
          <p
            className="button ml-4"
            onClick={() => window.open("https://t.me/Maticstarter", "_blank")}
          >
            <FaTelegram size={35} className="icon" />
          </p>
          <GiHamburgerMenu
            onClick={() => setShow((p) => !p)}
            className="hamburger"
            size={30}
          />
        </div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
