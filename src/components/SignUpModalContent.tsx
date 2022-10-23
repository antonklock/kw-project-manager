import React from "react";

type SignUpModalContentProps = {
  email: string;
  password: string;
  handleLogin: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
};

export const SignUpModalContent = (props: SignUpModalContentProps) => {
  const { handleLogin, signUp } = props;
  let { email, password } = props;
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
            onClick={() => handleLogin(email, password)}
          >
            Create new account
          </button>
          <p
            className="text-blue-500 cursor-pointer mt-0"
            onClick={() => signUp(email, password)}
          >
            Login
          </p>
        </div>
      </div>
    </>
  );
};
