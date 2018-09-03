import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";


@observer
class ProjectForm extends Component {
  newProject = observable({
    title: "",
    goal: ""
  });

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="project-form">
        <div>
          <label>Project Name</label>
          <input
            type="text"
            name="title"
            value={this.newProject.title}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Project Goal</label>
          <input
            type="text"
            name="goal"
            value={this.newProject.goal}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Add</button>
        
      </form>
    );
  }

  @action
  handleInputChange = e => {
    this.newProject[e.target.name] = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addProject(this.newProject);
    //this.newProject = {};
    console.log('redirect back to PROJECT LIST');
    debugger;
    e.preventDefault();
  };
}

export default ProjectForm;