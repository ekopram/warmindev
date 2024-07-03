import React from "react";

const Product = ({ menus, handleClick }) => {
  // console.log(props.menus);
  // console.log({ handleClick });

  return (
    <div className="w-52 h-56 p-1 flex flex-col items-center">
      <img className="w-32 h-32" src={menus.image} alt="" />
      <h1>{menus.name}</h1>
      <div className="flex justify-between w-4/5 mt-12">
        <h1 className="p-1 font-bold">Rp.{menus.price}</h1>
        <button
          onClick={() => handleClick(menus)}
          className="py-1 px-6 hover:bg-lime-600 hover:scale-105 bg-lime-500 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
