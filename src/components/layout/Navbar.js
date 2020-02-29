import React, { useEffect } from "react";
import { logo } from "../../data";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav" id="nav">
      <div className="container">
        <div className="nav-up">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="nav-up-list">
            <li>
              <Link className="nav-up-list-item" to="/">
                Home
              </Link>
            </li>

            <li>
              <div className="nav-up-list-item">
                <p> Hair Transplant</p>
                <i className="fas fa-sort-down"></i>
              </div>

              <ul className="nav-up-list-item-list">
                <li>
                  <Link className="nav-up-list-item-list-link" to="/hair">
                    Hair transplantation for men
                  </Link>
                </li>
                <li>
                  <Link className="nav-up-list-item-list-link" to="/secondHair">
                    Beard hair transplant
                  </Link>
                </li>
                <li>
                  <Link className="nav-up-list-item-list-link" to="/thirdHair">
                    hair transplantation for women
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-up-list-item-list-link"
                    to="/fourthdHair"
                  >
                    Eyebrow transplant
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link className="nav-up-list-item" to="/hair">
                <p>Cosmetic surgery </p> <i className="fas fa-sort-down"></i>
              </Link>
              <ul className="nav-up-list-item-list">
                <li>
                  <Link className="nav-up-list-item-list-link">
                    Hair transplantation for men
                  </Link>
                </li>
                <li>
                  <Link className="nav-up-list-item-list-link">
                    Beard hair transplant
                  </Link>
                </li>
                <li>
                  <Link className="nav-up-list-item-list-link">
                    hair transplantation for women
                  </Link>
                </li>
                <li>
                  <Link className="nav-up-list-item-list-link">
                    Eyebrow transplant
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link className="nav-up-list-item pro">
                <p> Dental operations</p>
                <i className="fas fa-sort-down"></i>
              </Link>
              <ul className="nav-up-list-item-list">
                <li>
                  <Link className="nav-up-list-item-list-link">
                    Hair transplantation for men
                  </Link>
                </li>
                <li>
                  <Link className="nav-up-list-item-list-link">
                    Beard hair transplant
                  </Link>
                </li>
                <li>
                  <Link className="nav-up-list-item-list-link">
                    hair transplantation for women
                  </Link>
                </li>
                <li>
                  <Link className="nav-up-list-item-list-link">
                    Eyebrow transplant
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="nav-down">
          <div className="nav-down-info">
            <div className="nav-down-info-block">
              <div className="nav-down-info-block-icon">
                <i className="fas fa-mobile-alt"></i>
                <span>+ 0800 2466 7921</span>
              </div>
            </div>

            <div className="nav-down-info-block">
              <div className="nav-down-info-block-item">
                <div className="social">
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-down-block">
            <div className="translate">
              <p>EN</p>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="nav-down-block-item">
              <Link className="book">BOOK APPOINMENT</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
