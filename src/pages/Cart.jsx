import React from "react";

const Cart = () => {
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

  const listMenu = (
    <>
      {menus.map((menu, index) => (
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
