import React from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const Menulist = ({ number }) => {
  const menu = [
    {
      name: "Menu",
      icon: <MdRestaurantMenu />,
      link: "/",
    },
    {
      name: "Cart",
      icon: (
        <>
          <span className="bg-red-500 text-white relative -top-2 text-xs rounded-md font-semibold px-1">
            {number}
          </span>
          <IoMdCart />
        </>
      ),
      link: "/cart",
    },
    {
      name: "Order",
      icon: <BiSolidPurchaseTag />,
      link: "/order",
    },
    {
      name: "Contact",
      icon: <IoCall />,
      link: "/contact",
    },
  ];

  const listMenu = menu.map((menu) => (
    <li key={menu.name}>
      <Link
        className="px-5 py-1 rounded-xl hover:bg-blue-300 flex items-center"
        to={menu.link}
      >
        {menu.icon} &nbsp; {menu.name}
      </Link>
    </li>
  ));

  return <ol className="flex justify-between">{listMenu}</ol>;
};

export default Menulist;
