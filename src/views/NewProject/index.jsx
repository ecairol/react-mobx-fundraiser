import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import ProjectForm from "./ProjectForm";

@inject('project')

@observer
//const Home = () => {
class NewProject extends Component {
    render() {
        return (
            <div className="page page-new-project">
                <h1 className="page-title">Submit Your Event</h1>
                <ProjectForm store={this.props.project}></ProjectForm>
            </div>
        );
    }
}
export default NewProject;
