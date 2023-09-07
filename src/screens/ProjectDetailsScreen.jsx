import PageBar from "../components/PageBar";
import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetailsScreen() {
  const { key } = useParams();

  return (
    <div>
      <PageBar title="Project Details" />
    </div>
  );
}

export default ProjectDetailsScreen;
