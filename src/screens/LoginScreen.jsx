import React from "react";

import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen justify-center bg-blue-600">
      <div className="mx-5 flex h-screen max-w-[900px] flex-col justify-center">
        <p className="text-3xl font-semibold text-white ">
          Welcome to Source Catalyst
        </p>
        <p className="mb-5 text-center text-lg font-semibold text-[#eaeaea] ">
          LEARN. GROW. UPSKILL
        </p>

        <button
          onClick={() => navigate("/")}
          className="my-2 rounded-xl bg-white px-4 py-4 text-lg font-semibold text-blue-600"
        >
          Log In
        </button>
        <button className="mb-2 rounded-xl border-2 border-white px-4 py-4 text-lg font-semibold text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
