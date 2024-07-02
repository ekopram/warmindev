import React from "react";
import img1 from "../assets/background/1.png";
import img2 from "../assets/background/2.png";
import img3 from "../assets/background/3.png";
import img4 from "../assets/background/4.png";
import ImageSlider from "./ImageSlider";

const Slider = () => {
  const images = [img1, img2, img3, img4];

  return (
    <>
      <ImageSlider images={images} />
    </>
  );
};

export default Slider;
