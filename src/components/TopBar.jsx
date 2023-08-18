import React from "react";

function TopBar() {
  return (
    <div className="fixed top-0 z-10 w-full flex flex-row bg-white shadow-md items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="ml-5 h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>

      <p className=" ml-3 py-4 font-poppins font-semibold ">Hello UserName👋</p>
    </div>
  );
}

export default TopBar;