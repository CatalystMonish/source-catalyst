import ProjectCard from "../components/ProjectCard";
import TitleBold from "../components/TitleBold";
import React from "react";

function WorkScreen() {
  return (
    <div className="bg-[#F2F1F7] px-5">
      <div className="mt-20 flex h-auto w-full flex-col rounded-xl bg-white px-3 py-4">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-lg bg-gray-200"></div>
          <div className="">
            <span className="text-md gap-2 font-bold">Source Catalyst</span>
            <span className="text-xs text-gray-400">2 days ago</span>
            <span className="h-3 w-10 rounded-full bg-blue-600 text-center text-white">
              Internship
            </span>
            <br />
            <span className="text-sm text-gray-400">React Developer</span>
          </div>
        </div>
        <div className="space-x-10">
          <span className="text-xs font-semibold">Skills required</span>
          <span className="text-xs font-semibold">₹2000-₹5000/month</span>
        </div>
        <div className="flex flex-row">
          <span className="h-4 w-10 rounded-lg bg-gray-200 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="15"
              height="15"
              viewBox="0 0 48 48"
            >
              <path
                fill="#0277BD"
                d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
              ></path>
              <path
                fill="#FFC107"
                d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
              ></path>
            </svg>
          </span>
        </div>
        <hr className="mt-2" />
        <div className="mt-2 flex flex-row space-x-2">
          <span className="h-6 w-6 rounded-full bg-gray-100"></span>
          <span className="text-xs font-semibold">Monish Meher</span>
          <span className="flex flex-row justify-center gap-1 text-xs font-semibold">
            Share
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default WorkScreen;
