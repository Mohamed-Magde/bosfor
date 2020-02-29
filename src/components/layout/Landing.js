import React, { Fragment } from "react";
import Hero from "./landing-components/Hero";
import { ProductConsumer } from "../../context";
import Services from "./landing-components/Services";
import Gallery from "./landing-components/Gallery";
import Features from "./landing-components/Features";
import Contact from "./landing-components/Contact";
import Programe from "./landing-components/program/Programe";
import SectionAbout from "./landing-components/SectionAbout";

const Landing = () => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          return (
            <Fragment>
              <Hero header={value.headers} />
              <Services service={value.service} />
              <SectionAbout />
              <Programe />
              <Gallery gallery={value.gallerys} />
              <Features features={value.features} />
              <Contact />
            </Fragment>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
};

export default Landing;
