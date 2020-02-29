import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CarerrList from "./carerr/CarerrList";
import CarouselList from "./carousel/CarouselList";

const Features = ({ features }) => {
  const youtube = [
    {
      id: 1,
      title: "Hair Transplant",
      link: "Strawberries Cake",
      img: "img/18.jpg",
      btn: "Visit Now"
    },
    {
      id: 2,
      title: "Brighter Smile",
      link: "Strawberries Cake",
      img: "img/19.jpg",
      btn: "Visit Now"
    },
    {
      id: 3,
      title: "Medical Tourism",
      link: "Strawberries Cake",
      img: "img/20.jpg",
      btn: "Visit Now"
    }
  ];

  return (
    <Fragment>
      <section className="features">
        <div className="features-title">
          <div className="container">
            <h2 className="heading-2">Our Blogs</h2>
          </div>
        </div>
        <div className="container">
          <div className="features-grid">
            {features.map(item => {
              const { id, title, img, btn } = item;
              return (
                <div className="features-grid-block" key={id}>
                  <img src={img} alt="" />
                  <div className="features-grid-block-item">
                    <Link className="btn-secondary">{btn}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <CarerrList />
      </section>
      <section className="features youtube">
        <div className="features-title">
          <div className="container">
            <h2 className="heading-2">Our Youtube</h2>
          </div>
        </div>
        <div className="container">
          <CarouselList />
        </div>
      </section>
    </Fragment>
  );
};

export default Features;
