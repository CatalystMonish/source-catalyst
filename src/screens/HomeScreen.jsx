import React from 'react';
import TitleBold from '../components/TitleBold';
import DomainCard from '../components/DomainCard';
import ProjectCard from '../components/ProjectCard';
import ProjectItemCard from '../components/ProjectItemCard';


function HomeScreen() {
  return <div className="bg-[#F2F1F7] 100vh">
    <div className="h-[320px] bg-slate-300"/>
    <div className="mx-4">
    <TitleBold text="START YOUR ADVENTURE"/>
    <div className='flex flex-row gap-2 '> 
        <DomainCard/>
        <DomainCard/>
        <DomainCard/>
    </div>
    <TitleBold text="ASSESSMENTS"/>
    <div className="md:grid md:grid-cols-2 gap-2 space-y-2 md:space-y-0" >
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
    <TitleBold text="SUPPORT"/>
  
    </div>
    <div className="h-[320px] bg-slate-300"/>
  </div>;
}

export default HomeScreen;
