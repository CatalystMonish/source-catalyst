import React from "react";
import SkillPill from "./SkillPill";

const ProjectItemCard = () => {
  return (
    <div className="flex w-fit flex-col items-center justify-center rounded-lg bg-white p-s-10">
      <img
        alt="project_thumbnail"
        src="https://media-files.vidstack.io/poster.png"
        className=" h-fit w-fit  max-w-[14rem] rounded-lg object-fill"
      />
      <p className="mt-m-5 font-lexend text-content font-content">
        Secure Password Generator
      </p>
    </div>
  );
};

export default ProjectItemCard;
