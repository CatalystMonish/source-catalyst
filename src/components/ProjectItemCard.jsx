import React from "react";
import SkillPill from "./SkillPill";
import RatingsBar from "./RatingsBar";
import TypeBlock from "./TypeBlock";

const ProjectItemCard = ({
  thumbnail,
  title,
  description,
  author,
  rating,
  skills,
  includedTypes,
}) => {
  console.log("skills recieved", skills);
  return (
    <div className="flex justify-center">
      <div className="flex max-w-[300px] flex-col rounded-lg bg-white pb-s-15">
        <img
          src={thumbnail}
          className="h-fit w-full rounded-t-lg"
          alt="thumbnail"
        />
        <div className="mx-m-15 mt-m-15 flex flex-col ">
          <p className="font-lexend text-title font-title">{title}</p>
          <p className="font-lexend text-label font-label text-text-light">
            {description}
          </p>
          <div className="mt-m-10 flex flex-col justify-between">
            <p className="font-lexend font-label text-primary">{author}</p>
            <div className="flex items-center">
              <RatingsBar rating={rating} />
              <p className="ml-2 font-lexend text-small-light font-small-light text-text-light">
                {rating}
              </p>
            </div>
            <p className="mt-m-10 font-lexend text-small font-small ">SKILLS</p>
          </div>
          <div className="mt-m-5 flex flex-row flex-wrap gap-1">
            {skills.map((skill, index) => (
              <SkillPill key={index} skill={skill} />
            ))}
          </div>
          <p className="mt-m-10 font-lexend text-small font-small">INCLUDED</p>
          <div className="mt-m-5 flex gap-1">
            {includedTypes.map((type, index) => (
              <TypeBlock key={index} type={type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemCard;
