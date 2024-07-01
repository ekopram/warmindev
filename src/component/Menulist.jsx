import React from "react";

const Menulist = () => {
  const menu = [
    {
      name: "Menu",
    },
    {
      name: "Cart",
    },
    {
      name: "Order",
    },
    {
      name: "Contact",
    },
  ];

  const listMenu = menu.map((menu) => (
    <li className="px-5 py-2 border border-black">{menu.name}</li>
  ));

  return <ol className="flex justify-between">{listMenu}</ol>;
};

export default Menulist;
