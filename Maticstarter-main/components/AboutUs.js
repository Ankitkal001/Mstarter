import React from "react";
import AnimatedContainer from "./AnimatedContainer";
import { Heading } from "./styles";

function AboutUs(props) {
  return (
    <AnimatedContainer>
      <Heading>About Us</Heading>
      <div className="d-flex flex-wrap align-items-center">
        <div className="col-12 col-md-6 d-flex justify-content-center px-4 my-4">
          <img
            src="/images/aboutUs.png"
            alt="about us"
            width="100%"
            style={{ maxWidth: "300px", objectFit: "contain" }}
          />
        </div>
        <div className="col-12 col-md-6 my-4">
          <h5 style={{ fontSize: "16px", lineHeight: "24px" }}>
            Matic-starter is layer 2 blockchain solution for the IDO platform
            which provide us more versatility, security and instant blockchain
            transaction utilizing sidechains, while guaranteeing assets security
            utilizing the Plasma framework and a decentralized organization of
            proof of-Stake (PoS) validators.
          </h5>

          <ul>
            <li className="my-3">
              Matic-starter is a IDO , crowdfunding platform that enables faster
              and cheaper transactions whilst maintaining a high level of
              security using Plasma with PoS based sidechains.
            </li>
            <li className="my-3">
              Launching only the top grade projects in Defi Economy.
            </li>
            <li className="my-3">User-friendly design.</li>
            <li className="my-3">
              Get guaranteed allocation in public &amp; special rounds for
              high-quality crypto projects.
            </li>
          </ul>
        </div>
      </div>
    </AnimatedContainer>
  );
}

export default AboutUs;
