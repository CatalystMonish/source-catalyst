import React from 'react';
import TitleBold from '../components/TitleBold';
import DomainCard from '../components/DomainCard';
import ProjectCard from '../components/ProjectCard';
import ProjectItemCard from '../components/ProjectItemCard';


function HomeScreen() {
  return <div className="p-4 bg-[#F2F1F7] 100vh">

    <TitleBold text="START YOUR ADVENTURE"/>
    <div className='flex flex-row'>
        <DomainCard/>
        <DomainCard/>
        <DomainCard/>
    </div>
    <TitleBold text="ASSESSMENTS"/>
    <div className='flex' >
      <ProjectCard />
    </div>
    <TitleBold text="ProjectItemCard"/>
    <div className='flex py-2'>
      <ProjectItemCard />
    </div>

  </div>;
}

export default HomeScreen;
