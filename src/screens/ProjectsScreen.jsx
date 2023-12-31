import React, { useEffect, useState } from "react";
import ProjectItemCard from "../components/ProjectItemCard";
import TitleBold from "../components/TitleBold";
import Slider from "react-slick";
import DomainCard from "../components/DomainCard";
import { collection, getDocs, doc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../firebase";
import { SphereSpinner } from "react-spinners-kit";

function ProjectsScreen() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsCollection = collection(db, "projects");
      const projectSnapshot = await getDocs(projectsCollection);
      const projectsData = projectSnapshot.docs;

      const projectsWithDetails = await Promise.all(
        projectsData.map(async (projectDoc) => {
          const skillsData = projectDoc.data().skills || [];

          const skillIds = skillsData
            .map((skillRef) => {
              if (skillRef._key && skillRef._key.path) {
                return skillRef._key.path.segments.pop();
              }
              return null;
            })
            .filter((id) => id);

          let thumbnailURL;
          const projectThumbnailPath = projectDoc.data().projectThumbnailURL;
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

          return {
            id: projectDoc.id,
            ...projectDoc.data(),
            skills: skillIds,
            thumbnail: thumbnailURL,
          };
        })
      );

      setProjects(projectsWithDetails);
      setLoading(false);
    };

    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="mx-m-15 mt-[4.625rem] bg-light">
      <TitleBold text="LATEST PROJECTS" />
      <div>
        {loading ? (
          <div className="flex w-full justify-center">
            <SphereSpinner size={30} color="#2E7CF6" loading={loading} />
          </div>
        ) : (
          <div className="flex gap-2">
            {projects.map((project) => (
              <ProjectItemCard
                key={project.id}
                projectId={project.id}
                thumbnail={project.thumbnail}
                title={project.projectTitle}
                description={project.projectDescription}
                author={project.projectAuthor}
                rating={project.projectRating}
                skills={project.skills}
                includedTypes={[project.projectType]}
              />
            ))}
          </div>
        )}
      </div>
      <TitleBold text="BY SKILLS" />
      <div className="flex gap-2">
        <DomainCard />
        <DomainCard />
      </div>
    </div>
  );
}

export default ProjectsScreen;
