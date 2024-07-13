import "./App.css";
import Menu from "./pages/Menu";
import Topbar from "./component/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import { useState } from "react";

const topMenus = [
  {
    id: 1,
    name: "Nasi goreng ayam",
    image: "../src/assets/product/ayam.png",
    categories: "food",
    price: 15000,
    stock: 3,
  },
  {
    id: 2,
    name: "Nasi goreng babat",
    image: "../src/assets/product/babat.png",
    categories: "food",
    price: 17000,
    stock: 4,
  },
  {
    id: 3,
    name: "Roti bakar blueberry",
    image: "../src/assets/product/blueberry.png",
    categories: "snack",
    price: 10000,
    stock: 6,
  },
];

const menus = [
  {
    id: 4,
    name: "Roti bakar coklat",
    image: "../src/assets/product/coklat.png",
    categories: "desert",
    price: 12000,
    stock: 1,
  },
  {
    id: 5,
    name: "Nasi goreng gila",
    image: "../src/assets/product/babat.png",
    categories: "food",
    price: 17000,
    stock: 4,
  },
  {
    id: 6,
    name: "Es goodday",
    image: "../src/assets/product/goodday.png",
    categories: "drink",
    price: 10000,
    stock: 6,
  },
  {
    id: 7,
    name: "Indomie goreng",
    image: "../src/assets/product/indomie-goreng.png",
    categories: "food",
    price: 15000,
    stock: 3,
  },
  {
    id: 8,
    name: "Indomie rebus",
    image: "../src/assets/product/indomie-rebus.png",
    categories: "food",
    price: 17000,
    stock: 4,
  },
  {
    id: 9,
    name: "Es jeruk",
    image: "../src/assets/product/jeruk.png",
    categories: "drink",
    price: 10000,
    stock: 6,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleDeleteProduct = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <BrowserRouter>
      <>
        <Topbar number={cartItems.length} />
      </>
      <Routes>
        <Route
          path="/"
          element={
            <Menu
              handleAddProduct={handleAddProduct}
              topMenus={topMenus}
              menus={menus}
              cartItems={cartItems}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleDeleteProduct={handleDeleteProduct}
            />
          }
        ></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
