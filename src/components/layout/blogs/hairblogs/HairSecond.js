import React from "react";
import { Fragment } from "react";
import Banner from "../Banner";

const HairSecond = () => {
  const blog = [
    {
      id: 2,
      name: "Beard hair transplant",
      img: "./img/blog/hair-3.jpg",

      info: [
        {
          id: 1,
          title: "",
          desc:
            "Beard hair transplantation or beard transplantation Facial hair transplantation (in this case, beard transplantation) has witnessed in the last year a significant increase in the world. In Turkey, especially hundreds of men who have performed a beard transplant technique with the technique of picking to increase the density of the chin and filling the void of the beard. If you have intermittent beard hair or if there is any scar, the beard hair transplant (facial hair transplant) is the only and permanent solution in order to get rid of the beard voids ... Chin transplantation in Turkey has become one of the most desirable operations in which Turkey has its place The big in this field, in terms of excellent final results and in terms of taking the necessary precautions that take into account the importance of such operations that are performed in the face beard and chin transplantation in Turkey must be performed by a specialist and their results are often associated with the skill of the doctor who performs the operation. While this does not form And with some of the operations a risk to the patient’s life, it must be taken into account that they are operations on the face and that any mistake can cause permanent damage that cannot be repaired, so the patient must choose a specialist to perform this task .. A recent study showed that more than 40% of Men are dissatisfied with the voids in the beard or chin, and the reason behind these voids is often either the genetic factor or the presence of scars on the face .. Facial hair in many cultures is a sign of masculinity and has an impact on the social situation in general. Recently, many men have been seeking to gain control over the design of both the beard and the mustache."
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

export default HairSecond;
