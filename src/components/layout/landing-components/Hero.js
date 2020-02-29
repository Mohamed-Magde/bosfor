import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";

const Hero = () => {
  const header = [
    {
      id: 0,
      title: "Bosphor Hair",

      info:
        "Our company is one of the leading companies in the field of providing both tourist and medical services in all Turkish cities ",
      btn: "Book Now",
      bg: "img/header-1.jpg"
    },
    {
      id: 1,
      title: "The Choice For you",

      info:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, velit?",
      btn: "Book Now",
      bg: "img/header-2.jpg"
    },
    {
      id: 2,
      title: "Have a Good Smile",

      info:
        "quidem totam possimus voluptatibus illum aliquam tempore quasi, iusto ea temporibus explicabo.",
      btn: "Book Now",
      bg: "img/header-3.jpg"
    }
  ];
  const [index, set] = useState(0);
  const transitions = useTransition(header[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });

  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 3), 5000),
    []
  );
  return (
    <header className="header">
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={{ ...props }}>
          <figure className="wrapper">
            <figcaption className="wrapper-title">
              <img src={item.bg} alt="" />
              <div className="wrapper-title-container">
                <h1 className="heading-1">{item.title}</h1>
                <p>{item.info}</p>
                <Link className="btn-primary">Book Now</Link>
              </div>
            </figcaption>
          </figure>
        </animated.div>
      ))}
    </header>
  );
};

export default Hero;
