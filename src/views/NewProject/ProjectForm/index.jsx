import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import ProjectsStore from '../../../stores/Projects';


@observer
class ProjectForm extends Component {
  static propTypes = {
    project: PropTypes.instanceOf(ProjectsStore)
  }

  newProject = observable({
    title: "",
    description: "",
    goal: "",
    currency: "BTC",
    address: "",
    total: 0
  });

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="project-form">
        <div className="form-row">
          <label>Project Title</label>
          <input
            type="text"
            name="title"
            placeholder = "The title or name of your project"
            value={this.newProject.title}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Project Description</label>
          <input
            type="text"
            name="description"
            placeholder = "Brief description of what's your project about"
            value={this.newProject.description}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Project Goal</label>
          <input
            type="text"
            name="goal"
            placeholder = "(e.g) 1.5 BTC"
            value={this.newProject.goal}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Currency</label>
          <input
            type="text"
            name="currency"
            maxLength="4"
            placeholder="(e.g.) BTC"
            value={this.newProject.currency}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-row">
          <label><span className="currency">{this.newProject.currency}</span> Address</label>
          <input
            type="text"
            name="address"
            placeholder="(e.g.) BoatSLRHtKNngkdXEeobR76b53LETtpyT"
            value={this.newProject.address}
            onChange={this.handleInputChange}
          />
        </div>
        
        <div className="form-row ctas">
          <button className="btn btn-primary" type="submit">Submit Project</button>
        </div>
        
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