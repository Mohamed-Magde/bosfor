import React from "react";

const Banner = ({ bannerTitle, bannerImg }) => {
  return (
    <header className="header-blog">
      <div className="container">
        <h1 className="heading-1"></h1>
        <i className="fas fa-arrow-down">{bannerTitle}</i>
      </div>
      <figure>
        <img src={bannerImg} alt="" />
      </figure>
    </header>
  );
};

export default Banner;
