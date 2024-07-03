import React from "react";
import Product from "../component/Product";
import Slider from "../component/Slider";

const Menu = () => {
  const topMenus = [
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

  const menus = [
    {
      id: 4,
      name: "Roti bakar coklat",
      image: "../src/assets/product/coklat.png",
      price: 12000,
      stock: 1,
    },
    {
      id: 5,
      name: "Nasi goreng gila",
      image: "../src/assets/product/babat.png",
      price: 17000,
      stock: 4,
    },
    {
      id: 6,
      name: "Es goodday",
      image: "../src/assets/product/goodday.png",
      price: 10000,
      stock: 6,
    },
    {
      id: 7,
      name: "Indomie goreng",
      image: "../src/assets/product/indomie-goreng.png",
      price: 15000,
      stock: 3,
    },
    {
      id: 8,
      name: "Indomie rebus",
      image: "../src/assets/product/indomie-rebus.png",
      price: 17000,
      stock: 4,
    },
    {
      id: 9,
      name: "Es jeruk",
      image: "../src/assets/product/jeruk.png",
      price: 10000,
      stock: 6,
    },
  ];

  const listTopMenus = topMenus.map((menu) => (
    <div className="card bg-white shadow-md p-2 w-56 h-64 ">
      <Product menus={menu} />
    </div>
  ));

  const listMenus = menus.map((menu) => (
    <div className="card bg-white shadow-md p-2 w-56 h-64 ">
      <Product menus={menu} />
    </div>
  ));

  return (
    <main className="bg-[url('./assets/background/bg.png')] ">
      <section className="w-full h-[60vh]">
        <Slider />
      </section>
      <section className="w-full h-[60vh]">
        <h1 className=" mt-48 text-center text-3xl">TOP MENU</h1>
        <div className=" flex gap-5 justify-center mt-10">{listTopMenus}</div>
      </section>
      <section className="w-full ">
        <div className="py-10">
          <h1 className=" text-center text-3xl">MENU</h1>
          <div className=" grid grid-cols-3 gap-5  mt-10 w-fit mr-auto ml-auto">
            {listMenus}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
