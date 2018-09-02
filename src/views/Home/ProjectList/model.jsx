import { observable, computed, action } from "mobx";

import ProjectCardModel from "../ProjectCard/model";

export default class ProjectListModel {
  @observable projects = [];

  @action
  addProject(title) {
    this.projects.push(new ProjectCardModel(title));
  }
}