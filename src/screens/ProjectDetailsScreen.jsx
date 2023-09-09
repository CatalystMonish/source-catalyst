import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkillPill from "../components/SkillPill";
import RatingsBar from "../components/RatingsBar";
import TypeBlock from "../components/TypeBlock";
import PageBar from "../components/PageBar";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../firebase";

function ProjectDetailsScreen() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const projectRef = doc(db, "projects", id);
        const projectDoc = await getDoc(projectRef);

        if (projectDoc.exists) {
          const projectData = projectDoc.data();

          let thumbnailURL;
          const projectThumbnailPath = projectData.projectThumbnailURL;
          if (projectThumbnailPath) {
            try {
              thumbnailURL = await getDownloadURL(
                ref(storage, projectThumbnailPath)
              );
            } catch (error) {
              console.error("Error fetching thumbnail:", error);
              thumbnailURL = null;
            }
          }

          setProject({
            ...projectData,
            thumbnail: thumbnailURL,
          });
        } else {
          console.error("No project found with the given ID.");
        }
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
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
        {project.skills.map((skill, index) => (
          <SkillPill key={index} skillId={skill} />
        ))}
      </div>
      <h2 className="mt-8 mt-m-10 font-lexend text-small font-small">
        INCLUDED
      </h2>
      <div className="mt-4 flex gap-1">
        {/* {project.includedTypes.map((type, index) => (
          <TypeBlock key={index} type={type} />
        ))} */}
      </div>
    </div>
  );
}

export default ProjectDetailsScreen;
