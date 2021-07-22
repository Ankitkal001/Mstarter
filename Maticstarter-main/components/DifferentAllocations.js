import React from "react";
import AnimatedContainer from "./AnimatedContainer";
import { AllocationCard, Heading } from "./styles";

const cards = [
  {
    title: "Bronze",
    color: "#475FDA",
    icon: "/images/bronze.png",
    features: [
      {
        title: "Staking Requirement",
        desc: "1000",
      },
      {
        title: "Whitelist Requirement",
        desc: "None",
      },
      {
        title: "Guaranteed Allocation",
        desc: "Yes",
      },
      {
        title: "Pool Weight",
        desc: "1",
      },
    ],
  },
  {
    title: "Gold",
    color: "#FFC816",
    icon: "/images/gold.png",
    features: [
      {
        title: "Staking Requirement",
        desc: "5000",
      },
      {
        title: "Whitelist Requirement",
        desc: "None",
      },
      {
        title: "Guaranteed Allocation",
        desc: "Yes",
      },
      {
        title: "Pool Weight",
        desc: "3",
      },
    ],
  },
  {
    title: "Platinum",
    color: "#00FF66",
    icon: "/images/platinum.png",
    features: [
      {
        title: "Staking Requirement",
        desc: "10000",
      },
      {
        title: "Whitelist Requirement",
        desc: "None",
      },
      {
        title: "Guaranteed Allocation",
        desc: "Yes",
      },
      {
        title: "Pool Weight",
        desc: "5",
      },
    ],
  },
  {
    title: "Diamond",
    color: "#2AF6FF",
    icon: "/images/diamond.png",
    features: [
      {
        title: "Staking Requirement",
        desc: "25000",
      },
      {
        title: "Whitelist Requirement",
        desc: "None",
      },
      {
        title: "Guaranteed Allocation",
        desc: "Yes",
      },
      {
        title: "Pool Weight",
        desc: "10",
      },
    ],
  },
];
function DifferentAllocations(props) {
  return (
    <AnimatedContainer>
      <div id="allocations">
        <Heading data-aos="fade-up" data-aos-duration="500">
          Different Allocations
        </Heading>
        <div className="row">
          {cards.map((item, ind) => (
            <div
              key={ind}
              className="col-12 col-md-3 p-3 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={ind * 150}
            >
              <AllocationCard color={item.color}>
                <img src={item.icon} alt="img" className={item.title} />
                <h2 className="title">{item.title}</h2>
                {item.features.map((feature, ind) => (
                  <div key={ind} className="my-3">
                    <p className="light">{feature.title}</p>
                    <h4>{feature.desc}</h4>
                  </div>
                ))}
                <div className="footer"></div>
              </AllocationCard>
            </div>
          ))}
        </div>
      </div>
    </AnimatedContainer>
  );
}

export default DifferentAllocations;
