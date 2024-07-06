import React from "react";

const Product = ({ menu, handleAddProduct }) => {
  // console.log(menu);
  // console.log({ handleClick });

  return (
    <>
      <div className="w-48 h-48 p-1 flex flex-col items-center">
        <img className="w-36 h-36" src={menu.image} alt="" />
        <h1>{menu.name}</h1>
      </div>
      <div className="flex justify-center gap-3 w-full">
        <h1 className="p-1 font-bold">Rp.{menu.price}</h1>
        <button
          onClick={() => handleAddProduct(menu)}
          className="py-1 px-6 hover:bg-lime-600 hover:scale-105 bg-lime-500 rounded-md"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Product;
