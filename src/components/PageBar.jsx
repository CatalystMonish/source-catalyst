import React from "react";

function PageBar() {
  return (
    <div>
      <div className="fixed top-0 z-10 flex h-[4rem] w-full flex-row items-center bg-white font-lexend text-heading font-heading shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="ml-m-15 h-[1.5rem] w-[1.5rem]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>

        <p className="ml-m-10 font-lexend text-heading font-heading">
          New Post
        </p>
      </div>
    </div>
  );
}

export default PageBar;
