import React from "react";
import AnimatedContainer from "./AnimatedContainer";
import { Heading } from "./styles";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
  width: 1000px;
  max-width: 1000px;
  min-width: 1000px;
  margin: auto;
  min-height: 800px;
  & .mainImage {
    position: absolute;
    left: 0;
    top: 0;
    width: 1000px;
    max-width: 1000px;
    min-width: 1000px;
  }
  & .roadmap1,
  & .roadmap2,
  & .roadmap3 {
    position: absolute;
    top: 0;
    max-width: 200px;
    display: flex;
    align-items: flex-start;
    & img {
      display: none;
    }
  }
  & .roadmap1 {
    left: 0;
    transform: translateY(200px);
  }
  & .roadmap2 {
    left: 50%;
    transform: translate(-30%, 360px);
  }
  & .roadmap3 {
    right: 0;
    transform: translate(-20%, 180px);
  }

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    min-height: 0;
    margin-bottom: 4rem;
    justify-content: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .mainImage {
      display: none;
    }
    & .roadmap1,
    & .roadmap2,
    & .roadmap3 {
      position: static;
      max-width: 100%;
      transform: translate(0, 0);
      width: 300px;
    }
    & .roadmap1 {
      & img {
        display: block;
        max-width: 50px;
        margin: 0 15px;
      }
    }
    & .roadmap2 {
      & img {
        display: block;
        max-width: 70px;
        margin: 0 5px;
      }
    }
    & .roadmap3 {
      & img {
        display: block;
        max-width: 80px;
      }
    }
  }
`;

const DottedLine = styled.div`
  @media (max-width: 1000px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 0;
    border-left: 3px dashed #263157;
    height: 100%;
    transform: translateX(40px);
  }
`;
function Roadmap(props) {
  return (
    <AnimatedContainer>
      <div id="roadMap">
        <Heading>Our Roadmap for 2021</Heading>
        <h5
          style={{
            fontSize: "16px",
            margin: "auto",
            maxWidth: "500px",
            lineHeight: "21px",
            marginTop: "-1.5rem",
            textAlign: "center",
          }}
        >
          Roadmap will continuously change as we progress with our project. For
          updates and news, join our Telegram announcement channel
        </h5>
        <br />
        <br />
        <Container>
          <img
            src="/images/roadmap.png"
            width="100%"
            style={{ objectFit: "contain" }}
            className="mainImage"
          />
          <div className="roadmap1">
            <img src="/images/roadmap1.png" alt="roadmap" />
            <DottedLine />
            <div>
              <p>Q2 2021</p>
              <ul>
                <li>maticstarter token Generation Event </li>
                <li>$Msta Distribution</li>
                <li>Launch MVP</li>
              </ul>
            </div>
          </div>
          <div className="roadmap2">
            <img src="/images/roadmap2.png" alt="roadmap" />
            <DottedLine />
            <div>
              <p>Q3 2021</p>
              <ul>
                <li>Partnership </li>
                <li>Development</li>
                <li>Marketing</li>
                <li>project IDOs</li>
                <li>maticSwap( layer 2 Dex)</li>
                <li>Exchange Listings</li>
              </ul>
            </div>
          </div>
          <div className="roadmap3">
            <img src="/images/roadmap3.png" alt="roadmap" />
            <div>
              <p>Q4 2021</p>
              <ul>
                <li>
                  Mobile App ( To manage funds and check your IDOs Allocation){" "}
                </li>
                <li> Migration on other chains.</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </AnimatedContainer>
  );
}

export default Roadmap;
