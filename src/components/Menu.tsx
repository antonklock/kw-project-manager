import React from "react";
// import MenuButtons from "./MenuButtons";
import { UilSetting } from "@iconscout/react-unicons";
import supabase from "../../lib/supabase";
import { LoginModalContent } from "./LoginModalContent";
import { SignUpModalContent } from "./SignUpModalContent";

type MenuProps = {
  setView: (view: string) => void;
};

const supabaseSignUp = async (email: string, password: string) => {
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
};

const Menu = (props: MenuProps) => {
  const { setView } = props;

  const [signedIn, setSignedIn] = React.useState(false);
  const [modalContent, setModalContent] = React.useState<"login" | "signup">(
    "login"
  );

  let email: string;
  let password: string;

  const handleLogin = (email: string, password: string) => {
    console.log("Login");
    console.log("Email: " + email);
    console.log("Password: " + password);
  };

  const signUp = async (email: string, password: string) => {
    if (modalContent === "login") {
      setModalContent("signup");
    } else {
      setModalContent("login");
    }
    // supabaseSignUp(email, password);
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

      <input
        type="checkbox"
        id="login-modal"
        className="modal-toggle cursor-pointer"
      />
      <div className="modal">
        <div className="prose modal-box">
          <div className="modal-action">
            {modalContent == "login" && (
              <LoginModalContent
                email={""}
                password={""}
                handleLogin={handleLogin}
                signUp={signUp}
              />
            )}
            {modalContent == "signup" && (
              <SignUpModalContent
                email={""}
                password={""}
                handleLogin={handleLogin}
                signUp={signUp}
              />
            )}
          </div>
        </div>
      </div>

      {/* <div className="divider"></div>
      <MenuButtons setView={setView} /> */}
    </div>
  );
};

export default Menu;
