import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import axios from "axios";

const SPLASHBASE_URL = "http://www.splashbase.co/api/v1/images/latest";

const CarouselList = props => {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    axios
      .get(SPLASHBASE_URL)
      .then(resp => {
        setImgList(resp.data.images);
      })
      .catch(err => {
        console.log("Unable to Fetch Image from splashbase", err);
      });
  }, []);

  return (
    <div>
      {imgList.length === 0 && <div>Loading...</div>}
      {imgList.length > 0 && (
        <Carousel
          imgList={imgList}
          img_width={300}
          img_height={300}
          visibleImages={3}
          duration={750}
        />
      )}
    </div>
  );
};

export default CarouselList;
