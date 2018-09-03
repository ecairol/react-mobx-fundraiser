import React, { Component } from "react";
import ProjectForm from "./ProjectForm";
import { observer, inject, PropTypes } from 'mobx-react';
//import ProjectFormModel from "./ProjectForm/model";
import ProjectsStore from '../../stores/Projects';

@inject('project')

@observer
//const Home = () => {
class NewProject extends Component {
    // static propTypes = {
    //     todos: PropTypes.instanceOf(ProjectsStore)
    // }
    //const store = new ProjectFormModel();
    render() {
        return (
            <div className="page page-new-project">
                <h1>Add Your Event</h1>
                <ProjectForm store={this.props.project}></ProjectForm>
            </div>
        );
    }
}
export default NewProject;
