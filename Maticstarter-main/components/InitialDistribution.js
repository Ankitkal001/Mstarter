import React from "react";
import { DistributionCard, Heading } from "./styles";
const distributions = [
  {
    value: "5,340,000",
    title: "Round 1",
    desc: [
      "Price:- 0.083",
      "Seed sale 20% unlocked TGE",
      "then 10% monthly over 8 months",
    ],
  },
  {
    value: "12,460,000",
    title: "Round 2",
    desc: [
      "Price:- 0.125",
      "private sale 25% unlocked TGE",
      "then 25% monthly over 3 months",
    ],
  },
  {
    value: "1,250,000",
    title: "Round 3",
    desc: ["Price :- 0.16", "Uniswap listing", "100% unlock"],
  },
];
function InitialDistribution(props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      style={{ minHeight: "70vh" }}
      className="d-flex flex-column justify-content-center"
    >
      <Heading>Initial Distribution Model</Heading>
      <div className="d-flex flex-wrap justify-content-center">
        {distributions.map((d, ind) => (
          <DistributionCard
            key={ind}
            className="text-center col-12 col-md-6 col-lg-4 mb-5"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={ind * 150}
          >
            <p>{d.title}</p>
            <h2 className="my-3">{d.value}</h2>
            <div>
              {d.desc.map((item, ind) => (
                <h5 key={ind}>{item}</h5>
              ))}
            </div>
          </DistributionCard>
        ))}
      </div>
    </div>
  );
}

export default InitialDistribution;
