import React from "react";
import { Fragment } from "react";
import Banner from "../Banner";

const HairTFourth = () => {
  const blog = [
    {
      id: 4,
      name: " hair transplantation for women",
      img: "./img/blog/hair-5.jpg",

      info: [
        {
          id: 1,
          title: "",
          desc:
            "Hair transplantation for women has become the only solution for women getting rid of baldness, and numerous operations have been performed for women at the Bosphorus Center and they were 100% successful and most of the operations were to minimize the forehead and the women who performed them were very satisfied with the results of the operation. Hair loss is one of the problems that women often face for several reasons, such as aging, disease, or hormonal changes that occur after a menstrual break. Women are often used to use medicinal preparations to try to stop hair loss or wigs. However, with continued hair loss, an imbalance of hair density appears that shows the scalp, and it becomes possible to notice areas of partial baldness, especially in the area of ​​the top of the head and forehead. Hair continues to fall out, hair transplantation remains the most effective solution to cover the area exposed to baldness, as medical or cosmetic preparations are not able to germinate hair again. Many believe that hair transplantation is a matter for men only, but it is also possible for women, and is even performed Under normal conditions and condition, it is used The strong roots abscess from the area behind the head to be transplanted in the area that suffers from baldness. One of the advantages of the technique used in hair transplantation for women is the possibility of performing the transplantation process for women without the need for their hair to be cut or shortened. The specialist doctor displaces the hair from the area that will take Including hair roots from the back of the head. After the hair transplant process, it will not be possible to notice any defect in the hair of women. As for the hair density, it has become possible to ensure the intensification of hair for women as required. Free of charge, and to be very confident that we respect and protect your privacy. You are assured that our staff will live up to the responsibility you have given us."
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

export default HairTFourth;
