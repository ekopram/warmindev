import React from "react";
import Product from "../component/Product";

const Menu = () => {
  const menus = [
    {
      id: 1,
      name: "Nasi goreng ayam",
      image: "../src/assets/product/ayam.png",
      price: 15000,
      stock: 3,
    },
    {
      id: 2,
      name: "Nasi goreng babat",
      image: "../src/assets/product/babat.png",
      price: 17000,
      stock: 4,
    },
    {
      id: 3,
      name: "Roti bakar blueberry",
      image: "../src/assets/product/blueberry.png",
      price: 10000,
      stock: 6,
    },
  ];

  const listMenu = menus.map((menu) => (
    <div className="card shadow-md p-2 w-56 h-64 ">
      <Product menus={menu} />
    </div>
  ));

  return (
    <>
      <section className="w-full h-screen">
        <h1 className=" mt-20 text-center text-3xl">TOP MENU</h1>
        <div className=" flex gap-5 justify-center mt-10">{listMenu}</div>
      </section>
      <section className="w-full h-screen">
        <h1 className=" mt-20 text-center text-3xl">TOP MENU</h1>
        <div className=" flex gap-5 justify-center mt-10">
          <div className="card bg-slate-500 w-56 h-56 "></div>
          <div className="card bg-slate-500 w-56 h-56 "></div>
          <div className="card bg-slate-500 w-56 h-56 "></div>
        </div>
        <div className=" flex gap-5 justify-center mt-5">
          <div className="card bg-slate-500 w-56 h-56 "></div>
          <div className="card bg-slate-500 w-56 h-56 "></div>
          <div className="card bg-slate-500 w-56 h-56 "></div>
        </div>
      </section>
    </>
  );
};

export default Menu;
