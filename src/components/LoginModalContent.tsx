import React, { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import supabase from "../../lib/supabase";

export const LoginModalContent = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    checkUser();
    // window.addEventListener("hashchange", checkUser, false);
  }, []);

  const checkUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.log(error);
    }

    if (data.user) {
      console.log("data: ", data);
      setUser(data.user);
    } else {
      console.log("no user");
      setUser(null);
    }
  };

  const signInWithGithub = async () => {
    // window.electronAPI.handleSignInWithGithub();
    try {
      await supabase.auth.signInWithOAuth({
        provider: "github",
      });
    } catch (e) {
      console.log("error", e);
    } finally {
      checkUser();
    }

    // if (error) {
    //   console.log("Error: ", error);
    // }

    // if (data) {
    //   console.log("Data: ", data);
    // }
  };

  const signOut = async () => {
    console.log("signing out");
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
        <>
          <div className="flex flex-col pt-4">Hello {user?.email}</div>
          <button className="btn btn-info" onClick={signOut}>
            Signout
          </button>
        </>
      ) : (
        <div className="w-full flex flex-col justify-center py-2 px-6">
          <div className="text-xl">Login with GitHub</div>
          <button className="btn btn-info" onClick={signInWithGithub}>
            Login
          </button>
        </div>
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
