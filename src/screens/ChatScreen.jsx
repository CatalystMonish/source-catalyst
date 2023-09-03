import React from "react";
import monish from "../images/monish.jpg";
import bg from "../images/chat-bg.jpg";

function ChatScreen() {
  return (
    <div className=" bg-light ">
      <div className="z-10 flex h-[4rem] w-full flex-row items-center bg-white font-lexend text-heading font-heading ">
        <div className="flex items-center">
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

          <img
            alt="profile_img"
            src={monish}
            className=" ml-m-10 h-[2.5rem] w-[2.5rem] rounded-full"
          />

          <div className="ml-m-10 flex flex-col">
            <p className="font-lexend text-label font-label">Pratik Lomte</p>
            <p className="font-lexend text-small-light font-small-light text-text-light">
              online
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen ">
        <img
          src={bg}
          alt="bg"
          className="h-full w-full object-cover opacity-10"
        />
      </div>
    </div>
  );
}

export default ChatScreen;
