import React from "react";

const Product = (props) => {
  return (
    <div className="w-56 h-56 p-1 flex flex-col items-center">
      <img className="w-32 h-32" src={props.menus.image} alt="" />
      <h1>{props.menus.name}</h1>
      <div className="flex justify-between w-4/5 mt-12">
        <h1 className="p-1 font-bold">Rp.{props.menus.price}</h1>
        <button className="py-1 px-6 hover:bg-lime-600 hover:scale-105 bg-lime-500 rounded-md">
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
