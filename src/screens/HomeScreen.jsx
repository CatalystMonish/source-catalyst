import React from "react";
import TitleBold from "../components/TitleBold";
import DomainCard from "../components/DomainCard";
import ProjectCard from "../components/ProjectCard";
import ProjectItemCard from "../components/ProjectItemCard";
import { UserAuth } from "../context/AuthContext";
import FloatingActionButton from "../components/FloatingActionButton";

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
    <div className="mt-[4.625rem] bg-light">
      <div className="mx-m-15">
        <TitleBold text="ONGOING PROJECT" />
        <div className="flex justify-center rounded-md bg-white py-[40px]">
          {/* empty project div */}
          <p className="text-center font-lexend text-content font-content">
            Choose a Project Now
          </p>
        </div>
        <TitleBold text="FROM OUR COMMUNITY" />
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
      <FloatingActionButton />
      <div className="h-[320px] bg-slate-300" />
    </div>
  );
}

export default HomeScreen;
