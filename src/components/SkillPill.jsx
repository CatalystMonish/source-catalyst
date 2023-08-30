import React from "react";

function SkillPill() {
  return (
    <div className="flex w-fit items-center rounded-full bg-light p-[0.3125rem]">
      <img
        alt="skill_img"
        src="https://media-files.vidstack.io/poster.png"
        className="h-[1.25rem] w-[1.25rem] rounded-full"
      />
      <p className="ml-[0.3125rem] font-lexend text-small font-small">
        React JS
      </p>
    </div>
  );
}

export default SkillPill;
