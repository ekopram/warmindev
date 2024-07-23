import React, { useEffect, useState } from "react";
import Menulist from "./Menulist";
import { supabase } from "../createClient";

const Topbar = ({ number }) => {
  const [user, setUser] = useState(null);

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  const logout = async () => {
    await supabase.auth.signOut({
      provider: "google",
    });
  };

  // console.log(logout);
  // console.log("user2: ", user);

  async function getDataSection() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    setUser(session?.user);
    // console.log("session :", session);
  }
  // getDataSection();

  useEffect(() => {
    getDataSection();
    supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        default:
      }
    });

    // const { data } = data2;

    // console.log("data: ", data);
    return () => {
      // data.subscription.unsubscribe();
      supabase.removeAllChannels();
    };
  }, []);
  return (
    <div className="topbar bg-blue-500 bg-opacity-75 flex justify-around h-16 sticky top-0 z-10">
      <div className="logo w-16 h-16 ">
        <img src="../src/assets/warmindev_photo_600x600.svg" alt="" />
      </div>
      <div className="nav w-1/2 h-full flex flex-col justify-center ">
        <Menulist number={number} />
      </div>
      {user ? (
        <button
          onClick={logout}
          href=""
          className="logout my-4 px-5 text-red-500 bg-red-200  hover:bg-red-500 rounded-xl hover:text-white  items-center font-bold flex"
        >
          <>logout</>
        </button>
      ) : (
        <button
          onClick={login}
          href=""
          className="login my-4 px-5 text-red-500 bg-red-200  hover:bg-red-500 rounded-xl hover:text-white  items-center font-bold flex"
        >
          <>login</>
        </button>
      )}
    </div>
  );
};

export default Topbar;
