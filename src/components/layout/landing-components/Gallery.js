import React, { useState, useEffect } from "react";

const Gallery = () => {
  const gallery = [
    {
      id: 1,
      img1: "./img/gallery/نتائج-1.jpg",
      img2: "./img/gallery/نتائج-2.jpg"
    },
    {
      id: 2,
      img1: "./img/gallery/نتائج-3.jpg",
      img2: "./img/gallery/نتائج-4.jpg"
    },
    {
      id: 3,
      img1: "./img/gallery/نتائج-5.jpg",
      img2: "./img/gallery/نتائج-6.jpg"
    },
    {
      id: 4,
      img1: "./img/gallery/نتائج-7.jpg",
      img2: "./img/gallery/نتائج-8.jpg"
    },
    {
      id: 5,
      img1: "./img/gallery/نتائج-9.jpg",
      img2: "./img/gallery/نتائج-10.jpg"
    },
    {
      id: 6,
      img1: "./img/gallery/نتائج-11.jpg",
      img2: "./img/gallery/نتائج-12.jpg"
    },
    {
      id: 7,
      img1: "./img/gallery/نتائج-13.jpg",
      img2: "./img/gallery/نتائج-14.jpg"
    },
    {
      id: 8,
      img1: "./img/gallery/نتائج-15.jpg",
      img2: "./img/gallery/نتائج-16.jpg"
    },
    {
      id: 9,
      img1: "./img/gallery/نتائج-17.jpg",
      img2: "./img/gallery/نتائج-18.jpg"
    }
  ];

  return (
    <section className="gallery">
      <div className="bg"></div>
      <div className="container">
        <div className="gallery-title">
          <h2 className="heading-2">Gallery</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map(item => {
            const { id, img1, img2 } = item;
            return (
              <div className="gallery-grid-block" key={id}>
                <figure class="c back">
                  <img src={img1} alt="" />
                </figure>
                <figure class="c front">
                  <img src={img2} alt="" />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
