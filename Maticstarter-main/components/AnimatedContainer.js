import React from "react";

function AnimatedContainer(props) {
  return (
    <div className="panel" data-aos="fade-up" data-aos-duration="700">
      {props.children}
    </div>
  );
}

export default AnimatedContainer;
