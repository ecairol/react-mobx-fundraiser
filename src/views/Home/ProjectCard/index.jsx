import React, { Component } from "react";
import { observer } from "mobx-react";

const ProjectCard = observer(({ project }) => (
  <div className="project-card">
    <div className="project-card__inner">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>
        <strong>Goal:</strong> {project.goal} {project.currency}
      </p>
    </div>
  </div>
));

export default ProjectCard;