import React from "react";
import AnimatedContainer from "./AnimatedContainer";
import { FeatureCard, Heading } from "./styles";
const features = [
  {
    icon: "/icons/rocket.svg",
    title: "Allocation deal",
    desc: `MaticStarter has a unique level system which requires users to lock-in a certain
    amount of Msta tokens to participate in the launch platform.`,
    color: "#FFC816",
  },
  {
    icon: "/icons/lock.svg",
    title: "Scalability & Security",
    desc: `Scalability is maintained using a decentralized Plasma operator mechanism and a
    decentralized organization of proof of-Stake (PoS) validators.`,
    color: "#00A3FF",
  },
  {
    icon: "/icons/burn.svg",
    title: "Token Burn",
    desc: `10% funds from every Ido will be used to burn the existing token in near future.`,
    color: "#475FDA",
  },
  {
    icon: "/icons/treeline.svg",
    title: "High Throughput",
    desc: `Matic blockchain can handles million of the transactions on a sidechian tree
    architecture`,
    color: "#00FF66",
  },
  {
    icon: "/icons/bargraph.svg",
    title: "Staked Assets",
    desc: `Stake your tokens to get governance/voting power to choose your favourite project.`,
    color: "#FF007A",
  },
];
function Features(props) {
  return (
    <AnimatedContainer>
      <div className="row justify-content-center" id="features">
        <Heading data-aos="fade-up" data-aos-duration="500" className="col-12">
          Features
        </Heading>
        {features.map((item, ind) => (
          <div
            key={ind}
            className="col-12 col-md-6 col-lg-4 p-4 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={ind * 150}
          >
            <FeatureCard border={item.color} key={ind}>
              <img src={item.icon} alt="img" />
              <p>{item.title}</p>
              <p className="desc">{item.desc}</p>
            </FeatureCard>
          </div>
        ))}
      </div>
    </AnimatedContainer>
  );
}

export default Features;
