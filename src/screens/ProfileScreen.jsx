import TitleBold from "../components/TitleBold";
import PageBar from "../components/PageBar";
import React from "react";
import SkillItemProfile from "../components/SkillItemProfile";
import CardWork from "../components/CardWork";
import FloatAddButton from "../components/FloatAddButton";

function ProfileScreen() {
  return (
    <div>
      <PageBar title="@username" />

      <div className="mx-m-15 h-screen pt-[4.625rem]">
        <div className="flex items-center rounded-lg bg-white p-s-15 ">
          <img
            alt="profile_image"
            src="https://media-files.vidstack.io/poster.png"
            className="h-[7.5rem] w-[7.5rem] rounded-full object-cover"
          />
          <div className="ml-m-15 flex w-3/4 flex-col">
            <div className="flex items-center">
              <p className="font-lexend text-title font-title">Monish Meher</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="ml-[0.313rem] h-[1.125rem] w-[1.125rem]"
              >
                {/* Define the gradient */}
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#FFC700", stopOpacity: 1 }}
                    />{" "}
                    {/* Blue */}
                    <stop
                      offset="100%"
                      style={{ stopColor: "#D99C00", stopOpacity: 1 }}
                    />{" "}
                    {/* Red */}
                  </linearGradient>
                </defs>

                {/* Use the gradient fill */}
                <path
                  fillRule="evenodd"
                  fill="url(#gradient1)"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="font-lexend text-content-body font-content-body text-text-light">
              I am a tech enthusiast and loves to innovate!
            </p>
          </div>
        </div>
        <TitleBold text="SKILLS" />
        <div className="flex flex-wrap gap-5">
          <SkillItemProfile />
          <SkillItemProfile />
          <SkillItemProfile />
        </div>
        <TitleBold text="WORK" />

        <CardWork />
        <div className="flex justify-center">
          <FloatAddButton />
        </div>
        <TitleBold text="POSTS" />
      </div>
    </div>
  );
}

export default ProfileScreen;
