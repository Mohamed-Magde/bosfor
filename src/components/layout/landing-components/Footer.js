import React, { Fragment } from "react";
import { ProductConsumer } from "../../../context";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ProductConsumer>
          {value => {
            const { footers } = value;
            return (
              <Fragment>
                {footers.map(footer => {
                  const { id, title, items } = footer;
                  return (
                    <div className="footer-block" key={id}>
                      <h4 className="heading-4">{title}</h4>
                      <ul className="footer-block-item">
                        {items.map(item => {
                          return (
                            <li>
                              <Link>{item}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </Fragment>
            );
          }}
        </ProductConsumer>
      </div>
    </footer>
  );
};

export default Footer;
