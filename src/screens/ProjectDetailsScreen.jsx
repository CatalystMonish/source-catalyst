import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkillPill from "../components/SkillPill";
import RatingsBar from "../components/RatingsBar";
import TypeBlock from "../components/TypeBlock";
import PageBar from "../components/PageBar";

function ProjectDetailsScreen() {
  const { id } = useParams();

  // Assuming you'd fetch the project details based on the projectId from the URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch the project details here using the projectId and set it to the state.
    // For now, I'm just using a mock data for demonstration purposes.
    const mockData = {
      thumbnail: "path/to/thumbnail.jpg",
      title: "Project Title",
      description: "This is a detailed description of the project.",
      author: "John Doe",
      rating: 4.5,
      skills: ["React", "JavaScript", "CSS"],
      includedTypes: ["Web App", "Mobile App"],
    };
    setProject(mockData);
  }, [id]);

  if (!project) return null; // or return a loading spinner

  return (
    <div className="p-8">
      <PageBar title="Project Details" />
      <img
        src={project.thumbnail}
        className="h-fit w-full rounded-lg"
        alt="project-thumbnail"
      />
      <h1 className="mt-8 font-lexend text-title font-title">
        {project.title}
      </h1>
      <p className="mt-4 font-lexend text-label font-label text-text-light">
        {project.description}
      </p>
      <h2 className="mt-8 font-lexend font-label text-primary">
        {project.author}
      </h2>
      <div className="mt-4 flex items-center">
        <RatingsBar rating={project.rating} />
        <p className="ml-2 font-lexend text-small-light font-small-light text-text-light">
          {project.rating}
        </p>
      </div>
      <h2 className="mt-8 mt-m-10 font-lexend text-small font-small">SKILLS</h2>
      <div className="mt-4 flex flex-row flex-wrap gap-1">
        {/* {project.skills.map((skill, index) => (
          <SkillPill key={index} skillId={skill} />
        ))} */}
      </div>
      <h2 className="mt-8 mt-m-10 font-lexend text-small font-small">
        INCLUDED
      </h2>
      <div className="mt-4 flex gap-1">
        {project.includedTypes.map((type, index) => (
          <TypeBlock key={index} type={type} />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetailsScreen;
