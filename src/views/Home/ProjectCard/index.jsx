import React, { Component } from "react";
import { observer } from "mobx-react";

const ProjectCard = observer(({ project }) => (
  <div className="project-card">
    <h1>{project.title}</h1>
  </div>
));

export default ProjectCard;