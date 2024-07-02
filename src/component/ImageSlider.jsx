import React, { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function ImageSlider({ images }) {
  const [imgageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <>
      <img
        className="h-full ml-auto mr-auto"
        src={images[imgageIndex]}
        alt=""
      />
      <h1 className="absolute text-lg font-bold flex justify-center items-center w-[50%] h-[10%] m-auto -top-56 bottom-0 right-0  left-0 bg-white bg-opacity-75">
        <>SOME ADVERTISING MESSAGE</>
      </h1>
      <button
        className="block absolute top-16 bottom-0  text-2xl hover:bg-black hover:bg-opacity-25 p-5 h-[60vh]"
        onClick={showPrevImage}
      >
        <FaArrowCircleLeft />
      </button>
      <button
        className="block absolute top-16 bottom-0 text-2xl hover:bg-black hover:bg-opacity-25 p-5 h-[60vh] right-0"
        onClick={showNextImage}
      >
        <FaArrowCircleRight />
      </button>
    </>
  );
}

export default ImageSlider;
