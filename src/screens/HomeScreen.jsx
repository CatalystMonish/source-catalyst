import React from "react";
import TitleBold from "../components/TitleBold";
import DomainCard from "../components/DomainCard";
import ProjectCard from "../components/ProjectCard";
import ProjectItemCard from "../components/ProjectItemCard";
import { UserAuth } from "../context/AuthContext";

function HomeScreen() {
  const { googleSignIn, user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="100vh bg-[#F2F1F7]">
      <div className="h-[320px] bg-slate-300" />
      <div className="mx-4">
        <TitleBold text={user?.displayName} />
        <div className="flex flex-row gap-2 ">
          <DomainCard />
          <DomainCard />
          <DomainCard />
        </div>
        <TitleBold text="ASSESSMENTS" />
        <div className="gap-2 space-y-2 md:grid md:grid-cols-2 md:space-y-0">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <TitleBold text="SUPPORT" />
        <button onClick={handleSignOut}>Logout</button>
      </div>
      <div className="h-[320px] bg-slate-300" />
    </div>
  );
}

export default HomeScreen;
