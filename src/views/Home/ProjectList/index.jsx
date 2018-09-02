import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import ProjectCard from "../ProjectCard";

@observer
class ProjectList extends React.Component {
  @observable newTodoTitle = "";

  render() {
    return (
      <div className="project-list">
        {this.props.store.projects.map(project => (
          <ProjectCard project={project} key={project.id} />
        ))}
        Total Projects: {this.props.store.projects.length}
      </div>
    );
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addTodo(this.newTodoTitle);
    this.newTodoTitle = "";
    e.preventDefault();
  };
}

export default ProjectList;