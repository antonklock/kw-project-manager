import { UserResponse } from "@supabase/supabase-js";
import React, { useState, useEffect } from "react";
import supabase from "../../lib/supabase";

export const LoginModalContent = () => {
  const [user, setUser] = useState<UserResponse | null>(null);

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", checkUser, false);
  }, []);

  const checkUser = async () => {
    const user = await supabase.auth.getUser();
    if (user) {
      setUser(user);
    }
  };

  const signInWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log("Error: ", error);
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error: ", error);
      return;
    }
    setUser(null);
  };

  return (
    <>
      <label
        htmlFor="login-modal"
        className="btn btn-sm btn-circle absolute right-4 top-4"
      >
        ✕
      </label>

      {user ? (
        <div className="w-full flex flex-col justify-center py-2 px-6">
          <div className="text-xl">Login with GitHub</div>
          <button className="btn btn-info" onClick={signInWithGithub}>
            Login
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col pt-4">Hello </div>
          <button className="btn btn-info" onClick={signInWithGithub}>
            Signout
          </button>
        </>
      )}
    </>
  );
};

// <div className=" text-2xl font-bold mb-6"> Sign in </div>
//         <label>Email</label>
//         <input
//           type="text"
//           className="input input-bordered w-full"
//           onChange={(e) => {
//             email = e.target.value;
//           }}
//         ></input>
//         <label className="mt-4">Password</label>
//         <input
//           type="password"
//           className="input input-bordered w-full"
//           onChange={(e) => {
//             password = e.target.value;
//           }}
//         ></input>
//         <div className="flex flex-col pt-4">
//           <button
//             className="btn btn-info"
//             onClick={() => handleLogin(email, password)}
//           >
//             Login
//           </button>
//           <p
//             className="text-blue-500 cursor-pointer mt-0"
//             onClick={handleSwitchModalContent}
//           >
//             Create new account
//           </p>
//         </div>
