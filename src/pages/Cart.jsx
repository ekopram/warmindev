import React from "react";

const Cart = ({ menuCart }) => {
  const listMenu = (
    <>
      {menuCart.map((menu, index) => (
        <tr key={menu.id}>
          <td className="">{index + 1}</td>
          <td className="">
            <div className="items-center justify-center flex flex-col h-52">
              <img className="w-32" src={menu.image} alt="" />
              {menu.name}
            </div>
          </td>
          <td className="">{menu.price}</td>
          <td className="">{menu.stock}</td>
          <td className="">2</td>
          <td className="">
            <button className="bg-red-500 py-1 px-3 hover:bg-red-700 rounded-md text-white">
              delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );

  return (
    <div className="flex justify-center mt-10">
      <table>
        <thead>
          <tr>
            <th className="w-20">No</th>
            <th className="w-40">Product</th>
            <th className="w-40">Price</th>
            <th className="w-40">Quantity</th>
            <th className="w-40">Total</th>
            <th className="w-40">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">{listMenu}</tbody>
      </table>
    </div>
  );
};

export default Cart;
