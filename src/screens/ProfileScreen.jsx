import TitleBold from "../components/TitleBold";
import PageBar from "../components/PageBar";
import React from "react";
import SkillItemProfile from "../components/SkillItemProfile";

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
            <p className="font-lexend text-title font-title">Monish Meher</p>
            <p className="font-lexend text-content-body font-content-body text-text-light">
              I am a tech enthusiast and loves to innovate!
            </p>
          </div>
        </div>
        <TitleBold text="SKILLS" />

        <SkillItemProfile />
      </div>
    </div>
  );
}

export default ProfileScreen;
