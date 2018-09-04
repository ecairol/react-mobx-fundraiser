import React, { Component } from "react";
import { observer } from "mobx-react";
import QRCode from "qrcode.react";

const ProjectCard = observer(({ project }) => (
  <div className="project-card">
    <div className="project-card__inner">
      <div className="address-qr">
        <h3>Donate</h3>
        <QRCode value="{project.address}" level="M" />
      </div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>
        <strong>Goal:</strong> {project.goal} {project.currency}
      </p>
    </div>
  </div>
));

export default ProjectCard;