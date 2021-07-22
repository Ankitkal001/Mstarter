import React from "react";
import { Button, LeftText, MainContainer } from "./styles";
import Typist from "react-typist";

function Intro(props) {
  return (
    <MainContainer
      className="d-flex flex-wrap flex-wrap-reverse"
      data-aos="fade-up"
      data-aos-duration="700"
      id="home"
    >
      <LeftText className="col-12 col-md-6 p-4">
        <div className="text">
          <h1 data-aos-duration="500" data-aos="fade-up">
            <Typist
              startDelay={1000}
              avgTypingDelay={50}
              cursor={{
                hideWhenDone: true,
                hideWhenDoneDelay: 0,
                element: (
                  <img
                    src="/icons/miniRocket.svg"
                    height="70px"
                    width="auto"
                    style={{ transform: "rotateZ(90deg)", marginLeft: "1rem" }}
                    className="icon"
                  />
                ),
              }}
            >
              Decentralised <br /> fundraising on <br />
              (0xPolygon){" "}
            </Typist>
          </h1>
          <br />
          <h5 data-aos="fade-up" data-aos-duration="500" data-aos-delay="2900">
            First ever launch pad on the most scalable side chain (POS) one
            clicks away to be a part of the 0x polygon ecosystem by using
            maticstarter.
          </h5>
          <br />
          <Button
            data-aos="fade-zoom-in"
            data-aos-delay="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            Submit IDO Application
          </Button>
        </div>
      </LeftText>
      <div
        data-aos="fade-zoom-in"
        data-aos-delay="600"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="col-12 col-md-6 p-4 d-flex align-items-center justify-content-start"
      >
        <img
          src={"/images/mainGIF.gif"}
          alt="main"
          width="100%"
          height="auto"
          style={{ objectFit: "contain" }}
        />
      </div>
    </MainContainer>
  );
}

export default Intro;
