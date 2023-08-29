import TitleBold from "../components/TitleBold";
import React from "react";
import { useNavigate } from "react-router-dom";

function OngoingProjectScreen() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/"); // Go back one step in history
  };
  return (
    <div>
      <div className="z-10 flex h-[4rem] w-full flex-row items-center bg-white font-lexend text-heading font-heading ">
        <div className="flex">
          <svg
            onClick={goBack}
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
            Ongoing Project
          </p>
        </div>
      </div>
      <div className="h-screen">
        <div className="flex justify-between bg-white px-[1.5rem] pb-s-15">
          <button className="h-[3.25rem] w-[10rem] rounded-lg bg-primary font-lexend text-label font-label text-white">
            Roadmap
          </button>
          <button className="h-[3.25rem] w-[10rem] rounded-lg bg-light font-lexend text-label font-label ">
            About
          </button>
        </div>

        <div className="mx-m-15 ">
          <TitleBold text="TASKS" />
        </div>
      </div>
    </div>
  );
}

export default OngoingProjectScreen;
