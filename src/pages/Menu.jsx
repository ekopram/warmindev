import React from "react";
import Product from "../component/Product";
import Slider from "../component/Slider";

const Menu = ({ handleAddProduct, topMenus, menus }) => {
  const listTopMenus = topMenus.map((menu) => (
    <div className="card bg-white shadow-md p-2 w-56 h-64 ">
      <Product menu={menu} key={menu.id} handleAddProduct={handleAddProduct} />
    </div>
  ));

  const listMenus = menus.map((menu) => (
    <div className="card bg-white shadow-md p-2 w-56 h-64 ">
      <Product menu={menu} key={menus.id} handleAddProduct={handleAddProduct} />
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
