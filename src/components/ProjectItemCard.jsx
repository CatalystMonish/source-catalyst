import React from "react";
import SkillPill from "./SkillPill";
import thumbnail from "../images/thumbnail.png";
import RatingsBar from "./RatingsBar";

const ProjectItemCard = () => {
  return (
    <div className="flex max-w-[300px] flex-col rounded-lg bg-white">
      <img
        src={thumbnail}
        className="h-fit w-full rounded-t-lg"
        alt="thumbnail"
      />
      <div className="mx-m-15 mt-m-15 flex flex-col">
        <p className="font-lexend text-title font-title">
          SECURE PASSWORD GENERATOR
        </p>
        <p className="font-lexend text-label font-label text-text-light">
          Make a secure password generator using python.
        </p>
        <div className="flex">
          <p className="font-lexend font-label text-primary">Akshata Marathe</p>
          <RatingsBar value={0.5} />
        </div>
      </div>
    </div>
  );
};

export default ProjectItemCard;
