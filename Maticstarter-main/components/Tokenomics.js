import React, { useEffect, useRef, useState } from "react";
import useIsVisible from "./customHooks/isVisible";
import {
  Heading,
  Hole,
  PieChartWrapper,
  StyledPieChart,
  TextRight,
  Token,
} from "./styles";
import { PieChart } from "react-minimal-pie-chart";
import AnimatedContainer from "./AnimatedContainer";

const pieSegments = [
  {
    title: "separator",
    value: 2,
    color: "#000D3A",
  },
  {
    title: "Seed & Private sale",
    value: 17.8,
    color: "#475FDA",
  },
  {
    title: "separator",
    value: 2,
    color: "#000D3A",
  },
  {
    title: "Team & Advisory",
    value: 12.2,
    color: "#FFC816",
  },
  {
    title: "separator",
    value: 2,
    color: "#000D3A",
  },
  {
    title: "Liquidity & exchange listing",
    value: 30,
    color: "#FF007A",
  },
  {
    title: "separator",
    value: 2,
    color: "#000D3A",
  },
  {
    title: "Product development",
    value: 20,
    color: "#00A3FF",
  },
  {
    title: "separator",
    value: 2,
    color: "#000D3A",
  },
  {
    title: "Ecosystem & marketing",
    value: 20,
    color: "#00FF66",
  },
];

function Tokenomics(props) {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setActive(7);
      }, 1000);
    }
  }, [isVisible]);

  return (
    <AnimatedContainer>
      <div
        id="tokenomics"
        className="d-flex flex-column justify-content-center"
        style={{ minHeight: "700px" }}
      >
        <Heading data-aos="fade-up" data-aos-duration="500">
          Tokenomics
        </Heading>
        <div
          className="d-flex flex-wrap w-100 justify-content-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            className="col-12 col-md-6 d-flex align-items-center justify-content-center my-3"
            style={{ minHeight: "400px" }}
            ref={ref}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="150"
          >
            {isVisible && (
              <div className="position-relative">
                <Hole color={active && pieSegments[active].color}>
                  {active && pieSegments[active].title !== "separator" && (
                    <p>
                      {pieSegments[active].title} <br />
                      {pieSegments[active].value}%{" "}
                    </p>
                  )}
                </Hole>
                <StyledPieChart
                  data={pieSegments}
                  radius={PieChart.defaultProps.radius - 6}
                  lineWidth={40}
                  segmentsShift={(index) => (index === active ? 6 : 1)}
                  segmentsStyle={{
                    transition: "all .3s ease",
                    cursor: "pointer",
                  }}
                  animate
                  onMouseOver={(_, index) => {
                    setActive(index);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
}

export default Tokenomics;
