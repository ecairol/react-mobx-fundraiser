import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";


@observer
class ProjectForm extends Component {
  newProject = observable({
    title: "",
    description: "",
    goal: 0,
    currency: "BTC",
    address: "",
    total: 0
  });

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="project-form">
        <div>
          <label>Project Title</label>
          <input
            type="text"
            name="title"
            placeholder = "The title or name of your project"
            value={this.newProject.title}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Project Description</label>
          <input
            type="text"
            name="description"
            placeholder = "Brief description of what's your project about"
            value={this.newProject.description}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Project Goal</label>
          <input
            type="text"
            name="goal"
            placeholder = "(e.g) 1.5 BTC"
            value={this.newProject.goal}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Currency</label>
          <input
            type="text"
            name="currency"
            placeholder="(e.g.) BTC"
            value={this.newProject.currency}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>{this.newProject.currency} Address</label>
          <input
            type="text"
            name="address"
            placeholder="(e.g.) BoatSLRHtKNngkdXEeobR76b53LETtpyT"
            value={this.newProject.address}
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
    e.preventDefault();
    this.props.store.add(this.newProject);
    this.newProject = {
      currency: "BTC"
    };
    //this.props.history.push('/');
  };
}

export default ProjectForm;