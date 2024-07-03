import "./App.css";
import Menu from "./pages/Menu";
import Topbar from "./component/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import { useState } from "react";

function App() {
  const [menuCart, setMenuCart] = useState([]);

  const handleClick = (menu) => {
    // const menuExist = menuCart.find((item) => item.id === menu.id);
    // if (menuExist) {
    //   setMenuCart(
    //     [...menuCart, ]);
    // }
    setMenuCart([...menuCart, menu]);
  };

  return (
    <BrowserRouter>
      <>
        <Topbar number={menuCart.length} />
      </>
      <Routes>
        <Route path="/" element={<Menu handleClick={handleClick} />}></Route>
        <Route path="/cart" element={<Cart menuCart={menuCart} />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
