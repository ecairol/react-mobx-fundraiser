import React, { Component } from "react";
import { observer } from "mobx-react";

const ProjectCard = observer(({ project }) => (
  <div className="project-card">
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    <p>
      <strong>Goal:</strong> {project.goal} {project.currency}
    </p>
  </div>
));

export default ProjectCard;