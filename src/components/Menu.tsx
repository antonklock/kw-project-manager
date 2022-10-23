import React from "react";
// import MenuButtons from "./MenuButtons";
import { UilSetting } from "@iconscout/react-unicons";
import supabase from "../../lib/supabase";

type MenuProps = {
  setView: (view: string) => void;
};

const Menu = (props: MenuProps) => {
  const { setView } = props;

  const [signedIn, setSignedIn] = React.useState(false);

  let email: string;
  let password: string;

  const handleLogin = (email: string, password: string) => {
    console.log("Login");
    console.log("Email: " + email);
    console.log("Password: " + password);
  };

  const signUp = async (email: string, password: string) => {
    console.log("Sign Up");
    console.log("Email: " + email);
    console.log("Password: " + password);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.log("Error: ", error);
    }

    if (data) {
      console.log("Data: ", data);
    }

    // window.electronAPI
    //   .handleSignUp(email, password)
    //   .then((result: string) => console.log(result))
    //   .catch((error: string) => console.log(error));
  };

  return (
    <div>
      <div className="h-full flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          {signedIn ? (
            <div className="bg-black rounded-full w-10 h-10 mb-4"></div>
          ) : (
            false
          )}

          <label htmlFor="login-modal" className="btn btn-info">
            Sign in
          </label>
        </div>

        <div className="btn btn-circle btn-ghost mt-5">
          <UilSetting className="" />
        </div>
      </div>

      <input type="checkbox" id="login-modal" className="modal-toggle" />
      <div className="modal cursor-pointer">
        <div className="prose modal-box">
          <div className="modal-action">
            <label
              htmlFor="login-modal"
              className="btn btn-sm btn-circle absolute right-4 top-4"
            >
              ✕
            </label>
            <div className="w-full flex flex-col justify-center py-2 px-6">
              <label>Email</label>
              <input
                type="text"
                className="input input-bordered w-full"
                onChange={(e) => {
                  email = e.target.value;
                }}
              ></input>
              <label>Password</label>
              <input
                type="password"
                className="input input-bordered w-full"
                onChange={(e) => {
                  password = e.target.value;
                }}
              ></input>
              <div className="flex flex-row pt-8">
                <button
                  className="btn btn-info mr-2"
                  onClick={() => handleLogin(email, password)}
                >
                  Login
                </button>
                <button
                  className="btn btn-outline ml-2"
                  onClick={() => signUp(email, password)}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="divider"></div>
      <MenuButtons setView={setView} /> */}
    </div>
  );
};

export default Menu;
