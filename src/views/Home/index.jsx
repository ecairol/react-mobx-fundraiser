import React, { Component } from 'react';
import ProjectList from "./ProjectList";
//import ProjectListModel from "./ProjectList/model";
import { observer, inject } from 'mobx-react';

@inject('project')

@observer
class Home extends Component {
    
    componentDidMount() {
        const project = this.props.project;
        if (project.projectsLength > 0) return;

        project.findAll();
    }

    render() {
        return (
            <div className="page page-home">
                <div className="home-header">
                    <h1>Recent Projects ({this.props.project.projectsLength})</h1>
                </div>
                <ProjectList store={this.props.project}></ProjectList>
            </div>
        );
    }
}
export default Home;