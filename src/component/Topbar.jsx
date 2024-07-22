import React from "react";
import Menulist from "./Menulist";

const Topbar = ({ number }) => {
  return (
    <div className="topbar bg-blue-500 bg-opacity-75 flex justify-around h-16 sticky top-0 z-10">
      <div className="logo w-16 h-16 ">
        <img src="../src/assets/warmindev_photo_600x600.svg" alt="" />
      </div>
      <div className="nav w-1/2 h-full flex flex-col justify-center ">
        <Menulist number={number} />
      </div>
      <a
        href=""
        className="login my-4 px-5 text-red-500 bg-red-200  hover:bg-red-500 rounded-xl hover:text-white  items-center font-bold flex"
      >
        <>Login</>
      </a>
    </div>
  );
};

export default Topbar;
