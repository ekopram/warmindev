import React, { useState } from "react";
import { supabase } from "../createClient";
import { v4 as uuidv4 } from "uuid";

const CDNURL =
  "https://drkktokcafsrjqgruyff.supabase.co/storage/v1/object/public/images/public/";

const Card = ({ products }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(products.name);
  const [image, setImage] = useState(products.image);
  const [price, setPrice] = useState(products.price);
  const [category, setCategory] = useState(products.category);
  const [stock, setStock] = useState(products.stock);

  async function uploadImage(e) {
    let file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    const fileNaming = `${file.name}${Math.random()}${uuidv4()}`;
    const filePath = `${fileNaming}.${fileExt}`;

    const { data } = await supabase.storage
      .from("images")
      .upload("public/" + filePath, file);
    const { data: url } = supabase.storage
      .from("images")
      .getPublicUrl("public/" + filePath);

    console.log(url);
    setImage(url.publicUrl);
  }

  async function deleteImage(imageName) {
    console.log(imageName);
    const { error } = await supabase.storage
      .from("images")
      .remove(["public/" + imageName]);

    if (error) {
      console.log(error);
    } else {
      console.log("image in storage also deleted");
    }
  }

  async function updateProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .update({
          image: image,
          name: name,
          price: price,
          category: category,
          stock: stock,
        })
        .eq("id", products.id);
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }
  async function deleteProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .delete()
        .eq("id", products.id);
      deleteImage(products.image);
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className="w-44 drop-shadow-xl bg-slate-300 p-2">
      {editing == false ? (
        <>
          <div className="w-full justify-center flex ">
            <img className="w-24" src={`${CDNURL}${products.image}`} alt="" />
          </div>
          <div className="text-center">
            <h1>{products.name}</h1>
            <h1>Rp.{products.price}</h1>
            <h1>{products.category}</h1>
            <h1>Stock: {products.stock}</h1>
          </div>
          <div className="m-2 flex gap-4">
            <button
              onClick={() => setEditing(true)}
              className="py-1 w-14 bg-yellow-500 rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={() => deleteProduct()}
              className="py-1 w-14 bg-red-500 rounded-lg"
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <h4 className="text-center">Editing product</h4>

          <div className=" mt-2">
            <input
              className="border border-black w-40 px-1"
              onChange={(e) => setName(e.target.value)}
              type="text"
              defaultValue={products.name}
            />
          </div>
          <div className="flex mt-2">
            <input
              onChange={(e) => uploadImage(e)}
              className="border border-black"
              type="file"
            />
          </div>

          <div className=" mt-2">
            <input
              className="border border-black w-40 px-1"
              onChange={(e) => setPrice(e.target.value)}
              defaultValue={products.price}
              type="text"
            />
          </div>

          <div className=" mt-2">
            <input
              className="border border-black w-40 px-1"
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              defaultValue={products.category}
            />
          </div>
          <div className=" mt-2">
            <input
              className="border border-black w-40 px-1"
              onChange={(e) => setStock(e.target.value)}
              type="text"
              defaultValue={products.stock}
            />
          </div>
          <div className="m-2 flex gap-4">
            <button
              className="py-1 w-14  rounded-lg bg-red-500 "
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
            <button
              onClick={() => updateProduct()}
              className=" py-1 w-14 rounded-lg bg-yellow-500"
            >
              Done
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
