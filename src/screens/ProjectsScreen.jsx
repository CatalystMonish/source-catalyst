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

  const fetchSkillData = async (skillId) => {
    try {
      const docRef = doc(db, "skills", skillId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No such skill!");
        return null;
      }
    } catch (error) {
      console.log("Error fetching skill:", error);
      return null;
    }
  };

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
          const skillData = data.skills
            ? await Promise.all(data.skills.map(fetchSkillData))
            : [];

          projectData.push({
            id: doc.id,
            thumbnail: thumbnailURL,
            skills: skillData,
            ...data,
          });
        }

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
    // your slider settings
  };

  return (
    <div className="mt-[4.625rem] bg-light">
      <div className="mx-m-10"></div>
      <TitleBold text="LATEST PROJECTS" />
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Slider {...settings}>
            {projects.map((project) => (
              <ProjectItemCard
                key={project.id}
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
