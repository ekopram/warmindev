import "./App.css";
import Menu from "./pages/Menu";
import Topbar from "./component/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import { supabase } from "./createClient";
import PostProduct from "./pages/PostProduct";
import PostMenus from "./pages/PostMenus";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [menus, setMenus] = useState([]);
  // const supabase = useSupabaseClient();

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw error;
      if (data != null) {
        setMenus(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

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
        <Route path="/postproduct" element={<PostProduct />}></Route>
        <Route path="/menu" element={<PostMenus />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
