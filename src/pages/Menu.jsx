import React from "react";
import Product from "../component/Product";
import Slider from "../component/Slider";
import { FaSearch } from "react-icons/fa";

const Menu = ({ handleAddProduct, topMenus, menus }) => {
  const listTopMenus = topMenus.map((menu) => (
    <div key={menu.id} className="card bg-white drop-shadow-xl p-2 w-52 h-64 ">
      <Product menu={menu} handleAddProduct={handleAddProduct} />
    </div>
  ));

  const listMenus = menus.map((menu) => (
    <div key={menu.id} className="card bg-white drop-shadow-xl p-2 w-52 h-64 ">
      <Product menu={menu} handleAddProduct={handleAddProduct} />
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
          <div className="mt-16 justify-center flex gap-2">
            <input
              className="drop-shadow-xl rounded-lg p-2"
              placeholder="search"
              type="search"
            />
            <button className="bg-white drop-shadow-xl px-4 rounded-lg text-xl hover:bg-blue-500 hover:text-white">
              <FaSearch />
            </button>
          </div>
          <div className="flex gap-5 justify-center mt-10">
            <div className="bg-white rounded-full drop-shadow-xl py-1 px-4 hover:bg-black hover:text-white">
              Food
            </div>
            <div className="bg-white rounded-full drop-shadow-xl py-1 px-4 hover:bg-black hover:text-white">
              Drink
            </div>
            <div className="bg-white rounded-full drop-shadow-xl py-1 px-4 hover:bg-black hover:text-white">
              Snack
            </div>
            <div className="bg-white rounded-full drop-shadow-xl py-1 px-4 hover:bg-black hover:text-white">
              Desert
            </div>
          </div>
          <div className=" grid grid-cols-3 gap-5  mt-10 w-fit mr-auto ml-auto">
            {listMenus}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
