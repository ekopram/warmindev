import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { supabase } from "../createClient";
import { v4 as uuidv4 } from "uuid";

const PostMenus = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw error;
      if (data != null) {
        setProducts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function createProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .insert({
          image: image,
          name: name,
          price: price,
          category: category,
          stock: stock,
        })
        .single();
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  }

  async function uploadImage(e) {
    let file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    const fileNaming = `${file.name}${Math.random()}${uuidv4()}`;
    const filePath = `${fileNaming}.${fileExt}`;

    const { data } = await supabase.storage
      .from("images")
      .upload("public/" + filePath, file);

    // console.log(filePath);
    setImage(filePath);
  }

  return (
    <div className="w-screen h-screen flex flex-col ">
      <div className="w-fit h-fit drop-shadow-xl mt-20 bg-slate-50 mr-auto ml-auto">
        <form action="" className="justify-center items-center flex p-5">
          <div className="min-w-96 ">
            <div className="flex justify-between">
              <label>Name: </label>
              <input
                className="border border-black"
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </div>
            <div className="flex justify-between mt-2">
              <label>Image: </label>
              <input
                onChange={(e) => uploadImage(e)}
                className="border border-black"
                type="file"
              />
            </div>

            <div className="flex justify-between mt-2">
              <label>Price: </label>
              <input
                className="border border-black"
                onChange={(e) => setPrice(e.target.value)}
                type="text"
              />
            </div>

            <div className="flex justify-between mt-2">
              <label>Category: </label>
              <input
                className="border border-black"
                onChange={(e) => setCategory(e.target.value)}
                type="text"
              />
            </div>
            <div className="flex justify-between mt-2">
              <label>Stock: </label>
              <input
                className="border border-black"
                onChange={(e) => setStock(e.target.value)}
                type="text"
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                onClick={() => createProduct()}
                className="border border-black p-1 mt-4"
              >
                post
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-fit h-fit drop-shadow-xl mt-20 bg-slate-50 mr-auto ml-auto">
        <div className="grid grid-cols-7 gap-10 p-5">
          {products.map((products) => (
            <Card key={products.id} products={products} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostMenus;
