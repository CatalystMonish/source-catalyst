import ProjectCard from "../components/ProjectCard";
import TitleBold from "../components/TitleBold";
import React from 'react';

function JourneyScreen() {
  return(
    <div className="px-5 bg-[#F2F1F7]">
    <TitleBold text="SELECT PROJECT"/>
    <div className="md:grid md:grid-cols-2 gap-2 space-y-2 md:space-y-0" >
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    </div>
    </div>
  )
}

export default JourneyScreen;
