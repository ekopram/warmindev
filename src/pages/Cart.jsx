import React from "react";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleDeleteProduct,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const listMenu = (
    <>
      {cartItems.map((item, index) => (
        <tr key={item.id}>
          <td className="">{index + 1}</td>
          <td className="">
            <div className="items-center justify-center flex flex-col h-52">
              <img className="w-32" src={item.image} alt="" />
              {item.name}
            </div>
          </td>
          <td className="">{item.price}</td>
          <td className="">
            <div className="">
              <button
                onClick={() => handleRemoveProduct(item)}
                className="py-1 px-3 hover:bg-red-700 rounded-md "
              >
                -
              </button>
              {item.quantity}
              <button
                onClick={() => handleAddProduct(item)}
                className="py-1 px-3 hover:bg-red-700 rounded-md "
              >
                +
              </button>
            </div>
          </td>
          <td className="">{`${item.quantity * item.price}`}</td>
          <td className="">
            <button
              onClick={() => handleDeleteProduct(item)}
              className="bg-red-500 py-1 px-3 hover:bg-red-700 rounded-md text-white"
            >
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
            <th className="w-40">Total Price</th>
            <th className="w-40">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">{listMenu}</tbody>
      </table>
      <div className="flex flex-col text-center font-bold gap-5 w-36">
        <div>Total Payment</div>
        <div>{totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
