import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

const CDNURL =
  "https://drkktokcafsrjqgruyff.supabase.co/storage/v1/object/public/images/";

const PostProduct = () => {
  const [email, setEmail] = useState("");
  const [images, setImages] = useState([]);
  const user = useUser();
  const supabase = useSupabaseClient();
  console.log(user);

  async function Login() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
    });

    if (error) {
      alert(
        "Error communicating with supabase, make sure to use a real email address!"
      );
      console.log(error);
    } else {
      alert("Check your email for a Supabase Magic Link to log in!");
    }
  }

  async function getImages() {
    const { data, error } = await supabase.storage
      .from("images")
      .list(user?.id + "/", {
        limit: 100,
        offset: 0,
      });
    if (data !== null) {
      setImages(data);
    } else {
      alert("error loading");
      console.log(error);
    }
  }

  async function uploadImage(e) {
    let file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("images")
      .upload(user.id + "/" + uuidv4(), file);

    if (data) {
      getImages();
    } else {
      console.log(error);
    }
  }

  return (
    <>
      {user === null ? (
        <>
          <label>email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border border-black"
          />
          <button onClick={() => Login()}>klik</button>
        </>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-2/4 h-3/5 drop-shadow-xl bg-slate-50">
            <form action="" className="justify-center items-center flex h-full">
              <div className=" w-1/2">
                <div className="flex justify-between">
                  <label>Name: </label>
                  <input className="border border-black" type="text" />
                </div>
                <div className="flex justify-between mt-2">
                  <label>Image: </label>
                  <input
                    className="border border-black"
                    type="file"
                    onChange={(e) => uploadImage(e)}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <label>Categories: </label>
                  <input className="border border-black" type="text" />
                </div>
                <div className="flex justify-between mt-2">
                  <label>Price: </label>
                  <input className="border border-black" type="text" />
                </div>
                <div className="flex justify-between mt-2">
                  <label>Stock: </label>
                  <input className="border border-black" type="text" />
                </div>
                <div className="flex justify-between mt-2">
                  <label>Recomended: </label>
                  <input className="border border-black" type="text" />
                </div>
              </div>
            </form>
            <div>
              {images.map((image) => {
                return (
                  <div className="flex mr-4">
                    <div className="w-56">
                      <img src={CDNURL + user.id + "/" + image.name} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostProduct;
