import React from "react";

const Product = ({ menu, handleClick }) => {
  // console.log(menu);
  // console.log({ handleClick });

  return (
    <div className="w-52 h-56 p-1 flex flex-col items-center">
      <img className="w-32 h-32" src={menu.image} alt="" />
      <h1>{menu.name}</h1>
      <div className="flex justify-between w-4/5 mt-12">
        <h1 className="p-1 font-bold">Rp.{menu.price}</h1>
        <button
          onClick={() => handleClick(menu)}
          className="py-1 px-6 hover:bg-lime-600 hover:scale-105 bg-lime-500 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
