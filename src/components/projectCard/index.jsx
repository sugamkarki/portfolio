import React from "react";

function ProjectCard({ project }) {
  console.log(project);
  return (
    <div className="projectCard">
      <h3>{project.name}</h3>
      <a target="_blank" href={project.html_url} rel="noopener noreferrer">
        Link To The Repo
      </a>
    </div>
  );
}

export default ProjectCard;
