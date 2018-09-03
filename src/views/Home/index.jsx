import React, { Component } from 'react';
import ProjectList from "./ProjectList";
//import ProjectListModel from "./ProjectList/model";
import { observer, inject, PropTypes } from 'mobx-react';

@inject('project')

@observer
class Home extends Component {
    
    componentDidMount() {
        const project = this.props.project;
        if (project.projectsLength > 0) return;

        project.fetch();
    }

    render() {
        return (
            <div className="page page-about">
                <h1>Welcome to CryptoFund</h1>
                Total Projects: {this.props.project.projectsLength}
                <ProjectList store={this.props.project}></ProjectList>
            </div>
        );
    }
}
export default Home;