import React from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { IoCall } from "react-icons/io5";

const Menulist = () => {
  const menu = [
    {
      name: "Menu",
      icon: <MdRestaurantMenu />,
    },
    {
      name: "Cart",
      icon: <IoMdCart />,
    },
    {
      name: "Order",
      icon: <BiSolidPurchaseTag />,
    },
    {
      name: "Contact",
      icon: <IoCall />,
    },
  ];

  const listMenu = menu.map((menu) => (
    <li>
      <a
        className="px-5 py-1 rounded-xl hover:bg-blue-500 flex items-center"
        href=""
      >
        {menu.icon} &nbsp; {menu.name}
      </a>
    </li>
  ));

  return <ol className="flex justify-between">{listMenu}</ol>;
};

export default Menulist;
