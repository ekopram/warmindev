import React from "react";

const Order = () => {
  const orders = [
    {
      id: 1,
      date: "Roti bakar coklat",
      total: 12000,
      status: "pending",
    },
    {
      id: 2,
      date: "Nasi goreng gila",
      total: 17000,
      status: "success",
    },
    {
      id: 3,
      date: "Es goodday",
      total: 10000,
      status: "success",
    },
    {
      id: 4,
      date: "Indomie goreng",
      total: 15000,
      status: "success",
    },
    {
      id: 5,
      date: "Indomie rebus",
      total: 17000,
      status: "success",
    },
    {
      id: 6,
      date: "Es jeruk",
      total: 10000,
      status: "success",
    },
  ];

  const listOrder = orders.map((order, index) => (
    <tr key={order.id}>
      <td className="">{index + 1}</td>
      <td className="">{order.date}</td>
      <td className="">{order.id}</td>
      <td className="">{order.total}</td>
      <td>
        <button
          className={`${
            order.status === "success"
              ? "p-1 rounded-md w-20 bg-lime-500"
              : "p-1 rounded-md w-20 bg-red-500"
          }`}
        >
          {order.status}
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="flex justify-center mt-10">
      <table>
        <thead>
          <tr>
            <th className="w-20">No</th>
            <th className="w-40">Date</th>
            <th className="w-40">Order Id</th>
            <th className="w-40">Total</th>
            <th className="w-40">Status</th>
          </tr>
        </thead>
        <tbody className="text-center">{listOrder}</tbody>
      </table>
    </div>
  );
};

export default Order;
