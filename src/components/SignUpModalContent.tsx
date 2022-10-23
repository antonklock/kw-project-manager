import React from "react";
import supabase from "../../lib/supabase";

type SignUpModalContentProps = {
  handleSwitchModalContent: () => void;
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

const handleSignUp = async (email: string, password: string) => {
  supabaseSignUp(email, password);
};

export const SignUpModalContent = (props: SignUpModalContentProps) => {
  const { handleSwitchModalContent } = props;
  let email: string;
  let password: string;
  return (
    <>
      <label
        htmlFor="login-modal"
        className="btn btn-sm btn-circle absolute right-4 top-4"
      >
        ✕
      </label>
      <div className="w-full flex flex-col justify-center py-2 px-6">
        <div className=" text-2xl font-bold mb-6"> Create new account </div>
        <label>Email</label>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(e) => {
            email = e.target.value;
          }}
        ></input>
        <label className="mt-4">Password</label>
        <input
          type="password"
          className="input input-bordered w-full"
          onChange={(e) => {
            password = e.target.value;
          }}
        ></input>
        <div className="flex flex-col pt-4">
          <button
            className="btn btn-info"
            onClick={() => handleSignUp(email, password)}
          >
            Create new account
          </button>
          <p
            className="text-blue-500 cursor-pointer"
            onClick={handleSwitchModalContent}
          >
            Login
          </p>
        </div>
      </div>
    </>
  );
};
