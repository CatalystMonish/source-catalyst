import React, { useEffect, useState } from "react";
import ProjectItemCard from "../components/ProjectItemCard";
import TitleBold from "../components/TitleBold";
import Slider from "react-slick";
import DomainCard from "../components/DomainCard";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
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
        const projectData = [];

        for (const doc of querySnapshot.docs) {
          const data = doc.data();

          // Fetching thumbnail URL from Firebase Storage
          let thumbnailURL;
          try {
            thumbnailURL = await getDownloadURL(
              ref(storage, data.projectThumbnailURL)
            );
          } catch (error) {
            console.log("Error fetching thumbnail:", error);
            thumbnailURL = null;
          }

          // Fetching skill data from 'skills' collection
          const skillIds = data.skills || [];
          const skillData = [];
          for (const skillId of skillIds) {
            try {
              const skillDoc = await getDoc(
                doc(db, "skills", skillId.split("/")[1])
              );
              skillData.push(skillDoc.data());
            } catch (error) {
              console.log("Error fetching skill:", error);
            }
          }

          projectData.push({
            id: doc.id,
            thumbnail: thumbnailURL,
            skills: skillData,
            ...data,
          });
        }
        // Debug line to check projectData array
        console.log("Project Data:", projectData);

        setProjects(projectData);
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
          <Slider {...settings}>
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
          </Slider>
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
