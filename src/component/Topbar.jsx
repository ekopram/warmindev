import React from "react";
import Menulist from "./Menulist";

const Topbar = () => {
  return (
    <div className="topbar bg-blue-400 flex justify-around h-16 ">
      <div className="logo w-16 h-16 bg-gray-400">
        <img src="../src/assets/warmindev_photo_600x600.svg" alt="" />
      </div>
      <div className="nav w-1/2 h-full flex flex-col justify-center ">
        <Menulist />
      </div>
      <div className="login my-2 px-5 border border-black items-center flex">
        <>login</>
      </div>
    </div>
  );
};

export default Topbar;
