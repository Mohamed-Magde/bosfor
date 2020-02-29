import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Services = () => {
  const services = [
    {
      id: 1,
      icon: "fas fa-plane",
      title: "Booking Flight",
      info:
        "We make flight reservations among the best offers and airline companies around the world",

      iconTwo: "far fa-file-code",
      titleTwo: "Lorem ipsum",
      infoTwo:
        "We make flight reservations among the best offers and airline companies around the world"
    },
    {
      id: 2,
      icon: "fas fa-crown",
      title: " Charming Istanbul",
      info:
        "We take you among the best offers in the most beautiful places of charming Istanbul",

      iconTwo: "fas fa-code-branch",
      titleTwo: "Dolor Sit",
      infoTwo:
        "We make flight reservations among the best offers and airline companies around the world"
    },
    {
      id: 3,
      icon: "fas fa-flag",
      title: "Treatment services",
      info:
        "Hair transplantation and designing Hollywood smiles in addition to plastic surgery",
      iconTwo: "fas fa-laptop-code",
      titleTwo: "Consectetur Adipisicing",
      infoTwo:
        "We make flight reservations among the best offers and airline companies around the world"
    }
  ];

  return (
    <Fragment>
      <section className="service">
        <div className="service-title">
          <div className="container">
            <h2 className="heading-2">Our Services</h2>
          </div>
        </div>
        <div className="container">
          <div className="service-grid">
            {services.map(item => {
              const {
                icon,
                title,
                info,
                id,
                iconTwo,
                titleTwo,
                infoTwo
              } = item;
              return (
                <div className="gallery-grid-block" key={id}>
                  <figure class="c front">
                    <div className="service-grid-block" key={id}>
                      <i className={icon}></i>
                      <h3 className="heading-3 title-ar">{title}</h3>
                      <p>{info}</p>
                    </div>
                  </figure>
                  <figure class="c back">
                    <div className="service-grid-block" key={id}>
                      <i className={iconTwo}></i>
                      <h3 className="heading-3 title-ar">{titleTwo}</h3>
                      <p>{infoTwo}</p>
                    </div>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
