import ProjectCard from "../components/ProjectCard";
import TitleBold from "../components/TitleBold";
import React from "react";

function WorkScreen() {
  return (
    <div className="bg-[#F2F1F7] px-5">
      <TitleBold text="SELECT PROJECT" />
      <div className="gap-2 space-y-2 md:grid md:grid-cols-2 md:space-y-0"></div>
    </div>
  );
}

export default WorkScreen;
