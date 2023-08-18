import React from 'react'

function LoginScreen() {
  return (
    <div className="bg-blue-600 h-screen flex justify-center">
    <div className="flex flex-col mx-5 justify-center h-screen max-w-[900px]">


        <p className="font-semibold text-3xl text-white ">Welcome to Source Catalyst</p>
        <p className="font-semibold text-lg text-[#eaeaea] text-center mb-5 ">LEARN. GROW. UPSKILL</p>

        <button className="my-2 px-4 py-4 bg-white text-blue-600 font-semibold text-lg rounded-xl">Log In</button>
        <button className="px-4 mb-2 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl">Sign Up</button>
    </div>
    </div>
  )
}

export default LoginScreen