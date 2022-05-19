import React from "react";
import CourseProjects from "../components/CourseProjects";
import Layout from "../components/Layout";
import OwnProjects from "../components/OwnProjects";

const Projects = () => {
  return (
    <div className="projects">
      <OwnProjects />
      <Layout />
      <CourseProjects />
    </div>
  );
};

export default Projects;
