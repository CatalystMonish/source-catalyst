import React from "react";
import { useNavigate } from "react-router-dom";
function FloatingActionButton() {
  const navigate = useNavigate();

  const navigateNewPost = async () => {
    navigate("/newpost");
  };

  return (
    <div
      onClick={navigateNewPost}
      className="fixed bottom-20 right-4 rounded-full bg-primary p-4 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <svg
        strokeWidth={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[1.5rem] w-[1.5rem]"
      >
        <path
          fillRule="evenodd"
          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default FloatingActionButton;
