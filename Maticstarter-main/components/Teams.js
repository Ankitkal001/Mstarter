import React from "react";
import AnimatedContainer from "./AnimatedContainer";
import { Heading, PersonCard } from "./styles";
const teams = [
 
  {
    name: "Ankit Joshi",
    avatar: "/images/ankitJoshi.jpeg",
    designation: "CTO",
    linkedin: "https://maticstarter.vercel.app/",
  },

];
const advisors = [
  {
    name: "John Doe",
    avatar: "/images/dummyAvatar.png",
    designation: "President",
    linkedin: "https://maticstarter.vercel.app/",
  },
  {
    name: "John Doe",
    avatar: "/images/dummyAvatar.png",
    designation: "President",
    linkedin: "https://maticstarter.vercel.app/",
  },
  {
    name: "John Doe",
    avatar: "/images/dummyAvatar.png",
    designation: "President",
    linkedin: "https://maticstarter.vercel.app/",
  },
];
function Teams(props) {
  return (
    <AnimatedContainer>
      <div id="team">
        <Heading>Team</Heading>
        <div className="d-flex flex-wrap justify-content-center">
          {teams.map((person, ind) => (
            <PersonCard
              key={ind}
              className="col-6 col-md-3"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={ind * 150}
            >
              <div
                className="image"
                style={{ backgroundImage: `url(${person.avatar})` }}
              />
              <h4>{person.name}</h4>
              <h5>{person.designation}</h5>
            </PersonCard>
          ))}
        </div>
        {/* <p className="w-100 text-center mt-5 mb-3">Advisors</p>
        <div className="d-flex flex-wrap justify-content-center">
          {advisors.map((person, ind) => (
            <PersonCard
              key={ind}
              className="col-6 col-md-3"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={ind * 150}
            >
              <div
                className="image"
                style={{ backgroundImage: `url(${person.avatar})` }}
              />
              <h4>{person.name}</h4>
              <h5>{person.designation}</h5>
            </PersonCard>
          ))}
        </div> */}
      </div>
    </AnimatedContainer>
  );
}

export default Teams;
