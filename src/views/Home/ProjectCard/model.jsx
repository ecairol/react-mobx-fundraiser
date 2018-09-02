import { observable } from "mobx";

export default class ProjectCardModel {
  id = Math.random();
  @observable title;
  @observable finished = false;

  constructor(title) {
    this.title = title;
  }
}