import ProjectItemCard from "../components/ProjectItemCard";
import TitleBold from "../components/TitleBold";
import React from "react";

function ProjectsScreen() {
  return (
    <div className="mt-[4.625rem] bg-light">
      <div className="mx-m-10">
        <TitleBold text="LATEST PROJECTS" />
        <ProjectItemCard />
      </div>
    </div>
  );
}

export default ProjectsScreen;
