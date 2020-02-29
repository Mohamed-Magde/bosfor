import React, { Fragment } from "react";
import Banner from "../Banner";

const HairBlog = () => {
  const blogsHair = [
    {
      id: 1,
      name: "Hair transplantation for men",
      img: "./img/blog/hair-2.jpg",
      info: [
        {
          id: 1,
          title: "",
          desc:
            "Hair transplantation for men is the most prevalent hair transplant, accounting for about 89% of hair transplantation in Bosphorus, because men suffer from baldness and hair loss at a much higher rate than women. Hair falls out in men in general in the front and top of the head, because the hair follicles in those areas are affected by the hormone testosterone, which decreases with age leads to hair loss in it. As for the hair in the back of the head (the donor area of ​​the hair), it is not affected by the hormone testosterone, and for this reason the dense area remains in the hair. The difference in the effect of the hormone varies from one man to another, and this difference is mainly due to genetic factors. In addition to the genetic factor, there are other causes of hair loss in men such as iron deficiency in the blood, lack of activity of the thyroid gland, fungi in the scalp, specific medications and psychological stress states, and other reasons."
        },
        {
          id: 2,
          title: "Hair Transplant",
          desc:
            "Hair transplantation is performed in Bosphorus Hair using FUE technique, where the bald area is transplanted from follicles taken from the donor area behind the head over the neck. The density of the transplanted area was better. The simpler number of extracted and transplanted follicles depends on the donor area and the need of the affected area. Generally, the appearance of transplanted hair can not be the same as before, because falling hair can only be compensated from other areas, and the density of transplanted hair It cannot be with the same density of natural hair due to the limited number of follicles. Finally, hair transplantation for men is the best solution for restoring natural hair and is the surest and most durable solution where the transplanted hair lasts for life because the original hair of the donor area lasts for life and is not affected by male hormones. Bosphor Hair We inspect hair loss cases for free by sending pictures and viewing them to the medical team, in which case the customer can estimate his need for the number of follicles he needs that can be extracted and the possibility of cultivation and its cost."
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
          {blogsHair.map(item => {
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

export default HairBlog;
