import React from "react";
import Menulist from "./Menulist";

const Topbar = () => {
  return (
    <div className="topbar bg-blue-400 flex justify-around h-16 sticky top-0 ">
      <div className="logo w-16 h-16 ">
        <img src="../src/assets/warmindev_photo_600x600.svg" alt="" />
      </div>
      <div className="nav w-1/2 h-full flex flex-col justify-center ">
        <Menulist />
      </div>
      <a
        href=""
        className="login my-4 px-5  hover:bg-red-500 rounded-xl hover:text-white  items-center font-bold flex"
      >
        <>Logout</>
      </a>
    </div>
  );
};

export default Topbar;
