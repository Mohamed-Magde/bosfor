import React from "react";
import { Fragment } from "react";
import Banner from "../Banner";

const HairThird = () => {
  const blog = [
    {
      id: 3,
      name: "Eyebrow transplant",
      img: "./img/blog/hair-4.jpg",

      info: [
        {
          id: 1,
          title: "",
          desc:
            "The face is considered the window of man open to the outside world, as it directly affects his social life and himself. The nose, lips, eyebrows and all the elements on the face when they come together create a beautiful and cool exterior. Especially for women, when the eyebrows are dense and have a great appearance, they add a lot to facial expressions of meanings and aesthetic appearance. Therefore, everyone would like to have thick, beautiful brows. But some time, the eyebrows are light from birth or fall out over time due to many different reasons. Some cases are due to genetic symbols, some are due to burns or surgeries, while others are due to illness. For this reason eyebrow transplantation is performed to give it a wonderful aesthetic density and shape. The eyebrow transplant process, which is well known in recent years, is done in Turkey using the latest equipment and technologies. As with hair transplantation, eyebrow transplantation gives people a great outward appearance while ensuring the ultimate and lasting solution to the problem."
        }
      ]
    }
  ];
  return (
    <Fragment>
      <div className="blog-wrapper">
        <Banner
          bannerTitle="Hair Transplant Blogs"
          bannerImg="./img/blog/hair-1.jpg"
        />
        <div className="blog">
          {blog.map(item => {
            const { id, name, info, img } = item;
            return (
              <div className="blog-block " key={id}>
                <div className="blog-block-name">
                  <h2 className="heading-2">{name}</h2>
                  <img src={img} alt="" />
                </div>
                <div className="blog-block-text">
                  {info.map(infoItem => {
                    const { id, title, desc } = infoItem;
                    return (
                      <div className="blog-block-text-content" key={id}>
                        <span>{title}</span>
                        <p>{desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default HairThird;
