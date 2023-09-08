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
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const querySnapshot = await getDocs(collection(db, "projects"));
        const fetchProjectsDataPromises = querySnapshot.docs.map(
          async (projectDoc) => {
            const projectData = projectDoc.data();

            let thumbnailURL;
            if (projectData.projectThumbnailURL) {
              try {
                thumbnailURL = await getDownloadURL(
                  ref(storage, projectData.projectThumbnailURL)
                );
              } catch (error) {
                console.log("Error fetching thumbnail:", error);
                thumbnailURL = null;
              }
            }

            return {
              id: projectDoc.id,
              thumbnail: thumbnailURL,
              skills: projectData.skills || [],
              ...projectData,
            };
          }
        );

        const allProjectsData = await Promise.all(fetchProjectsDataPromises);
        console.log("Project Data:", allProjectsData);

        setProjects(allProjectsData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching projects:", error);
        setLoading(false);
      }
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
